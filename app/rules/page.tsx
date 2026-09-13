"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Nav from "@/components/nav";
import { Info, Locate, MapPinCheck, SlidersHorizontal, Snail, UserSearch, Pencil, Puzzle, ShieldQuestionMark } from "lucide-react";
import TableOfContents, { TocSection } from "@/components/table-of-contents";
import ProjectThumbnailNew from "@/components/project-thumbnail-new";

const sections: TocSection[] = [
  { id: "overview", label: "Project overview" },
  { id: "problem", label: "Problem" },
  { id: "findings", label: "Research insights" },
  { id: "framing", label: "Framing" },
  { id: "reviewing-all-rules", label: "Reviewing all rules" },
  { id: "create-a-geofence", label: "Create a geofence" },
  { id: "reflection-corner", label: "Reflection corner" },
];

export default function Rules() {
  return (
    <div className="w-full p-10">
        <Nav variant="others" />
        <div className="grid *:grid-cols-1 md:grid-cols-[1fr_3fr]">
            {/* <div className="w-full md:sticky md:top-[30%] md:self-start flex flex-col justify-end">
                <TableOfContents sections={sections} />
            </div> */}

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
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Feature design</p>
                </div>
            </div>

            <div className="mt-10 pr-18">
                {/* <div className="rounded-2xl overflow-hidden">
                    <video className="w-full h-full object-cover" autoPlay muted loop playsInline poster="/rule-poster-wide.png">
                        <source src="Rule video wide.mp4"type="video/mp4" />
                    </video>
                </div> */}

                <p className="text-4xl text-[var(--colour-bodytext)] leading-normal font-semibold tracking-tight">Dynamically configure devices based on real-time location.</p>

                <div className="mb-8"></div>

                <div className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <Info className="w-5 h-5 text-[var(--colour-bodytext)] flex-shrink-0" />
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose"><span className="inline-block"><MyButton link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="hyperlink" text="Knox Manage" textSize="text-sm"/></span> is Samsung's B2B device management solution that allows IT admins to remotely control corporate devices.</p>
                </div>
                <div className="mb-10"></div>
                <div className="flex justify-center bg-[var(--container-bg-2)] p-20">
                    <Image src="/geofenceee.png" loading="eager" alt="knox manage geofence" width={1640} height={1228} className="w-[55%]"/>
                </div>

                <div className="mb-10"></div>

                <div id="overview" className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <div className="flex w-full justify-between">
                        <div>
                            <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Company</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Samsung</p>
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
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Feature design</p>
                        </div>
                    </div>
                </div>

                <div className="mb-16"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="problem">
                    Problem
                </p>
                <div className="mb-5"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Current device management settings are often static and uniformly applied across large device fleets, limiting flexibility and preventing context-aware adjustments based on time, location, or usage conditions.</p>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">When a setting is applied to a group of devices, it remains continuously active, forcing IT admins to manually adjust when circumstances change, increasing their workload.</p>

                <div className="mb-16"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="findings">
                    PMs' research insights
                </p>
                <div className="mb-2"></div>
                <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose">Generalized to avoid NDA</p>
                <div className="mb-6"></div>
                <div className="w-full grid grid-cols-3 gap-x-4">
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <MapPinCheck className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">An event-based device management approach will be our unique selling point.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <SlidersHorizontal className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Defining the conditions under which a setting is active allows for more nuanced control across environments and use cases.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <UserSearch className="w-5 h-5 text-[var(--colour-bodytext)]"/>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Security events require manual intervention by IT admins, leading to slower responses and greater risk exposure.</p>
                    </div>
                </div>

                <div className="mb-16"></div>

                <p id="framing" className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight">
                    "Rules" feature
                </p>
                <div className="mb-4"></div>
                <div className="p-8 border-1 bg-[var(--container-bg)] rounded-xl flex gap-5 items-center">
                    <ShieldQuestionMark className="w-5 h-5 text-[var(--colour-bodytext)]" />
                    <p className="text-xl text-[var(--colour-bodytext)] leading-loose">What if device configurations could respond to events and conditions automatically?</p>
                    {/* <p className="text-xl text-[var(--colour-bodytext)] leading-loose">IT admins need to respond to changing security and operational conditions, but device management is often static and reactive.</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Security events can require manual intervention, while device settings may need to change depending on where, when, or under what conditions a device is being used.</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">An event-based approach enables IT admins to define conditions that automatically trigger device configurations—providing more nuanced control while reducing manual intervention and response time.</p> */}
                </div>


                <div className="mb-18"></div>
                
                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="reviewing-all-rules">
                    Reviewing all rules
                </p>
                <div className="mb-4"></div>

                <div className="p-4 border-1 rounded-xl flex justify-between items-center">
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Simplifies rule reviewing with an overview table and a sliding panel for detailed views.</p>
                    <MyButton variant="secondary-external" text="Read official documentations" link="https://docs.samsungknox.com/admin/knox-manage/new-console/manage-rules/view-and-edit-rules/" target="_blank" textSize="text-sm" onClick={() => {}}/>
                </div>
                <div className="mb-8"></div>
                <div>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/rules-0.png" width={3099} height={1823} className="w-[70%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Overview table.</p>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/rules-1.png" width={3099} height={1823} className="w-[70%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">View details through a sliding panel.</p>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/rules-1.5.png" width={3099} height={1823} className="w-[70%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Detailed sliding panel.</p>
                </div>

                <div className="mb-18"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="create-a-geofence">
                    Create a geofence rule
                </p>
                <div className="mb-4"></div>
                <div className="p-4 border-1 rounded-xl flex justify-between items-center">
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Streamlines the configuration process for creating a geofence.</p>
                    <MyButton variant="secondary-external" text="Read official documentations" link="https://docs.samsungknox.com/admin/knox-manage/new-console/manage-rules/create-rules/#:~:text=add%20your%20configuration.-,Geofence,-The%20geofence%20condition" target="_blank" textSize="text-sm" onClick={() => {}}/>
                </div>

                <div className="mb-8"></div>

                <div>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/rules-3.png" width={3099} height={3363} className="w-[70%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Configuring location-based conditions.</p>
                    <div className="bg-[var(--container-bg-2)] block flex justify-center items-center">
                        <Image src="/rules-4.png" width={2622} height={2622} className="w-[70%]" alt="Samsung Knox"/> 
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Segment of the location-based conditions configuration flow.</p>
                </div>

                <div className="mb-18"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="reflection-corner">
                    Reflection corner
                </p>
                <div className="mb-5"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-3">
                        <Pencil className="w-5 h-5 text-[var(--colour-bodytext)] mb-2"/>
                        <p className="text-md text-[var(--colour-bodytext)] leading-loose">Designing isnt just designing. It's also about writing.</p>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I learned that a clear and concise note section can save a tremendous amount of time communicating back and forth with developers to specify the unclear interactions. Preparing documentation is a process that shouldn’t be treated lightly, or wait until last minute.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-3">
                        <Puzzle className="w-5 h-5 text-[var(--colour-bodytext)] mb-2"/>
                        <p className="text-md text-[var(--colour-bodytext)] leading-loose">What "think in system" actually means.</p>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I have heard the phrase "think in system" countless time. But working in this project truly put it into perspectives for me. 1 small change in a single flow could create a ripple effect across multiple flows and features. Knowing the product inside and out and anticipating the impact of every decision is just 1 of the skills I have developed through this process.</p>
                    </div>
                </div>

                <div className="mb-25"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="reflection-corner">
                    Other works
                </p>
                <div className="mb-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <ProjectThumbnailNew isLink="image-link" link="knoxai" type="UX design, shipped" name="Samsung Knox AI's design system" desc="Reusable chassis for Knox Cloud Services' AI assistant" imageSrc="/knox logo.png" imageSrcDark="/knox logo.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                    <ProjectThumbnailNew isLink="image-link" link="organizations" type="Design system, shipped" name="Knox Manage's organizations table" desc="Visualizing blast radius across device management levels" imageSrc="/orga.png" imageSrcDark="/orga.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                    <ProjectThumbnailNew isLink="image-link" link="alerts" type="UX design, shipped" name="Samsung Knox AI's proactive alerts" desc="Proactively surfacing and troubleshooting device issues" imageSrc="/knox logo.png" imageSrcDark="/knox logo.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                </div>

                <div className="mb-25"></div>
                {/* <div className="mb-18"></div>
                <div>
                    <div className="w-full md:w-[60%] grid grid-cols-2 gap-2 md:gap-5">
                        <div className="flex flex-col justify-start">
                            <Image src="/uxmas.jpg" width={3099} height={3363} className="w-full mb-2 rounded-2xl shadow-md" alt="Hung Tran" style={{ filter: 'contrast(85%)' }}/> 
                            <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose">@ Samsung XMas party 🎄</p>
                        </div>
                        <div className="flex flex-col justify-start">
                            <Image src="/yehe.png" width={3099} height={3363} className="w-full mb-2 rounded-2xl shadow-md" alt="Hung Tran" style={{ filter: 'contrast(85%)' }}/> 
                            <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose">Group selfie #116</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  );
}
