"use client"

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { whenPageRevealed } from "@/lib/project-morph";

export type TocItem = { id: string; label: string };

// Project page table of contents (Figma: Portfolio 2027, node 478:40109).
// Sticky in the left column; the section being read is dark, the rest light grey.
// The items slide up one after another once the visitor starts scrolling the page
// (and not before the modal's morph has revealed it).
const slideEase = [0.22, 1, 0.36, 1] as const;

export default function PageToc({ items }: { items: TocItem[] }) {
    const [active, setActive] = useState(items[0]?.id);
    const [shown, setShown] = useState(false);
    // Reduced motion: the items are simply there
    const reduceMotion = useReducedMotion();
    // Hidden until the modal has revealed the page (when it arrives that way) and the page
    // itself scrolls down. Only real page scrolling counts: wheel events while the modal is
    // still up (e.g. filling its scroll ring) don't. Already scrolled (a reload part way down)
    // shows at once.
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) setShown(true);
        };
        const stopWaiting = whenPageRevealed(() => {
            onScroll();
            window.addEventListener("scroll", onScroll, { passive: true });
        });
        return () => {
            stopWaiting();
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    useEffect(() => {
        // The current section is the last one whose top has passed 30% of the window
        const update = () => {
            const line = window.innerHeight * 0.3;
            let current = items[0]?.id;
            for (const { id } of items) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= line) current = id;
            }
            // At the very bottom, the last section counts as read even if it is short
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
                current = items[items.length - 1]?.id;
            }
            setActive(current);
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [items]);

    return (
        <nav aria-label="On this page">
            <ul className="flex flex-col gap-2">
                {items.map(({ id, label }, i) => (
                    <motion.li
                        key={id}
                        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                        animate={shown ? { opacity: 1, y: 0 } : undefined}
                        transition={{ duration: 0.6, ease: slideEase, delay: i * 0.06 }}
                        // Not clickable while still hidden
                        className={shown || reduceMotion ? "" : "pointer-events-none"}
                    >
                        <a
                            href={`#${id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById(id);
                                if (!el) return;
                                // The first section goes back to the very top, the rest sit a little below it
                                const top = id === items[0].id ? 0 : el.getBoundingClientRect().top + window.scrollY - 120;
                                window.scrollTo({ top, behavior: "smooth" });
                                history.replaceState(null, "", `#${id}`);
                            }}
                            aria-current={active === id ? "location" : undefined}
                            className={`text-sm leading-loose transition-colors hover:text-[var(--colour-bodytext)] ${
                                active === id ? "text-[var(--colour-bodytext)]" : "text-[var(--colour-bodytext-light)]"
                            }`}
                        >
                            {label}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </nav>
    );
}
