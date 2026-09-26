"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export type TocSection = {
  id: string;
  label: string;
};

type TableOfContentsProps = {
  sections: TocSection[];
};

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | undefined>(sections[0]?.id);
  const [dotTop, setDotTop] = useState(0);
  const observer = useRef<IntersectionObserver | null>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const visibleIds = new Set<string>();

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        });

        if (visibleIds.size > 0) {
          const firstVisible = sections.find((s) => visibleIds.has(s.id));
          if (firstVisible) setActiveId(firstVisible.id);
        }
      },
      {
        rootMargin: "0px 0px -80% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, [sections]);

  useLayoutEffect(() => {
    const updateDotPosition = () => {
      if (!activeId || !listRef.current) return;
      const activeEl = itemRefs.current[activeId];
      if (!activeEl) return;

      const listTop = listRef.current.getBoundingClientRect().top;
      const itemRect = activeEl.getBoundingClientRect();
      const itemCenter = itemRect.top - listTop + itemRect.height / 2;

      setDotTop(itemCenter);
    };

    updateDotPosition();
    window.addEventListener("resize", updateDotPosition);
    return () => window.removeEventListener("resize", updateDotPosition);
  }, [activeId, sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav aria-label="Table of contents" className="relative">
      {/* <span
        className="-translate-x-4 absolute left-0 w-1.5 h-1.5 rounded-full bg-[var(--colour-bodytext-light)] transition-[top] duration-300 ease-out"
        style={{ top: dotTop, transform: "translate(-50%, -50%)" }}
        aria-hidden="true"
      /> */}

      <ul ref={listRef} className="flex flex-col gap-y-4">
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li
              key={section.id}
              ref={(el) => {
                itemRefs.current[section.id] = el;
              }}
            >
              <a
                href={`#${section.id}`}
                onClick={(e) => handleClick(e, section.id)}
                className={`w-full block text-xs hover:text-[var(--colour-bodytext)] transition-all ${
                  isActive
                    ? "text-[var(--colour-bodytext)]"
                    : "text-[var(--colour-bodytext-light)]"
                }`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
