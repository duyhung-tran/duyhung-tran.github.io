"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import Menu from "@/components/menu";
import Nav from "@/components/nav";
import { Info, Lightbulb, Puzzle } from "lucide-react";
import ProjectThumbnailNew from "@/components/project-thumbnail-new";

export default function Organizations() {
  return (
    <div className="w-full p-10">
        <Nav variant="others" />

        <div className="grid *:grid-cols-1 md:grid-cols-[1fr_3fr]">
            <div className="w-full h-full flex flex-col justify-between">
                <div id="overview" className="md:sticky md:top-[23%]">
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Company</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Samsung</p>
                    <div className="mb-6"></div>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Product</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Knox Manage (New Console)</p>
                    <div className="mb-6"></div>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Status</p>
                    <div className="flex items-center justify-start gap-2">
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Live</p>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true"/>
                    </div>
                    <div className="mb-6"></div>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Focus</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Design system</p>
                </div>
            </div>
            <div className="mt-10 pr-18">
                <p className="text-4xl text-[var(--colour-bodytext)] leading-normal font-semibold tracking-tight">Visualize how settings are inherited across nested device management levels.</p>
            
                <div className="mb-8"></div>

                <div className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <Info className="w-5 h-5 text-[var(--colour-bodytext)] flex-shrink-0" />
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose"><span className="inline-block"><MyButton link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="hyperlink" text="Knox Manage" textSize="text-sm"/></span> is Samsung's B2B device management solution that allows IT admins to remotely control corporate devices.</p>
                </div>
                <div className="mb-10"></div>
                <div className="flex justify-center bg-[var(--container-bg-2)]">
                    <Image src="/org-00.png" loading="eager" alt="knox manage geofence" width={1640} height={1228} className="w-full"/>
                </div>

                <div className="mb-10"></div>

                <div id="overview" className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <div className="flex w-full justify-between">
                        <div>
                            <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Company</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Samsung Electronics Canada</p>
                        </div>
                        <div>
                            <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Product</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Knox Manage (New Console)</p>
                        </div>
                        <div>
                            <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Status</p>
                            <div className="flex items-center justify-start gap-2">
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Live</p>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true"/>
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
                    Problem
                </p>
                <div className="mb-5"></div>
                
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to limited development bandwidth, the inheritance logic among parent-to-child entities needs to be visualized with minimal dev effort - without adding new patterns, animations, or complex interactions.</p>

                <div className="mb-5"></div>

                <div className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <Info className="w-5 h-5 text-[var(--colour-bodytext)] flex-shrink-0" />
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">When a setting is assigned to a parent organization, it is inherited by all of its child organizations. This setting is not editable in the child organization, and can only be overriden by assigning a new setting to the child organization.</p>
                </div>

                <div className="mb-16"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="problem">
                    What I did
                </p>
                <div className="mb-5"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I designed & wrote documentations for a hierarchical table component that displays the inheritance hierarchy and override status of settings, while reusing atom and molecule components from the design system.</p>

                <div className="mb-16"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="problem">
                    UX documentations
                </p>
                <div className="mb-5"></div>

                <div>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/ds1.png" width={3099} height={1823} className="w-[80%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Specifying spacing specs during default state.</p>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/ds2.png" width={3099} height={1823} className="w-[90%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Specifying specs during user interactions.</p>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/ds3.png" width={3099} height={1823} className="w-[90%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Writing guidelines for multiple ways user can interact with the component.</p>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/ds4.png" width={3099} height={1823} className="w-[90%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Specifying the interactions for multiple variants.</p>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/ds5.png" width={3099} height={1823} className="w-[90%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Final deliverables.</p>
                </div>

                <div className="mb-18"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="reflection-corner">
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
                
                <div className="mb-25"></div>
                
                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="reflection-corner">
                    Other works
                </p>
                <div className="mb-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <ProjectThumbnailNew isLink="image-link" link="knoxai" type="UX design, shipped" name="Samsung Knox AI's design system" desc="Reusable chassis for Knox Cloud Services' AI assistant" imageSrc="/knox logo.png" imageSrcDark="/knox logo.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                    <ProjectThumbnailNew isLink="image-link" link="rules" type="UX design, shipped" name="Knox Manage's geofence creation" desc="Enabling geography-based device management" imageSrc="/geofenceee.png" imageSrcDark="/geofenceee.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                    <ProjectThumbnailNew isLink="image-link" link="alerts" type="UX design, shipped" name="Samsung Knox AI's proactive alerts" desc="Proactively surfacing and troubleshooting device issues" imageSrc="/knox logo.png" imageSrcDark="/knox logo.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                </div>

                <div className="mb-25"></div>


            </div>
        </div>

    </div>
  );
}