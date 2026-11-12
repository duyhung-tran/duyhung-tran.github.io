// Projects shown as tiles on the home and archive pages, and in the project modal.

// One extra piece of media in a project's modal gallery
export type GalleryItem = {
    src: string;
    kind: "video" | "image";
    alt: string;
};

export type ProjectOverview = {
    // Unique id (React key and the modal's open state)
    slug: string;
    // The tile's name and the modal title
    title: string;
    // The tile's grey text, shown grey under the modal title too
    summary: string;
    // Where "View project" goes: external URLs open in a new tab, site paths (e.g. "/rules") in the same tab.
    // Leave out until there is one (the button then goes nowhere)
    link?: string;
    // Shown under the description as "Thank you to:" with one name per line
    credits?: string[];
    // Company / Product / Status / Focus details shown under the description,
    // matching the overview block on the project's own page
    overview?: {
        company: string;
        // Label over the company value, "Company" unless set (e.g. "Type" for a personal project)
        companyLabel?: string;
        product: string;
        // "Live" gets a green dot, anything else a blue one. Left out, the Status cell is not shown
        status?: string;
        // One line each
        focus: string[];
    };
    // A sentence or two about the project, shown under the overview
    description?: string;
    // More media after the main one, scrolled through in the modal's media column.
    // Scrolling past the last one fills a ring that opens the project page.
    gallery?: GalleryItem[];
    // The modal's second button: a link to the official documentation or a
    // prototype (opens in a new tab). Without it the modal shows only one button.
    secondary?: { label: "Documentation" | "Prototype"; link: string };
    // For projects under NDA: the primary button becomes "Contact for details" linking here
    // (opens in a new tab), and the scroll ring is left out, so the gallery just ends
    contact?: string;
    // Media fills its half of the modal edge to edge instead of sitting inset
    coverMedia?: boolean;
} & (
    | { videoSrc: string; imageSrc?: never }
    | { imageSrc: string; videoSrc?: never }
);

// Placeholder href for "View project" on projects without a link yet
export const NO_LINK_YET = "#";

// Where "Contact for details" goes (the resume, which has contact info)
export const CONTACT_LINK = "https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing";

// In display order
export const archiveOverviews: ProjectOverview[] = [
    { slug: "elevator", title: "Make accessibility accessible", summary: "Toolkit", imageSrc: "/elevator/elevator.png", credits: ["Abbey P.", "Andrea S.", "Francesca R."] },
    { slug: "peri", title: "Smart contact lenses capture unnoticed moments", summary: "Wearables", videoSrc: "/peri/peri.mov", link: "https://devpost.com/software/peri-lo10mw", credits: ["Brandon W.", "Celine A. S.", "Kasey L."] },
    { slug: "canal", title: "Consume long-form content with short-form tendencies", summary: "Streaming platform", videoSrc: "/canal/canal.mov", credits: ["Jasper L.", "Irena O.", "Christina R."] },
    { slug: "mirror", title: "Navigate small photobooth space", summary: "Customer experience", videoSrc: "/mirror/mirror.mov", credits: ["Mariam", "Jenna", "Taji"] },
    { slug: "fraser-health", title: "Introduces Fraser Health's offerings and clients' credits", summary: "Client marketing", videoSrc: "/fraser-health/fh.mov" },
    { slug: "dragdrop", title: "Drag & drop songs between playlists", summary: "Spotify POC", videoSrc: "/dragdrop/dragdrop.mov", link: "https://www.figma.com/proto/xYL2PzUpTvgKlnxTzp7a5O/Portfolio-2025?page-id=375%3A2980&node-id=375-2981&viewport=743%2C390%2C0.24&t=AVR9d3tvwFyFaaeT-1&scaling=scale-down&content-scaling=fixed" },
    { slug: "cooling", title: "Bring cooling to vulnerable populations", summary: "Service design", imageSrc: "/cooling/Cool tgt.png", credits: ["Abbey P.", "Mikael G.", "Alexander K."] },
];

// Home page projects, in display order. "View project" opens each case study page.
export const homeOverviews: ProjectOverview[] = [
    { slug: "rules", title: "Control devices based on locations", summary: "Samsung Knox Manage", videoSrc: "/rules/geofence.mp4", link: "/rules", coverMedia: true,
      secondary: { label: "Documentation", link: "https://docs.samsungknox.com/admin/knox-manage/new-console/manage-rules/create-rules/" },
      gallery: [
        //   { src: "/rules/addgeofence-wide.png", kind: "image", alt: "Geofence in Knox Manage" },
          { src: "/rules/rules-0-wide.png", kind: "image", alt: "Rules overview table" },
          { src: "/rules/rules-1.png", kind: "image", alt: "Rule details panel" },
          { src: "/rules/rules-3-wide.png", kind: "image", alt: "Creating a geofence" },
      ],
      description: "Device settings stayed active until IT admins changed them by hand. Event-based rules let admins set the conditions, like being inside a geofence, that switch settings on and off automatically.",
      overview: { company: "Samsung", product: "Knox Manage (New Console)", status: "Live", focus: ["Feature design"] } },
    { slug: "organizations", title: "Visualize hierarchical device management", summary: "Samsung Knox Manage", videoSrc: "/organizations/organizations.mp4", link: "/organizations", coverMedia: true,
      secondary: { label: "Documentation", link: "https://docs.samsungknox.com/admin/knox-manage/new-console/manage-organizations/manage-organizations/" },
      gallery: [
          // { src: "/organizations/organizations-preview-wide.png", kind: "image", alt: "Organizations table" },
          { src: "/organizations/ds1-wide.png", kind: "image", alt: "Spacing specs in the default state" },
          { src: "/organizations/ds2.png", kind: "image", alt: "Specs during user interactions" },
          { src: "/organizations/ds3-wide.png", kind: "image", alt: "Interaction guidelines for the component" },
      ],
      description: "A hierarchical table that shows how settings pass from parent to child organizations and where they are overridden, built from existing design system components.",
      overview: { company: "Samsung", product: "Knox Manage (New Console)", status: "Live", focus: ["Design system"] } },
    { slug: "cardio", title: "Run with the right music", summary: "Spotify POC", videoSrc: "/cardio/cardio animation.mp4", link: "/cardio", coverMedia: true,
      secondary: { label: "Prototype", link: "https://www.figma.com/proto/5SjXuZ0MgUNMOFRmh3qOOY/card.io?page-id=0%3A1&node-id=24-151&viewport=779%2C110%2C0.2&t=Yy6S9WYqbPXyKWdL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=24%3A151" },
      gallery: [
          { src: "/cardio/cardio video.mp4", kind: "video", alt: "Generating a playlist" },
          { src: "/cardio/cardio-preview-1.png", kind: "image", alt: "card.io generated playlist" },
          { src: "/cardio/cardio-preview-2.png", kind: "image", alt: "card.io generated playlist" },
      ],
      description: "Personalized, colour-coded cardio playlists with real-time support while running, inspired by the cardio playlist trend among fitness influencers.",
      overview: { company: "Personal project", companyLabel: "Type", product: "Spotify POC", focus: ["UX design"] } },
    { slug: "knoxagent", title: "Interactive widgets for agents experiences", summary: "Samsung Knox AI Assist", imageSrc: "/knoxagent/agent.png", link: "/knoxagent", coverMedia: true, contact: CONTACT_LINK,
      description: "A reusable chassis of interactive widgets for the Knox Cloud Services AI assistant. Details are under NDA or not yet launched.",
      overview: { company: "Samsung", product: "In-console AI assistant", status: "Shipped", focus: ["Design system", "Agent experience"] } },
    { slug: "health", title: "Supporting a healthy weight journey", summary: "Samsung Health", imageSrc: "/health/health logo.png", link: "/health", coverMedia: true, contact: CONTACT_LINK,
      description: "Research into the demand for healthy weight journeys, finding gaps between user needs and existing products where Samsung Health can step in. Details are under NDA.",
      overview: { company: "Samsung", product: "Samsung Health", status: "Shipped", focus: ["UX Research"] } },
];

// External links open in a new tab; site pages and the placeholder stay in this one
export const linkTarget = (link: string) => (/^https?:\/\//.test(link) ? "_blank" : "_self");
