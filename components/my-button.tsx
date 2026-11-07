import type { LucideIcon } from "lucide-react";

interface Props {
  variant: "primary" | "secondary";
  link: string;
  text: string;
  icon?: LucideIcon;
  textSize?: string;
  target?: string;
}

const styles = {
  primary:
    "border-1 border-[var(--container-bg-reversed)] bg-[var(--container-bg-reversed)] text-[var(--colour-bodytext-reversed)] hover:opacity-80",
  secondary:
    "border-1 text-[var(--colour-bodytext)] hover:bg-[var(--container-bg-reversed)] hover:text-[var(--colour-bodytext-reversed)]",
};

export default function MyButton({ variant, link, text, icon: Icon, target, textSize = "text-xs" }: Props) {
  return (
    <a
      href={link}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`flex justify-center items-center gap-3 p-3 ${styles[variant]} ${textSize}`}
    >
      <span className="whitespace-nowrap">{text}</span>
      {Icon && <Icon className="size-4 shrink-0" aria-hidden="true" />}
    </a>
  );
}
