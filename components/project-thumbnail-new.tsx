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

    if (props.isLink == "image-link") {
        return (
            <div className="h-full flex flex-col group">
                <a
                    className="relative h-[350px] lg:h-[400px] flex justify-center items-center overflow-hidden block group mt-auto bg-[var(--container-bg)]"
                    href={props.link}
                    target={props.target}
                >
                    {theme === "dark" ? (
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