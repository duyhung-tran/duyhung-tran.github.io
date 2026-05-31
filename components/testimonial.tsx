"use client"
import Image from "next/image";

interface Props {
    name: string;
    job: string;
    company: string;
    text: React.ReactNode;
    imgSrc: string;
}

export default function Testimonial(props: Props) {
    return (
        <div className="flex flex-col justify-between bg-[var(--container-bg)] shadow-[0px_0px_15px_rgba(0,0,0,0.01)] px-7 py-6 rounded-3xl">
            <p className="text-sm text-[var(--colour-bodytext-2)] leading-loose">"{props.text}"</p> 
            <div className="mb-9"></div>
            <div className="flex gap-4 items-center">
                <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0">
                    <Image src={props.imgSrc} alt="" width={100} height={100} className="object-cover rounded-full"/>
                </div>
                <div>
                    <p className="text-sm font-semibold text-[var(--colour-bodytext)] leading-loose">{props.name}</p>
                    <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose">{props.job} at {props.company}.</p>
                </div>
            </div>
        </div>
    );
}