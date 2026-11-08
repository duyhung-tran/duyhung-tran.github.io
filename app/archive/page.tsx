"use client"

import { useState } from "react";
import ProjectThumbnail from "@/components/project-thumbnail-new";
import Nav from "@/components/nav";
import ProjectModal from "@/components/project-modal";
import { archiveOverviews } from "@/lib/project-overviews";

export default function Archive() {
  // Slug of the archive project whose overview modal is open
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <div className="w-full p-10">
        <Nav variant="home" />
        <div className="mb-20"></div>
        <p className="text-3xl text-[var(--colour-bodytext)] font-semibold tracking-tight">Archive of Hung's own</p>
        <div className="mb-8"></div>
        {/* <p className="text-sm text-[var(--colour-bodytext)]">One might call it A-Ho.</p> */}
        <div className="mb-10 lg:mb-20"></div>
        <div className={`grid grid-cols-1 gap-10 lg:gap-3 lg:grid-cols-3 2xl:grid-cols-4`}>
          {archiveOverviews.map((p, i) => {
            const media = p.videoSrc !== undefined ? { videoSrc: p.videoSrc } : { imageSrc: p.imageSrc };
            return (
              <ProjectThumbnail
                key={p.slug}
                variant="square"
                name={p.title}
                desc={p.summary}
                // Cmd/Ctrl-click still opens the project's own link when it has one
                link={p.link ?? ""}
                target="_blank"
                // The first two tiles are near the top of the page
                eager={i < 2}
                onOpen={() => setOpenProject(p.slug)}
                {...media}
              />
            );
          })}
        </div>

        <ProjectModal
          project={archiveOverviews.find((p) => p.slug === openProject) ?? null}
          onClose={() => setOpenProject(null)}
        />
    </div>
  );
}
