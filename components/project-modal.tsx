"use client"

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState, type RefObject, type WheelEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import MyButton from "@/components/my-button";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AnimatePresence, animate, motion } from "framer-motion";
import { FolderOpen, Mail, SquareArrowOutUpRight, X } from "lucide-react";
import { NO_LINK_YET, linkTarget, type ProjectOverview } from "@/lib/project-overviews";
import { coverPage, revealPage } from "@/lib/project-morph";
import { RING_FULL, RING_HOLD, RING_IDLE, RING_SECTION, ScrollRing } from "@/components/scroll-ring";

type Props = {
    project: ProjectOverview | null;
    onClose: () => void;
    // Home page modal: wider (same height), with more room for the media
    wide?: boolean;
};

// Sizing: from lg up the panel is two columns, 76% of the window wide at a
// 1000:540 shape, shrinking further if the window is too short for that shape
// (min-height keeps room for the text). Below lg the columns stack: 80% wide
// on tablets, full width as a bottom sheet on phones.
// The home page's modal (wide) is 86% of the window wide but keeps that same height,
// and gives the media 60% of the width instead of about 56%.
const panelSize = {
    normal: "lg:w-[min(76vw,calc((100dvh-80px)*1000/540))] lg:aspect-[1000/540]",
    wide: "lg:w-[min(86vw,calc((100dvh-80px)*86/76*1000/540))] lg:h-[min(calc(76vw*540/1000),calc(100dvh-80px))]",
};
const panelColumns = {
    normal: "lg:grid-cols-[2.5fr_2fr]",
    wide: "lg:grid-cols-[3fr_2fr]",
};
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
    initial: { opacity: 0, scale: 0.9, filter: "blur(16px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.25 } },
    exit: { opacity: 0, scale: 0.9, filter: "blur(16px)", transition: { duration: 0.25 } },
};
// Opening the project page from the scroll ring: once the page has loaded underneath,
// the panel slides up and blurs away, and the backdrop fades, revealing it
const exitDuration = 0.9;
// Eases in and out gently, so the slide starts and settles without a jolt
const exitEase = [0.45, 0, 0.2, 1] as const;
const leavingMotion = { opacity: 0, scale: 0.9, filter: "blur(22px)", transition: { duration: exitDuration, ease: exitEase } };

// Pages that repeat the modal's content in their first section (components/project-intro.tsx)
// get a morph instead: the white panel grows into the page while the title, summary,
// overview, description and button glide to their places on it. The rest of the panel
// (media, primary button, ×) fades out first.
const morphDuration = 0.85;
const morphEase = [0.76, 0, 0.24, 1] as const;
// The panel's own fade, before it is covered by the growing sheet
const morphPanelFade = 0.3;
// Once everything has landed, the overlay fades to reveal the page (and its nav) underneath
const morphReveal = 0.35;

export default function ProjectModal({ project, onClose, wide = false }: Props) {
    return (
        // AnimatePresence keeps the closing modal (with its last project) mounted
        // until its exit animation finishes
        <AnimatePresence>
            {project && <ModalContent key={project.slug} p={project} onClose={onClose} wide={wide} />}
        </AnimatePresence>
    );
}

function ModalContent({ p, onClose, wide }: { p: ProjectOverview; onClose: () => void; wide: boolean }) {
    const link = p.link ?? NO_LINK_YET;
    const mediaClass = p.coverMedia ? coverMediaClass : insetMediaClass;
    const router = useRouter();
    const pathname = usePathname();
    // Scroll ring: idle → navigating (project page loading underneath) → exiting (panel slides away),
    // or morphing (panel grows into the page) → revealing (page shows through) when the page
    // repeats the modal's content
    const [stage, setStage] = useState<"idle" | "navigating" | "exiting" | "morphing" | "revealing">("idle");
    const morphing = stage === "morphing" || stage === "revealing";
    const panelRef = useRef<HTMLDivElement>(null);
    const sheetRef = useRef<HTMLDivElement>(null);
    const morphLayerRef = useRef<HTMLDivElement>(null);
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
        if (stage === "navigating" && pathname === ringOpens) setStage(canMorph() ? "morphing" : "exiting");
        else if (stage === "idle") onClose();
    }, [stage, pathname, ringOpens, onClose]);

    // Opens the project page from the scroll ring or "View entire project": the page loads
    // underneath, then the modal morphs into it (or slides away). Only once, and only for
    // pages on this site that have one.
    const openProject =
        ringOpens && stage === "idle"
            ? () => {
                  setStage("navigating");
                  // The page loads underneath from here; its entrances wait for the reveal
                  coverPage();
                  router.push(ringOpens);
              }
            : undefined;

    // Measure before the browser paints the new page, so the morph starts on the very next frame
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;
    useLayoutEffect(() => {
        if (!morphing) return;
        const panel = panelRef.current, sheet = sheetRef.current, layer = morphLayerRef.current;
        if (!panel || !sheet || !layer) return onCloseRef.current();
        let cancelled = false;
        morphIntoPage(panel, sheet, layer, () => setStage("revealing")).then(() => {
            if (!cancelled) onCloseRef.current();
        });
        return () => {
            cancelled = true;
        };
    }, [morphing]);

    // However the modal goes away, the page underneath is no longer covered
    useEffect(() => () => revealPage(), []);

    return (
        // Escape and backdrop clicks are ignored once the project is opening
        <Dialog static open onClose={stage === "idle" ? onClose : () => {}} className="relative z-[150]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={
                    stage === "exiting"
                        ? { opacity: 0, transition: { duration: exitDuration, ease: exitEase } }
                        : stage === "revealing"
                          ? // The sheet covers the window by now, so the backdrop can go at once
                            { opacity: 0, transition: { duration: 0 } }
                          : { opacity: 1 }
                }
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 bg-black/10 backdrop-blur-[11px]"
                aria-hidden="true"
            />

            {/* The white sheet that grows from the panel into the page; hidden until the morph */}
            <div ref={sheetRef} aria-hidden="true" className="fixed opacity-0 pointer-events-none" />

            <div className="fixed inset-0 flex items-end md:items-center justify-center md:p-10">
                {/* The motion div animates; the Headless UI panel fills it, so any click
                    inside counts as inside (framer's transition prop would clash with
                    Headless UI's own if they were the same element) */}
                <motion.div
                    ref={panelRef}
                    {...panelMotion}
                    animate={
                        stage === "exiting"
                            ? leavingMotion
                            : morphing
                              ? { opacity: 0, transition: { duration: morphPanelFade, ease: "easeOut" } }
                              : panelMotion.animate
                    }
                    onWheel={(e) => forwardWheel(e, mediaScrollerRef.current)}
                    onAnimationComplete={() => {
                        if (stage === "exiting") {
                            revealPage();
                            onClose();
                        }
                    }}
                    className={`relative w-full md:w-[80vw] max-h-[92dvh] md:max-h-[calc(100dvh-80px)] ${panelSize[wide ? "wide" : "normal"]} lg:min-h-[min(560px,calc(100dvh-80px))] lg:max-h-none overflow-y-auto lg:overflow-hidden bg-[var(--container-bg)] shadow-[0_24px_60px_rgba(0,0,0,0.12)]`}
                >
                <DialogPanel className={`lg:h-full lg:grid ${panelColumns[wide ? "wide" : "normal"]}`}>
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
                                onRingFull={openProject}
                            />

                            <div className="p-8 md:p-10 lg:pt-[clamp(48px,8vh,104px)] lg:pb-[clamp(40px,7vh,88px)] lg:overflow-y-auto lg:flex lg:flex-col">
                                <DialogTitle data-morph="title" className="text-xl md:text-xl text-[var(--colour-bodytext)] leading-normal">
                                    {p.title}
                                </DialogTitle>

                                <div className="mb-1"></div>
                                {/* The description is the tile's grey text, so it stays grey here */}
                                <p data-morph="summary" className="text-sm leading-loose text-[var(--colour-bodytext-light)]">
                                    {p.summary}
                                </p>

                                {p.overview && (
                                    <>
                                        <div className="mb-7"></div>
                                        {/* Same labels and values as the overview block on the project page */}
                                        {/* Columns size to their content instead of splitting the width */}
                                        <div data-morph="overview" className="grid grid-cols-[auto_auto] justify-start gap-x-12 gap-y-4">
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
                                        <p data-morph="description" className={valueClass}>{p.description}</p>
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
                                        // "View entire project" opens the page the same way a full ring does
                                        // (page loads underneath, then the modal morphs into it). It stays a
                                        // real link, so Cmd/Ctrl-click and middle-click still open a new tab.
                                        <div
                                            onClickCapture={(e) => {
                                                if (!openProject || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                                                e.preventDefault();
                                                openProject();
                                            }}
                                        >
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
                                        </div>
                                        )}
                                        {/* Second button only when the project has documentation or a prototype;
                                            the rest (archive and NDA projects) close with ×, Escape or the backdrop */}
                                        {p.secondary && (
                                            <div data-morph="secondary">
                                                <MyButton
                                                    variant="secondary"
                                                    icon={SquareArrowOutUpRight}
                                                    text={p.secondary.label}
                                                    link={p.secondary.link}
                                                    target="_blank"
                                                    textSize="text-sm"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                </DialogPanel>
                </motion.div>
            </div>

            {/* Copies of the panel's text, gliding to their places on the page; filled by morphIntoPage */}
            <div ref={morphLayerRef} aria-hidden="true" className="fixed inset-0 pointer-events-none" />
        </Dialog>
    );
}



// The page underneath has a first section to morph into (and the visitor is fine with motion)
function canMorph() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return document.querySelector('[data-morph-target="title"]') !== null;
}

// The panel → page morph. The backdrop stays while the sheet grows over it. Each [data-morph] piece of the panel is copied into the layer
// at the same spot and glides (position, width, font size) to its [data-morph-target]
// twin on the page, while the sheet grows from the panel's box to the whole window,
// turning from the panel's white to the page background. Once landed, the copies sit
// exactly over the page's own text, so fading the overlay out reveals the page seamlessly.
// onCovered runs once the sheet fills the window, just before the reveal.
async function morphIntoPage(panel: HTMLElement, sheet: HTMLElement, layer: HTMLElement, onCovered: () => void) {
    // The new page starts at the top; measure it there.
    // Instant, or the site's smooth scrolling would still be under way when measuring
    window.scrollTo({ top: 0, behavior: "instant" });
    const opts = { duration: morphDuration, ease: morphEase };
    const panelBox = panel.getBoundingClientRect();
    const panelStyle = getComputedStyle(panel);
    const pageBg = getComputedStyle(document.body).backgroundColor;

    // Sheet: starts as an exact copy of the panel's box, under the panel as it fades
    Object.assign(sheet.style, {
        left: `${panelBox.left}px`,
        top: `${panelBox.top}px`,
        width: `${panelBox.width}px`,
        height: `${panelBox.height}px`,
        backgroundColor: panelStyle.backgroundColor,
        boxShadow: panelStyle.boxShadow,
        opacity: "1",
    });
    const runs: Promise<unknown>[] = [
        animate(
            sheet,
            {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: pageBg,
                boxShadow: "0 0 0 rgba(0,0,0,0)",
            },
            opts,
        ).finished,
    ];

    panel.querySelectorAll<HTMLElement>("[data-morph]").forEach((src) => {
        const target = document.querySelector<HTMLElement>(`[data-morph-target="${src.dataset.morph}"]`);
        if (!target) return;
        const from = src.getBoundingClientRect();
        const to = target.getBoundingClientRect();
        const fromStyle = getComputedStyle(src);
        const toStyle = getComputedStyle(target);
        const fromSize = parseFloat(fromStyle.fontSize);
        const toSize = parseFloat(toStyle.fontSize);
        // Type that differs between the two (e.g. the title: regular in the modal, semibold
        // and tight on the page) eases across too; Geist is a variable font, so weight is smooth
        const typeChanges = {
            ...(toSize !== fromSize ? { fontSize: `${toSize}px` } : {}),
            ...(toStyle.fontWeight !== fromStyle.fontWeight ? { fontWeight: Number(toStyle.fontWeight) } : {}),
            ...(toStyle.letterSpacing !== fromStyle.letterSpacing
                ? { letterSpacing: toStyle.letterSpacing === "normal" ? "0px" : toStyle.letterSpacing }
                : {}),
            // Grids (the overview) spread their columns and rows out to the page's spacing
            ...(toStyle.columnGap !== fromStyle.columnGap && toStyle.columnGap !== "normal" ? { columnGap: toStyle.columnGap } : {}),
            ...(toStyle.rowGap !== fromStyle.rowGap && toStyle.rowGap !== "normal" ? { rowGap: toStyle.rowGap } : {}),
        };

        const copy = src.cloneNode(true) as HTMLElement;
        copy.removeAttribute("id");
        copy.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
        Object.assign(copy.style, {
            position: "fixed",
            left: `${from.left}px`,
            top: `${from.top}px`,
            width: `${from.width}px`,
            margin: "0",
            boxSizing: "border-box",
            fontSize: `${fromSize}px`,
            fontWeight: fromStyle.fontWeight,
            letterSpacing: fromStyle.letterSpacing === "normal" ? "0px" : fromStyle.letterSpacing,
        });
        layer.appendChild(copy);
        // The panel's own piece hides now; the copy stands in for it
        src.style.visibility = "hidden";

        // Width and type animate as real values (not a scale), so text that wraps
        // differently in the narrow panel reflows into the page's line lengths on the way
        runs.push(
            animate(
                copy,
                {
                    x: to.left - from.left,
                    y: to.top - from.top,
                    width: to.width,
                    ...typeChanges,
                },
                opts,
            ).finished,
        );
    });

    await Promise.all(runs);
    onCovered();
    revealPage();
    // Landed: reveal the page underneath, nav and table of contents included
    await Promise.all([
        animate(sheet, { opacity: 0 }, { duration: morphReveal, ease: "easeOut" }).finished,
        animate(layer, { opacity: 0 }, { duration: morphReveal, ease: "easeOut" }).finished,
    ]);
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

// Media column scrollbar: shortest thumb (px), and how long it stays after scrolling stops (ms)
const SCROLLBAR_MIN = 24;
// Gap (px) kept between the scrollbar and the top and bottom edges of the modal
const SCROLLBAR_INSET = 6;
const SCROLLBAR_HIDE = 800;
// How long the scrollbar shows, faintly, after the modal opens (ms)
const SCROLLBAR_PEEK = 1000;

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
    // The scrollbar shows faintly for SCROLLBAR_PEEK ms after opening, or until the first scroll
    const [peek, setPeek] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setPeek(false), SCROLLBAR_PEEK);
        return () => clearTimeout(timer);
    }, []);
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

    // Turned off for now: shortly after opening, the media slid up a little and back
    // (media-nudge in globals.css), showing the column scrolls, stopping as soon as the
    // visitor did anything themselves. Uncomment this and the class below to bring it back.
    // const [nudge, setNudge] = useState(true);
    // useEffect(() => {
    //     if (!hasGallery) return;
    //     const stop = () => setNudge(false);
    //     const events = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
    //     events.forEach((type) => window.addEventListener(type, stop, { passive: true }));
    //     return () => events.forEach((type) => window.removeEventListener(type, stop));
    // }, [hasGallery]);
    const hasRing = onRingFull !== undefined || progress >= RING_FULL;

    const measureBar = (el: HTMLElement) => {
        const max = ringSectionRef.current?.offsetTop ?? el.scrollHeight - el.clientHeight;
        // The track stops SCROLLBAR_INSET short of the column's top and bottom edges
        const track = el.clientHeight - SCROLLBAR_INSET * 2;
        const height = Math.max(SCROLLBAR_MIN, (track * el.clientHeight) / (max + el.clientHeight));
        const top = SCROLLBAR_INSET + (max > 0 ? (Math.min(el.scrollTop, max) / max) * (track - height) : 0);
        return { top, height, max };
    };

    // The scrollbar shows faintly for a moment when the modal opens,
    // so it needs its size before any scrolling: measured here, and again as the media loads in
    useEffect(() => {
        const el = scrollerRef.current;
        const content = el?.firstElementChild;
        if (!el || !content) return;
        const measure = () => {
            const { top, height } = measureBar(el);
            setBar((b) => ({ ...b, top, height }));
        };
        const observer = new ResizeObserver(measure);
        observer.observe(el);
        Array.from(content.children).forEach((child) => observer.observe(child));
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasGallery, hasRing, gallery.length]);

    const onScroll = () => {
        const el = scrollerRef.current;
        if (!el) return;
        setPeek(false);

        // Thumb size and position, in px within the column. The track ends where the ring
        // pins in the middle, so the thumb hits the bottom as soon as the ring is reached;
        // the ring's own fill shows the scrolling after that.
        const { top, height, max } = measureBar(el);
        // Once the ring is pinned, only the ring shows the scrolling: no scrollbar
        const ringPinned = ringSectionRef.current !== null && el.scrollTop >= max;
        setBar({ top, height, visible: !ringPinned });
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
                // overscroll-none: no rubber-band bounce at the end, where the ring fills
                className="absolute inset-0 overflow-y-auto overscroll-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none"
            >
                {/* Wrapper for the open-time nudge (turned off above). It stays one column tall
                    so the ring section's % heights still work; the items overflow it. */}
                <div className="h-full" /* className={`h-full ${nudge ? "media-nudge" : ""}`} */>
                <div className="relative h-full flex items-center justify-center">{main}</div>

                {gallery.map((m) => (
                    // Screenshots and mockups sit whole, full width, each as tall as it is, on the light grey used on the project pages
                    <div key={m.src} className="bg-[var(--container-bg-2)]">
                        {m.kind === "video" ? (
                            <video src={m.src} autoPlay muted loop playsInline aria-label={m.alt} className="block w-full h-auto" />
                        ) : (
                            <Image src={m.src} alt={m.alt} width={1640} height={1228} className="block w-full h-auto" />
                        )}
                    </div>
                ))}

                {hasRing && (
                    // RING_SECTION column heights tall: the ring pins in the middle once the section
                    // reaches the top, filling as the scroll goes on
                    <div ref={ringSectionRef} className="relative" style={{ height: `${RING_SECTION * 100}%` }}>
                        <div className="sticky top-0 flex flex-col items-center justify-center gap-5" style={{ height: `${100 / RING_SECTION}%` }}>
                            <ScrollRing
                                progress={progress}
                                label="View the nitty-gritty of this project"
                                fullLabel="Opening project"
                            />
                        </div>
                    </div>
                )}
                </div>
            </div>

            {/* Scrollbar over the media's right edge (the native one is hidden): faint for a moment
                after opening, then only while scrolling */}
            <div
                aria-hidden="true"
                className={`pointer-events-none absolute z-10 right-1.5 w-1 rounded-full bg-[var(--colour-bodytext-light)] transition-opacity duration-300 ${bar.visible ? "opacity-60" : peek ? "opacity-30" : "opacity-0"}`}
                style={{ top: bar.top, height: bar.height }}
            />

            {/* Hint that the column scrolls; on top of the media until the ring comes into view */}
            <p
                aria-hidden="true"
                className={`pointer-events-none absolute z-10 bottom-5 left-1/2 -translate-x-1/2 text-base text-[var(--colour-bodytext-light)] leading-loose transition-opacity duration-300 ${ringInView ? "opacity-0" : "opacity-100"}`}
            >
                Scroll for more
            </p>
        </div>
    );
}
