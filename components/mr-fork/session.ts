import type { ChatMessage } from "@/lib/chat/types";

// Keeps Mr. Fork's conversation while the visitor moves between pages. Links
// on the site are full page loads, so the session lives in sessionStorage: it
// stays on this device, is cleared when the tab closes, and is reset when the
// page is refreshed.

const KEY = "mrfork-session";

type Session = {
  messages: ChatMessage[];
};

function pageWasRefreshed() {
  const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
  return nav?.type === "reload";
}

export function loadSession(): Partial<Session> {
  try {
    if (pageWasRefreshed()) {
      sessionStorage.removeItem(KEY);
      return {};
    }
    return JSON.parse(sessionStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function saveSession(patch: Partial<Session>) {
  try {
    const current = JSON.parse(sessionStorage.getItem(KEY) ?? "{}");
    sessionStorage.setItem(KEY, JSON.stringify({ ...current, ...patch }));
  } catch {
    // Storage can be unavailable (private mode, blocked site data); the chat
    // still works, it just won't carry over to the next page
  }
}
