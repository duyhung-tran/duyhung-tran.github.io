"use client";

import { ReactNode, useRef, useEffect, useState } from "react";

export default function SlideUpNoThres({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-400 ease-out
        ${visible
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-4 blur-sm"
        }
      `}
    >
      {children}
    </div>
  );
}
