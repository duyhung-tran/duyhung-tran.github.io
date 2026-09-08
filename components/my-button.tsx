"use client"

import { useTheme } from "next-themes";

interface Props {
  variant: string;
  link: string;
  text: string;
  textSize: string;
  target: string;
}

export default function MyButton(props: Props) {
  if (props.variant == "primary") {
    return (
      <a href={props.link} target={props.target} className={`text-center bg-[var(--container-bg-reversed)] text-[var(--colour-bodytext-reversed)] py-[10px] px-4 ${props.textSize ?? "text-xs"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "secondary-menu") {
    const isContacts = props.text.toLowerCase() === "contacts";
    return (
      <a href={props.link} target={props.target} className={`block flex justify-between items-center border-1 bg-[var(--container-bg)] text-[var(--colour-bodytext)] hover:bg-[var(--container-bg-reversed)] hover:text-[var(--colour-bodytext-reversed)] p-4 ${props.textSize ?? "text-xs"}`}>
        <span className="mr-3">{props.text}</span>
        {isContacts ? (
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
        ) : (
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
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        )}
      </a>
    );
  } else if (props.variant == "secondary") {
    return (
      <a href={props.link} target={props.target} className={`flex justify-center items-center border-1 bg-[var(--container-bg)] text-[var(--colour-bodytext)] hover:bg-[var(--container-bg-reversed)] hover:text-[var(--colour-bodytext-reversed)] p-4 ${props.textSize ?? "text-xs"}`}>
        <span>{props.text}</span>
      </a>
    );
  } else if (props.variant == "hyperlink") {
    return (
      <a href={props.link} target={props.target} className={`bg-transparent text-[var(--colour-bodytext-light)] leading-loose hover:underline hover:text-[var(--colour-bodytext)] p-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "secondary-theme") {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`flex justify-between items-center border-1 bg-[var(--container-bg)] text-[var(--colour-bodytext)] hover:bg-[var(--container-bg-reversed)] hover:text-[var(--colour-bodytext-reversed)] p-4 ${props.textSize ?? "text-xs"}`}
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
}