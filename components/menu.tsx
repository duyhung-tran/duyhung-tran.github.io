"use client"

import { useState, useEffect, useRef } from "react";
import MyButton from "./my-button";

export default function Menu() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

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
                    {/* <a href="/testimonials" className="mb-1 block w-70 p-4 text-xs text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)]">
                        Testimonials
                    </a> */}
                    <div className="mb-1"></div>
                    <MyButton variant="secondary-theme" text="Dark mode" link="" target="" textSize="text-xs" onClick={() => setOpenMenu(false)}/>

                    {/* <a href="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" className="block w-70 p-4 text-xs text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)]">
                        Resume
                    </a> */}
                    <div className="mb-1"></div>
                    <div className="flex flex-col w-full gap-y-1">
                        <MyButton variant="secondary-menu" text="Contacts" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" textSize="text-xs"/>
                        {/* <MyButton variant="secondary-theme" text="Dark Mode" link="#" target="_blank" textSize="text-xs"/> */}
                        {/* <MyButton variant="secondary-menu" text="Resume" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" textSize="text-xs"/> */}
                    </div>
                </div>
            )}
        </div>
    )
}