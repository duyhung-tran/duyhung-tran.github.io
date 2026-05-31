"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import MyNav2 from "@/components/nav2";
import DotsMenu from "@/components/menu";

export default function Cardio() {
  return (
    <div>
        <MyNav2 variant="Projects to home"/>
        <div className="w-full flex flex-col items-center justify-center self-center bg-transparent">
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

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-6">
                        <div className="">
                            <Heading text="Social service design" variant="black"/>
                        </div>
                        <div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">“Cool Together” is a new cooling initiative from the City of Vancouver designed to support local organizations in helping its vulnerable communities cope with extreme heat.</p>
                        </div>
                        <div className="mb-7"></div>
                    </div>
                </div>

                <div className="mb-10"></div>

                <div>
                    <ImageZoom className="bg-[var(--container-bg-2)] rounded-3xl">
                    {/* <ImageZoom> */}
                        <Image src="/works/cool-tgt-wide.png" width={2985} height={2236} className="w-full h-auto" alt="Samsung Knox"/> 
                    </ImageZoom>
                </div>

                <div className="mb-20"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="My journey to social service design" variant="black"/>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">As a UX designer, I’ve spent a lot of time designing apps, websites, and emails. But I’ve always wondered what happens beyond the screen where my work lies. How do people first encounter services? How do they navigate the complex social systems around them? And how can I provide support for them? <span className="font-semibold text-[var(--colour-pure)]">The kind of support that extends beyond screens, for those who haven’t had the privilege of getting used to digital interfaces.</span></p>
                            <div className="mb-6"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I care about the communities that have supported me in the past, many of whom still face systems that feel overwhelming or inaccessible. By understanding their mental models, lived experiences, and the perspectives of other stakeholders, I translate these insights into clear, supportive journeys.</p>
                            <div className="mb-6"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Team: Me, Abbey Perley, Mikael Greenwood, Alex Kimoto.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Design challenge" variant="black"/>
                        </div>
                        <div>
                            <div className="bg-[var(--container-bg)] flex flex-col p-7 rounded-3xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">Problem ⚠️</p>
                                <div className="mb-4"></div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Social infrastructure of passing cooling.</p>
                                <div className="mb-4"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Community-based organizations that operate in older Vancouver buildings need to implement different passive cooling techniques, but many of these techniques require permits from the city.</p>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">The permitting process can be complex and difficult to interpret, making it challenging for local organizations to navigate what is allowed, what is not, and how to proceed.</p>
                            </div>
                            <div className="mb-3"></div>
                            <div className="bg-[var(--container-bg)] flex flex-col p-7 rounded-3xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">How might we...</p>
                                <div className="mb-4"></div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">... help City of Vancouver present its permit system more accessibly, so neighbourhood houses and community organizations feel less overwhelmed when implementing passive cooling solutions?</p>
                            </div>
                            <div className="mb-3"></div>
                            <div className="w-full 2xl:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="w-full bg-[var(--container-bg)] flex flex-col justify-center items-center p-10 rounded-3xl">
                                    <ImageZoom>
                                        <Image src="/works/pc 1.png" width={1387} height={780} className="w-full shadow-lg" alt=""/> 
                                    </ImageZoom>
                                    <div className="mb-10"></div>
                                    <MyButton variant="blue-button-outline" link="https://www.bccancer.bc.ca/prevention/Documents/ShadeLookbook_May2024.pdf" text="Read more in new tab" textSize="text-sm" target="_blank"/>
                                </div>
                                <div className="w-full bg-[var(--container-bg)] flex flex-col justify-center items-center p-10 rounded-3xl">
                                    <ImageZoom className="flex justify-center items-center">
                                        <Image src="/works/pc 2.png" width={1387} height={780} className="mx-auto w-full md:w-2/3 shadow-lg" alt=""/> 
                                    </ImageZoom>
                                    <div className="mb-10"></div>
                                    <MyButton variant="blue-button-outline" link="https://sustain.ubc.ca/sites/default/files/2023-079_DIY%20Passive%20Cooling%20Techniques_Singh.pdf" text="Read more in new tab" textSize="text-sm" target="_blank"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Desk research (secondary)" variant="black"/>
                        </div>
                        <div>
                            <div className="bg-[var(--main-darkercolour)] flex flex-col p-7 rounded-3xl">
                                <p className="text-sm text-white leading-loose">Exploratory research direction</p>
                                <div className="mb-2"></div>
                                <p className="text-lg text-white leading-loose">At what point does the City of Vancouver’s presentation of information (websites, infographics, toolkit, etc.) become too complex for community-based organizations to effectively navigate?</p>
                            </div>
                            <div className="mb-3"></div>
                            <div className="w-[100%] bg-[var(--container-bg)] flex flex-col justify-center items-center p-10 rounded-3xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">Questions to answer:</p>
                                <div className="mb-5 md:mb-8"></div>
                                <div className="w-full md:w-[70%] 2xl:w-[60%] grid grid-cols-3 gap-3 pb-5">
                                    <ImageZoom>
                                        <Image src="/works/sdstickie-1.png" width={1469} height={1469} className="w-full h-auto shadow-md" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/works/sdstickie-2.png" width={1469} height={1779} className="w-full h-auto shadow-md" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/works/sdstickie-3.png" width={1469} height={1511} className="w-full h-auto shadow-md" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/works/sdstickie-4.png" width={1469} height={1469} className="w-full h-auto shadow-md" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/works/sdstickie-5.png" width={1469} height={1779} className="w-full h-auto shadow-md" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/works/sdstickie-6.png" width={1469} height={1511} className="w-full h-auto shadow-md" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="In-depth interview (primary)" variant="black"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="col-span-2 rounded-3xl overflow-hidden shadow-lg">
                                <ImageZoom>
                                    <Image src="/works/kitsilano.png" width={1469} height={1469} className="w-full" alt=""/> 
                                </ImageZoom>
                            </div>
                            <div className="bg-[var(--container-bg)] flex flex-col p-7 pb-9 rounded-3xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">Recruit</p>
                                <div className="mb-4"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Interviewee works at Kitsilano Neighbourhood House (The Kits House), a non-profit community building.</p>
                                <div className="mb-7"></div>
                                <div>
                                    <MyButton variant="blue-button-outline" link="https://www.kitshouse.org/" text="The Kits House's website" target="_blank" textSize="text-sm" />
                                </div>
                            </div>
                            <div className="bg-[var(--container-bg)] flex flex-col p-7 rounded-3xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">Interview goal</p>
                                <div className="mb-4"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">To collect missing context about the permit process, the House’s role in extreme heat events, and existing support from the City of Vancouver (CoV).</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Insights" variant="black"/>
                        </div>
                        <div>
                            <div className="w-[100%] bg-[var(--container-bg)] flex flex-col justify-center items-center p-10 rounded-3xl">
                                <div className="w-full flex flex-col">
                                    <p className="text-sm text-[var(--main-colour)] leading-loose">Insight 1</p>
                                    <div className="mb-5"></div>
                                    <p className="text-lg text-[var(--colour-bodytext)] leading-loose">People and communities are more resilient, knowledgeable, and collaborative in coping with extreme heat when they have trusted social networks that provide spaces for <span className="font-semibold underline decoration-[var(--main-colour)] underline-offset-7">dialogues and emotional support</span>.</p>
                                </div>
                                <div className="mb-15"></div>
                                <div className="w-full md:w-[90%] 2xl:w-[70%] grid grid-cols-3 -gap-x-10">
                                    <ImageZoom>
                                        <Image src="/works/is1 1.png" width={1469} height={1469} className="w-full h-auto mb-2 rotate-6 shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/works/is1 2.png" width={1469} height={1779} className="w-full h-auto mb-2 -rotate-10 shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/works/is1 3.png" width={1469} height={1511} className="w-full h-auto mb-2 rotate-5 shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                </div>
                                <div className="mb-8"></div>
                            </div>

                            <div className="mb-5"></div>

                            <div className="w-[100%] bg-[var(--container-bg)] flex flex-col justify-center items-center p-10 rounded-3xl">
                                <div className="w-full flex flex-col">
                                    <p className="text-sm text-[var(--main-colour)] leading-loose">Insight 2</p>
                                    <div className="mb-5"></div>
                                    <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Limited funding pushes Neighbourhood Houses to rely on <span className="font-semibold underline decoration-[var(--main-colour)] underline-offset-7">DIY cooling strategies</span>, many of which are forms of passive cooling, but remain largely undervalued, even though they can meaningfully manage heat.</p>
                                </div>
                                <div className="mb-15"></div>
                                <div className="w-full md:w-[90%] 2xl:w-[70%] grid grid-cols-3 -gap-x-10">
                                    <ImageZoom>
                                        <Image src="/works/is2 1.png" width={1469} height={1469} className="w-full h-auto mb-2 -rotate-6 shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/works/is2 2.png" width={1469} height={1779} className="w-full h-auto mb-2 rotate-8 shadow-lg -translate-x-2" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/works/is2 3.png" width={1469} height={1511} className="w-full h-auto mb-2 -rotate-5 shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                </div>
                                <div className="mb-8"></div>
                            </div>
                            
                            {/* <div className="mb-5"></div>
                            <div className="w-[100%] bg-[var(--container-bg)] flex flex-col justify-center items-center rounded-3xl">
                                <ImageZoom>
                                    <Image src="/works/jamm.png" width={1469} height={1469} className="w-full" alt=""/> 
                                </ImageZoom>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Reframing our problem" variant="black"/>
                        </div>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="bg-[var(--container-bg)] flex flex-col p-7 pb-9 rounded-3xl">
                                    <p className="text-sm text-[var(--main-colour)] leading-loose">What we realized</p>
                                    <div className="mb-4"></div>
                                    <p className="text-lg text-[var(--colour-bodytext-2)] leading-loose">Neighbourhood houses play an important role in supporting communities during extreme heat events, but their impact is influenced <span className="font-semibold underline decoration-[var(--main-colour)] underline-offset-4 text-[var(--colour-bodytext)]">less by regulatory barriers and more by funding constraints and their role as trusted social spaces</span>!</p>
                                </div>
                                <div className="bg-[var(--container-bg)] flex flex-col p-7 pb-9 rounded-3xl">
                                    <p className="text-sm text-[var(--main-colour)] leading-loose">-&gt;  Our decision</p>
                                    <div className="mb-4"></div>
                                    <p className="text-lg text-[var(--colour-bodytext-2)] leading-loose">Therefore, we decided to shift our focus away from the permitting process as a barrier to the House's impact, and toward what it offers most to its communities: <span className="font-semibold underline decoration-[var(--main-colour)] underline-offset-4 text-[var(--colour-bodytext)]">communal support</span> and <span className="font-semibold underline decoration-[var(--main-colour)] underline-offset-4 text-[var(--colour-bodytext)]">human connection</span>.</p>
                                </div>

                            </div>
                            <div className="mb-5"></div>
                            <div className="bg-[var(--container-bg)] flex flex-col p-7 rounded-3xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">How might we...</p>
                                <div className="mb-4"></div>
                                <p className="text-lg text-[var(--colour-bodytext-3)] leading-loose line-through">... help City of Vancouver present its permit system more accessibly, so neighbourhood houses and community organizations feel less overwhelmed when implementing passive cooling solutions?</p>
                                <div className="mb-5"></div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">... help the City of Vancouver encourage community resilience to extreme heat through low-cost passive cooling practices, while also strengthening social connections and emotional support within communities?</p>
                                <div className="mb-8"></div>
                                <div className="p-7 rounded-3xl bg-[var(--background)]">
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">“Community resilience is a measure of the [...] ability of a community to utilize available resources to respond to, withstand, and recover from adverse situations.”</p>
                                    <div className="mb-4"></div>
                                    <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose">RAND, public policy research organization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Our solution" variant="black"/>
                        </div>
                        <div>
                            <div className="bg-[var(--container-bg)] flex flex-col p-7 pb-9 rounded-3xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">"Cool Together" initiative</p>
                                <div className="mb-4"></div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">“Cool Together” is a new cooling initiative from the City of Vancouver designed to support local organizations in helping its vulnerable communities cope with extreme heat.</p>
                                <div className="mb-7"></div>
                                    <div>
                                        <MyButton variant="blue-button-outline" link="https://www.figma.com/proto/SX9tVnnpV5uQFGtLVOUSlD/Service-Design--Cool-togethter?page-id=0%3A1&node-id=1-2&viewport=140%2C253%2C0.22&t=Hyf13N66BzHuwE0v-1&scaling=contain&content-scaling=fixed" text="See our full solution" target="_blank" textSize="text-sm" />
                                    </div>
                                </div>
                            <div className="mb-5"></div>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                {/* <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="Reflections" variant="black"/>
                        </div>
                        <div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Looking back...</p>
                            <div className="mb-6"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Customize to follow WCAG standard more (using different Figma plugins: A11y Colour Contrast Checker, A11y Text, etc.)</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">See if there is a better way to give user support in customizing other than suggesting songs with similar BPM.</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I want to conduct more user testing to gather more data for the questionnaire.</p>
                            <div className="mb-12"></div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Takeaways</p>
                            <div className="mb-6"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Design with a clear goal in mind.</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Pay attention to every steps as it will all come together and it will all have to make sense in the end.</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Design for accessibility.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div> */}

                <div className="w-full flex flex-col md:flex-row justify-center gap-3">
                    <MyButton variant="blue-button-outline" text="Return to home" link="/" textSize="text-sm" target="_self"/>
                </div>

                <div className="w-full">
                    <Footer/>
                </div>

            </div>
        </div>
    </div>
  );
}
