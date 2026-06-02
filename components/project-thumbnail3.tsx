"use client"

import Image from "next/image";

interface Props {
    name: string;
    desc: string;
    imageSrc: string;
    imageSrcDark: string;
    imageSrcPoster: string;
    imageSrcPosterDark: string;
    link: string;
    target: string;
    isLink: string;
}

export default function ProjectThumbnail3(props: Props) {
    if (props.isLink == "image-link") {
        return (
            <div className="overflow-hidden flex flex-col group">
                <div>
                    <p className="text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--main-colour)] mb-5 leading-loose">
                        {props.name}
                    </p>
                </div>
                <a className="relative block overflow-hidden group bg-[var(--container-bg)] rounded-3xl shadow-[0px_0px_20px_rgba(0,0,0,0.02)]" href={props.link} target={props.target}>
                    <Image src={`/${props.imageSrc}`} alt={props.name} width={1640} height={1228} className="object-cover"/>
                </a>
                <div className="mt-6">
                    <p className="text-sm text-[var(--colour-bodytext)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--colour-bodytext)] leading-loose">
                        {props.desc}
                    </p>
                </div>
            </div>
        );
    }
    else if (props.isLink == "video-link") {
        return (
            <div className="overflow-hidden flex flex-col group">
                <div>
                    <p className="text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--main-colour)] mb-5 leading-loose">
                        {props.name}
                    </p>
                </div>
                <a className="relative block overflow-hidden group bg-[var(--container-bg)] rounded-3xl shadow-[0px_0px_20px_rgba(0,0,0,0.02)]" href={props.link} target={props.target}>
                    <video className={`w-full h-full object-cover !bg-transparent block`} style={{ clipPath: "inset(-1px -1px)" }} autoPlay muted loop playsInline poster={`/${props.imageSrcPoster}`}>
                        <source src={`/${props.imageSrc}`} type="video/mp4" />
                    </video>
                </a>
                <div className="mt-6">
                    <p className="text-sm text-[var(--colour-bodytext)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--colour-bodytext)] leading-loose">
                        {props.desc}
                    </p>
                </div>
            </div>
        );
    }
}