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

export default function Health() {
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
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Samsung Health</p>
                    <div className="mb-6"></div>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Status</p>
                    <div className="flex items-center justify-start gap-2">
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Shipped</p>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true"/>
                    </div>
                    <div className="mb-6"></div>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Focus</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">UX Research</p>
                </div>
            </div>
            <div className="mt-15 lg:mt-10 pr-0 lg:pr-18">
                <p className="text-4xl text-[var(--colour-bodytext)] leading-normal font-semibold tracking-tight">Research ways to help people build healthier weight habits</p>
            
                <div className="mb-8"></div>

                <div className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <Info className="w-5 h-5 text-[var(--colour-bodytext)] flex-shrink-0" />
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">This research was conducted during my time on the <span className="inline-block"><MyButton link="https://www.samsung.com/ca/apps/samsung-health/" target="_blank" variant="hyperlink" text="Samsung Health" textSize="text-sm"/></span> team as a UX Researcher.</p>
                </div>
                <div className="mb-10"></div>
                <div className="flex justify-center bg-[var(--container-bg-2)]">
                    <Image src="/shapp.jpg" loading="eager" alt="samsung health" width={1640} height={1228} className="w-full"/>
                </div>

                <div className="mb-10"></div>

                <div id="overview" className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 w-full lg:justify-between">
                        <div>
                            <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Company</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Samsung</p>
                        </div>
                        <div>
                            <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Product</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Samsung Health</p>
                        </div>
                        <div>
                            <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Status</p>
                            <div className="flex items-center justify-start gap-2">
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Shipped</p>
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true"/>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Focus</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Design system</p>
                        </div>
                    </div>
                </div>

                <div className="mb-16"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="problem">
                    Current state of Samsung Health
                </p>
                <div className="mb-5"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Samsung Health is a comprehensive health and wellness platform that integrates fitness tracking, wearable connectivity, and health monitoring within the Samsung ecosystem. While it offers a broad range of health features, there is an opportunity to strengthen its position in the growing weight management space by addressing evolving user needs and differentiating itself from competitors with more specialized solutions.</p>
            
                <div className="mb-16"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="problem">
                    Research objectives
                </p>
                <div className="mb-5"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Understanding the market demand for healthy weight journeys among health-conscious users and the ecosystem of applications and wearables that support them.</p>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">From these product insights, identifying gaps between user needs and existing solutions to determine where Samsung can intervene, while considering Samsung Health's current offerings and exploring opportunities to drive user engagement, create new value propositions, and support business growth through potential monetization opportunities.</p>
            
                <div className="mb-16"></div>

                <div className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <CircleAlert className="w-5 h-5 text-[var(--colour-bodytext)] flex-shrink-0" />
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I can't share the project's details publicly, but I’d be happy to elaborate more on my experience during an interview.</p>
                </div>

                <div className="mb-25"></div>
                                
                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="reflection-corner">
                    Other works
                </p>
                <div className="mb-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-3">
                    <ProjectThumbnailNew isLink="image-link" link="knoxai" type="UX design, shipped" name="Samsung Knox AI's design system" desc="Reusable chassis for Knox Cloud Services' AI assistant" imageSrc="/knox logo.png" imageSrcDark="/knox logo.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                    <ProjectThumbnailNew isLink="image-link" link="rules" type="UX design, shipped" name="Knox Manage's geofence creation" desc="Enabling geography-based device management" imageSrc="/geofenceee.png" imageSrcDark="/geofenceee.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                    <ProjectThumbnailNew isLink="image-link" link="organizations" type="Design system, shipped" name="Knox Manage's organizations table" desc="Visualizing blast radius across device management levels" imageSrc="/orga.png" imageSrcDark="/orga.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                    <ProjectThumbnailNew isLink="image-link" link="alerts" type="UX design, shipped" name="Samsung Knox AI's proactive alerts" desc="Proactively surfacing and troubleshooting device issues" imageSrc="/knox logo.png" imageSrcDark="/knox logo.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                </div>

                <div className="mb-25"></div>
            </div>
        </div>
    </div>
  );
}
