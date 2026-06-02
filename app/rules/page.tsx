"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import MyNav2 from "@/components/nav2";
import DotsMenu from "@/components/menu";
import ProjectThumbnail3 from "@/components/project-thumbnail3";

export default function Rules() {
  return (
    <div>
        <MyNav2 variant="Projects to home"/>
        <div className="w-full flex flex-col items-center justify-center self-center bg-transparent">
            <div className="px-10 md:w-2/3 md:px-0 lg:w-[75%] 2xl:w-[75%]">

                <div className="w-full mt-20">
                    <div className="w-full flex justify-between items-center">
                        <MyButton variant="hyperlink" text="Return to home" link="" textSize="text-sm" target="_self"/>
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
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Tian Jia (Senior UX Designer & UX Lead) and Hosoo Lee (Product Manager)</p>
                        </div>
                    </div>
                </div>

                <div className="mb-15"></div>

                <div className="rounded-3xl overflow-hidden">
                    <video className="w-full h-full object-cover" autoPlay muted loop playsInline poster="/rule-poster-wide.png">
                        <source src="/Rule video wide.mp4"type="video/mp4" />
                    </video>
                </div>

                <div className="mb-20"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="Samsung Knox Manage: Rules" variant="black"/>
                        </div>
                       <div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)</p>
                            <div className="mb-5"></div>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose">What is Samsung Knox Manage? <MyButton variant="hyperlink" text="Learn more" link="https://www.samsungknox.com/en/solutions/it-solutions/knox-manage" textSize="text-sm" target="blank"/>.</p>
                            <div className="mb-7"></div>
                        </div>
                    </div>
                </div>

                <div className="mb-20"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Overview" variant="black"/>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center bg-[var(--container-bg)] p-10 rounded-3xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">Problem ⚠️</p>
                                <div className="mb-9"></div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Current device management settings are often static and uniformly applied across large device fleets, limiting flexibility and preventing <span className="font-semibold underline decoration-[var(--main-colour)] underline-offset-7">context-aware adjustments</span> based on time, location, or usage conditions.</p>
                                <div className="mb-9"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">When a setting is applied to a group of devices, it remains continuously active, forcing IT admins to manually adjust when circumstances change, increasing their workload.</p>
                            </div> 
                            <div className="mb-4"></div>
                            <div className="flex flex-col justify-center items-center bg-[var(--container-bg)] p-10 rounded-3xl">
                                <div className="w-full flex justify-between">
                                    <p className="text-sm text-[var(--main-colour)] leading-loose self-start">Notes from PM team</p>
                                    <p className="text-sm text-[var(--main-colour)] leading-loose self-start"><span className="text-[var(--colour-bodytext-3)]">(generalized to avoid NDA)</span></p>
                                </div>
                                <div className="mb-12"></div>
                                <div className="w-full 2xl:w-[70%] grid grid-cols-3 -gap-x-3">
                                    <ImageZoom>
                                        <Image src="/rule-stickie-1.png" width={1469} height={1469} className="w-full h-auto mb-2 rotate-3 shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/rule-stickie-2.png" width={1469} height={1469} className="w-full h-auto mb-2 -rotate-6 shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/rule-stickie-3.png" width={1469} height={1469} className="w-full h-auto mb-2 -rotate-2 shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                </div>
                                <div className="mb-5"></div>
                            </div> 
                            <div className="mb-4"></div>
                            {/* <div className="flex flex-col justify-center bg-[var(--colour-grey)] p-10 rounded-3xl">
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I&rsquo;m unable to share my project's process & specific details publicly, but I&rsquo;d be happy to elaborate on my experience and design contributions during an interview.</p>
                                <p className="text-sm text-[var(--colour-bodytext)] mt-5 leading-loose">Feel free to send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="email" textSize="text-sm"/></span>!</p>
                            </div> */}
                        </div>
                    </div>
                </div>
                
                <div className="mb-40"></div>

                <div className="w-full">
                    <Heading text="What I did" variant="black"/>
                    <ImageZoom>
                        {(() => {
                        const theme = localStorage.getItem("theme-class") || "";
                        switch (theme) {
                            case "pink":
                            return <Image src="/rules-map-pink.png" width={2985} height={2236} className="w-full h-auto" alt="Samsung Knox" />;
                            case "green":
                            return <Image src="/rules-map-green.png" width={2985} height={2236} className="w-full h-auto" alt="Samsung Knox" />;
                            case "orange":
                            return <Image src="/rules-map-orange.png" width={2985} height={2236} className="w-full h-auto" alt="Samsung Knox" />;
                            default:
                            return <Image src="/rules-map.png" width={2985} height={2236} className="w-full h-auto" alt="Samsung Knox" />;
                        }
                        })()}
                    </ImageZoom>
                </div>

                <div className="mb-40"></div>

                <div className="w-full">
                    <div className="flex flex-col justify-center bg-[var(--colour-grey)] p-10 rounded-3xl">
                        <p className="text-md text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I can only share the final deliverables publicly, but I&rsquo;d be happy to elaborate more on my experience and design process during an interview.</p>
                        <div className="mb-9"></div>
                        <p className="text-md text-[var(--colour-bodytext)] leading-loose">Feel free to send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="email" textSize="text-md"/></span>!</p>
                    </div>
                </div>

                <div className="mb-50"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Viewing a rule&rsquo;s details" variant="black"/>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-8">Simplifies rule reviewing with an overview table and a sliding panel for detailed views.</p>
                        </div>
                        <div>
                            <ImageZoom className="bg-[var(--container-bg-2)] rounded-3xl overflow-hidden">
                                <Image src="/rules-0.png" width={3099} height={1823} className="w-full rounded-3xl" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose mb-6">Overview table.</p>
                            <ImageZoom className="bg-[var(--container-bg-2)] rounded-3xl overflow-hidden">
                                <Image src="/rules-1.png" width={3099} height={1823} className="w-full rounded-3xl" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose mb-6">View details through a sliding panel.</p>
                            <ImageZoom className="bg-[var(--container-bg-2)] rounded-3xl overflow-hidden">
                                <Image src="/rules-1.5.png" width={3099} height={1823} className="w-full rounded-3xl" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose mb-6">Detailed sliding panel.</p>
                        </div>
                    </div>

                    <div className="mb-30"></div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-6">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Create a new rule" variant="black"/>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-8">Streamlines the configuration process for time & location conditions.</p>
                        </div>
                        <div>
                            <ImageZoom className="bg-[var(--container-bg-2)] rounded-3xl overflow-hidden">
                                <Image src="/rules-2.png" width={3099} height={3363} className="w-full rounded-3xl" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose mb-6">Configuring time-based conditions.</p>
                            <ImageZoom className="bg-[var(--container-bg-2)] rounded-3xl overflow-hidden">
                                <Image src="/rules-3.png" width={3099} height={3363} className="w-full rounded-3xl" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose mb-6">Configuring location-based conditions.</p>
                            <ImageZoom className="bg-[var(--container-bg-2)] rounded-3xl overflow-hidden">
                                <Image src="/rules-4.png" width={2622} height={2622} className="w-full rounded-3xl" alt="Samsung Knox"/> 
                            </ImageZoom>
                            <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose mb-6">Segment of the location-based conditions configuration flow.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-35"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Learnings" variant="black"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Designing isnt just designing. It's also about writing.</p>
                            <div className="mb-4"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I learned that a clear and concise note section can save a tremendous amount of time communicating back and forth with developers to specify the unclear interactions. Preparing documentation is a process that shouldn’t be treated lightly, or wait until last minute.</p>
                            <div className="mb-15"></div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">What "think in system" actually means.</p>
                            <div className="mb-4"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I have heard the phrase "think in system" countless time. But working in this project truly put it into perspectives for me. 1 small change in a single flow could create a ripple effect across multiple flows and features. Knowing the product inside and out and anticipating the impact of every decision is just 1 of the skills I have developed through this process.</p>
                            <div className="mb-20"></div>
                            <div>
                                <div className="w-full md:w-[75%] 2xl:w-[75%] grid grid-cols-2 gap-2 md:gap-5">
                                    <div className="flex flex-col justify-start">
                                        <Image src="/uxmas.jpg" width={3099} height={3363} className="w-full mb-3 rounded-3xl shadow-md" alt="Hung Tran" style={{ filter: 'contrast(85%)' }}/> 
                                        <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose">@ Samsung XMas party 🎄</p>
                                    </div>
                                    <div className="flex flex-col justify-start">
                                        <Image src="/yehe.png" width={3099} height={3363} className="w-full mb-3 rounded-3xl shadow-md" alt="Hung Tran" style={{ filter: 'contrast(85%)' }}/> 
                                        <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose">#summer_interns</p>
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
                        <ProjectThumbnail3 isLink="image-link" link="organizations" name="Samsung Knox Manage: Organizations" desc="Designed a scalable, design-system–ready component that visualizes the inheritance logic among parent-child entities." imageSrc="/organize.png" imageSrcDark="/organize - d.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
                        <ProjectThumbnail3 isLink="video-link" link="cardio" name="card.io" desc="Designed a Spotify feature that guides runners in creating personalized cardio playlists, helping them feel confident and in control." imageSrc="/cardio video.mp4" imageSrcPoster="/cardio-poster.png" imageSrcDark="" imageSrcPosterDark="" target="_self"/>
                        {/* <MyButton variant="blue-button-outline" text="Return to home" link="" textSize="text-sm" target="_self"/> */}
                    </div>
                </div>

                <div className="w-full">
                    <Footer/>
                </div>

            </div>
        </div>
    </div>
  );
}
