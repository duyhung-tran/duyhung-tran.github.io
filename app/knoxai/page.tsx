"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import Menu from "@/components/menu";
import Nav from "@/components/nav";
import { CircleAlert, Info } from "lucide-react";
import ProjectThumbnailNew from "@/components/project-thumbnail-new";

export default function KnoxAI() {
  return (
    <div className="w-full p-10">
        <Nav variant="others" />

        <div className="grid *:grid-cols-1 lg:grid-cols-[1fr_3fr]">
            <div className="w-full h-full flex flex-col justify-between hidden lg:block">
                <div id="overview" className="md:sticky md:top-[23%]">
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Company</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Samsung</p>
                    <div className="mb-6"></div>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Product</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">In-console AI assistant</p>
                    <div className="mb-6"></div>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Status</p>
                    <div className="flex items-center justify-start gap-2">
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Developing</p>
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400" aria-hidden="true"/>
                    </div>
                    <div className="mb-6"></div>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Focus</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Design system</p>
                </div>
            </div>
            <div className="mt-15 lg:mt-10 pr-0 lg:pr-18">
                <p className="text-4xl text-[var(--colour-bodytext)] leading-normal font-semibold tracking-tight">A library of interactive widgets for AI conversations</p>
            
                <div className="mb-8"></div>

                <div className="pl-6 pr-5 py-5 border-1 rounded-xl flex flex-col lg:flex-row gap-6 lg:justify-between">
                    <div className="flex gap-6 items-center">
                        <Info className="w-5 h-5 text-[var(--colour-bodytext)] flex-shrink-0" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">This project is likely under a stricter NDA, or hasn't been launched yet.</p>
                    </div>
                    <MyButton variant="secondary-menu" text="Contact for details" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" textSize="text-sm"/>
                </div>

                <div className="mb-12"></div>
                <div className="flex justify-center bg-[var(--container-bg-2)]">
                    <Image src="/aii biggg.png" alt="samsung" width={1640} height={1228} className="w-full"/>
                </div>
                
                <div className="mb-16"></div>
                                
                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="reflection-corner">
                    Other works
                </p>
                <div className="mb-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-3">
                    <ProjectThumbnailNew isLink="image-link" link="rules" type="UX design, shipped" name="Knox Manage's geofence creation" desc="Enabling geography-based device management" imageSrc="/geofenceee.png" imageSrcDark="/geofenceee.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                    <ProjectThumbnailNew isLink="image-link" link="organizations" type="Design system, shipped" name="Knox Manage's organizations table" desc="Visualizing blast radius across device management levels" imageSrc="/orga.png" imageSrcDark="/orga.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                    <ProjectThumbnailNew isLink="image-link" link="health" type="UX research" name="Samsung Health research initiatives" desc="Supporting a health weight journey" imageSrc="/health logo.png" imageSrcDark="/health logo.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                    <ProjectThumbnailNew isLink="image-link" link="alerts" type="UX design, shipped" name="Samsung Knox AI's proactive alerts" desc="Proactively surfacing and troubleshooting device issues" imageSrc="/knox logo.png" imageSrcDark="/knox logo.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                </div>

                <div className="mb-25"></div>
            </div>
        </div>
    </div>
  );
}
