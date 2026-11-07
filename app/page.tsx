"use client"

import Image from "next/image";
import Hyperlink from "@/components/hyperlink";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import ProjectThumbnail from "@/components/project-thumbnail-new";
import Menu from "@/components/menu";
import Nav from "@/components/nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { useMrFork } from "@/components/mr-fork/provider";

export default function Home2() {
  const [animate, setAnimate] = useState(false);
  const { open: mrForkOpen, setOpen: setMrForkOpen } = useMrFork();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <div className="flex items-center justify-center" id="top">
        <div className="w-full p-10">
          <Nav variant="home" mrFork /> 

          <div className="mb-10"></div>

          <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Currently reading tickets at <Hyperlink link="https://research.samsung.com/srca" target="_blank" text="Samsung Electronics Canada"/>.</p>
          {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose hidden md:block">Summon <span className="inline-block"><button type="button" onClick={() => setMrForkOpen(true)} className="bg-transparent text-[var(--colour-bodytext)] underline lg:no-underline lg:text-[var(--colour-bodytext-light)] leading-loose hover:underline hover:text-[var(--colour-bodytext)] p-0 text-sm cursor-pointer">Mr. Fork</button></span>, my personal assistant.</p> */}
          {/* <p className="text-sm text-[var(--colour-bodytext)]">Reach me via <Hyperlink link="mailto:d.hungtran12@gmail.com" target="_blank" text="email"/>, <Hyperlink link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" text="LinkedIn"/>, or check out my <Hyperlink link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" text="resume"/>!</p> */}          
          <div className="mb-11"></div>

          <div className={`grid grid-cols-1 gap-10 lg:gap-3 lg:grid-cols-2 2xl:grid-cols-3`}>
            <ProjectThumbnail link="rules" name="Control devices based on locations" desc="Samsung Knox Manage" videoSrc="/geofence.mp4" target="_self"/>
            <ProjectThumbnail link="organizations" name="Visualize hierarchical device management" desc="Samsung Knox Manage" videoSrc="/organizations.mp4" target="_self"/>
            <ProjectThumbnail link="cardio" name="Run with the right music" desc="Spotify POC" videoSrc="/cardio animation.mp4" target="_self"/>
            <ProjectThumbnail link="knoxagent" name="Interactive widgets for agents experiences" desc="Samsung Knox AI Assist" imageSrc="/yuhh.png" target="_self"/>
            <ProjectThumbnail link="health" name="Supporting a health weight journey" desc="Samsung Health" imageSrc="/health logo.png" target="_self"/>
            {/* <ProjectThumbnail link="alerts" name="Samsung Knox AI's proactive alerts" desc="Proactively surfacing and troubleshooting device issues" imageSrc="/knox logo.png" target="_self"/> */}
          </div>

          <div className="mb-25"></div>

        </div>
    </div>
  );
}



