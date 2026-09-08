"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import MyNav2 from "@/components/nav2";
import Menu from "@/components/menu";
import SlideUpNoThres from "@/components/slide-up-nothres";

export default function Health() {
  return (
    <div>
        <MyNav2 variant="Projects to home"/>
        <SlideUpNoThres>
        <div className="w-full flex flex-col items-center justify-center self-center bg-transparent">
            <div className="px-10 md:w-2/3 md:px-0 lg:w-[75%] 2xl:w-[75%]">

                <div className="w-full mt-20">
                    <div className="w-full flex justify-between items-center">
                        <MyButton variant="hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
                        <div className="block md:hidden">
                            <Menu/>
                        </div>
                        <div className="hidden md:flex">
                            <MyButton variant="secondary" text="About me" link="about" textSize="text-sm" target="_self"/>
                            <div className="ml-3"></div>
                            <MyButton variant="primary" text="Resume" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" textSize="text-sm" target="_blank"/>
                        </div>
                    </div>
                    <div className="mb-20"></div>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-6">
                        <div className="">
                            <Heading text="Samsung Health" variant="black"/>
                        </div>
                        <div>
                            <p className="text-md text-[var(--colour-bodytext)] leading-loose">During my time on the <span><MyButton variant="hyperlink" text="Samsung Health" link="https://www.samsung.com/ca/apps/samsung-health/" textSize="text-md" target="_blank"/></span> team as a UX Researcher, I gained hands-on experience across the UX research process. I learned how to conduct desk research, design surveys, and facilitate semi-structured user interviews with clear objectives.</p>
                            <div className="mb-6"></div>
                            <p className="mb-1 text-sm text-[var(--colour-bodytext)] leading-loose">Special thanks to:</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Kezia Taufiq (UX Researcher), Rutuja Haldankar (UX Researcher), Juan Rodriguez (UX Researcher)</p>
                        </div>
                    </div>
                </div>

                <div className="mb-10"></div>

                <div>
                    <ImageZoom className="bg-[var(--container-bg-2)] rounded-2xl overflow-hidden">
                        <Image src="/shealth-long.png" width={2985} height={2236} className="w-full h-auto" alt="Samsung"/> 
                    </ImageZoom>
                </div>

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="About the project" variant="black"/>
                        </div>
                        <div>
                            <div className="rounded-2xl overflow-hidden">
                                <a href="https://www.samsung.com/ca/apps/samsung-health/" target="_blank" rel="noopener noreferrer">
                                    <Image src="/shapp.jpg" width={1469} height={1469} className="w-full" alt=""/> 
                                </a>
                            </div>
                            <div className="mb-3"></div>
                            {/* <p className="mt-2 text-sm text-[var(--colour-bodytext-light)] leading-loose">Managing weight in Samsung Health. Image sourced from Samsung Health website.</p>
                            <div className="mb-6"></div> */}
                            <div className="bg-[var(--container-bg)] flex flex-col p-7 rounded-2xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">Current state of Samsung Health</p>
                                <div className="mb-4"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Samsung Health is a comprehensive health and wellness platform that integrates fitness tracking, wearable connectivity, and health monitoring within the Samsung ecosystem. While it offers a broad range of health features, there is an opportunity to strengthen its position in the growing weight management space by addressing evolving user needs and differentiating itself from competitors with more specialized solutions.</p>
                            </div>
                            <div className="mb-3"></div>
                            <div className="bg-[var(--container-bg)] flex flex-col p-7 rounded-2xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">Research objectives</p>
                                <div className="mb-4"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Understanding the market demand for healthy weight journeys among health-conscious users and the ecosystem of applications and wearables that support them.</p>
                                <div className="mb-2"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">From these product insights, identifying gaps between user needs and existing solutions to determine where Samsung can intervene, while considering Samsung Health's current offerings and exploring opportunities to drive user engagement, create new value propositions, and support business growth through potential monetization opportunities.</p>
                            </div>
                            <div className="mb-3"></div>
                            <div className="flex flex-col justify-center bg-[var(--container-bg-2)] p-7 rounded-2xl">
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Due to NDA restrictions, I can't share the project's details publicly, but I&rsquo;d be happy to elaborate more on my experience during an interview.</p>
                                <div className="mb-2"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Feel free to send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="email" textSize="text-sm"/></span>!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full flex flex-col md:flex-row justify-center gap-3">
                    <MyButton variant="secondary" text="Return to home" link="/" textSize="text-sm" target="_self"/>
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
