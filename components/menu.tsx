"use client"

import { useState, useEffect } from "react";

export default function DotsMenu() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="md:hidden relative">
            <button
                onClick={() => setOpenMenu(!openMenu)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--nav-border)] transition text-[var(--main-colour)] text-2xl"
                aria-label="Open menu"
            >
                &#8942;
            </button>

            {openMenu && (
                <div className="absolute right-0 mt-0 bg-[var(--background)] border border-[var(--nav-border)] rounded-2xl overflow-hidden">
                    <a href="/about" className="block w-50 px-4 py-4 text-sm text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)]">
                        About me
                    </a>
                    <a href="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" className="w-full block px-4 py-4 text-sm text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)]">
                        Resume
                    </a>
                </div>
            )}
        </div>
    )
}
