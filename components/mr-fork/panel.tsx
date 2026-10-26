"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUp, CornerDownRight, PanelLeftClose, RotateCcw, SquareArrowOutUpRight } from "lucide-react";
import MyButton from "@/components/my-button";
import { cn } from "@/lib/utils";
import { getProject, type Project } from "@/lib/site";
import { scriptedEngine, STARTER_SUGGESTIONS } from "@/lib/chat/scripted";
import type { ChatEngine, ChatMessage, ChatReply } from "@/lib/chat/types";
import { loadSession, saveSession } from "./session";

// Swap this for an AI-backed engine later; nothing else needs to change.
const engine: ChatEngine = scriptedEngine;

// Typing speed for replies, in characters per second
const TYPE_CPS = 140;

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Figma "Suggested prompt"
function SuggestedPrompt({ text, onClick, className }: { text: string; onClick: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-5 py-1.5 rounded-full text-left cursor-pointer transition-colors",
        "bg-[var(--mrfork-surface)] hover:bg-[var(--mrfork-surface-hover)] border border-[var(--mrfork-border)]",
        "text-sm leading-loose text-[var(--colour-bodytext)]",
        className,
      )}
    >
      <CornerDownRight className="size-4 shrink-0" strokeWidth={1.5} />
      {text}
    </button>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <p className="max-w-[85%] px-5 py-2 rounded-[24px] bg-[var(--mrfork-surface)] border border-[var(--mrfork-border)] text-sm leading-loose text-[var(--colour-bodytext)]">
        {text}
      </p>
    </div>
  );
}

type Segment = { text: string; bold?: boolean; href?: string };

// Splits **bold** and [link](url) segments out of a reply paragraph
function richSegments(text: string): Segment[] {
  return text
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
    .filter(Boolean)
    .map((part) => {
      if (part.startsWith("**") && part.endsWith("**")) return { text: part.slice(2, -2), bold: true };
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) return { text: link[1], href: link[2] };
      return { text: part };
    });
}

// Number of visible characters in a paragraph (without the markup)
function richLength(text: string) {
  return richSegments(text).reduce((n, s) => n + s.text.length, 0);
}

// `limit` shows only the first N visible characters, for the typing effect
function RichText({ text, limit = Infinity }: { text: string; limit?: number }) {
  let left = limit;
  return (
    <>
      {richSegments(text).map((seg, i) => {
        if (left <= 0) return null;
        const shown = seg.text.slice(0, left);
        left -= seg.text.length;
        if (seg.href) {
          // Other sites open in a new tab; pages on this site and mailto: don't
          const external = seg.href.startsWith("http");
          return (
            <a
              key={i}
              href={seg.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              // Same look as MyButton's hyperlink variant
              className="text-[var(--colour-bodytext)] underline lg:no-underline lg:text-[var(--colour-bodytext-light)] hover:underline hover:text-[var(--colour-bodytext)]"
            >
              {shown}
            </a>
          );
        }
        return seg.bold ? (
          <strong key={i} className="font-semibold text-[var(--colour-pure)]">
            {shown}
          </strong>
        ) : (
          <span key={i}>{shown}</span>
        );
      })}
    </>
  );
}

// Figma "Inchat project link"
function ProjectLink({ id }: { id: Project["id"] }) {
  const project = getProject(id);
  return (
    <div className="flex flex-col gap-3 p-4 rounded-xl bg-[var(--mrfork-surface)] border border-[var(--mrfork-border)]">
      <div className="flex items-center justify-between">
        <p className="text-md font-semibold tracking-tight text-[var(--colour-bodytext)]">{project.name}</p>
      </div>
      <a href={project.href} className="group relative h-[180px] lg:h-[228px] rounded-[8px] overflow-hidden bg-[var(--container-bg)] border-[var(--mrfork-border)] border-1">
        <Image src={project.image} alt={project.name} fill sizes="480px" className="object-contain p-8" />
        <SquareArrowOutUpRight
          aria-hidden
          className="absolute top-3 right-3 size-4 text-[var(--colour-bodytext-light)] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
          strokeWidth={1.5}
        />
      </a>
      {/* <MyButton variant="secondary" text="View project" link={project.href} target="_self" textSize="text-xs" /> */}
    </div>
  );
}

// Reveals `total` characters over time, like a chatbot streaming its answer
function useTyping(total: number, enabled: boolean, onDone: () => void) {
  const [count, setCount] = useState(enabled ? 0 : total);
  const done = useRef(onDone);
  done.current = onDone;

  useEffect(() => {
    if (!enabled) return;
    const start = performance.now();
    const id = setInterval(() => {
      const n = Math.min(total, Math.floor(((performance.now() - start) / 1000) * TYPE_CPS));
      setCount(n);
      if (n >= total) {
        clearInterval(id);
        done.current();
      }
    }, 30);
    return () => clearInterval(id);
  }, [enabled, total]);

  return enabled ? count : total;
}

function AssistantReply({ reply, onAsk, showSuggestions, typing, onTyped }: {
  reply: ChatReply;
  onAsk: (prompt: string) => void;
  showSuggestions: boolean;
  typing: boolean; // type the text out (only the newest reply)
  onTyped: () => void;
}) {
  const lengths = reply.paragraphs.map(richLength);
  const total = lengths.reduce((a, b) => a + b, 0);
  const shown = useTyping(total, typing, onTyped);
  const done = shown >= total;

  // Split the visible character count across the paragraphs
  let left = shown;
  const limits = lengths.map((len) => {
    const n = Math.max(0, Math.min(len, left));
    left -= len;
    return n;
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 text-sm leading-loose text-[var(--colour-bodytext)]">
        {reply.paragraphs.map((p, i) =>
          limits[i] > 0 ? (
            <p key={i}>
              <RichText text={p} limit={limits[i]} />
            </p>
          ) : null,
        )}
      </div>
      {done && reply.project && <ProjectLink id={reply.project} />}
      {done && showSuggestions && reply.suggestions && (
        <div className="flex flex-wrap gap-2">
          {reply.suggestions.map((s) => (
            <SuggestedPrompt key={s} text={s} onClick={() => onAsk(s)} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MrForkPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  // Replies that have already been typed out, so they never type again
  const typed = useRef(new Set<number>());
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  // True while the big avatar is scrolled out of view, so the top bar shows it
  const [avatarHidden, setAvatarHidden] = useState(false);

  const chatting = messages.length > 0;

  // Pick up the conversation from the previous page. Replies shown before are
  // marked as typed so they don't type out again, and a question that was left
  // unanswered (the visitor navigated away while Mr. Fork was thinking) is dropped.
  const [restored, setRestored] = useState(false);
  useEffect(() => {
    const saved = loadSession().messages ?? [];
    if (saved.at(-1)?.role === "user") saved.pop();
    saved.forEach((m, i) => m.role === "assistant" && typed.current.add(i));
    if (saved.length) setMessages(saved);
    setRestored(true);
  }, []);

  useEffect(() => {
    if (restored) saveSession({ messages });
  }, [messages, restored]);

  useEffect(() => {
    if (open) inputRef.current?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    const root = scrollRef.current;
    const target = avatarRef.current;
    if (!root || !target) return;
    const observer = new IntersectionObserver(([entry]) => setAvatarHidden(!entry.isIntersecting), { root });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  async function ask(text: string) {
    const message = text.trim();
    if (!message || thinking) return;
    const history = messages;
    setMessages((m) => [...m, { role: "user", text: message }]);
    setInput("");
    setThinking(true);
    try {
      const reply = await engine.reply(message, history);
      setMessages((m) => [...m, { role: "assistant", reply }]);
    } finally {
      setThinking(false);
    }
  }

  function restart() {
    typed.current.clear();
    setMessages([]);
    setInput("");
    inputRef.current?.focus();
  }

  const lastIndex = messages.length - 1;

  return (
    <aside
      aria-label="Mr. Fork"
      aria-hidden={!open}
      inert={!open}
      className={cn(
        "fixed top-0 right-0 z-[200] h-dvh w-full lg:w-[var(--mrfork-width)] flex flex-col",
        "bg-[var(--container-bg)] lg:border-l border-[var(--mrfork-border)]",
        "transition-transform duration-300 ease-out",
        open ? "translate-x-0" : "translate-x-full",
      )}
    >
      <div className="shrink-0 grid grid-cols-[1fr_auto_1fr] items-center px-3 py-3 border-b border-[var(--nav-border)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Mr. Fork"
          title="Close"
          className="size-8 flex items-center justify-center text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)] cursor-pointer transition"
        >
          <PanelLeftClose className="size-5" strokeWidth={1.5} />
        </button>
        {/* Appears once the big avatar below has scrolled out of view */}
        <div
          aria-hidden={!avatarHidden}
          className={cn(
            "flex items-center gap-2 transition-opacity duration-200",
            avatarHidden ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <Image src="/mrfork/fork.svg" alt="" width={28} height={28} className="size-7 dark:hidden" />
          <Image src="/mrfork/fork-dark.svg" alt="" width={28} height={28} className="size-7 hidden dark:block" />
          <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Mr. Fork</p>
        </div>
        {chatting && (
          <button
            type="button"
            onClick={restart}
            aria-label="Restart"
            title="Restart"
            className="justify-self-end size-8 flex items-center justify-center text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)] cursor-pointer transition"
          >
            <RotateCcw className="size-5" strokeWidth={1.5} />
          </button>
        )}
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain px-7 pt-8 pb-6">
        <div ref={avatarRef} className="flex flex-col items-center gap-2">
          <Image src="/mrfork/fork.svg" alt="" width={40} height={40} className="size-10 dark:hidden" />
          <Image src="/mrfork/fork-dark.svg" alt="" width={40} height={40} className="size-10 hidden dark:block" />
          <p className="text-md font-semibold text-[var(--colour-bodytext-light)] leading-loose">Mr. Fork</p>
        </div>

        <div className="mt-8 flex flex-col gap-2">
          <p className="font-semibold text-xl text-[var(--colour-bodytext)] tracking-tight">Fork found in kitchen.</p>
          <p className="font-semibold text-xl text-[var(--colour-bodytext)] tracking-tight">But Mr. Fork is found in Hung&rsquo;s portfolio as a virtual assistant.</p>
          {/* <p>Ask him anything.</p> */}
        </div>

        {!chatting && (
          <div className="mt-[29px] flex flex-col gap-2">
            {STARTER_SUGGESTIONS.map((s) => (
              <SuggestedPrompt key={s} text={s} onClick={() => ask(s)} className="w-full" />
            ))}
          </div>
        )}

        {chatting && (
          <div className="mt-8 flex flex-col gap-6">
            {messages.map((m, i) =>
              m.role === "user" ? (
                <UserBubble key={i} text={m.text} />
              ) : (
                <AssistantReply
                  key={i}
                  reply={m.reply}
                  onAsk={ask}
                  showSuggestions={i === lastIndex && !thinking}
                  typing={i === lastIndex && !typed.current.has(i) && !reduceMotion()}
                  onTyped={() => typed.current.add(i)}
                />
              ),
            )}
            {thinking && <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose animate-pulse">Thinking...</p>}
          </div>
        )}
      </div>

      <div className="shrink-0 flex items-center gap-2 px-4 py-4 border-t border-[var(--nav-border)]">
        <form
          className="flex-1 min-w-0 flex items-center gap-3 pl-6 pr-2 h-[44px] rounded-[24px] bg-[var(--mrfork-surface)] border border-[var(--mrfork-border)] focus-within:border-[var(--colour-bodytext-light)] transition-colors"
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
        >
          <label htmlFor="mrfork-input" className="sr-only">
            Ask Mr. Fork anything
          </label>
          <input
            ref={inputRef}
            id="mrfork-input"
            type="text"
            autoComplete="off"
            placeholder="Ask Mr. Fork anything"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 min-w-0 bg-transparent outline-none text-sm text-[var(--colour-bodytext)] placeholder:text-[var(--colour-bodytext-light)]"
          />
          <button
            type="submit"
            disabled={thinking || !input.trim()}
            aria-label="Send"
            className="size-9 flex items-center justify-center rounded-full text-[var(--colour-bodytext)] enabled:hover:bg-[var(--mrfork-surface-hover)] disabled:opacity-40 cursor-pointer disabled:cursor-default transition"
          >
            <ArrowUp className="size-4" strokeWidth={1.5} />
          </button>
        </form>
      </div>
    </aside>
  );
}
