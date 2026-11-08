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

// Inline text link: body-text colour with a light dotted underline that darkens to the text colour on hover.
export default function Hyperlink({ link, text, target, textSize = "text-sm", ...rest }: Props) {
  const Icon = rest.variant === "icon" ? rest.icon : null;

  return (
    <a
      href={link}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1 justify-self-start self-center group text-[var(--colour-bodytext)] leading-normal ${textSize}`}
    >
      <span className="underline decoration-dotted decoration-[var(--colour-bodytext-light)] group-hover:decoration-[var(--colour-bodytext)] underline-offset-[3px]">{text}</span>
      {Icon && <Icon className="size-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />}
    </a>
  );
}
