import type { LucideIcon } from "lucide-react";

type Props = {
  link: string;
  text: string;
  target?: string;
  textSize?: string;
} & (
  | { variant?: "default"; icon?: never }
  | { variant: "icon"; icon: LucideIcon }
);

// Inline text link: underlined on mobile, muted until hover on desktop; light grey highlight on hover.
export default function Hyperlink({ link, text, target, textSize = "text-sm", ...rest }: Props) {
  const Icon = rest.variant === "icon" ? rest.icon : null;

  return (
    <a
      href={link}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1 justify-self-start self-center text-[var(--colour-bodytext)] underline lg:no-underline lg:text-[var(--colour-bodytext-light)] leading-normal rounded-sm -mx-0.5 px-0.5 hover:text-[var(--colour-bodytext)] hover:bg-[var(--link-hover-bg)] ${textSize}`}
    >
      {text}
      {Icon && <Icon className="size-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />}
    </a>
  );
}
