"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";

type Props = {
    name: string;
    desc: string;
    link: string;
    target: string;
    // Load the image straight away instead of lazily: set it on tiles near the top of a page
    eager?: boolean;
    // default: media fills a 4:3 tile (square on mobile)
    // square: square tile with the image or video at 65% width, centred
    variant?: "default" | "square";
} & (
    // Image tile
    | { imageSrc: string; videoSrc?: never; videoSrcSafari?: never; imageSrcPoster?: never }
    // Video tile: a looping video fills the tile, no image needed.
    // For a transparent background, pass a WebM (VP9 with alpha) as videoSrc
    // and an HEVC-with-alpha .mov as videoSrcSafari: Safari only keeps
    // transparency in HEVC, and other browsers only in WebM.
    // imageSrcPoster is an optional still frame shown while the video loads.
    | { videoSrc: string; videoSrcSafari?: string; imageSrcPoster?: string; imageSrc?: never }
);

export default function ProjectThumbnail(props: Props) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    const isSafari = /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(navigator.userAgent);
    const square = props.variant === "square";

    return (
        <div className="h-full flex flex-col group">
            <a
                className={`relative ${square ? "aspect-square pb-[14%]" : "aspect-square lg:aspect-[4/3]"} flex justify-center items-center overflow-hidden block group mt-auto bg-[var(--container-bg)]`}
                href={props.link}
                target={props.target}
            >
                {props.videoSrc !== undefined ? (
                    <video
                        src={(isSafari && props.videoSrcSafari) || props.videoSrc}
                        poster={props.imageSrcPoster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-label={props.name}
                        className={square ? "w-[65%] h-auto" : "absolute inset-0 w-full h-full object-cover"}
                    />
                ) : (
                    <Image
                        src={props.imageSrc}
                        loading={props.eager ? "eager" : "lazy"}
                        alt={props.name}
                        width={1640}
                        height={1228}
                        className={square ? "w-[65%] h-auto object-contain" : "object-contain w-auto h-auto"}
                    />
                )}

                {square && (
                    // top-9 / right-9 matches the p-9 inset of the name and desc
                    <SquareArrowOutUpRight
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="absolute top-7 right-7 size-5 text-[var(--colour-bodytext-light)] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                    />
                )}

                <div className={`absolute inset-0 flex flex-col justify-end p-9 ${square ? "" : "opacity-100 lg:opacity-0 group-hover:opacity-100"}`}>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">
                        {props.name}
                    </p>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose">
                        {props.desc}
                    </p>
                </div>
            </a>
        </div>
    );
}