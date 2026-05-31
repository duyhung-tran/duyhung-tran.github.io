"use client"

interface Props {
  text: string;
  variant: string;
}

export default function Heading(props: Props) {
  if (props.variant == "white") {
    return (
      <p className="font-semibold text-sm text-white mb-6 leading-loose bg-transparent">
        {props.text}
      </p>
    );
  } else if (props.variant == "black") {
    return (
      <p className="font-semibold text-sm text-[var(--colour-pure)] mb-6 leading-loose bg-transparent">
        {props.text}
      </p>
    );
  } 
}  