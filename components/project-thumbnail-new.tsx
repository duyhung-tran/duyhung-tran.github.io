"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
    name: string;
    desc: string;
    link: string;
    target: string;
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

    return (
        <div className="h-full flex flex-col group">
            <a
                className="relative aspect-square lg:aspect-[4/3] flex justify-center items-center overflow-hidden block group mt-auto bg-[var(--container-bg)]"
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
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ) : (
                    <Image
                        src={props.imageSrc}
                        alt={props.name}
                        width={1640}
                        height={1228}
                        className="object-contain w-auto h-auto"
                    />
                )}

                <div className="absolute inset-0 flex flex-col justify-end p-9 opacity-100 lg:opacity-0 group-hover:opacity-100">
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