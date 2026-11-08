// Renders animations/ambient.html frame by frame in headless Chrome and encodes an MP4.
//   node animations/export-ambient.mjs [fps=30]
// Needs Google Chrome and ffmpeg. Output: animations/ambient.mp4 (one seamless loop).
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const FPS = Number(process.argv[2] || 30);
const CHROME = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9333;
const frames = mkdtempSync(join(process.env.TMPDIR || tmpdir(), "ambient-frames-"));
const profile = mkdtempSync(join(process.env.TMPDIR || tmpdir(), "ambient-chrome-"));

const chrome = spawn(CHROME, [
  "--headless=new", `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`,
  "--window-size=1985,1117", "--force-device-scale-factor=1", "--hide-scrollbars",
  "--enable-unsafe-swiftshader", "--no-first-run", "--no-default-browser-check",
  "about:blank",
], { stdio: "ignore" });

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function json(path, method = "GET") {
  for (let i = 0; i < 50; i++) {
    try { return await (await fetch(`http://127.0.0.1:${PORT}${path}`, { method })).json(); }
    catch { await sleep(200); }
  }
  throw new Error("Chrome did not start");
}

try {
  const url = pathToFileURL(join(here, "ambient.html")).href + "?render";
  const target = await json(`/json/new?${encodeURIComponent(url)}`, "PUT");
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0; const pending = new Map();
  ws.onmessage = e => { const m = JSON.parse(e.data); pending.get(m.id)?.(m); pending.delete(m.id); };
  const evaluate = expression => new Promise((res, rej) => {
    const n = ++id;
    pending.set(n, m => m.result?.exceptionDetails ? rej(new Error(JSON.stringify(m.result.exceptionDetails)))
      : m.error ? rej(new Error(m.error.message)) : res(m.result.result.value));
    ws.send(JSON.stringify({ id: n, method: "Runtime.evaluate", params: { expression, returnByValue: true, awaitPromise: true } }));
  });

  for (let i = 0; !(await evaluate("!!(window.ambient && window.ambient.ready)")); i++) {
    if (i > 100) throw new Error("page never became ready");
    await sleep(100);
  }
  const LOOP = await evaluate("window.ambient.LOOP");
  const total = Math.round(LOOP * FPS);
  await evaluate("window.capture(0), window.capture(1), true");   // warm-up: first GPU draws can differ
  for (let f = 0; f < total; f++) {
    const data = await evaluate(`window.capture(${f / FPS})`);
    writeFileSync(join(frames, `${String(f).padStart(5, "0")}.png`), Buffer.from(data.split(",")[1], "base64"));
    if (f % FPS === 0) process.stdout.write(`\rframe ${f}/${total}`);
  }
  process.stdout.write(`\rframe ${total}/${total}\n`);
  ws.close();

  const out = join(here, "ambient.mp4");
  await new Promise((res, rej) => {
    const ff = spawn("ffmpeg", [
      "-y", "-loglevel", "error", "-framerate", String(FPS), "-i", join(frames, "%05d.png"),
      "-vf", "crop=1984:1116:0:0",                     // H.264 needs even dimensions
      "-c:v", "libx264", "-preset", "slow", "-crf", "17", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
      out,
    ], { stdio: "inherit" });
    ff.on("exit", c => c === 0 ? res() : rej(new Error(`ffmpeg exited ${c}`)));
  });
  console.log(`wrote ${out} (${LOOP}s loop, ${FPS} fps)`);
} finally {
  chrome.kill();
  rmSync(frames, { recursive: true, force: true });
  await sleep(300);
  rmSync(profile, { recursive: true, force: true });
}
