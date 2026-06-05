'use client';

import { Moon, Sun } from 'lucide-react';
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type AnimationVariant =
  | 'circle'
  | 'circle-blur'
  | 'gif'
  | 'polygon'
  | 'blur'
  |  'none';

type StartPosition =
  | 'center'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

const today = new Date().toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export interface ThemeToggleButtonProps {
  theme?: 'light' | 'dark';
  showLabel?: boolean;
  variant?: AnimationVariant;
  start?: StartPosition;
  url?: string; // for gif
  className?: string;
  onClick?: () => void;
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => void;
};

// --- Helper hook ---
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

// --- MAIN COMPONENT ---
export const ThemeToggleButton = ({
  theme = 'light',
  showLabel = false,
  variant = 'circle',
  start = 'center',
  url,
  className,
  onClick,
}: ThemeToggleButtonProps) => {
  
  const { startTransition } = useThemeTransition();

  const handleClick = useCallback(() => {
    const styleId = `theme-transition-${Date.now()}`;
    const style = document.createElement('style');
    style.id = styleId;

    let css = '';

    // start positions
    const positions = {
      center: 'center',
      'top-left': 'top left',
      'top-right': 'top right',
      'bottom-left': 'bottom left',
      'bottom-right': 'bottom right',
    };

    const cx = start === 'center' ? '50' : start.includes('left') ? '0' : '100';
    const cy = start === 'center' ? '50' : start.includes('top') ? '0' : '100';

    if (variant === 'blur') {
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: none;
          }
          ::view-transition-new(root) {
            opacity: 1;
            animation: blur-fade-in 0.6s ease-out forwards;
          }
          @keyframes blur-fade-in {
            from { opacity: 0.3; } 
            to {opacity: 1; }
          }
        }
      `;
    }

    if (variant === 'none') {
    }

    if (variant === 'circle') {
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { animation: none; }
          ::view-transition-new(root) {
            animation: circle-expand 0.4s ease-out;
            transform-origin: ${positions[start]};
          }
          @keyframes circle-expand {
            from { clip-path: circle(0% at ${cx}% ${cy}%); }
            to { clip-path: circle(150% at ${cx}% ${cy}%); }
          }
        }
      `;
    }

    if (variant === 'circle-blur') {
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { animation: none; }
          ::view-transition-new(root) {
            animation: circle-blur-expand 0.5s ease-out;
            transform-origin: ${positions[start]};
            filter: blur(0);
          }
          @keyframes circle-blur-expand {
            from {
              clip-path: circle(0% at ${cx}% ${cy}%);
              filter: blur(4px);
            }
            to {
              clip-path: circle(150% at ${cx}% ${cy}%);
              filter: blur(0);
            }
          }
        }
      `;
    }

    if (variant === 'gif' && url) {
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) {
            animation: fade-out 0.4s ease-out;
          }
          ::view-transition-new(root) {
            animation: gif-reveal 2.5s cubic-bezier(0.4, 0, 0.2, 1);
            mask-image: url('${url}');
            mask-size: 0%;
            mask-repeat: no-repeat;
            mask-position: center;
          }
          @keyframes fade-out {
            to { opacity: 0; }
          }
          @keyframes gif-reveal {
            0% { mask-size: 0%; }
            20% { mask-size: 35%; }
            60% { mask-size: 35%; }
            100% { mask-size: 300%; }
          }
        }
      `;
    }

    if (variant === 'polygon') {
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { animation: none; }
          ::view-transition-new(root) {
            animation: ${theme === 'light' ? 'wipe-in-dark' : 'wipe-in-light'} 0.4s ease-out;
          }
          @keyframes wipe-in-dark {
            from { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }
            to { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
          }
          @keyframes wipe-in-light {
            from { clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%); }
            to { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
          }
        }
      `;
    }

    // inject CSS
    if (css) {
      style.textContent = css;
      document.head.appendChild(style);

      // auto cleanup
      setTimeout(() => {
        document.getElementById(styleId)?.remove();
      }, 3000);
    }

    // IMPORTANT 🔥 — actually start the view transition
    startTransition(() => {
      onClick?.();
    });
  }, [variant, start, url, theme, onClick, startTransition]);

  return (
    <Button
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--main-colour)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
      size="icon"
      variant="outline"
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        padding: 0,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        cursor: 'pointer',
        // borderColor: 'var(--main-colour)',
      }}
      onClick={handleClick}
      className={cn('relative overflow-hidden transition-all', showLabel && className)}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? "☀️" : "🌙"}
      {showLabel && (
        <span className="text-sm">
          {theme === 'light'
            ? `Light`
            : `Dark`}
        </span>
      )}
    </Button>
  );

};