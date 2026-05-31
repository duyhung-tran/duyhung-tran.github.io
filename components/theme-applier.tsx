'use client';

import { useEffect } from "react";

const themes = ["", "dark", "pink", "green", "orange"];

export default function ThemeApplier() {
  useEffect(() => {
    const saved = localStorage.getItem("theme-class");
    if (saved && themes.includes(saved)) {
      const root = document.documentElement;

      // remove all other theme classes first
      themes.forEach(t => {
        if (t) root.classList.remove(t);
      });

      // apply saved theme class
      if (saved) root.classList.add(saved);
    }
  }, []);

  return null; // nothing visible
}