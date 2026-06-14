"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import MyNav2 from "@/components/nav2";
import DotsMenu from "@/components/menu";
import ProjectThumbnail3 from "@/components/project-thumbnail3";
import SlideUpNoThres from "@/components/slide-up-nothres";

export default function Organizations() {
  return (
    <div>
        <MyNav2 variant="Projects to home"/>
        <SlideUpNoThres>
        <div className="w-full flex flex-col items-center justify-center self-center">
            <div className="px-10 md:w-2/3 md:px-0 lg:w-[75%] 2xl:w-[75%]">
                    <div className="w-full mt-20">
                        <div className="w-full flex justify-between items-center">
                            <MyButton variant="hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
                            <div className="block md:hidden">
                                <DotsMenu/>
                            </div>
                            <div className="hidden md:flex">
                                <MyButton variant="blue-button-outline" text="About me" link="about" textSize="text-sm" target="_self"/>
                                <div className="ml-3"></div>
                                <MyButton variant="blue-button" text="Resume" link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" textSize="text-sm" target="_blank"/>
                            </div>
                        </div>
                        <div className="mb-20"></div>

                        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                            <div className="">
                                <Heading text="About the work" variant="black"/>
                            </div>
                            <div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">During my time at Samsung, my work focused on designing features for <span className="inline-block"><MyButton link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" target="_blank" variant="hyperlink" text="Knox Manage" textSize="text-sm"/></span> - a B2B SaaS device management solution that allows IT admins to remotely manage & ensure security for fleets of Samsung devices.</p>
                                <div className="mb-6"></div>
                                <p className="mb-1 text-sm text-[var(--colour-bodytext)] leading-loose">Special thanks to:</p>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Andrea Lin (Senior UX Designer) and Hyejeong Kim (Product Manager)</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-15"></div>

                    <div>
                        <ImageZoom className="bg-[var(--container-bg-2)] rounded-2xl">
                            <Image src="/org-00.png" width={2985} height={2236} className="w-full h-auto" alt="Samsung Knox"/> 
                        </ImageZoom>
                    </div>

                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="Samsung Knox Manage: Organizations" variant="black"/>
                        </div>
                        <div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Designed a scalable, design-system–ready component that visualizes the inheritance logic among parent-child entities.</p>
                            <div className="mb-5"></div>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose">What is Samsung Knox Manage? <MyButton variant="hyperlink" text="Learn more" link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" textSize="text-sm" target="blank"/>.</p>
                            <div className="mb-7"></div>
                        </div>
                    </div>
                </div>

                {/* <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="What I did" variant="black"/>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center bg-[var(--main-darkercolour)] px-7 py-7 rounded-2xl">
                                <Heading text="Project generalized due to NDA." variant="white"/>
                                <div className="-mb-2"></div>
                                <p className="text-sm text-white leading-loose">Due to NDA restrictions,I’m unable to share project details publicly, but I’d be happy to elaborate on my experience and design contributions during an interview.</p>
\                            </div>
                            <div className="mb-4"></div>
                            <div className="w-full flex flex-col justify-center bg-[var(--container-bg-2)] px-7 py-7 rounded-2xl ">
                                <Heading text="How might me..." variant="black"/>
                                <div className="-mb-2"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">... effectively communicate the concept of inherited and assigned profiles to IT admins, using existing components and not reliant on texts?</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="mb-15"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Overview" variant="black"/>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center bg-[var(--container-bg)] p-10 rounded-2xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">Problem ⚠️</p>
                                <div className="mb-9"></div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Due to limited development bandwidth, the <span className="font-semibold underline decoration-[var(--main-colour)] underline-offset-7">inheritance logic among parent-to-child entities</span> needs to be visualized with minimal dev effort - without adding new patterns, animations, or complex interactions.</p>
                                <div className="mb-9"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">When a setting is assigned to a parent organization, it is inherited by all of its child organizations. This setting is not editable in the child organization, and can only be overriden by assigning a new setting to the child organization.</p>
                            </div> 
                            <div className="mb-4"></div>
                            <div className="flex flex-col justify-center bg-[var(--container-bg)] p-10 rounded-2xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">What I did</p>
                                <div className="mb-4"></div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">I designed & wrote documentations for <span className="font-semibold underline decoration-[var(--main-colour)] underline-offset-7">a hierarchical table component</span> that displays the inheritance hierarchy and override status of settings, while reusing atom and molecule components from the design system.</p>
                                {/* <div className="mb-9"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">The </p> */}
                            </div>
                            <div className="mb-4"></div>
                            <div className="flex flex-col justify-center bg-[var(--container-bg-2)] p-10 rounded-2xl">
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I can only share the final deliverables publicly, but I&rsquo;d be happy to elaborate more on my experience and design process during an interview.</p>
                                <p className="text-sm text-[var(--colour-bodytext)] mt-5 leading-loose">Feel free to send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="email" textSize="text-sm"/></span>!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Design system documentation for Organization Table component" variant="black"/>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-8">Detailing specs, variants, interaction guidelines, and edge-case behaviours.</p>
                        </div>
                        <div>
                            <ImageZoom className="bg-[var(--container-bg-2)] rounded-2xl overflow-hidden">
                                <Image src="/ds1.png" width={3099} height={1823} className="w-full rounded-2xl" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <div className="mb-2"></div>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose mb-6">Specifying spacing specs during default state.</p>
                            <ImageZoom className="bg-[var(--container-bg-2)] rounded-2xl overflow-hidden">
                                <Image src="/ds2.png" width={3099} height={1823} className="w-full rounded-2xl" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <div className="mb-2"></div>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose mb-6">Specifying specs during user interactions.</p>
                            <ImageZoom className="bg-[var(--container-bg-2)] rounded-2xl overflow-hidden">
                                <Image src="/ds3.png" width={3099} height={1823} className="w-full rounded-2xl" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <div className="mb-2"></div>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose mb-6">Writing guidelines for multiple ways user can interact with the component.</p>
                            <ImageZoom className="bg-[var(--container-bg-2)] rounded-2xl overflow-hidden">
                                <Image src="/ds4.png" width={3099} height={1823} className="w-full rounded-2xl" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <div className="mb-2"></div>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose mb-6">Specifying the interactions for multiple variants.</p>
                            <ImageZoom className="bg-[var(--container-bg-2)] rounded-2xl overflow-hidden">
                                <Image src="/ds5.png" width={3099} height={1823} className="w-full rounded-2xl" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <div className="mb-2"></div>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose mb-6">Final deliverables.</p>
                            {/* <ProtectedPhoto2 src1="/doc1.png" src2="/doc2.png" alt="organizations" password="2002"/> */}
                            {/* <div className="mb-4"></div> */}
                            {/* <ProtectedPhoto src="/doc2.png" alt="organizations" password="2002"/> */}
                        </div>
                    </div>

                    <div className="mb-30"></div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Individual cell component"/>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-8">A core components in Organization table, enables smoother collaboration for Knox Manage UX team.</p>
                        </div>
                        <div>
                            <ImageZoom>
                                <Image src="/org-2.png" width={3099} height={3363} className="w-full h-auto mb-2 block dark:hidden" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/org-2-darkmode.png" width={3099} height={3363} className="w-full h-auto mb-2 hidden dark:block" alt="Samsung Knox"/> 
                            </ImageZoom>
                        </div>
                    </div> */}
                </div>

                <div className="mb-35"></div>
                
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Learnings" variant="black"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">The first design is almost never the best one.</p>
                            <div className="mb-4"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">If there is 1 thing I have grown to not scared of anymore, is to scrap ideas and start from scratch. I've always known designing is an iterative process, but to actually understand why it is needed and how to do it correctly, is what working with Product Managers had taught me.</p>
                            <div className="mb-15"></div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Break down complex concept into simple words.</p>
                            <div className="mb-4"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to the project's complex interactions, it is not uncommon that I had to consult multiple people to confirm its backend logic. I also frequently relay these findings back to my team for feedbacks and suggestions. This has taught me how to adapt my language and simplify technical concepts without losing meaning.</p>
                            <div className="mb-20"></div>
                            <div>
                                <div className="w-full md:w-[85%] 2xl:w-[75%] grid grid-cols-2 gap-5">
                                    <div className="flex flex-col justify-start">
                                        <Image src="/KM.png" width={3099} height={3363} className="w-full mb-2 rounded-2xl shadow-md" alt="Hung Tran" style={{ filter: 'contrast(80%)' }}/> 
                                        <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose">Samsung #Knox_Manage team</p>
                                    </div>
                                    <div className="flex flex-col justify-start">
                                        <Image src="/grouse.png" width={3099} height={3363} className="w-full mb-2 rounded-2xl shadow-md" alt="Hung Tran" style={{ filter: 'contrast(95%)' }}/> 
                                        <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose">Product Design meeting @ Grouse ⛰️</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-40"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                    <div className="md:sticky md:top-25 md:self-start">
                        <Heading text="My other projects" variant="black"/>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-15">
                        <ProjectThumbnail3 isLink="video-link" link="rules" name="Samsung Knox Manage: Rules" desc="Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)" imageSrc="/Rule video.mp4" imageSrcPoster="rule-poster.png" imageSrcDark="/Rule video - d.mp4" imageSrcPosterDark="rule-poster - d.png" target="_self"/>
                        <ProjectThumbnail3 isLink="video-link" link="cardio" name="card.io" desc="Designed a Spotify feature that guides runners in creating personalized cardio playlists, helping them feel confident and in control." imageSrc="/cardio video.mp4" imageSrcPoster="/cardio-poster.png" imageSrcDark="" imageSrcPosterDark="" target="_self"/>
                        {/* <MyButton variant="blue-button-outline" text="Return to home" link="/" textSize="text-sm" target="_self"/> */}
                    </div>
                </div>

                <div className="w-full">
                    <Footer/>
                </div>

            </div>
        </div>
        </SlideUpNoThres>
    </div>
  );
}