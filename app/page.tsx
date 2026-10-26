"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import ProjectThumbnailNew from "@/components/project-thumbnail-new";
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
          <Nav variant="home" /> 

          <div className="mb-10"></div>

          <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Currently reading tickets at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="hyperlink" text="Samsung Electronics Canada" textSize="text-sm"/></span>.</p>
          <p className="text-sm text-[var(--colour-bodytext)] leading-loose hidden md:block">Summon <span className="inline-block">
            {/* Opens the Mr. Fork panel; styled like MyButton's hyperlink variant */}
            <button type="button" onClick={() => setMrForkOpen(true)} className="bg-transparent text-[var(--colour-bodytext)] underline lg:no-underline lg:text-[var(--colour-bodytext-light)] leading-loose hover:underline hover:text-[var(--colour-bodytext)] p-0 text-sm cursor-pointer">Mr. Fork</button>
          </span>, my personal assistant.</p>
          {/* <p className="text-sm text-[var(--colour-bodytext)]">Reach me via <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="email" textSize="text-sm"/></span>, <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="hyperlink" text="LinkedIn" textSize="sm"/></span>, or check out my <span className="inline-block"><MyButton link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" variant="hyperlink" text="resume" textSize="text-sm"/></span>!</p> */}          
          <div className="mb-11"></div>

          <div className={`grid grid-cols-1 gap-10 lg:gap-3 ${mrForkOpen ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
            <ProjectThumbnailNew isLink="image-link" link="knoxagent" type="UX design, shipped" name="Samsung Knox in-console AI agent" desc="Interactive widgets for Knox Cloud Services' AI assistant" imageSrc="/yuhh.png" imageSrcDark="/yuhh.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
            <ProjectThumbnailNew isLink="image-link" link="rules" type="UX design, shipped" name="Knox Manage's geofence creation" desc="Enabling geography-based device management" imageSrc="/geofenceee.png" imageSrcDark="/geofenceee.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
            <ProjectThumbnailNew isLink="image-link" link="organizations" type="Design system, shipped" name="Knox Manage's organizations table" desc="Visualizing blast radius across device management levels" imageSrc="/orga.png" imageSrcDark="/orga.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
            <ProjectThumbnailNew isLink="image-link" link="health" type="UX research" name="Samsung Health research initiatives" desc="Supporting a health weight journey" imageSrc="/health logo.png" imageSrcDark="/health logo.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
            {/* <ProjectThumbnailNew isLink="image-link" link="alerts" type="UX design, shipped" name="Samsung Knox AI's proactive alerts" desc="Proactively surfacing and troubleshooting device issues" imageSrc="/knox logo.png" imageSrcDark="/knox logo.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/> */}
          </div>

          <div className="mb-25"></div>

        </div>
    </div>
  );
}



