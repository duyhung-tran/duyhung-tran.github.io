import type { LucideIcon } from "lucide-react";

type Props = {
  variant: "primary" | "secondary";
  text: string;
  icon?: LucideIcon;
  textSize?: string;
} & (
  // Link button: navigates to `link`
  | { link: string; target?: string; onClick?: never }
  // Action button: runs `onClick` (e.g. closing a modal) and renders a real <button>
  | { onClick: () => void; link?: never; target?: never }
);

const styles = {
  primary:
    "border-1 border-[var(--container-bg-reversed)] bg-[var(--container-bg-reversed)] text-[var(--colour-bodytext-reversed)] hover:opacity-80",
  secondary:
    // Light grey on hover, same as the link hover grey; the text keeps its colour
    "border-1 text-[var(--colour-bodytext)] hover:bg-[var(--link-hover-bg)]",
};

export default function MyButton({ variant, text, icon: Icon, textSize = "text-xs", ...rest }: Props) {
  const className = `flex justify-center items-center gap-3 p-3 ${styles[variant]} ${textSize}`;
  const content = (
    <>
      <span className="whitespace-nowrap">{text}</span>
      {Icon && <Icon className="size-4 shrink-0" aria-hidden="true" />}
    </>
  );

  if (rest.onClick) {
    return (
      <button type="button" onClick={rest.onClick} className={`${className} cursor-pointer`}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={rest.link}
      target={rest.target}
      rel={rest.target === "_blank" ? "noopener noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  );
}
