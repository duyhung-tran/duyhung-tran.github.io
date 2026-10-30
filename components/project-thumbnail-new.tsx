"use client"

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
    name: string;
    desc: string;
    imageSrc: string;
    imageSrcDark: string;
    imageSrcPoster: string;
    imageSrcPosterDark: string;
    // Optional looping video that fills the tile instead of the image.
    // For a transparent background, pass a WebM (VP9 with alpha) as videoSrc
    // and an HEVC-with-alpha .mov as videoSrcSafari: Safari only keeps
    // transparency in HEVC, and other browsers only in WebM.
    // imageSrcPoster is shown while the video loads.
    videoSrc?: string;
    videoSrcSafari?: string;
    link: string;
    isLink: string;
    target: string;
    type: string;
}

export default function ProjectThumbnailNew(props: Props) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    const isSafari = /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(navigator.userAgent);
    const video = (isSafari && props.videoSrcSafari) || props.videoSrc;

    if (props.isLink == "image-link") {
        return (
            <div className="h-full flex flex-col group">
                <a
                    className="relative aspect-square lg:aspect-[4/3] flex justify-center items-center overflow-hidden block group mt-auto bg-[var(--container-bg)]"
                    href={props.link}
                    target={props.target}
                >
                    {video ? (
                        <video
                            src={video}
                            poster={props.imageSrcPoster || undefined}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            aria-label={props.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    ) : theme === "dark" ? (
                        <Image
                            src={props.imageSrcDark}
                            alt={props.name}
                            width={1640}
                            height={1228}
                            className="object-contain max-h-[65%] max-w-[65%] w-auto h-auto"
                        />
                    ) : (
                        <Image
                            src={props.imageSrc}
                            alt={props.name}
                            width={1640}
                            height={1228}
                            className="object-contain max-h-[65%] max-w-[65%] w-auto h-auto"
                        />
                    )}

                    <div className="absolute inset-0 flex flex-col justify-end p-9 opacity-100 lg:opacity-0 group-hover:opacity-100">
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">
                            {props.name}
                        </p>
                        <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">
                            {props.desc}
                        </p>
                    </div>
                </a>
            </div>
        );
    }
}