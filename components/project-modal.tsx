"use client"

import Image from "next/image";
import { useEffect, useRef, useState, type RefObject, type WheelEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import MyButton from "@/components/my-button";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FolderOpen, Mail, SquareArrowOutUpRight, X } from "lucide-react";
import { NO_LINK_YET, linkTarget, type ProjectOverview } from "@/lib/project-overviews";

type Props = {
    project: ProjectOverview | null;
    onClose: () => void;
};

// Sizing: from lg up the panel is two columns, 76% of the window wide at a
// 1000:585 shape, shrinking further if the window is too short for that shape
// (min-height keeps room for the text). Below lg the columns stack: 80% wide
// on tablets, full width as a bottom sheet on phones.
//
// Project overview shown over the home and archive grids (Figma: Portfolio 2027, node 464:18952).
// A dimmed, blurred backdrop with a white panel: media on the left, title,
// description, credits and the action buttons on the right.
//
// The panel slides up into place while fading in and coming into focus
// (opacity + blur), and reverses on close.
const ease = [0.22, 1, 0.36, 1] as const;

// Media sits inset on the white column by default; coverMedia projects crop it to fill the column
const insetMediaClass = "relative w-[80%] h-auto max-h-[80%] object-contain";
const coverMediaClass = "absolute inset-0 w-full h-full object-cover";

const labelClass = "text-xs text-[var(--colour-bodytext-light)] leading-loose";
const valueClass = "text-sm text-[var(--colour-bodytext)] leading-loose";
const panelMotion = {
    initial: { opacity: 0, y: 0, filter: "blur(0px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0 } },
    exit: { opacity: 0, y: 0, filter: "blur(0px)", transition: { duration: 0 } },
};
// Opening the project page from the scroll ring: once the page has loaded underneath,
// the panel slides up and blurs away, and the backdrop fades, revealing it
const exitDuration = 0.9;
// Eases in and out gently, so the slide starts and settles without a jolt
const exitEase = [0.45, 0, 0.2, 1] as const;
const leavingMotion = { opacity: 0, y: -120, filter: "blur(22px)", transition: { duration: exitDuration, ease: exitEase } };

export default function ProjectModal({ project, onClose }: Props) {
    return (
        // AnimatePresence keeps the closing modal (with its last project) mounted
        // until its exit animation finishes
        <AnimatePresence>
            {project && <ModalContent key={project.slug} p={project} onClose={onClose} />}
        </AnimatePresence>
    );
}

function ModalContent({ p, onClose }: { p: ProjectOverview; onClose: () => void }) {
    const link = p.link ?? NO_LINK_YET;
    const mediaClass = p.coverMedia ? coverMediaClass : insetMediaClass;
    const router = useRouter();
    const pathname = usePathname();
    // Scroll ring: idle → navigating (project page loading underneath) → exiting (panel slides away)
    const [stage, setStage] = useState<"idle" | "navigating" | "exiting">("idle");
    // The media column's scroller, so a wheel anywhere on the panel can scroll it
    const mediaScrollerRef = useRef<HTMLDivElement>(null);
    // The scroll ring only leads to pages on this site, never to an external link or the placeholder
    // (nor for NDA projects, which point to "Contact for details" instead)
    const ringOpens = p.gallery && !p.contact && link.startsWith("/") ? link : null;

    // Load the project page in the background while the modal is open
    useEffect(() => {
        if (ringOpens) router.prefetch(ringOpens);
    }, [ringOpens, router]);

    // The project page has replaced the one underneath: slide the modal away.
    // Any other page change (e.g. "View project") just closes it.
    const openedOn = useRef(pathname);
    useEffect(() => {
        if (pathname === openedOn.current) return;
        if (stage === "navigating" && pathname === ringOpens) setStage("exiting");
        else if (stage === "idle") onClose();
    }, [stage, pathname, ringOpens, onClose]);

    return (
        // Escape and backdrop clicks are ignored once the project is opening
        <Dialog static open onClose={stage === "idle" ? onClose : () => {}} className="relative z-[150]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={stage === "exiting" ? { opacity: 0, transition: { duration: exitDuration, ease: exitEase } } : { opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
                className="fixed inset-0 bg-black/10 backdrop-blur-[11px]"
                aria-hidden="true"
            />

            <div className="fixed inset-0 flex items-end md:items-center justify-center md:p-10">
                {/* The motion div animates; the Headless UI panel fills it, so any click
                    inside counts as inside (framer's transition prop would clash with
                    Headless UI's own if they were the same element) */}
                <motion.div
                    {...panelMotion}
                    animate={stage === "exiting" ? leavingMotion : panelMotion.animate}
                    onWheel={(e) => forwardWheel(e, mediaScrollerRef.current)}
                    onAnimationComplete={() => {
                        if (stage === "exiting") onClose();
                    }}
                    className="relative w-full md:w-[80vw] max-h-[92dvh] md:max-h-[calc(100dvh-80px)] lg:w-[min(76vw,calc((100dvh-80px)*1000/540))] lg:aspect-[1000/540] lg:min-h-[min(560px,calc(100dvh-80px))] lg:max-h-none overflow-y-auto lg:overflow-hidden bg-[var(--container-bg)] shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
                >
                <DialogPanel className="lg:h-full lg:grid lg:grid-cols-[2.5fr_2fr]">
                        <>
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close"
                                className="absolute top-5 right-5 z-10 size-8 flex items-center justify-center text-[var(--colour-bodytext-light)] hover:text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)] cursor-pointer transition"
                            >
                                <X className="size-5" strokeWidth={1.5} />
                            </button>

                            {/* Media on the left (on top on phones), content on the right */}
                            <MediaColumn
                                p={p}
                                mediaClass={mediaClass}
                                scrollerRef={mediaScrollerRef}
                                onRingFull={
                                    ringOpens && stage === "idle"
                                        ? () => {
                                              setStage("navigating");
                                              router.push(ringOpens);
                                          }
                                        : undefined
                                }
                            />

                            <div className="p-8 md:p-10 lg:pt-[clamp(48px,8vh,104px)] lg:pb-[clamp(40px,7vh,88px)] lg:overflow-y-auto lg:flex lg:flex-col">
                                <DialogTitle className="text-xl md:text-xl text-[var(--colour-bodytext)] leading-normal">
                                    {p.title}
                                </DialogTitle>

                                <div className="mb-1"></div>
                                {/* The description is the tile's grey text, so it stays grey here */}
                                <p className="text-sm leading-loose text-[var(--colour-bodytext-light)]">
                                    {p.summary}
                                </p>

                                {p.overview && (
                                    <>
                                        <div className="mb-7"></div>
                                        {/* Same labels and values as the overview block on the project page */}
                                        {/* Columns size to their content instead of splitting the width */}
                                        <div className="grid grid-cols-[auto_auto] justify-start gap-x-12 gap-y-4">
                                            <div>
                                                <p className={labelClass}>Company</p>
                                                <p className={valueClass}>{p.overview.company}</p>
                                            </div>
                                            <div>
                                                <p className={labelClass}>Product</p>
                                                <p className={valueClass}>{p.overview.product}</p>
                                            </div>
                                            <div>
                                                <p className={labelClass}>Status</p>
                                                <div className="flex items-center gap-2">
                                                    <p className={valueClass}>{p.overview.status}</p>
                                                    <span
                                                        className={`w-1.5 h-1.5 rounded-full ${p.overview.status === "Live" ? "bg-green-500" : "bg-blue-500"}`}
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <p className={labelClass}>Focus</p>
                                                {p.overview.focus.map((f) => (
                                                    <p key={f} className={valueClass}>{f}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {p.description && (
                                    <>
                                        <div className="mb-8"></div>
                                        <p className={valueClass}>{p.description}</p>
                                    </>
                                )}

                                {p.credits && p.credits.length > 0 && (
                                    <>
                                        <div className="mb-8"></div>
                                        {/* Heading uses the same text style as the names */}
                                        <div className="text-sm text-[var(--colour-bodytext)] leading-loose">
                                            <p>Thank you to:</p>
                                            <ul>
                                                {p.credits.map((name) => (
                                                    <li key={name}>{name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}

                                <div className="mb-10"></div>
                                {/* Outer flex row keeps the buttons at their natural width instead of
                                    stretching across the column; mt-auto pins them to the bottom in the
                                    side-by-side layout. The inner grid's equal columns make both buttons
                                    as wide as the wider one. */}
                                <div className="flex lg:mt-auto">
                                    <div className={`grid ${p.secondary ? "grid-cols-2" : "grid-cols-1"} gap-3`}>
                                        {p.contact ? (
                                            <MyButton
                                                variant="primary"
                                                icon={Mail}
                                                text="Contact for details"
                                                link={p.contact}
                                                target="_blank"
                                                textSize="text-sm"
                                            />
                                        ) : (
                                        <MyButton
                                            variant="primary"
                                            // Home page projects (the ones with a gallery) open a full case study page
                                            icon={p.gallery ? FolderOpen : SquareArrowOutUpRight}
                                            text={p.gallery ? "View entire project" : "View project"}
                                            link={link}
                                            // External links open a new tab; site pages and the placeholder stay in this one
                                            target={linkTarget(link)}
                                            textSize="text-sm"
                                        />
                                        )}
                                        {/* Second button only when the project has documentation or a prototype;
                                            the rest (archive and NDA projects) close with ×, Escape or the backdrop */}
                                        {p.secondary && (
                                            <MyButton
                                                variant="secondary"
                                                icon={SquareArrowOutUpRight}
                                                text={p.secondary.label}
                                                link={p.secondary.link}
                                                target="_blank"
                                                textSize="text-sm"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                </DialogPanel>
                </motion.div>
            </div>
        </Dialog>
    );
}



// A wheel over the text side (or anywhere else on the panel) scrolls the media column,
// unless something under the cursor can still scroll that way itself (e.g. long text).
function forwardWheel(e: WheelEvent<HTMLElement>, scroller: HTMLElement | null) {
    if (!scroller || scroller.contains(e.target as Node)) return;
    const dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * scroller.clientHeight : e.deltaY;
    if (dy === 0) return;
    for (let el = e.target as HTMLElement | null; el && el !== e.currentTarget.parentElement; el = el.parentElement) {
        const { overflowY } = getComputedStyle(el);
        if (overflowY !== "auto" && overflowY !== "scroll") continue;
        const canScroll = dy > 0 ? el.scrollTop + el.clientHeight < el.scrollHeight - 1 : el.scrollTop > 0;
        if (canScroll) return;
    }
    scroller.scrollBy({ top: dy, behavior: "instant" });
}

// The ring section is this many column heights tall: one to bring the ring in,
// the rest to fill it. Taller means more scrolling before a project opens.
const RING_SECTION = 3;
// The ring must stay full this long (ms) before the project opens, so a fast
// flick that lands on the end doesn't open it by accident
const RING_HOLD = 400;
// Progress at which the ring counts as full
const RING_FULL = 0.995;
// Stop scrolling part way and the ring drains back to empty after this long (ms)
const RING_IDLE = 500;

// Media column scrollbar: shortest thumb (px), and how long it stays after scrolling stops (ms)
const SCROLLBAR_MIN = 24;
const SCROLLBAR_HIDE = 800;

// Size of the scroll ring, in px
const RING = 56;
const RING_R = 26;
const RING_LEN = 2 * Math.PI * RING_R;

// The project's main media, then its gallery, scrolled through inside the column.
// Past the last item a ring pins in the middle and fills as the scroll continues;
// once it is full, onRingFull opens the project page.
function MediaColumn({
    p,
    mediaClass,
    scrollerRef,
    onRingFull,
}: {
    p: ProjectOverview;
    mediaClass: string;
    scrollerRef: RefObject<HTMLDivElement | null>;
    onRingFull?: () => void;
}) {
    const ringSectionRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    // "Scroll for more" goes away once the ring comes into view
    const [ringInView, setRingInView] = useState(false);
    // Overlay scrollbar: shown while scrolling, fades out SCROLLBAR_HIDE ms after it stops
    const [bar, setBar] = useState({ top: 0, height: 0, visible: false });
    const barTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
    const holdTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
    const idleTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
    useEffect(() => () => {
        clearTimeout(holdTimer.current);
        clearTimeout(idleTimer.current);
        clearTimeout(barTimer.current);
    }, []);
    const gallery = p.gallery ?? [];
    const hasGallery = gallery.length > 0;

    // Shortly after opening, the media slides up a little and back (media-nudge in globals.css),
    // showing the column scrolls. It stops as soon as the visitor does anything themselves.
    const [nudge, setNudge] = useState(true);
    useEffect(() => {
        if (!hasGallery) return;
        const stop = () => setNudge(false);
        const events = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
        events.forEach((type) => window.addEventListener(type, stop, { passive: true }));
        return () => events.forEach((type) => window.removeEventListener(type, stop));
    }, [hasGallery]);
    const hasRing = onRingFull !== undefined || progress >= RING_FULL;

    const onScroll = () => {
        const el = scrollerRef.current;
        if (!el) return;

        // Thumb size and position, in px within the column. The track ends where the ring
        // pins in the middle, so the thumb hits the bottom as soon as the ring is reached;
        // the ring's own fill shows the scrolling after that.
        const max = ringSectionRef.current?.offsetTop ?? el.scrollHeight - el.clientHeight;
        const height = Math.max(SCROLLBAR_MIN, (el.clientHeight * el.clientHeight) / (max + el.clientHeight));
        const top = max > 0 ? (Math.min(el.scrollTop, max) / max) * (el.clientHeight - height) : 0;
        setBar({ top, height, visible: true });
        clearTimeout(barTimer.current);
        barTimer.current = setTimeout(() => setBar((b) => ({ ...b, visible: false })), SCROLLBAR_HIDE);

        const section = ringSectionRef.current;
        if (!section) {
            // No ring: the hint goes once the last item is reached
            setRingInView(el.scrollTop >= el.scrollHeight - el.clientHeight - 2);
            return;
        }
        // 0 when the ring section reaches the top of the column, 1 at the very end of the scroll
        const start = section.offsetTop;
        // The ring sits in the middle of its first screen, so it shows from half a column before it pins
        setRingInView(el.scrollTop > start - el.clientHeight / 2);
        const end = el.scrollHeight - el.clientHeight;
        const next = Math.min(1, Math.max(0, (el.scrollTop - start) / Math.max(1, end - start)));
        setProgress(next);
        const full = next >= RING_FULL;

        // Full: open once it has stayed full for RING_HOLD; scrolling back up cancels
        if (!full) {
            clearTimeout(holdTimer.current);
            holdTimer.current = undefined;
        } else if (!holdTimer.current) {
            holdTimer.current = setTimeout(() => onRingFull?.(), RING_HOLD);
        }

        // Part way and then idle: drain the ring by scrolling back to where it starts
        clearTimeout(idleTimer.current);
        if (next > 0 && !full) {
            idleTimer.current = setTimeout(() => el.scrollTo({ top: start, behavior: "smooth" }), RING_IDLE);
        }
    };

    const main = p.videoSrc !== undefined ? (
        <video key={p.videoSrc} src={p.videoSrc} autoPlay muted loop playsInline aria-label={p.title} className={mediaClass} />
    ) : (
        <Image
            src={p.imageSrc}
            alt={p.title}
            // The modal is already open, so don't wait for lazy loading
            loading="eager"
            width={1640}
            height={1228}
            className={mediaClass}
        />
    );

    // No gallery: the single piece of media, as before
    if (!hasGallery) {
        return (
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full flex items-center justify-center overflow-hidden bg-[var(--container-bg)]">
                {main}
            </div>
        );
    }

    return (
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-[var(--container-bg)]">
            <div
                ref={scrollerRef}
                onScroll={onScroll}
                tabIndex={0}
                aria-label={`${p.title} media`}
                className="absolute inset-0 overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none"
            >
                {/* Wrapper only for the open-time nudge; the transform is gone once it ends */}
                <div className={`h-full ${nudge ? "media-nudge" : ""}`}>
                <div className="relative h-full flex items-center justify-center">{main}</div>

                {gallery.map((m) => (
                    // Screenshots and mockups sit whole, edge to edge, on the light grey used on the project pages
                    <div key={m.src} className="relative h-full flex items-center justify-center bg-[var(--container-bg-2)]">
                        {m.kind === "video" ? (
                            <video src={m.src} autoPlay muted loop playsInline aria-label={m.alt} className="max-w-full max-h-full object-contain" />
                        ) : (
                            <Image src={m.src} alt={m.alt} width={1640} height={1228} className="w-auto h-auto max-w-full max-h-full object-contain" />
                        )}
                    </div>
                ))}

                {hasRing && (
                    // RING_SECTION column heights tall: the ring pins in the middle once the section
                    // reaches the top, filling as the scroll goes on
                    <div ref={ringSectionRef} className="relative" style={{ height: `${RING_SECTION * 100}%` }}>
                        <div className="sticky top-0 flex flex-col items-center justify-center gap-5" style={{ height: `${100 / RING_SECTION}%` }}>
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
                            <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose">
                                {progress >= RING_FULL ? "Opening project" : "View the nitty-gritty of this project"}
                            </p>
                        </div>
                    </div>
                )}
                </div>
            </div>

            {/* Scrollbar over the media's right edge, only while scrolling (the native one is hidden) */}
            <div
                aria-hidden="true"
                className={`pointer-events-none absolute z-10 right-1.5 w-1 rounded-full bg-[var(--colour-bodytext-light)] transition-opacity duration-300 ${bar.visible ? "opacity-60" : "opacity-0"}`}
                style={{ top: bar.top, height: bar.height }}
            />

            {/* Hint that the column scrolls; on top of the media until the ring comes into view */}
            <p
                aria-hidden="true"
                className={`pointer-events-none absolute z-10 bottom-5 left-1/2 -translate-x-1/2 text-sm text-[var(--colour-bodytext-light)] leading-loose transition-opacity duration-300 ${ringInView ? "opacity-0" : "opacity-100"}`}
            >
                Scroll for more
            </p>
        </div>
    );
}
