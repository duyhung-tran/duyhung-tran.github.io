"use client"

import Image from "next/image";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import ProjectThumbnailNew from "@/components/project-thumbnail-new";
import Menu from "@/components/menu";
import Nav from "@/components/nav";
export default function Home2() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <div className="w-full p-10">
        <Nav variant="others" mrFork />
        <div className="mb-20"></div>
        <p className="text-5xl text-[var(--colour-bodytext)] font-semibold tracking-tight">Archive of Hung's own</p>
        <div className="mb-10 lg:mb-20"></div>
        <div className={`grid grid-cols-1 gap-10 lg:gap-3 lg:grid-cols-3`}>
            <ProjectThumbnailNew isLink="image-link" link="" type="" name="Make accessibility accessible" desc="Toolkit" imageSrc="/elevator.png" imageSrcDark="" imageSrcPoster="" imageSrcPosterDark="" videoSrc="" target="_self"/>
            <ProjectThumbnailNew isLink="image-link" link="" type="" name="Capture unnoticed moments" desc="Wearables" imageSrc="/peri.png" imageSrcDark="" imageSrcPoster="" imageSrcPosterDark="" videoSrc="" target="_self"/>
            <ProjectThumbnailNew isLink="image-link" link="" type="" name="Consume long-form content with short-form tendencies" desc="Streaming platform" imageSrc="" imageSrcDark="" imageSrcPoster="" imageSrcPosterDark="" videoSrc="/canal.mov" target="_self"/>
        </div>
    </div>
  );
}



