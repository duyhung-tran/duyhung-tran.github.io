"use client"

import Image from "next/image";
import Hyperlink from "@/components/hyperlink";
import Nav from "@/components/nav";
import { PageEndRing } from "@/components/scroll-ring";
import { Info, Lightbulb, Puzzle } from "lucide-react";
import ProjectThumbnail from "@/components/project-thumbnail-new";
import PageToc, { type TocItem } from "@/components/page-toc";
import ProjectIntro from "@/components/project-intro";
import { homeOverviews } from "@/lib/project-overviews";

// The modal's content for this project, shown again as the page's first section
const project = homeOverviews.find((p) => p.slug === "organizations")!;

const toc: TocItem[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "what-i-did", label: "What I did" },
  { id: "documentation", label: "UX documentations" },
  { id: "reflection-corner", label: "Reflection corner" },
];

export default function Organizations() {
  return (
    <div className="w-full p-10">
        {/* Just the photo and menu: no name beside the photo */}
        <Nav variant="others" hideName shrinkOnScroll />

        <div className="grid *:grid-cols-1 lg:gap-x-10 lg:grid-cols-[1fr_5fr] 2xl:grid-cols-[0.75fr_5fr]">
            <div className="hidden lg:block">
                {/* Lines up with the title and stays put while the page scrolls */}
                <div className="sticky top-[166px] mt-[72px]">
                    <PageToc items={toc} />
                </div>
            </div>
            <div className="mt-15 lg:mt-10 pr-0 lg:pr-32">
                {/* Same content as the project modal, which morphs into it when opened from the scroll ring */}
                <ProjectIntro p={project} />

                <div className="mb-15"></div>

                <div className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <Info className="w-5 h-5 text-[var(--colour-bodytext)] flex-shrink-0" />
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose"><Hyperlink link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" text="Knox Manage"/> is Samsung's B2B device management solution that allows IT admins to remotely control corporate devices.</p>
                </div>
                <div className="mb-10"></div>
                <div className="flex justify-center bg-[var(--container-bg-2)]">
                    <Image src="/organizations/organizations-preview.png" loading="eager" alt="knox manage geofence" width={1640} height={1228} className="w-full"/>
                </div>

                <div className="mb-7"></div>

                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Special thanks to: Andrea Lin (Senior UX Designer), Hyejeong Kim (Product Manager), Maia Puyat (UX Writer)</p>

                <div className="mb-15"></div>

                <hr className="border-[var(--nav-border)]" />

                <div className="mb-15"></div>

                {/* <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-normal tracking-tight" id="problem">Problem</p> */}
                <p className="text-3xl text-[var(--colour-bodytext)] leading-12 font-normal tracking-tight" id="problem">A need to demonstrate how settings flow from parent to child entities while keeping development effort low.</p>
                
                <div className="mb-8"></div>
                
                {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to limited development bandwidth, the inheritance logic among parent-to-child entities needs to be visualized with minimal dev effort - without adding new patterns, animations, or complex interactions.</p> */}
                <div className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <Info className="w-5 h-5 text-[var(--colour-bodytext)] flex-shrink-0" />
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">When a setting is assigned to a parent organization, it is inherited by all of its child organizations. This setting is not editable in the child organization, and can only be overriden by assigning a new setting to the child organization.</p>
                </div>

                <div className="mb-12"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-normal tracking-tight" id="what-i-did">What I did</p>
                <div className="mb-4"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I designed & wrote documentations for a hierarchical table component that displays the inheritance hierarchy and override status of settings, while reusing atom and molecule components from the design system.</p>

                <div className="mb-15"></div>

                <hr className="border-[var(--nav-border)]" />

                <div className="mb-12"></div>

                <p className="text-3xl text-[var(--colour-bodytext)] leading-loose font-normal tracking-tight" id="documentation">
                    UX documentations
                </p>
                <div className="mb-5"></div>

                <div>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/organizations/ds1.png" width={3099} height={1823} className="w-full lg:w-[80%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Specifying spacing specs during default state.</p>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/organizations/ds2.png" width={3099} height={1823} className="w-full lg:w-[90%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Specifying specs during user interactions.</p>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/organizations/ds3.png" width={3099} height={1823} className="w-full lg:w-[90%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Writing guidelines for multiple ways user can interact with the component.</p>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/organizations/ds4.png" width={3099} height={1823} className="w-full lg:w-[90%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Specifying the interactions for multiple variants.</p>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/organizations/ds5.png" width={3099} height={1823} className="w-full lg:w-[90%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Final deliverables.</p>
                </div>

                <div className="mb-18"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-normal tracking-tight" id="reflection-corner">
                    Reflection corner
                </p>
                <div className="mb-5"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-3">
                        <Lightbulb className="w-5 h-5 text-[var(--colour-bodytext)] mb-2"/>
                        <p className="text-md text-[var(--colour-bodytext)] leading-loose">The first design is almost never the best one.</p>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">If there is 1 thing I have grown to not scared of anymore, is to scrap ideas and start from scratch. I've always known designing is an iterative process, but to actually understand why it is needed and how to do it correctly, is what working with Product Managers had taught me.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-3">
                        <Puzzle className="w-5 h-5 text-[var(--colour-bodytext)] mb-2"/>
                        <p className="text-md text-[var(--colour-bodytext)] leading-loose">Break down complex concept into simple words.</p>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to the project's complex interactions, it is not uncommon that I had to consult multiple people to confirm its backend logic. I also frequently relay these findings back to my team for feedbacks and suggestions. This has taught me how to adapt my language and simplify technical concepts without losing meaning.</p>
                    </div>
                </div>
                
                {/* "Other works" section, hidden for now
                <div className="mb-25"></div>
                
                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-normal tracking-tight" id="reflection-corner">
                    Other works
                </p>
                <div className="mb-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-3">
                    <ProjectThumbnail link="knoxagent" name="Samsung Knox AI's interactive widgets" desc="Reusable chassis for Knox Cloud Services' AI assistant" imageSrc="/knoxagent/agent.png" target="_self"/>
                    <ProjectThumbnail link="rules" name="Knox Manage's geofence creation" desc="Enabling geography-based device management" videoSrc="/rules/geofence.mp4" target="_self"/>
                    <ProjectThumbnail link="health" name="Samsung Health research initiatives" desc="Supporting a healthy weight journey" imageSrc="/health/health logo.png" target="_self"/>
                </div>
                */}

                {/* The same scroll ring as the project modal: scrolling on at the bottom of the page fills it and returns home */}
                <PageEndRing href="/" label="Keep scrolling to return home" fullLabel="Returning home" />


            </div>
        </div>

    </div>
  );
}