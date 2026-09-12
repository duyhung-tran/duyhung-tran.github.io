// components/theme-toggle.tsx
"use client";

import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Switch
      checked={isDark}
      onChange={(checked) => setTheme(checked ? "dark" : "light")}
      className={`${isDark ? "bg-gray-700" : "bg-gray-300"}
        relative inline-flex h-7 w-12 items-center rounded-full transition-colors`}
    >
      <span
        className={`${isDark ? "translate-x-6" : "translate-x-1"}
          inline-block h-5 w-5 transform rounded-full bg-white transition-transform`}
      />
    </Switch>
  );
}