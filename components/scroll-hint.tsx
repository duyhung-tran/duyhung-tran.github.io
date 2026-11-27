"use client"

import { useEffect, useState } from "react";
import { Mouse, MoveDown } from "lucide-react";

// The home page project modal's "this scrolls" hint: a frosted pill with an animated
// down arrow and a mouse icon, at the top middle of the media column. It pops in when
// shown (.cursor-pop in globals.css) and fades out once the visitor starts scrolling.
// Render it inside the media column's (non-scrolling, relative) outer box.
// How long after the modal is ready the hint pops in (ms), so it doesn't arrive with the modal itself
const SHOW_DELAY = 500;

export function ScrollHint({ show }: { show: boolean }) {
    // `show`, held back SHOW_DELAY ms on the way in; hiding is immediate
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (!show) {
            setVisible(false);
            return;
        }
        const timer = setTimeout(() => setVisible(true), SHOW_DELAY);
        return () => clearTimeout(timer);
    }, [show]);
    // Set once the pill has first shown: it pops in that first time, then only fades
    const [popped, setPopped] = useState(false);
    useEffect(() => {
        if (visible) setPopped(true);
    }, [visible]);

    return (
        // Outer: centres it at the top. Inner: the pill, which fades, and pops in from its top
        // (a keyframe animation rather than a transition, so it plays even when shown on the first frame)
        <div aria-hidden="true" className="pointer-events-none absolute z-10 top-5 left-1/2 -translate-x-1/2">
            <div
                className={`flex items-center justify-center px-4 py-2.5 rounded-full border-[0.75px] border-[#bebebe] bg-white/50 backdrop-blur-[6px] text-[color-mix(in_srgb,var(--colour-bodytext)_60%,var(--colour-bodytext-light))] origin-top transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"} ${visible || popped ? "cursor-pop" : ""}`}
            >
                {/* The arrow moves down and back up on a loop (.scroll-arrow in globals.css) */}
                <MoveDown className="scroll-arrow relative top-px size-4 -mr-0.5" strokeWidth={1.5} />
                <Mouse className="size-5" strokeWidth={1.5} />
            </div>
        </div>
    );
}
