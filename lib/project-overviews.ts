// Archive projects shown as tiles on the archive page and in the project modal.
// Home page tiles link straight to their project pages instead.

export type ProjectOverview = {
    // Unique id (React key and the modal's open state)
    slug: string;
    // The tile's name and the modal title
    title: string;
    // The tile's grey text, shown grey under the modal title too
    summary: string;
    // Opened in a new tab by "View project"; leave out until there is one (the button then goes nowhere)
    link?: string;
    // Shown under the description as "Thank you to:" with one name per line
    credits?: string[];
} & (
    | { videoSrc: string; imageSrc?: never }
    | { imageSrc: string; videoSrc?: never }
);

// Placeholder href for "View project" on projects without a link yet
export const NO_LINK_YET = "#";

// In display order
export const archiveOverviews: ProjectOverview[] = [
    { slug: "elevator", title: "Make accessibility accessible", summary: "Toolkit", imageSrc: "/elevator.png", credits: ["Abbey P.", "Andrea S.", "Francesca R."] },
    { slug: "peri", title: "Smart contact lenses capture unnoticed moments", summary: "Wearables", videoSrc: "/peri.mov", link: "https://devpost.com/software/peri-lo10mw", credits: ["Brandon W.", "Celine A. S.", "Kasey L."] },
    { slug: "canal", title: "Consume long-form content with short-form tendencies", summary: "Streaming platform", videoSrc: "/canal.mov", credits: ["Jasper L.", "Irena O.", "Christina R."] },
    { slug: "mirror", title: "Navigate small photobooth space", summary: "Customer experience", videoSrc: "/mirror.mov", credits: ["Mariam", "Jenna", "Taji"] },
    { slug: "fraser-health", title: "Introduces Fraser Health's offerings and clients' credits", summary: "Client marketing", videoSrc: "/fh.mov" },
    { slug: "dragdrop", title: "Drag & drop songs between playlists", summary: "Spotify POC", videoSrc: "/dragdrop.mov", link: "https://www.figma.com/proto/xYL2PzUpTvgKlnxTzp7a5O/Portfolio-2025?page-id=375%3A2980&node-id=375-2981&viewport=743%2C390%2C0.24&t=AVR9d3tvwFyFaaeT-1&scaling=scale-down&content-scaling=fixed" },
    { slug: "cooling", title: "Bring cooling to vulnerable populations", summary: "Service design", imageSrc: "/Cool tgt.png", credits: ["Abbey P.", "Mikael G.", "Alexander K."] },
];
