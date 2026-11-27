"use client"

import { useEffect, useRef, useState } from "react";
import { Mouse, MoveDown } from "lucide-react";

// The home page project modal's cursor companion: a frosted pill with an animated
// down arrow and a mouse icon (the label text is commented out for now) that sits just
// above-right of the (unchanged) system cursor while it is over the modal panel (marked
// with data-scroll-cursor). Over links and buttons it steps aside. Mouse/trackpad only;
// touch never sees it. Render it straight inside the Dialog (no transformed ancestor),
// so `fixed` is the window.

// Where the mouse last was, kept from page load on, so the circle can show at the cursor
// as soon as the modal opens rather than waiting for the mouse to move
let lastMouse: { x: number; y: number } | null = null;
if (typeof window !== "undefined") {
    const track = (e: PointerEvent) => {
        if (e.pointerType === "mouse") lastMouse = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("pointermove", track, { passive: true, capture: true });
    window.addEventListener("pointerdown", track, { passive: true, capture: true });
}

export function ScrollCursor({ active, label }: { active: boolean; label: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!active || !window.matchMedia("(pointer: fine)").matches) return;
        const place = (x: number, y: number, target: Element | null) => {
            const el = ref.current;
            // Above and to the right of the system cursor, clear of its arrow
            if (el) el.style.transform = `translate3d(${x + 2}px, ${y + 2}px, 0) translateY(-100%)`;
            const overPanel = !!target?.closest?.("[data-scroll-cursor]");
            const overControl = !!target?.closest?.("a, button, [role='button'], input, textarea, select");
            setVisible(overPanel && !overControl);
        };
        // Straight away, wherever the mouse already is
        if (lastMouse) place(lastMouse.x, lastMouse.y, document.elementFromPoint(lastMouse.x, lastMouse.y));
        const move = (e: PointerEvent) => {
            if (e.pointerType !== "mouse") return;
            place(e.clientX, e.clientY, e.target as Element | null);
        };
        const hide = () => setVisible(false);
        window.addEventListener("pointermove", move);
        document.documentElement.addEventListener("pointerleave", hide);
        return () => {
            window.removeEventListener("pointermove", move);
            document.documentElement.removeEventListener("pointerleave", hide);
        };
    }, [active]);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className={`fixed left-0 top-0 z-10 pointer-events-none flex items-center justify-center px-2.5 py-2.5 rounded-full border-[0.75px] border-[#bebebe] bg-white/50 backdrop-blur-[6px] text-sm text-[var(--colour-bodytext)] leading-loose whitespace-nowrap transition-opacity duration-150 ${active && visible ? "opacity-100" : "opacity-0"}`}
        >
            {/* {label} */}
            {/* The arrow moves down and back up on a loop (.scroll-arrow in globals.css) */}
            <MoveDown className="scroll-arrow relative top-px size-3.5 -mr-0.5" strokeWidth={1.5} aria-label={label} />
            <Mouse className="size-[18px]" strokeWidth={1.5} />
        </div>
    );
}
