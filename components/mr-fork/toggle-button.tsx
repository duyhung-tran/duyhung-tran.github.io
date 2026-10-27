"use client";

import { Utensils } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMrFork } from "./provider";

// Utensils icon button that opens Mr. Fork, or closes him if he's already
// open. Same icon button style as the menu button; used in the overview
// sidebar of the project pages.
export default function MrForkToggle({ className }: { className?: string }) {
  const { open, setOpen } = useMrFork();
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close Mr. Fork" : "Open Mr. Fork"}
      aria-expanded={open}
      className={cn(
        "size-8 flex items-center justify-center text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)] cursor-pointer transition",
        className,
      )}
    >
      <Utensils className="size-4" strokeWidth={1.5} />
    </button>
  );
}
