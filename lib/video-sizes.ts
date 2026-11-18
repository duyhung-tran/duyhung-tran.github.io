// Width and height of every video on the site (read from the files with ffprobe), so a
// video's box has its final shape before the video loads and nothing below it jumps.
// Used by components/lazy-video.tsx and the project modal. Add a line when adding a video;
// one missing here still works, it just sizes itself once loaded.
const sizes: Record<string, [number, number]> = {
    "/canal/canal.mov": [1600, 896],
    "/cardio/cardio animation.mp4": [1920, 1382],
    "/cardio/cardio video.mp4": [1600, 1198],
    "/cardio/context-vid-1.mp4": [576, 1024],
    "/cardio/context-vid-2.mp4": [576, 1024],
    "/cardio/context-vid-3.mp4": [540, 960],
    "/cardio/draft.mp4": [824, 1708],
    "/cardio/sol-1.mp4": [674, 1412],
    "/cardio/sol-3.mp4": [674, 1412],
    "/cardio/sol-4.mp4": [674, 1412],
    "/cardio/swiping.mp4": [674, 1412],
    "/dragdrop/dragdrop.mov": [1600, 986],
    "/fraser-health/fh.mov": [2560, 1542],
    "/mirror/mirror.mov": [2162, 1496],
    "/organizations/organizations.mp4": [1920, 1382],
    "/peri/peri.mov": [1600, 1032],
    "/rules/geofence.mp4": [1600, 1152],
};

// CSS aspect-ratio for a video, e.g. "1600 / 1152". A box whose width and height are both
// set already (like a tile's cover video) ignores it, so it's safe to apply everywhere.
export function videoAspect(src: string): string | undefined {
    const size = sizes[src];
    return size ? `${size[0]} / ${size[1]}` : undefined;
}
