"use client";

import { ReactNode, useRef, useEffect, useState } from "react";

export default function SlideUpScroll({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Detect first user scroll
  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(true);
      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!hasScrolled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // reveal once
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasScrolled]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-400 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0 blur-0"
            : "opacity-0 translate-y-4 blur-sm"
        }
      `}
    >
      {children}
    </div>
  );
}
