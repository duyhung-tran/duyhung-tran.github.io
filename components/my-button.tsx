"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
  variant: string;
  link?: string;
  text: string;
  textSize?: string;
  target?: string;
  onClick?: () => void;
}

export default function MyButton(props: Props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";
  const isDarkModeItem = props.text.toLowerCase() === "dark mode";

  if (props.variant == "primary") {
    return (
      <a
        href={props.link}
        target={props.target}
        className={`text-center bg-[var(--container-bg-reversed)] text-[var(--colour-bodytext-reversed)] py-[10px] px-4 ${props.textSize ?? "text-xs"}`}
      >
        {props.text}
      </a>
    );
  } else if (props.variant == "secondary-menu") {
    return (
      <a
        href={props.link}
        target={props.target}
        className={`block flex justify-between items-center border-1 text-[var(--colour-bodytext)] hover:bg-[var(--container-bg-reversed)] hover:text-[var(--colour-bodytext-reversed)] p-4 ${props.textSize ?? "text-xs"}`}
      >
        <span className="mr-3">{props.text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
      </a>
    );
  } else if (props.variant == "tertiary-menu") {
    return (
      <a
        href={props.link}
        target={props.target}
        className={`block flex justify-between items-center border-1 text-[var(--colour-bodytext-reversed)] bg-[var(--container-bg-reversed)] p-3.5 ${props.textSize ?? "text-xs"}`}
      >
        <span className="mr-3">{props.text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
      </a>
    );
  } else if (props.variant == "secondary") {
    return (
      <a
        href={props.link}
        target={props.target}
        className={`flex justify-center items-center border-1 text-[var(--colour-bodytext)] hover:bg-[var(--container-bg-reversed)] hover:text-[var(--colour-bodytext-reversed)] p-3 ${props.textSize ?? "text-xs"}`}
      >
        <span>{props.text}</span>
      </a>
    );
  } else if (props.variant == "secondary-external") {
    return (
      <a
        href={props.link}
        target={props.target}
        className={`group flex justify-center items-center border-1 text-[var(--colour-bodytext)] hover:bg-[var(--container-bg-reversed)] hover:text-[var(--colour-bodytext-reversed)] p-3 ${props.textSize ?? "text-xs"}`}
      >
        <span>{props.text}</span>
        <SquareArrowOutUpRight className="ml-3 w-4 h-4 text-[var(--colour-bodytext)] group-hover:text-[var(--colour-bodytext-reversed)]" />
      </a>
    );
  } else if (props.variant == "hyperlink") {
    return (
      <a
        href={props.link}
        target={props.target}
        className={`bg-transparent text-[var(--colour-bodytext)] underline lg:no-underline lg:text-[var(--colour-bodytext-light)] leading-loose hover:underline hover:text-[var(--colour-bodytext)] p-0 ${props.textSize ?? "text-sm"}`}
      >
        {props.text}
      </a>
    );
  } else if (props.variant == "secondary-theme") {
    if (!mounted) return null;

    return (
      <button
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
        props.onClick?.();
      }}
        className={`flex w-full justify-between items-center hover:cursor-pointer bg-[var(--container-bg)] text-[var(--colour-bodytext)] hover:bg-[var(--nav-border)] p-4 ${props.textSize ?? "text-xs"}`}
      >
        <span>Dark mode</span>
        <div className="ml-2"></div>
        <span
          className={`relative inline-flex h-4 w-8 items-center rounded-full transition-colors duration-300 ${
            isDark ? "bg-[var(--main-colour)]" : "bg-[var(--nav-border)]"
          }`}
        >
          <span
            className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-300 ${
              isDark ? "translate-x-4" : "translate-x-0.5"
            }`}
          />
        </span>
      </button>
    );
  }

  return null;
}