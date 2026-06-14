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

export default function Cardio() {
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
                                <Heading text="card.io" variant="black"/>
                            </div>
                            <div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">card.io is catered towards the fitness community and aims to improve the cardio running experience with personalized music selection and playlists.</p>
                                <div className="mb-12"></div>
                                <MyButton variant="blue-button-outline" text="View prototype on Figma" link="https://www.figma.com/proto/5SjXuZ0MgUNMOFRmh3qOOY/card.io?page-id=0%3A1&node-id=24-151&viewport=779%2C110%2C0.2&t=Yy6S9WYqbPXyKWdL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=24%3A151" textSize="text-sm" target="blank"/>
                                <div className="mb-7"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-10"></div>

                    <div>
                        <video className="w-full h-full object-cover rounded-2xl" autoPlay muted loop playsInline poster="/cardio-wide-poster.png">
                            <source src="cardio video wide.mp4"type="video/mp4" />
                        </video>
                    </div>
                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="Why this topic?" variant="black"/>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">As a high school senior during the 2020 pandemic, I had more free time than ever. And like many others, I found myself searching Chloe Ting home workout (I know, how original) on YouTube, looking for a way to feel better and more in control about my physical health.</p>
                            <div className="mb-6"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">That moment wasn’t unique, it was part of a larger shift. As the world slowed down, people began to reflect more deeply on their well-being as a form of self-care. Social media played a key role, with influencers encouraging healthy habits through creative trends.</p>
                            <div className="mb-6"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">One that stood out was the rise of curated cardio playlists—energizing soundtracks that made workouts more engaging, especially on TikTok and Instagram.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Understanding the trend" variant="black"/>
                        </div>
                        <div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">The faster the song, the faster the treadmill.</p>
                            <div className="mb-6"></div>
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr] gap-x-3 items-center justify-between">
                                <div className="w-full grid grid-cols-3 gap-x-3">
                                    <video className={`w-full h-full object-cover rounded-2xl`} autoPlay muted loop playsInline>
                                        <source src="/context-vid-1.mp4" type="video/mp4" />
                                    </video>
                                    <video className={`w-full h-full object-cover rounded-2xl`} autoPlay muted loop playsInline>
                                        <source src="/context-vid-2.mp4" type="video/mp4" />
                                    </video>
                                    <video className={`w-full h-full object-cover rounded-2xl`} autoPlay muted loop playsInline>
                                        <source src="/context-vid-3.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="w-full hidden md:block">
                                    {(() => {
                                    const theme = localStorage.getItem("theme-class") || "";
                                    switch (theme) {
                                        case "pink":
                                        return <Image src="/context-pink.png" width={2985} height={2236} className="w-[85%] 2xl:w-[65%]" alt="Samsung Knox" />;
                                        case "green":
                                        return <Image src="/context-green.png" width={2985} height={2236} className="w-[85%] 2xl:w-[65%]" alt="Samsung Knox" />;
                                        case "orange":
                                        return <Image src="/context-orange.png" width={2985} height={2236} className="w-[85%] 2xl:w-[65%]" alt="Samsung Knox" />;
                                        default:
                                        return <Image src="/context.png" width={2985} height={2236} className="w-[85%] 2xl:w-[65%]" alt="Samsung Knox" />;
                                    }
                                    })()}
                                </div>
                            </div>
                            <div className="mb-8"></div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">The trend aims to create an engaging, fun running experience and motivate runners to finish their cardio session.</p>
                            <div className="mb-6"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Fitness influencers makes cardio playlists, where songs are organized to match different speed ranges (phases) of a typical cardio session.</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Many viewers struggle to stay motivated throughout their cardio sessions, and often cutting their workouts short. With the right music, runners can feel more energized and motivated - making it easier to push through.</p>
                            <div className="mb-6"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">This need had sparked the trend of cardio playlists.</p>
                            <div className="mb-6"></div>
                            {/* <MyButton text="Learn more about the effects music has on running" link="" target="_blank" variant="hyperlink" textSize="text-sm"/> */}

                            <div className="mb-20"></div>

                            {/* <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Observations</p>
                            <div className="mb-6"></div>
                            <div className="w-full grid grid-cols-3 gap-3">
                                <div className="flex flex-col h-full bg-[var(--container-bg)] px-7 py-7 rounded-2xl">
                                    <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Template for a “typical” cardio session?</p>
                                    <div className="mb-3"></div>
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Influencers follow a conventional template of a cardio session with 3 phases: Warm-up, Endurance and Cool-down.</p>
                                </div>
                                <div className="flex flex-col h-full bg-[var(--container-bg)] px-7 py-7 rounded-2xl">
                                    <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Requests for artist or album specific playlists.</p>
                                    <div className="mb-3"></div>
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Viewers usually ask influencers to make cardio playlists specific for their favourite artist or album.</p>
                                </div>
                                <div className="flex flex-col h-full bg-[var(--container-bg)] px-7 py-7 rounded-2xl">
                                    <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Strategically organized songs that can‘t be shuffled.</p>
                                    <div className="mb-3"></div>
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">The playlists are structured to match the current speed range. The faster the treadmill (MPH), the faster the song (BPM).</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="">
                            <Heading text="Research findings" variant="black"/>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I conducted 5 interviews with 5 users that identify themselves as fitness enthusiasts, and have participated in the trend on TikTok with their favourite fitness influencers. After the interviews, I categorized my data into 3 themes, and 1 driving insight.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-10"></div>

                <div className="w-[100%] bg-[var(--container-bg)] flex flex-col justify-center items-center p-10 pb-13 rounded-2xl">
                    <p className="text-sm text-[var(--main-colour)] leading-loose">Reoccurring themes</p>
                    <div className="mb-5 md:mb-10"></div>
                    <div className="w-full md:w-[65%] 2xl:w-[50%] grid grid-cols-3 -gap-x-10">
                        <ImageZoom>
                            <Image src="/stickie-1.png" width={1469} height={1469} className="w-full h-auto mb-2 rotate-6 shadow-lg" alt="Samsung Knox"/> 
                        </ImageZoom>
                        <ImageZoom>
                            <Image src="/stickie-2.png" width={1469} height={1779} className="w-full h-auto mb-2 -rotate-10 shadow-lg" alt="Samsung Knox"/> 
                        </ImageZoom>
                        <ImageZoom>
                            <Image src="/stickie-3.png" width={1469} height={1511} className="w-full h-auto mb-2 rotate-5 shadow-lg" alt="Samsung Knox"/> 
                        </ImageZoom>
                    </div>
                    <div className="w-full md:w-[50%]">
                        {(() => {
                            const theme = localStorage.getItem("theme-class") || "";
                            switch (theme) {
                                case "pink":
                                return <Image src="/arrows2-pink.png" width={2985} height={2236} className="w-full h-auto" alt="Samsung Knox" />;
                                case "green":
                                return <Image src="/arrows2-green.png" width={2985} height={2236} className="w-full h-auto" alt="Samsung Knox" />;
                                case "orange":
                                return <Image src="/arrows2-orange.png" width={2985} height={2236} className="w-full h-auto" alt="Samsung Knox" />;
                                default:
                                return <Image src="/arrows2.png" width={2985} height={2236} className="w-full h-auto" alt="Samsung Knox" />;
                            }
                        })()}
                    </div>
                    <div className="-mb-1 md:-mb-3"></div>
                    <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
                        <p className="text-sm text-[var(--main-colour)] leading-loose">Driving insight</p>
                        <div className="mb-2"></div>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose text-center">Influencer-made playlist is considered a good starting point, but personal customization is what makes a “good” cardio playlist.</p>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Synthesizing my findings" variant="black"/>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Now that I have a deeper understanding of my user, it's time to translate those data into a persona.</p>
                            <div className="mb-6"></div>
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 pb-8 rounded-2xl">
                                    <p className="text-sm text-[var(--main-colour)] leading-loose">Who she is</p>
                                    <div className="mb-2"></div>
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Michelle is a Sabrina Carpenter fan who loves doing cardio.</p>
                                </div>
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 pb-8 rounded-2xl">
                                    <p className="text-sm text-[var(--main-colour)] leading-loose">Her goal</p>
                                    <div className="mb-2"></div>
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">She wants to make a playlist to vibe to during her 45-minute cardio session.</p>
                                </div>
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 pb-8 rounded-2xl">
                                    <p className="text-sm text-[var(--main-colour)] leading-loose">Pain point</p>
                                    <div className="mb-2"></div>
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">She’s 5'3" and runs at a slower pace than most fitness influencers, so she needs to customize her playlist to account for her height.</p>
                                </div>
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 pb-8 rounded-2xl">
                                    <p className="text-sm text-[var(--main-colour)] leading-loose">Another pain point</p>
                                    <div className="mb-2"></div>
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">She doesn’t like some of Sabrina’s songs and wants to remove them, also add more songs from different artists.</p>
                                </div>
                            </div>
                            <div className="mb-3"></div>
                            <div className="bg-[var(--container-bg)] flex flex-col p-7 pb-8 rounded-2xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">Problem ⚠️</p>
                                <div className="mb-2"></div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Michelle feels frustrated because she doesn‘t have confidence in customizing & testing the playlist‘s effectiveness on her own.</p>
                            </div>
                            <div className="mb-3"></div>
                            <div className="bg-[var(--main-darkercolour)] flex flex-col p-7 pb-8 rounded-2xl">
                                <p className="text-sm text-white leading-loose">How might we...</p>
                                <div className="mb-2"></div>
                                <p className="text-lg text-white leading-loose">... make sure Michelle feels informed and confident in customizing & testing her own cardio playlists?</p>
                            </div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose"></p>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
                            <Heading text="Brainstorming my solutions" variant="black"/>
                        </div>
                        <div>
                            <div className="w-full bg-[var(--container-bg)] flex flex-col px-10 py-7 rounded-2xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">Solution must solve 2 main goals</p>
                                <div className="mb-5"></div>
                                <div className="w-full 2xl:w-[75%] grid grid-cols-2 md:grid-cols-4 gap-x-3">
                                    <ImageZoom>
                                        <Image src="/stickie-g-1.png" width={1469} height={1469} className="w-full h-auto mb-2 shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/stickie-g-2.png" width={1469} height={1469} className="w-full h-auto mb-2 shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                   <div></div>
                                   <div></div>
                                </div>
                                <div className="mb-10"></div>
                                <p className="text-sm text-[var(--main-colour)] leading-loose">Possible solutions include</p>
                                <div className="mb-5"></div>
                                <div className="w-full 2xl:w-[75%] grid grid-cols-2 md:grid-cols-4 gap-3">
                                    <ImageZoom>
                                        <Image src="/stickie-sol-1.png" width={1469} height={1469} className="w-full shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/stickie-sol-2.png" width={1469} height={1469} className="w-full shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/stickie-sol-3.png" width={1469} height={1469} className="w-full shadow-lg" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    {(() => {
                                        const theme = localStorage.getItem("theme-class") || "";
                                        switch (theme) {
                                            case "pink":
                                            return <Image src="/stickie-sol-note-pink.png" width={2985} height={2236} className="w-full mb-2" alt="Samsung Knox" />;
                                            case "green":
                                            return <Image src="/stickie-sol-note-green.png" width={2985} height={2236} className="w-full mb-2" alt="Samsung Knox" />;
                                            case "orange":
                                            return <Image src="/stickie-sol-note-orange.png" width={2985} height={2236} className="w-full mb-2" alt="Samsung Knox" />;
                                            default:
                                            return <Image src="/stickie-sol-note.png" width={2985} height={2236} className="w-full mb-2" alt="Samsung Knox" />;
                                        }
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-22 md:self-start">
                            <Heading text="What card.io does" variant="black"/>
                            <MyButton variant="hyperlink" text="View prototype on Figma" link="https://www.figma.com/proto/5SjXuZ0MgUNMOFRmh3qOOY/card.io?page-id=0%3A1&node-id=24-151&viewport=779%2C110%2C0.2&t=Yy6S9WYqbPXyKWdL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=24%3A151" textSize="text-sm" target="blank"/>
                            <div className="mb-9"></div>
                        </div>
                        <div>
                            <div className="w-full bg-[var(--container-bg)] p-10 flex flex-col justify-center items-center rounded-2xl">
                                <div className="w-full md:w-[45%] grid grid-cols-2 gap-x-4">
                                    <video className={`w-full object-cover rounded-2xl`} autoPlay muted loop playsInline>
                                        <source src="/sol-1.mp4" type="video/mp4" />
                                    </video>
                                    <ImageZoom>
                                        <Image src="/sol-11.png" width={1104} height={2312} className="w-full h-auto mb-2 rounded-2xl" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                </div>
                            </div>
                            <div className="mb-4"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Automatically create organized, colour-coded playlists based on users‘ music preferences.</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Makes customizing easier - Suggest songs with similar range of BPM.</p>

                            <div className="mb-20"></div>

                            <div className="w-full bg-[var(--container-bg)] p-10 flex flex-col justify-center items-center rounded-2xl">
                                <div className="w-full md:w-[65%] grid grid-cols-3 gap-x-4">
                                    <ImageZoom>
                                        <Image src="/sol-21.png" width={1104} height={2312} className="w-full h-auto mb-2 rounded-2xl" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/sol-22.png" width={1104} height={2312} className="w-full h-auto mb-2 rounded-2xl" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/sol-23.png" width={1104} height={2312} className="w-full h-auto mb-2 rounded-2xl" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                </div>
                            </div>
                            <div className="mb-4"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Offers questionnaire that collects users’ physical attributes data to create a more personalized playlist.</p>

                            <div className="mb-20"></div>

                            <div className="w-full bg-[var(--container-bg)] p-10 flex flex-col justify-center items-center rounded-2xl">
                                <div className="w-full md:w-[45%] grid grid-cols-2 gap-x-4">
                                    <video className={`w-full object-cover rounded-2xl`} autoPlay muted loop playsInline>
                                        <source src="/sol-3.mp4" type="video/mp4" />
                                    </video>
                                    <ImageZoom>
                                        <Image src="/sol-3.png" width={1104} height={2312} className="w-full h-auto mb-2 rounded-2xl" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                </div>
                            </div>
                            <div className="mb-4"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Makes testing easier - Real-time report during running.</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Report includes session’s progress, current BPM, current treadmill settings (speed, incline).</p>
                        
                            <div className="mb-20"></div>

                            <div className="w-full bg-[var(--container-bg)] p-10 flex flex-col justify-center items-center rounded-2xl">
                                <div className="w-[50%] md:w-[20%]">
                                    <video className={`w-full object-cover rounded-2xl`} autoPlay muted loop playsInline>
                                        <source src="/sol-4.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className="mb-4"></div>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Offers more freedom in creating mixed playlists with different artists, albums, genres, etc.</p>
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">With “Manual Mode”, Michelle can freely add any songs she likes to the cardio playlist while still having all the features above for support.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-22 md:self-start">
                            <Heading text="First prototype & User testing" variant="black"/>
                        </div>
                        <div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">This is the first iteration of card.io. I conducted a Heuristic evaluation session with another UX designer, along with 2 in-person user testing sessions to discover issues with this interface.</p>
                            <div className="mb-5"></div>
                            <div className="w-full bg-[var(--container-bg)] p-10 flex flex-col justify-center items-center rounded-2xl">
                                <div className="w-[50%] md:w-[20%]">
                                    <video className={`w-full object-cover rounded-2xl`} autoPlay muted loop playsInline>
                                        <source src="/draft.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className="mb-4"></div>
                            <div className="w-full bg-[var(--container-bg)] p-10 flex flex-col rounded-2xl">
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <ImageZoom>
                                        <Image src="/slidebar.png" width={1104} height={2312} className="w-full rounded-2xl" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/youtube.png" width={1104} height={2312} className="w-full rounded-2xl" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                </div>
                                <div className="w-full justify-center items-center z-2 hidden md:flex">
                                    {(() => {
                                        const theme = localStorage.getItem("theme-class") || "";
                                        switch (theme) {
                                            case "pink":
                                            return <Image src="/comparison-pink.png" width={2985} height={2236} className="w-[40%] 2xl:w-[30%]" alt="Samsung Knox" />;
                                            case "green":
                                            return <Image src="/comparison-green.png" width={2985} height={2236} className="w-[40%] 2xl:w-[30%]" alt="Samsung Knox" />;
                                            case "orange":
                                            return <Image src="/comparison-orange.png" width={2985} height={2236} className="w-[40%] 2xl:w-[30%]" alt="Samsung Knox" />;
                                            default:
                                            return <Image src="/comparison.png" width={2985} height={2236} className="w-[40%] 2xl:w-[30%]" alt="Samsung Knox" />;
                                        }
                                    })()}
                                </div>
                                <div className="mb-4"></div>
                                <p className="text-sm text-[var(--main-colour)] leading-loose">Heuristic issue</p>
                                <div className="mb-2"></div>
                                <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Using slide bar as progress indicator gives a false impression.</p>
                                <div className="mb-2"></div>
                                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">The straight slide bar in card.io resembles the draggable bars on platforms like YouTube or Netflix. But in card.io, it functions solely as a progress indicator and isn’t interactive.</p>
                            </div>
                            <div className="mb-4"></div>
                            <div className="w-[100%] bg-[var(--container-bg)] flex flex-col justify-center p-10 pb-15 rounded-2xl">
                                <p className="text-sm text-[var(--main-colour)] leading-loose">2 reoccurring themes from UT</p>
                                <div className="mb-10"></div>
                                <div className="w-full flex items-center justify-center">
                                    <div className="w-full md:w-[65%] 2xl:w-[45%] grid grid-cols-2 -gap-x-9">
                                        <ImageZoom>
                                            <Image src="/ut-1.png" width={1469} height={1996} className="w-full h-auto mb-2 -rotate-6 shadow-lg" alt="Samsung Knox"/> 
                                        </ImageZoom>
                                        <ImageZoom>
                                            <Image src="/ut-2.png" width={1469} height={1964} className="w-full h-auto mb-2 rotate-10 shadow-lg" alt="Samsung Knox"/> 
                                        </ImageZoom>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-22 md:self-start">
                            <Heading text="3 key UX improvements" variant="black"/>
                        </div>
                        <div>
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">1) From scrubber to a circular design.</p>
                            <div className="mb-6"></div>
                            <div className="w-full bg-[var(--container-bg)] p-10 flex flex-col justify-center items-center rounded-2xl">
                                <div className="w-full md:w-[75%] grid grid-cols-[1fr_2fr_2fr_1fr] gap-x-2 md:gap-x-4">
                                    {(() => {
                                        const theme = localStorage.getItem("theme-class") || "";
                                        switch (theme) {
                                            case "pink":
                                            return <Image src="/before1-pink.png" width={2985} height={2236} className="w-full h-auto mb-2" alt="Samsung Knox" />;
                                            case "green":
                                            return <Image src="/before1-green.png" width={2985} height={2236} className="w-full h-auto mb-2" alt="Samsung Knox" />;
                                            case "orange":
                                            return <Image src="/before1-orange.png" width={2985} height={2236} className="w-full h-auto mb-2" alt="Samsung Knox" />;
                                            default:
                                            return <Image src="/before1.png" width={2985} height={2236} className="w-full h-auto mb-2" alt="Samsung Knox" />;
                                        }
                                    })()}
                                    <ImageZoom>
                                        <Image src="/draft.png" width={1104} height={2312} className="w-full h-auto mb-2 rounded-2xl" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    <ImageZoom>
                                        <Image src="/sol-3.png" width={1104} height={2312} className="w-full h-auto mb-2 rounded-2xl" alt="Samsung Knox"/> 
                                    </ImageZoom>
                                    {(() => {
                                        const theme = localStorage.getItem("theme-class") || "";
                                        switch (theme) {
                                            case "pink":
                                            return <Image src="/after1-pink.png" width={2985} height={2236} className="w-full h-auto mb-2" alt="Samsung Knox" />;
                                            case "green":
                                            return <Image src="/after1-green.png" width={2985} height={2236} className="w-full h-auto mb-2" alt="Samsung Knox" />;
                                            case "orange":
                                            return <Image src="/after1-orange.png" width={2985} height={2236} className="w-full h-auto mb-2" alt="Samsung Knox" />;
                                            default:
                                            return <Image src="/after1.png" width={2985} height={2236} className="w-full h-auto mb-2" alt="Samsung Knox" />;
                                        }
                                    })()}
                                </div>
                            </div>
                            <div className="mb-3"></div>
                            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 rounded-2xl">
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">More conventional non interactive progress indicator.</p>
                                </div>
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 rounded-2xl">
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Remove confusion with the progress bar for streaming services.</p>
                                </div>
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 rounded-2xl">
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Able to incorporate a thicker bezel, improving glanceability.</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div className="mt-30">
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">2) From tapping to swiping.</p>
                            <div className="mb-6"></div>
                            <div className="w-full bg-[var(--container-bg)] p-10 flex flex-col justify-center items-center rounded-2xl">
                                <div className="w-full flex justify-center">
                                    <div className="w-[50%] md:w-[25%]">
                                        <video className={`w-full object-cover rounded-2xl`} autoPlay muted loop playsInline>
                                            <source src="/swiping.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3"></div>
                            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 rounded-2xl">
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Large interaction area, hard to miss.</p>
                                </div>
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 rounded-2xl">
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Low precision, high accuracy (compare to tapping which requires high precision).</p>
                                </div>
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 rounded-2xl">
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Easy to interact during intense physical activities.</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div className="mt-30">
                            <p className="text-lg text-[var(--colour-bodytext)] leading-loose">3) Chunking information.</p>
                            <div className="mb-6"></div>
                            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 rounded-2xl">
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Instead of showing all information at once, sort them into 3 groups separated by a swipe.</p>
                                </div>
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 rounded-2xl">
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Reduce visual clutter, improve glanceability during intense running.</p>
                                </div>
                                <div className="bg-[var(--container-bg)] flex flex-col h-full p-7 rounded-2xl">
                                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Resemblance to a modern treadmill interface.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-30"></div>

                <div className="w-full mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                        <div className="md:sticky md:top-25 md:self-start">
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

                <div className="mb-40"></div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-4">
                    <div className="md:sticky md:top-25 md:self-start">
                        <Heading text="My other projects" variant="black"/>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-15">
                        <ProjectThumbnail3 isLink="video-link" link="rules" name="Samsung Knox Manage: Rules" desc="Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)" imageSrc="/Rule video.mp4" imageSrcPoster="rule-poster.png" imageSrcDark="/Rule video - d.mp4" imageSrcPosterDark="rule-poster - d.png" target="_self"/>
                        <ProjectThumbnail3 isLink="image-link" link="organizations" name="Samsung Knox Manage: Organizations" desc="Designed a scalable, design-system–ready component that visualizes the inheritance logic among parent-child entities." imageSrc="/organize.png" imageSrcDark="/organize - d.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
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
