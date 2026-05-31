"use client"

import Image from "next/image";
import { caveat } from "@/font";

interface Props {
    imageSrc: string;
    desc: string;
    alt: string;
    angle: number
    textSize?: string;
}

export default function Polaroid(props: Props) {
    return (
        <div className="w-fit h-fit flex bg-gray-100 border-1 border-gray-300 px-2 md:px-3 pt-2 md:pt-3 pb-5 shadow-lg rounded-2xl flex-col items-center origin-center" style={{ transform: `rotate(${props.angle}deg)` }}>
            <Image src={`/works/${props.imageSrc} alt={props.alt} width={1920} height={1080} className="object-cover rounded-xs" style={{ filter: 'contrast(90%)' }}/>
            <div className="w-full border-t border-gray-300 mt-3"></div>

            <div className="w-full flex justify-end">
                <p className={`${caveat.className} text-3xl text-[var(--colour-bodytext)] leading-loose -rotate-4 tracking-tight ${props.textSize ?? "text-xs"}`}>
                    {props.desc}
                </p>
            </div>
            
        </div>
    );
}