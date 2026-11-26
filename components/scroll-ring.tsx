"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { animate } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { markRingArrival } from "@/lib/ring-arrival";
import { useAnimationsOn } from "@/lib/animation-setting";

// The scroll ring: past the end of something, a ring pins in place and fills as the
// scroll continues; once it is full (and stays full briefly) it goes somewhere.
// Used in the project modal's media column (opens the project page) and at the
// end of project pages (back to home).

// In the modal, the ring section is this many column heights tall: one to bring the
// ring in, the rest to fill it. Taller means more scrolling before it goes.
export const RING_SECTION = 2.7;
// The ring must stay full this long (ms) before it goes, so a fast flick that
// lands on the end doesn't trigger it by accident. It also gives the ring's bounce
// (.ring-done in globals.css, 0.42s) time to play before the page changes
export const RING_HOLD = 450;
// Progress at which the ring counts as full
export const RING_FULL = 0.995;
// Stop scrolling part way and the ring drains back to empty after this long (ms):
// just long enough to tell a stop from the gap between wheel events
export const RING_IDLE = 50;

// Filling the ring in the project modal, the media keeps moving up, but with resistance: never further
// than this (px), and slower the closer it gets
export const RING_PULL = 90;
// How far (px) content moves for `distance` px of scrolling against a rubber band that
// tops out at `limit` px: about a third of the scroll at first, slowing toward the limit
// (iOS's overscroll curve, stiffer)
export const rubberBand = (distance: number, limit: number) => (1 - 1 / ((distance * 0.35) / limit + 1)) * limit;

// Size of the ring, in px
const RING = 48;
const RING_R = 22;
const RING_LEN = 2 * Math.PI * RING_R;

// The ring and its label; progress runs 0 → 1. strongLabel shows the label in the
// body text colour instead of the light one (the project modal)
export function ScrollRing({
    progress,
    label,
    fullLabel,
    strongLabel = false,
}: {
    progress: number;
    label: string;
    fullLabel: string;
    strongLabel?: boolean;
}) {
    return (
        <>
            {/* Full: a quick bouncy scale before it goes (on a wrapper, since the svg's own
                transform is its rotation); the chevron inside bounces with it */}
            <span className={`relative block ${progress >= RING_FULL ? "ring-done" : ""}`}>
            <svg width={RING} height={RING} viewBox={`0 0 ${RING} ${RING}`} className="-rotate-90" aria-hidden="true">
                <circle cx={RING / 2} cy={RING / 2} r={RING_R} fill="none" strokeWidth={2} className="stroke-[var(--nav-border)]" />
                <circle
                    cx={RING / 2}
                    cy={RING / 2}
                    r={RING_R}
                    fill="none"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeDasharray={RING_LEN}
                    strokeDashoffset={RING_LEN * (1 - progress)}
                    className="stroke-[var(--colour-bodytext)]"
                />
            </svg>
            {/* Chevron in the middle: goes from the light text colour to the dark one as the ring fills */}
            <ChevronDown
                aria-hidden="true"
                strokeWidth={1.5}
                className="absolute inset-0 m-auto size-5"
                style={{
                    color: `color-mix(in srgb, var(--colour-bodytext) ${Math.round(Math.min(1, progress) * 100)}%, var(--colour-bodytext-light))`,
                }}
            />
            </span>
            <p className={`text-sm ${strongLabel ? "text-[var(--colour-bodytext)]" : "text-[var(--colour-bodytext-light)]"} leading-loose`}>
                {progress >= RING_FULL ? fullLabel : label}
            </p>
        </>
    );
}

// How much scrolling past the bottom of the page fills the ring, in window heights
const PAGE_RING_FILL = 1.9;

// The ring at the end of a page: a short section (1/2.5 of the window) above the
// footer. The page scrolls to its bottom as usual, footer and all; scrolling on from
// there (wheel or touch, since the page can't move any further) fills the ring, and
// full, it goes to `href`. Scrolling back up empties it; stopping part way drains it.
type PageEndRingProps = { href: string; label: string; fullLabel: string };

// No ring at all with animations off in the menu: the page just ends
export function PageEndRing(props: PageEndRingProps) {
    const animationsOn = useAnimationsOn();
    return animationsOn ? <PageEndRingOn {...props} /> : null;
}

function PageEndRingOn({ href, label, fullLabel }: PageEndRingProps) {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        router.prefetch(href);
    }, [href, router]);

    // While this page is open, no rubber-band bounce at its bottom: scrolling on there
    // only fills the ring, the page itself stays still
    useEffect(() => {
        const roots = [document.documentElement, document.body];
        const before = roots.map((el) => el.style.overscrollBehaviorY);
        roots.forEach((el) => (el.style.overscrollBehaviorY = "none"));
        return () => roots.forEach((el, i) => (el.style.overscrollBehaviorY = before[i]));
    }, []);

    useEffect(() => {
        let value = 0;
        let hold: ReturnType<typeof setTimeout> | undefined;
        let idle: ReturnType<typeof setTimeout> | undefined;
        let drain: ReturnType<typeof animate> | undefined;
        let leaving = false;
        let touchY: number | null = null;

        const atBottom = () =>
            window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

        const set = (next: number) => {
            value = Math.min(1, Math.max(0, next));
            setProgress(value);
            const full = value >= RING_FULL;

            // Full: go once it has stayed full for RING_HOLD; easing off cancels
            if (!full) {
                clearTimeout(hold);
                hold = undefined;
            } else if (!hold) {
                hold = setTimeout(() => {
                    leaving = true;
                    // Lets the destination play its arrival entrance
                    markRingArrival();
                    // The destination puts itself at the top (Next's own scroll, smoothed by
                    // the site's scroll-behavior, could leave it at the bottom)
                    router.push(href, { scroll: false });
                }, RING_HOLD);
            }
        };

        // Scrolled by `dy` px: past the bottom it fills the ring; scrolling up empties it first
        const push = (dy: number) => {
            if (leaving || dy === 0) return;
            if (dy > 0 && !atBottom()) return;
            if (dy < 0 && value === 0) return;
            drain?.stop();
            set(value + dy / (window.innerHeight * PAGE_RING_FILL));

            // Part way and then idle: drain back to empty
            clearTimeout(idle);
            if (value > 0 && value < RING_FULL) {
                idle = setTimeout(() => {
                    drain = animate(value, 0, { duration: 0.4, ease: "easeOut", onUpdate: set });
                }, RING_IDLE);
            }
        };

        const onWheel = (e: WheelEvent) => {
            const dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
            push(dy);
        };
        const onTouchStart = (e: TouchEvent) => {
            touchY = e.touches[0]?.clientY ?? null;
        };
        const onTouchMove = (e: TouchEvent) => {
            const y = e.touches[0]?.clientY;
            if (touchY === null || y === undefined) return;
            push(touchY - y);
            touchY = y;
        };

        window.addEventListener("wheel", onWheel, { passive: true });
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: true });
        return () => {
            clearTimeout(hold);
            clearTimeout(idle);
            drain?.stop();
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
        };
    }, [href, router]);

    return (
        // 1/2.5 of the window tall. The top padding matches the space under the section
        // (the page's 40px bottom padding + the footer's 80px top padding), so the ring
        // sits midway between the content above and the footer text
        <div className="h-[40dvh] pt-[120px] flex flex-col items-center justify-center gap-5">
            <ScrollRing progress={progress} label={label} fullLabel={fullLabel} />
        </div>
    );
}
