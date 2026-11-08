import { SquareArrowOutUpRight } from "lucide-react";
import Hyperlink from "@/components/hyperlink";

const LINKS = [
    { text: "Email", link: "mailto:d.hungtran12@gmail.com" },
    { text: "LinkedIn", link: "https://www.linkedin.com/in/hung-tran-profile/" },
    { text: "Resume", link: "https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" },
];

export default function Footer() {
    return (
        <footer className="w-full px-10 pt-20 pb-10 flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">©2026 Hung Tran</p>
            <div className="flex gap-10">
                {LINKS.map(l => (
                    <Hyperlink key={l.text} variant="icon" icon={SquareArrowOutUpRight} text={l.text} link={l.link} target="_blank" />
                ))}
            </div>
        </footer>
    );
}
