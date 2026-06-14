'use client';

import { useState, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../../button';

interface ThemeOption {
  name: string;
  className: string;
}

const themes: ThemeOption[] = [
  { name: 'Blue', className: 'blue' },
  { name: 'Pink', className: 'pink' },
  { name: 'Green', className: 'green' },
  { name: 'Orange', className: 'orange' },
];

type ThemeSelectorProps = {
  className?: string;
};

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export const useThemeTransition = () => {
  const startTransition = useCallback((updateFn: () => void) => {
    const doc = document as DocumentWithViewTransition;
    if (doc.startViewTransition) {
      doc.startViewTransition(updateFn);
    } else {
      updateFn();
    }
  }, []);
  return { startTransition };
};

export const ThemeSelector = ({ className }: ThemeSelectorProps) => {
  const [activeTheme, setActiveTheme] = useState<ThemeOption>(themes[0]);
  const { startTransition } = useThemeTransition();

  useEffect(() => {
    const saved = localStorage.getItem('theme-class');
    if (saved) {
      const theme = themes.find(t => t.className === saved);
      if (theme) applyTheme(theme);
    }
  }, []);

  const applyTheme = useCallback((theme: ThemeOption) => {
    const root = document.documentElement;

    themes.forEach(t => root.classList.remove(t.className));
    root.classList.add(theme.className);

    localStorage.setItem('theme-class', theme.className);
    setActiveTheme(theme);
  }, []);

  const handleThemeClick = (theme: ThemeOption) => {
    startTransition(() => applyTheme(theme));
  };

  const colorMap: Record<string, string> = {
    Blue: '#0B8EFF',
    Pink: '#FF3AA0',
    Green: '#38BD2E',
    Orange: '#FF7A00',
  };

  return (
    <div
      className={cn(
        'group flex items-center rounded-full overflow-hidden transition-all duration-300 hover:cursor-pointer w-[44px] hover:w-[220px]',
      )}
    >
      {/* EXPANDING WRAPPER */}
      <div
        className="flex items-center transition-all duration-300 group-hover:pr-2"
        style={{
          width: 'auto',
        }}
      >
        {/* PALETTE BUTTON */}
        <Button
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--main-colour)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          size="icon"
          variant="outline"
          className="bg-[var(--background)] transition-colors duration-300 group-hover:bg-[var(--palette-hover)]"
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            padding: 0,
            minWidth: 0,
            zIndex: 10,
            cursor: 'pointer',
            // borderColor: colorMap[activeTheme.name],
            ['--palette-hover' as any]: colorMap[activeTheme.name],
          }}
          title="Select Theme"
        >
          🎨
        </Button>

        {/* OPTIONS */}
        <div className="flex items-center ml-2">
          {themes.map((theme, index) => (
            <Button
              key={theme.name}
              size="icon"
              variant="secondary"
              onClick={() => handleThemeClick(theme)}
              className="opacity-0 translate-x-[-7px] bg-transparent group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:scale-115 hover:bg-transparent hover:cursor-pointer"
              style={{
                transitionDelay: `${index * 40}ms`,
              }}
              title={theme.name}
            >
              <span
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: colorMap[theme.name],
                  display: 'block',
                  
                }}
              />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};