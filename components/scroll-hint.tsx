"use client"

import { Mouse, MoveDown } from "lucide-react";

// The home page project modal's "this scrolls" hint: a frosted pill with an animated
// down arrow and a mouse icon, at the top middle of the media column. It has no entrance
// of its own, so it appears with the rest of the modal's content, and fades out once the
// visitor starts scrolling.
// Render it inside the media column's (non-scrolling, relative) outer box.
export function ScrollHint({ show }: { show: boolean }) {
    return (
        // Outer: centres it horizontally, and on desktop (media and text side by side) vertically on the
        // modal title's first line: the text column's top padding (project-modal.tsx) plus half the
        // title's line height (30px, 36px from 2xl). Inner: the pill, which only fades on the way out
        <div
            aria-hidden="true"
            className="pointer-events-none absolute z-10 top-5 lg:top-[calc(clamp(48px,8vh,104px)+15px)] 2xl:top-[calc(clamp(48px,8vh,104px)+18px)] lg:-translate-y-1/2 left-1/2 -translate-x-1/2"
        >
            <div
                className={`flex items-center justify-center px-4 py-2.5 rounded-full border-[0.75px] border-[#bebebe] bg-white/50 backdrop-blur-[6px] text-[color-mix(in_srgb,var(--colour-bodytext)_60%,var(--colour-bodytext-light))] ${show ? "opacity-100" : "opacity-0 transition-opacity duration-150"}`}
            >
                {/* The arrow moves down and back up on a loop (.scroll-arrow in globals.css) */}
                <MoveDown className="scroll-arrow relative top-px size-4 -mr-0.5" strokeWidth={1.5} />
                <Mouse className="size-5" strokeWidth={1.5} />
            </div>
        </div>
    );
}
