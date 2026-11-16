"use client"

import { useState } from "react";
import { useIsPhone } from "@/lib/use-is-phone";
import ProjectThumbnail from "@/components/project-thumbnail-new";
import Nav from "@/components/nav";
import ProjectModal from "@/components/project-modal";
import Enter from "@/components/enter";
import { archiveOverviews, linkTarget, NO_LINK_YET } from "@/lib/project-overviews";

export default function Archive() {
  // The archive project whose overview modal is open, and the tile it grows out of
  const [openProject, setOpenProject] = useState<{ slug: string; origin: HTMLElement } | null>(null);

  // Phones (below md) skip the overview modal: tapping a tile goes straight to the project
  const isPhone = useIsPhone();

  return (
    <div className="w-full p-10">
        {/* The nav stays still; the title and tiles slide up out of a blur */}
        <Nav variant="home" />
        <div className="mb-20"></div>
        <Enter order={0}>
          <p className="text-3xl text-[var(--colour-bodytext)] font-normal tracking-tight">Archive of Hung's own</p>
        </Enter>
        <div className="mb-8"></div>
        {/* <p className="text-sm text-[var(--colour-bodytext)]">One might call it A-Ho.</p> */}
        <div className="mb-10 lg:mb-20"></div>
        <div className={`grid grid-cols-1 gap-10 lg:gap-3 lg:grid-cols-3 2xl:grid-cols-4`}>
          {archiveOverviews.map((p, i) => {
            const media = p.videoSrc !== undefined ? { videoSrc: p.videoSrc } : { imageSrc: p.imageSrc };
            // Same destination as the modal's "View project" button
            const link = p.link ?? NO_LINK_YET;
            return (
              <Enter key={p.slug} order={1 + i}>
              <ProjectThumbnail
                variant="square"
                name={p.title}
                desc={p.summary}
                // Cmd/Ctrl-click (and any tap on phones) opens the project's own link
                link={link}
                // Placeholder links stay on the page instead of opening a blank tab
                target={linkTarget(link)}
                // The first two tiles are near the top of the page
                eager={i < 2}
                onOpen={isPhone ? undefined : (tile) => setOpenProject({ slug: p.slug, origin: tile })}
                {...media}
              />
              </Enter>
            );
          })}
        </div>

        <ProjectModal
          project={archiveOverviews.find((p) => p.slug === openProject?.slug) ?? null}
          origin={openProject?.origin}
          onClose={() => setOpenProject(null)}
        />
    </div>
  );
}
