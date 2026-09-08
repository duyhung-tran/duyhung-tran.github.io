"use client"

import Image from "next/image";
import MyButton from "./my-button";
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
                    className="relative h-[400px] flex justify-center items-center overflow-hidden block group mt-auto bg-[var(--container-bg)]"
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

                    <div className="absolute inset-0 flex flex-col justify-end p-9 opacity-0 group-hover:opacity-100">
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


// "use client"

// import Image from "next/image";
// import MyButton from "./my-button";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// interface Props {
//     name: string;
//     desc: string;
//     imageSrc: string;
//     imageSrcDark: string;
//     imageSrcPoster: string;
//     imageSrcPosterDark: string;
//     link: string;
//     isLink: string;
//     target: string;
//     type: string;
// }

// export default function ProjectThumbnailNew(props: Props) {
//     const { theme } = useTheme();
//     const [mounted, setMounted] = useState(false);
//     const [isHovering, setIsHovering] = useState(false);
//     const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         setMounted(true);
//     }, []);
//     if (!mounted) {
//         return null;
//     }

//     if (props.isLink == "image-link") {
//         return (
//             <div className="h-full flex flex-col group">
//                 <a
//                     className="relative h-[400px] flex justify-center items-center overflow-hidden block group mt-auto bg-[var(--container-bg)] cursor-none"
//                     href={props.link}
//                     target={props.target}
//                     onMouseEnter={() => setIsHovering(true)}
//                     onMouseLeave={() => setIsHovering(false)}
//                     onMouseMove={(e) => {
//                         const rect = e.currentTarget.getBoundingClientRect();
//                         setCursorPos({
//                             x: e.clientX - rect.left,
//                             y: e.clientY - rect.top,
//                         });
//                     }}
//                 >
//                     {theme === "dark" ? (
//                         <Image
//                             src={props.imageSrcDark}
//                             alt={props.name}
//                             width={1640}
//                             height={1228}
//                             className="object-contain max-h-[60%] max-w-[60%] w-auto h-auto"
//                         />
//                     ) : (
//                         <Image
//                             src={props.imageSrc}
//                             alt={props.name}
//                             width={1640}
//                             height={1228}
//                             className="object-contain max-h-[60%] max-w-[60%] w-auto h-auto"
//                         />
//                     )}

//                     <div className="absolute inset-0 flex flex-col justify-end p-9 opacity-0 group-hover:opacity-100">
//                         <p className="text-sm text-[var(--colour-bodytext)] leading-loose">
//                             {props.name}
//                         </p>
//                         <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">
//                             {props.desc}
//                         </p>
//                     </div>

//                     {isHovering && (
//                         <div
//                             className="absolute pointer-events-none bg-[var(--container-bg-reversed)] text-white text-xs px-3 py-1.5 z-10"
//                             style={{
//                                 left: cursorPos.x,
//                                 top: cursorPos.y,
//                                 transform: "translate(-50%, -50%)",
//                             }}
//                         >
//                             View
//                         </div>
//                     )}
//                 </a>
//             </div>
//         );
//     }
// }