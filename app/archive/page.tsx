"use client"

import Image from "next/image";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import ProjectThumbnail from "@/components/project-thumbnail-new";
import Menu from "@/components/menu";
import Nav from "@/components/nav";
export default function Home2() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <div className="w-full p-10">
        <Nav variant="home" />
        <div className="mb-20"></div>
        <p className="text-3xl text-[var(--colour-bodytext)] font-semibold tracking-tight">Archive of Hung's own</p>
        <div className="mb-8"></div>
        {/* <p className="text-sm text-[var(--colour-bodytext)]">One might call it A-Ho.</p> */}
        <div className="mb-10 lg:mb-20"></div>
        <div className={`grid grid-cols-1 gap-10 lg:gap-3 lg:grid-cols-3`}>
            <ProjectThumbnail link="" name="Make accessibility accessible" desc="Toolkit" imageSrc="/elevator.png" target="_self"/>
            <ProjectThumbnail link="" name="Capture unnoticed moments" desc="Wearables" imageSrc="/peri.png" target="_self"/>
            <ProjectThumbnail link="" name="Consume long-form content with short-form tendencies" desc="Streaming platform" videoSrc="/canal.mov" target="_self"/>
        </div>
    </div>
  );
}



