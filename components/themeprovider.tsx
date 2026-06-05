'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }: any) {
  const [mounted, setMounted] = useState(false);

  // Wait until mounted on client before rendering children
  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{/* nothing until theme is loaded */}</>;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

