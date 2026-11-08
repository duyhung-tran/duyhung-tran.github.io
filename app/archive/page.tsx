"use client"

import { useEffect, useState } from "react";
import ProjectThumbnail from "@/components/project-thumbnail-new";
import Nav from "@/components/nav";
import ProjectModal from "@/components/project-modal";
import { archiveOverviews, NO_LINK_YET } from "@/lib/project-overviews";

export default function Archive() {
  // Slug of the archive project whose overview modal is open
  const [openProject, setOpenProject] = useState<string | null>(null);

  // Phones (below md) skip the overview modal: tapping a tile goes straight to the project
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsPhone(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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
            // Same destination as the modal's "View project" button
            const link = p.link ?? NO_LINK_YET;
            return (
              <ProjectThumbnail
                key={p.slug}
                variant="square"
                name={p.title}
                desc={p.summary}
                // Cmd/Ctrl-click (and any tap on phones) opens the project's own link
                link={link}
                // Placeholder links stay on the page instead of opening a blank tab
                target={link === NO_LINK_YET ? "" : "_blank"}
                // The first two tiles are near the top of the page
                eager={i < 2}
                onOpen={isPhone ? undefined : () => setOpenProject(p.slug)}
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
