"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Hyperlink from "@/components/hyperlink";
import Nav from "@/components/nav";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { SquareArrowOutUpRight, Info, Lightbulb, Target, User, Ruler, ListMusic, Gauge, Hand, Eye, Accessibility } from "lucide-react";
import ProjectThumbnail from "@/components/project-thumbnail-new";

const PROTOTYPE_URL = "https://www.figma.com/proto/5SjXuZ0MgUNMOFRmh3qOOY/card.io?page-id=0%3A1&node-id=24-151&viewport=779%2C110%2C0.2&t=Yy6S9WYqbPXyKWdL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=24%3A151";

// TODO(Hung): confirm these project details
const META = {
  company: "Personal project",
  product: "card.io",
  status: "Concept",
  focus: "UX design",
};

function MetaStatus() {
  return (
    <div className="flex items-center justify-start gap-2">
      <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{META.status}</p>
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true"/>
    </div>
  );
}

export default function Cardio() {
  return (
    <div className="w-full p-10">
        <Nav variant="others" />

        <div className="grid *:grid-cols-1 lg:grid-cols-[1fr_3fr] 2xl:grid-cols-[0.75fr_3fr]">
            <div className="w-full h-full flex flex-col justify-between hidden lg:block">
                <div id="overview" className="lg:sticky lg:top-[23%]">
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Company</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{META.company}</p>
                    <div className="mb-6"></div>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Product</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{META.product}</p>
                    <div className="mb-6"></div>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Status</p>
                    <MetaStatus/>
                    <div className="mb-6"></div>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Focus</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{META.focus}</p>
                    <div className="mb-6"></div>
                    <Hyperlink variant="icon" icon={SquareArrowOutUpRight} text="Figma prototype" link={PROTOTYPE_URL} target="_blank"/>
                </div>
            </div>

            <div className="mt-15 lg:mt-10 pr-0 lg:pr-18">
                <p className="text-4xl text-[var(--colour-bodytext)] leading-normal font-semibold tracking-tight">Help runners build cardio playlists that match their pace</p>

                <div className="mb-8"></div>

                <div className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <Info className="w-5 h-5 text-[var(--colour-bodytext)] flex-shrink-0" />
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">card.io is catered towards the fitness community and aims to improve the cardio running experience with personalized music selection and playlists.</p>
                </div>
                <div className="mb-10"></div>
                <div className="flex justify-center bg-[var(--container-bg-2)]">
                    <video src="/cardio animation.mp4" autoPlay muted loop playsInline aria-label="card.io running progress ring" className="w-full" />
                </div>

                <div className="mb-10"></div>

                <div className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 w-full lg:justify-between">
                        <div>
                            <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Company</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{META.company}</p>
                        </div>
                        <div>
                            <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Product</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{META.product}</p>
                        </div>
                        <div>
                            <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Status</p>
                            <MetaStatus/>
                        </div>
                        <div>
                            <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Focus</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{META.focus}</p>
                        </div>
                    </div>
                </div>

                <div className="mb-15"></div>

                <hr className="border-[var(--nav-border)]" />

                <div className="mb-15"></div>

                <p className="text-3xl text-[var(--colour-bodytext)] leading-12 font-semibold tracking-tight" id="problem">Runners struggle to customize and test a cardio playlist that actually fits their own pace.</p>
                <div className="mb-8"></div>
                <div className="px-8 py-6 border-1 rounded-xl flex gap-x-6 items-center">
                    <Info className="w-5 h-5 text-[var(--colour-bodytext)] flex-shrink-0" />
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">How might we make sure runners feel informed and confident in customizing & testing their own cardio playlists?</p>
                </div>

                <div className="mb-16"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="why">
                    Why this topic?
                </p>
                <div className="mb-5"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">As a high school senior during the 2020 pandemic, I had more free time than ever. And like many others, I found myself searching Chloe Ting home workout (I know, how original) on YouTube, looking for a way to feel better and more in control about my physical health.</p>
                <div className="mb-4"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">That moment wasn’t unique, it was part of a larger shift. As the world slowed down, people began to reflect more deeply on their well-being as a form of self-care. Social media played a key role, with influencers encouraging healthy habits through creative trends.</p>
                <div className="mb-4"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">One that stood out was the rise of curated cardio playlists—energizing soundtracks that made workouts more engaging, especially on TikTok and Instagram.</p>

                <div className="mb-16"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="trend">
                    The faster the song, the faster the treadmill
                </p>
                <div className="mb-5"></div>
                <div className="flex justify-center bg-[var(--container-bg-2)] p-6 lg:p-12">
                    <div className="w-full lg:w-[60%] grid grid-cols-3 gap-3">
                        <video src="/context-vid-1.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover rounded-xl" />
                        <video src="/context-vid-2.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover rounded-xl" />
                        <video src="/context-vid-3.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover rounded-xl" />
                    </div>
                </div>
                <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Cardio playlist trend on TikTok.</p>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Fitness influencers make cardio playlists, where songs are organized to match different speed ranges (phases) of a typical cardio session. The trend aims to create an engaging, fun running experience and motivate runners to finish their cardio session.</p>
                <div className="mb-4"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Many viewers struggle to stay motivated throughout their cardio sessions, often cutting their workouts short. With the right music, runners can feel more energized and motivated - making it easier to push through. This need had sparked the trend of cardio playlists.</p>

                <div className="mb-19"></div>

                <hr className="border-[var(--nav-border)]" />

                <div className="mb-15"></div>

                <p className="text-3xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="findings">
                    Research insights
                </p>
                <div className="mb-2"></div>
                <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose">5 interviews with fitness enthusiasts who have joined the trend on TikTok</p>
                <div className="mb-6"></div>
                <div className="flex justify-center bg-[var(--container-bg-2)] p-8 lg:p-14">
                    <div className="w-full lg:w-[60%] grid grid-cols-3">
                        <ImageZoom>
                            <Image src="/stickie-1.png" width={1469} height={1469} className="w-full h-auto rotate-6 shadow-lg" alt="Research theme 1"/>
                        </ImageZoom>
                        <ImageZoom>
                            <Image src="/stickie-2.png" width={1469} height={1779} className="w-full h-auto -rotate-10 shadow-lg" alt="Research theme 2"/>
                        </ImageZoom>
                        <ImageZoom>
                            <Image src="/stickie-3.png" width={1469} height={1511} className="w-full h-auto rotate-5 shadow-lg" alt="Research theme 3"/>
                        </ImageZoom>
                    </div>
                </div>
                <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">3 reoccurring themes from the interviews.</p>
                <div className="block lg:flex p-8 border-1 bg-[var(--container-bg)] rounded-xl gap-5 items-center">
                    <Lightbulb className="w-5 h-5 text-[var(--colour-bodytext)] flex-shrink-0" />
                    <p className="mt-5 lg:mt-0 text-lg lg:text-xl text-[var(--colour-bodytext)] leading-loose">Influencer-made playlists are a good starting point, but personal customization is what makes a “good” cardio playlist.</p>
                </div>

                <div className="mb-16"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="persona">
                    Meet Michelle
                </p>
                <div className="mb-5"></div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <User className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Michelle is a Sabrina Carpenter fan who loves doing cardio.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <Target className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">She wants to make a playlist to vibe to during her 45-minute cardio session.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <Ruler className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">She’s 5&apos;3&quot; and runs at a slower pace than most fitness influencers, so she needs to customize her playlist to account for her height.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <ListMusic className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">She doesn’t like some of Sabrina’s songs and wants to remove them, and add more songs from different artists.</p>
                    </div>
                </div>

                <div className="mb-16"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="brainstorm">
                    Brainstorming solutions
                </p>
                <div className="mb-5"></div>
                <div className="bg-[var(--container-bg-2)] p-8 lg:p-14 flex flex-col gap-10">
                    <div>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">The solution must solve 2 main goals</p>
                        <div className="mb-4"></div>
                        <div className="w-full lg:w-[60%] grid grid-cols-2 lg:grid-cols-4 gap-3">
                            <ImageZoom>
                                <Image src="/stickie-g-1.png" width={1469} height={1469} className="w-full h-auto shadow-lg" alt="Goal 1"/>
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/stickie-g-2.png" width={1469} height={1469} className="w-full h-auto shadow-lg" alt="Goal 2"/>
                            </ImageZoom>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Possible solutions include</p>
                        <div className="mb-4"></div>
                        <div className="w-full lg:w-[60%] grid grid-cols-2 lg:grid-cols-4 gap-3">
                            <ImageZoom>
                                <Image src="/stickie-sol-1.png" width={1469} height={1469} className="w-full h-auto shadow-lg" alt="Solution idea 1"/>
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/stickie-sol-2.png" width={1469} height={1469} className="w-full h-auto shadow-lg" alt="Solution idea 2"/>
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/stickie-sol-3.png" width={1469} height={1469} className="w-full h-auto shadow-lg" alt="Solution idea 3"/>
                            </ImageZoom>
                        </div>
                    </div>
                </div>

                <div className="mb-19"></div>

                <hr className="border-[var(--nav-border)]" />

                <div className="mb-15"></div>

                <p className="text-3xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="solution">
                    What card.io does
                </p>
                <div className="mb-4"></div>
                <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row p-4 border-1 rounded-xl lg:justify-between lg:items-center">
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Personalized, colour-coded cardio playlists with real-time support while running.</p>
                    <MyButton variant="secondary" icon={SquareArrowOutUpRight} text="View prototype on Figma" link={PROTOTYPE_URL} target="_blank" textSize="text-sm"/>
                </div>
                <div className="mb-8"></div>

                <div>
                    <div className="bg-[var(--container-bg-2)] flex justify-center items-center p-8 lg:p-14">
                        <div className="w-full lg:w-[45%] grid grid-cols-2 gap-4">
                            <video src="/sol-1.mp4" autoPlay muted loop playsInline className="w-full object-cover rounded-2xl" />
                            <ImageZoom>
                                <Image src="/sol-11.png" width={1104} height={2312} className="w-full h-auto rounded-2xl" alt="card.io generated playlist"/>
                            </ImageZoom>
                        </div>
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Automatically creates organized, colour-coded playlists based on users’ music preferences, and suggests songs with a similar BPM range to make customizing easier.</p>

                    <div className="bg-[var(--container-bg-2)] flex justify-center items-center p-8 lg:p-14">
                        <div className="w-full lg:w-[65%] grid grid-cols-3 gap-4">
                            <ImageZoom>
                                <Image src="/sol-21.png" width={1104} height={2312} className="w-full h-auto rounded-2xl" alt="card.io questionnaire step 1"/>
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/sol-22.png" width={1104} height={2312} className="w-full h-auto rounded-2xl" alt="card.io questionnaire step 2"/>
                            </ImageZoom>
                            <ImageZoom>
                                <Image src="/sol-23.png" width={1104} height={2312} className="w-full h-auto rounded-2xl" alt="card.io questionnaire step 3"/>
                            </ImageZoom>
                        </div>
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">A questionnaire collects users’ physical attributes to create a more personalized playlist.</p>

                    <div className="bg-[var(--container-bg-2)] flex justify-center items-center p-8 lg:p-14">
                        <div className="w-full lg:w-[45%] grid grid-cols-2 gap-4">
                            <video src="/sol-3.mp4" autoPlay muted loop playsInline className="w-full object-cover rounded-2xl" />
                            <ImageZoom>
                                <Image src="/sol-3.png" width={1104} height={2312} className="w-full h-auto rounded-2xl" alt="card.io running report"/>
                            </ImageZoom>
                        </div>
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">Real-time report while running makes testing easier: session progress, current BPM, and treadmill settings (speed, incline).</p>

                    <div className="bg-[var(--container-bg-2)] flex justify-center items-center p-8 lg:p-14">
                        <div className="w-[50%] lg:w-[22%]">
                            <video src="/sol-4.mp4" autoPlay muted loop playsInline className="w-full object-cover rounded-2xl" />
                        </div>
                    </div>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">“Manual Mode” lets Michelle freely mix artists, albums and genres while keeping all the support features above.</p>
                </div>

                <div className="mb-18"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="testing">
                    First prototype & user testing
                </p>
                <div className="mb-4"></div>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I conducted a heuristic evaluation with another UX designer, along with 2 in-person user testing sessions, to discover issues with the first iteration.</p>
                <div className="mb-6"></div>
                <div className="bg-[var(--container-bg-2)] flex justify-center items-center p-8 lg:p-14">
                    <div className="w-[50%] lg:w-[22%]">
                        <video src="/draft.mp4" autoPlay muted loop playsInline className="w-full object-cover rounded-2xl" />
                    </div>
                </div>
                <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">First iteration of card.io.</p>

                <div className="p-8 border-1 rounded-xl flex flex-col gap-y-3">
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">Heuristic issue</p>
                    <p className="text-md text-[var(--colour-bodytext)] leading-loose">Using a slide bar as a progress indicator gives a false impression.</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">The straight slide bar resembles the draggable bars on platforms like YouTube or Netflix. But in card.io, it functions solely as a progress indicator and isn’t interactive.</p>
                    <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <ImageZoom>
                            <Image src="/slidebar.png" width={1104} height={2312} className="w-full rounded-xl" alt="card.io slide bar"/>
                        </ImageZoom>
                        <ImageZoom>
                            <Image src="/youtube.png" width={1104} height={2312} className="w-full rounded-xl" alt="YouTube scrubber"/>
                        </ImageZoom>
                    </div>
                </div>
                <div className="mb-6"></div>
                <div className="bg-[var(--container-bg-2)] flex justify-center items-center p-8 lg:p-14">
                    <div className="w-full lg:w-[45%] grid grid-cols-2">
                        <ImageZoom>
                            <Image src="/ut-1.png" width={1469} height={1996} className="w-full h-auto -rotate-6 shadow-lg" alt="User testing theme 1"/>
                        </ImageZoom>
                        <ImageZoom>
                            <Image src="/ut-2.png" width={1469} height={1964} className="w-full h-auto rotate-10 shadow-lg" alt="User testing theme 2"/>
                        </ImageZoom>
                    </div>
                </div>
                <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-6">2 reoccurring themes from user testing.</p>

                <div className="mb-12"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="improvements">
                    3 key UX improvements
                </p>
                <div className="mb-6"></div>

                <p className="text-md text-[var(--colour-bodytext)] leading-loose">1. From scrubber to a circular design</p>
                <div className="mb-4"></div>
                <div className="bg-[var(--container-bg-2)] flex justify-center items-center p-8 lg:p-14">
                    <div className="w-full lg:w-[45%] grid grid-cols-2 gap-4">
                        <ImageZoom>
                            <Image src="/draft.png" width={1104} height={2312} className="w-full h-auto rounded-2xl" alt="Before: scrubber"/>
                        </ImageZoom>
                        <ImageZoom>
                            <Image src="/sol-3.png" width={1104} height={2312} className="w-full h-auto rounded-2xl" alt="After: circular progress"/>
                        </ImageZoom>
                    </div>
                </div>
                <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose mb-4">Before and after.</p>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <Gauge className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">More conventional, non-interactive progress indicator.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <Info className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Removes confusion with the progress bars of streaming services.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <Eye className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Fits a thicker bezel, improving glanceability.</p>
                    </div>
                </div>

                <div className="mb-14"></div>

                <p className="text-md text-[var(--colour-bodytext)] leading-loose">2. From tapping to swiping</p>
                <div className="mb-4"></div>
                <div className="bg-[var(--container-bg-2)] flex justify-center items-center p-8 lg:p-14">
                    <div className="w-[50%] lg:w-[22%]">
                        <video src="/swiping.mp4" autoPlay muted loop playsInline className="w-full object-cover rounded-2xl" />
                    </div>
                </div>
                <div className="mb-4"></div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <Hand className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Large interaction area, hard to miss.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <Target className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Low precision, high accuracy (compared to tapping, which requires high precision).</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <Gauge className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Easy to interact with during intense physical activity.</p>
                    </div>
                </div>

                <div className="mb-14"></div>

                <p className="text-md text-[var(--colour-bodytext)] leading-loose">3. Chunking information</p>
                <div className="mb-4"></div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <ListMusic className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Instead of showing all information at once, sort it into 3 groups separated by a swipe.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <Eye className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Reduces visual clutter, improving glanceability during intense running.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-5">
                        <Gauge className="w-5 h-5 text-[var(--colour-bodytext)]" />
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Resembles a modern treadmill interface.</p>
                    </div>
                </div>

                <div className="mb-18"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="reflection-corner">
                    Reflection corner
                </p>
                <div className="mb-5"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-3">
                        <Accessibility className="w-5 h-5 text-[var(--colour-bodytext)] mb-2"/>
                        <p className="text-md text-[var(--colour-bodytext)] leading-loose">Looking back...</p>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I would follow WCAG standards more closely (using Figma plugins like A11y Colour Contrast Checker and A11y Text), look for better ways to support customizing beyond suggesting songs with a similar BPM, and run more user testing to gather data for the questionnaire.</p>
                    </div>
                    <div className="p-8 border-1 rounded-xl flex flex-col gap-y-3">
                        <Lightbulb className="w-5 h-5 text-[var(--colour-bodytext)] mb-2"/>
                        <p className="text-md text-[var(--colour-bodytext)] leading-loose">Takeaways</p>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Design with a clear goal in mind. Pay attention to every step, as it will all come together and have to make sense in the end. And always design for accessibility.</p>
                    </div>
                </div>

                <div className="mb-25"></div>

                <p className="text-2xl text-[var(--colour-bodytext)] leading-loose font-semibold tracking-tight" id="other-works">
                    Other works
                </p>
                <div className="mb-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-3">
                    <ProjectThumbnail link="rules" name="Knox Manage's geofence creation" desc="Enabling geography-based device management" videoSrc="/geofence.mp4" target="_self"/>
                    <ProjectThumbnail link="organizations" name="Knox Manage's organizations table" desc="Visualizing blast radius across device management levels" videoSrc="/organizations.mp4" target="_self"/>
                    <ProjectThumbnail link="knoxagent" name="Samsung Knox AI's interactive widgets" desc="Reusable chassis for Knox Cloud Services' AI assistant" imageSrc="/yuhh.png" target="_self"/>
                </div>

                <div className="mb-25"></div>
            </div>
        </div>
    </div>
  );
}
