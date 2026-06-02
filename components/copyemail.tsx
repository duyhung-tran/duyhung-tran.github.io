"use client";

import { useState, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";

interface Props {
  link: string;
  text: string;
  textSize: string;
}

export default function CopyEmailButton({ link, text, textSize }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const baseEmail = text;
  const hoverText = `${baseEmail} - Copy email`;

  const displayText = copied
    ? "Copied!"
    : isHovered
    ? hoverText
    : baseEmail;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(baseEmail).then(() => {
      setCopied(true);
    });
  };

  return (
    <a
      href={link}
      className={`bg-transparent h-9 rounded-full text-[var(--main-colour)] flex items-center font-medium px-0 ${
        !copied ? "hover:underline" : ""
      } ${textSize ?? "text-sm"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {displayText}
      {!copied && isHovered && (
        <FaRegCopy className="ml-2 text-[var(--main-colour)]" />
      )}
    </a>
  );
}