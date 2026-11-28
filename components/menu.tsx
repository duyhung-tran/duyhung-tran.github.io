"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import { useMrFork } from "./mr-fork/provider";
import { Menu as MenuIcon, /* Utensils, */ X /* , SquareArrowOutUpRight */ } from "lucide-react";
import { setAnimations, useAnimationsOn } from "@/lib/animation-setting";

export default function Menu() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const animationsOn = useAnimationsOn();
    // const mrFork = useMrFork();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenu(false);
            }
        }

        if (openMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu]);

    return (
        <div className="relative z-3" ref={menuRef}>
            {/* Same icon button style as the Mr. Fork panel's collapse button */}
            <button
                onClick={() => setOpenMenu(!openMenu)}
                className="size-8 flex items-center justify-center text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)] cursor-pointer transition"
                aria-label={openMenu ? "Close menu" : "Open menu"}
                aria-expanded={openMenu}
            >
                {openMenu ? <X className="size-5" strokeWidth={1.5} /> : <MenuIcon className="size-5" strokeWidth={1.5} />}
            </button>

            {/* Next.js links: pages switch in place (prefetched) instead of reloading the whole site */}
            {openMenu && (
                <div className="absolute right-0 mt-0 bg-[var(--container-bg)] border border-[var(--nav-border)] p-1 overflow-hidden">
                    <Link href="/" onClick={() => setOpenMenu(false)} className="mb-1 block w-70 px-4 py-5 text-xs text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)]">
                        Home
                    </Link>
                    <Link href="/about" onClick={() => setOpenMenu(false)} className="mb-1 block w-70 px-4 py-5 text-xs text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)]">
                        About
                    </Link>
                    <Link href="/archive" onClick={() => setOpenMenu(false)} className="mb-1 block w-70 px-4 py-5 text-xs text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)]">
                        Archive
                    </Link>
                    <div className="mb-1"></div>
                    {/* <a href="/testimonials" className="mb-1 block w-70 px-4 py-5 text-xs text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)]">
                        Testimonials
                    </a>
                    <div className="mb-1"></div> */}
                    {/* <button
                        type="button"
                        onClick={() => {
                            mrFork.setOpen(!mrFork.open);
                            setOpenMenu(false);
                        }}
                        className="hidden lg:flex w-full items-center justify-between p-4 text-xs text-left text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)] hover:cursor-pointer"
                    >
                        {mrFork.open ? "Dismiss Mr. Fork" : "Summon Mr. Fork"}
                        <Utensils
                            aria-hidden
                            className="size-3.5"
                            strokeWidth={1.5}
                        />
                    </button>
                    <div className="mb-1"></div> */}
                    {/* Contacts button, hidden for now
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center gap-3 p-4 border-1 text-xs text-[var(--colour-bodytext)] hover:bg-[var(--container-bg-reversed)] hover:text-[var(--colour-bodytext-reversed)]"
                    >
                        <span>Contacts</span>
                        <SquareArrowOutUpRight className="size-3.5" aria-hidden="true"/>
                    </a>
                    */}
                    {/* Settings, apart from the navigation above */}
                    <hr className="my-1 border-[var(--nav-border)]" />
                    {/* Turns every animation on the site on or off (lib/animation-setting.ts); remembered in this browser */}
                    <button
                        type="button"
                        role="switch"
                        aria-checked={animationsOn}
                        aria-describedby="animations-hint"
                        onClick={() => setAnimations(!animationsOn)}
                        className="flex w-70 items-center justify-between gap-3 px-4 py-2.5 text-xs text-left text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)] cursor-pointer"
                    >
                        {/* The label, with a small hint under it on when to switch it off */}
                        <span className="flex flex-col gap-1">
                            Transition animations
                            {/* A bit darker than the light text colour, so it still reads on the hover background */}
                            <span id="animations-hint" className="text-[color-mix(in_srgb,var(--colour-bodytext)_35%,var(--colour-bodytext-light))]">
                                Turn off if things feel laggy
                            </span>
                        </span>
                        <span
                            aria-hidden="true"
                            className={`relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors ${
                                animationsOn ? "bg-[var(--container-bg-reversed)]" : "bg-[var(--colour-bodytext-light)]"
                            }`}
                        >
                            <span
                                className={`absolute size-3 rounded-full bg-[var(--container-bg)] shadow-sm transition-transform ${
                                    animationsOn ? "translate-x-3.5" : "translate-x-0.5"
                                }`}
                            />
                        </span>
                    </button>
                </div>
            )}
        </div>
    )
}