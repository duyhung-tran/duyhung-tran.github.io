"use client"

import Image from "next/image";
import MyButton from "./my-button";

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

export default function ProjectThumbnail2(props: Props) {
    if (props.isLink == "image-link") {
        return (
            <div className="h-full flex flex-col group">
                <div>
                    <p className="text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--main-colour)] mb-4 leading-loose">
                        {props.name}
                    </p>
                </div>
                <div className="">
                    <p className="text-sm text-[var(--colour-bodytext)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--colour-bodytext)] leading-loose">
                        {props.desc}
                    </p>
                </div>
                <div className="mb-7"></div>
                <a className="relative block overflow-hidden group mt-auto bg-[var(--container-bg)] rounded-3xl shadow-[0px_0px_15px_rgba(0,0,0,0.01)] 2xl:shadow-[0px_0px_35px_rgba(0,0,0,0.01)]" href={props.link} target={props.target}>
                    <Image src={`${props.imageSrc}`} alt={props.name} width={1640} height={1228} className="object-cover"/>
                    <div className="absolute inset-x-0 bottom-0 h-[30%] flex items-center justify-center
                                    translate-y-full opacity-0
                                    transition-all duration-300 ease-out
                                    group-hover:translate-y-0 group-hover:opacity-100">
                        <MyButton link={props.link} text={`Open ${props.name}`} textSize="text-sm" target={props.target} variant="blue-button"/>
                    </div>
                </a>

            </div>
        );
    }
    else if (props.isLink == "video-link") {
        return (
            <div className="h-auto group">
                <p className="text-sm text-[var(--colour-bodytext-3)] md:text-[var(--colour-bodytext-4)] mb-4 leading-loose md:group-hover:text-[var(--main-colour)]">
                    {props.name}
                </p>
                <p className="text-sm text-[var(--colour-bodytext)] md:text-[var(--colour-bodytext-4)] md:group-hover:text-[var(--colour-bodytext)] leading-loose">
                    {props.desc}
                </p>
                <div className="mb-7"></div>
                <a className="relative block overflow-hidden group mt-auto bg-[var(--container-bg)] rounded-3xl shadow-[0px_0px_15px_rgba(0,0,0,0.01)] 2xl:shadow-[0px_0px_35px_rgba(0,0,0,0.01)]" href={props.link} target={props.target}>
                    <video className={`w-full h-full object-cover !bg-transparent block`} style={{ clipPath: "inset(-1px -1px)" }} autoPlay muted loop playsInline poster={`/${props.imageSrcPoster}`}>
                        <source src={`${props.imageSrc}`} type="video/mp4" />
                    </video>

                    <div className="absolute inset-x-0 bottom-0 h-[30%] flex items-center justify-center
                                    translate-y-full opacity-0
                                    transition-all duration-300 ease-out
                                    group-hover:translate-y-0 group-hover:opacity-100">
                        <MyButton link={props.link} text={`Open ${props.name}`} textSize="text-sm" target={props.target} variant="blue-button"/>
                    </div>
                </a>
            </div>
        );
    }
}