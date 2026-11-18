"use client"

import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";
import { videoAspect } from "@/lib/video-sizes";

// A looping, muted video that only downloads once it comes near the screen, and pauses
// while it's off screen. Autoplaying <video>s otherwise all download in full as soon as
// the page loads, however far down they are. `eager` loads it straight away (for videos
// at the top of a page).
type Props = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> & {
    src: string;
    eager?: boolean;
};

// How far outside the screen a video starts loading
const NEAR = "400px 0px";

export default function LazyVideo({ src, eager = false, autoPlay = true, style, ...props }: Props) {
    const ref = useRef<HTMLVideoElement>(null);
    const [load, setLoad] = useState(eager);

    useEffect(() => {
        const video = ref.current;
        if (!video || typeof IntersectionObserver === "undefined") {
            setLoad(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoad(true);
                    if (autoPlay && video.paused) video.play().catch(() => {});
                } else if (!video.paused) {
                    video.pause();
                }
            },
            { rootMargin: NEAR },
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, [autoPlay]);

    return (
        <video
            ref={ref}
            src={load ? src : undefined}
            preload={load ? "auto" : "none"}
            autoPlay={autoPlay}
            muted
            loop
            playsInline
            // Its final shape from the start, so nothing jumps when it loads
            style={{ aspectRatio: videoAspect(src), ...style }}
            {...props}
        />
    );
}
