"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import MyButton from "./my-button";
import { useMrFork } from "./mr-fork/provider";
import { Utensils } from "lucide-react";

export default function Menu() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const mrFork = useMrFork();

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
            <button
                onClick={() => setOpenMenu(!openMenu)}
                className="w-8 h-8 flex flex-col items-center justify-center gap-1.5 hover:bg-[var(--nav-border)] hover:cursor-pointer transition"
                aria-label="Open menu"
                aria-expanded={openMenu}
            >
                <span
                    className={`block h-[1px] w-5 bg-[var(--colour-bodytext)] transition-transform duration-300 ${
                        openMenu ? "rotate-45 translate-y-[3.5px]" : ""
                    }`}
                />
                {/* <span
                    className={`block h-[1px] w-5 bg-[var(--colour-bodytext)] transition-opacity duration-300 ${
                        openMenu ? "opacity-0" : "opacity-100"
                    }`}
                /> */}
                <span
                    className={`block h-[1px] w-5 bg-[var(--colour-bodytext)] transition-transform duration-300 ${
                        openMenu ? "-rotate-45 -translate-y-[3.5px]" : ""
                    }`}
                />
            </button>

            {openMenu && (
                <div className="absolute right-0 mt-0 bg-[var(--container-bg)] border border-[var(--nav-border)] p-1 overflow-hidden">
                    <a href="/" className="mb-1 block w-70 p-4 text-xs text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)]">
                        Home
                    </a>
                    <a href="/about" className="mb-1 block w-70 p-4 text-xs text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)]">
                        About
                    </a>
                    <div className="mb-1"></div>
                    <MyButton variant="secondary-theme" text="Dark mode" link="" target="" textSize="text-xs" onClick={() => setOpenMenu(false)}/>
                    <div className="mb-1"></div>
                    <button
                        type="button"
                        onClick={() => {
                            mrFork.setOpen(!mrFork.open);
                            setOpenMenu(false);
                        }}
                        className="flex w-full items-center justify-between p-4 text-xs text-left text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)] hover:cursor-pointer border-1"
                    >
                        {mrFork.open ? "Dismiss Mr. Fork" : "Summon Mr. Fork"}
                        <Utensils
                            aria-hidden
                            className="size-3.5 text-[var(--colour-bodytext)]"
                            strokeWidth={1.5}
                        />
                        {/* <Image src="/mrfork/fork.svg" alt="" width={24} height={24} className="size-4" /> */}
                    </button>
                    {/* <MyButton variant="secondary-menu" text="Contacts" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" textSize="text-xs"/> */}
                </div>
            )}
        </div>
    )
}