"use client"

interface Props {
  variant: string;
  link: string;
  text: string;
  textSize: string;
  target: string;
}

export default function MyButton(props: Props) {
  if (props.variant == "blue-button-full-width") {
    return (
      <a href={props.link} target={props.target} className={`inline-block w-full text-center bg-[var(--main-colour)] hover:bg-[var(--main-darkercolour)] transition-colors rounded-full text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "blue-button") {
    return (
      <a href={props.link} target={props.target} className={`text-center bg-[var(--main-colour)] hover:bg-[var(--main-darkercolour)] rounded-full text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "blue-button-outline") {
    return (
      <a href={props.link} target={props.target} className={`text-center shadow-[inset_0_0_0_1px_var(--main-colour)] hover:bg-[var(--main-colour)] rounded-full text-[var(--main-colour)] hover:text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "blue-button-outline-full-width") {
    return (
      <a href={props.link} target={props.target} className={`inline-block w-full text-center shadow-[inset_0_0_0_1px_var(--main-colour)] hover:bg-[var(--main-colour)] rounded-full text-[var(--main-colour)] hover:text-white font-medium py-[10px] px-4 ${props.textSize ?? "text-xs"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "hyperlink") {
    return (
      <a href={props.link} target={props.target} className={`bg-transparent rounded-full text-[var(--main-colour)] leading-loose hover:underline font-medium p-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "grey-hyperlink") {
    return (
      <a href={props.link} target={props.target} className={`bg-transparent rounded-full text-[var(--colour-bodytext-3)] leading-loose hover:text-[var(--main-colour)] hover:underline font-medium flex items-center p-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </a>
    );
  } else if (props.variant == "grey-hyperlink-active") {
    return (
      <p className={`bg-transparent rounded-full text-[var(--colour-bodytext)] leading loose flex items-center font-medium p-0 ${props.textSize ?? "text-sm"}`}>
        {props.text}
      </p>
    );
  }
}