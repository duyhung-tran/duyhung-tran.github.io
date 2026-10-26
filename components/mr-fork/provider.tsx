"use client";

import { createContext, useContext, useEffect, useState } from "react";
import MrForkPanel from "./panel";

type MrForkState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MrForkContext = createContext<MrForkState>({ open: false, setOpen: () => {} });

export function useMrFork() {
  return useContext(MrForkContext);
}

// Wraps every page. When Mr. Fork is summoned, the page content is pushed left
// to make room for the chat panel on large screens; on smaller screens the
// panel covers the page instead. The panel always starts closed on a new page;
// the conversation itself is kept by the panel (see session.ts).
export function MrForkProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <MrForkContext.Provider value={{ open, setOpen }}>
      <div
        className={`transition-[margin] duration-300 ease-out ${
          open ? "lg:mr-[var(--mrfork-width)]" : ""
        }`}
      >
        {children}
      </div>
      <MrForkPanel open={open} onClose={() => setOpen(false)} />
    </MrForkContext.Provider>
  );
}
