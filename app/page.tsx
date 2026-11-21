"use client"

import Hyperlink from "@/components/hyperlink";
import { useLayoutEffect, useState } from "react";
import ProjectThumbnail from "@/components/project-thumbnail-new";
import Nav from "@/components/nav";
import { useOpenProjectModal } from "@/components/project-modal-host";
import { homeOverviews, linkTarget, NO_LINK_YET } from "@/lib/project-overviews";
import { useIsPhone } from "@/lib/use-is-phone";
import Enter from "@/components/enter";
import { cameThroughRing } from "@/lib/ring-arrival";
import { useAnimationsOn } from "@/lib/animation-setting";

export default function Home2() {
  // The overview modal lives in the root layout, so it can stay up while its project page loads
  const openProjectModal = useOpenProjectModal();
  // Phones skip the overview modal: tapping a tile goes straight to the project page
  const isPhone = useIsPhone();
  // So do visitors who turned animations off in the menu (the archive page keeps its modal)
  const animationsOn = useAnimationsOn();
  const skipModal = isPhone || !animationsOn;
  const [throughRing] = useState(cameThroughRing);
  // Arriving through the ring from the bottom of a project page: start at the top,
  // before the first paint so the bottom of the page never shows
  useLayoutEffect(() => {
    if (throughRing) window.scrollTo({ top: 0, behavior: "instant" });
  }, [throughRing]);

  return (
    <div className="flex items-center justify-center" id="top">
        <div className="w-full p-10">
          {/* The nav (photo, name, menu) stays still; only the content below it enters */}
          <Nav variant="home" mrFork />

          <div className="mb-10"></div>

          <Enter order={0}>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Currently reading tickets at <Hyperlink link="https://research.samsung.com/srca" target="_blank" text="Samsung R&D Institute Canada"/>.</p>
          </Enter>
          <div className="mb-11"></div>

          <div className={`grid grid-cols-1 gap-10 lg:gap-3 lg:grid-cols-2 2xl:grid-cols-3`}>
            {homeOverviews.map((p, i) => {
              const media = p.videoSrc !== undefined ? { videoSrc: p.videoSrc } : { imageSrc: p.imageSrc };
              // Same destination as the modal's "View project" button
              const link = p.link ?? NO_LINK_YET;
              return (
                <Enter key={p.slug} order={1 + i}>
                <ProjectThumbnail
                  name={p.title}
                  desc={p.summary}
                  // Cmd/Ctrl-click (and any click when the modal is skipped) opens the project page
                  link={link}
                  target={linkTarget(link)}
                  // The first row (up to 3 tiles) loads straight away; the rest as they come near the screen
                  eager={i < 3}
                  // The modal grows out of the clicked tile
                  onOpen={skipModal ? undefined : (tile) => openProjectModal(p, tile)}
                  {...media}
                />
                </Enter>
              );
            })}
          </div>
        </div>
    </div>
  );
}



