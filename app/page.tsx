"use client"

import Image from "next/image";
import Hyperlink from "@/components/hyperlink";
import { useEffect, useLayoutEffect, useState } from "react";
import ProjectThumbnail from "@/components/project-thumbnail-new";
import Menu from "@/components/menu";
import Nav from "@/components/nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { useMrFork } from "@/components/mr-fork/provider";
import { useOpenProjectModal } from "@/components/project-modal-host";
import { homeOverviews, linkTarget, NO_LINK_YET } from "@/lib/project-overviews";
import { useIsPhone } from "@/lib/use-is-phone";
import Enter from "@/components/enter";
import { cameThroughRing } from "@/lib/ring-arrival";

export default function Home2() {
  const [animate, setAnimate] = useState(false);
  const { open: mrForkOpen, setOpen: setMrForkOpen } = useMrFork();
  // The overview modal lives in the root layout, so it can stay up while its project page loads
  const openProjectModal = useOpenProjectModal();
  // Phones skip the overview modal: tapping a tile goes straight to the project page
  const isPhone = useIsPhone();
  const [throughRing] = useState(cameThroughRing);
  // Arriving through the ring from the bottom of a project page: start at the top,
  // before the first paint so the bottom of the page never shows
  useLayoutEffect(() => {
    if (throughRing) window.scrollTo({ top: 0, behavior: "instant" });
  }, [throughRing]);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <div className="flex items-center justify-center" id="top">
        <div className="w-full p-10">
          {/* The nav (photo, name, menu) stays still; only the content below it enters */}
          <Nav variant="home" mrFork />

          <div className="mb-10"></div>

          <Enter order={0}>
            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Currently reading tickets at <Hyperlink link="https://research.samsung.com/srca" target="_blank" text="Samsung R&D Institute Canada"/>.</p>
          </Enter>
          {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose hidden md:block">Summon <span className="inline-block"><button type="button" onClick={() => setMrForkOpen(true)} className="bg-transparent text-[var(--colour-bodytext)] underline lg:no-underline lg:text-[var(--colour-bodytext-light)] leading-loose hover:underline hover:text-[var(--colour-bodytext)] p-0 text-sm cursor-pointer">Mr. Fork</button></span>, my personal assistant.</p> */}
          {/* <p className="text-sm text-[var(--colour-bodytext)]">Reach me via <Hyperlink link="mailto:d.hungtran12@gmail.com" target="_blank" text="email"/>, <Hyperlink link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" text="LinkedIn"/>, or check out my <Hyperlink link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" text="resume"/>!</p> */}          
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
                  // Cmd/Ctrl-click (and any tap on phones) opens the project page
                  link={link}
                  target={linkTarget(link)}
                  // The image tiles were eager-loaded before
                  eager={p.imageSrc !== undefined}
                  onOpen={isPhone ? undefined : () => openProjectModal(p)}
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



