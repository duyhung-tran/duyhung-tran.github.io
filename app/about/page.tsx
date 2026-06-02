"use client";

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import MyNav2 from "@/components/nav2";
import AboutHero from "@/components/about-hero";
import Experience from "@/components/experience";
import { useState } from "react";

export default function About() {
    const [showAlbums, setShowAlbums] = useState(false);
    const [showShows, setShowShows] = useState(true);
    const [showBooks, setShowBooks] = useState(false);
    const [hoveredAlbum, setHoveredAlbum] = useState<string | null>(null);
    const [hoveredShow, setHoveredShow] = useState<string | null>(null);
    const [hoveredBook, setHoveredBook] = useState<string | null>(null);
    const albums = [
        { src: '/life support.webp', name: 'Life Support' },
        { src: '/red.jpeg', name: "Red (Taylor's Version)" },
        // { src: '/dw.png', name: 'Dangerous Woman' },
        { src: '/sbs.png', name: 'Silence Between Songs' },
        { src: '/think later.jpeg', name: 'THINK LATER' },
        // { src: '/eics.png', name: 'emails i can’t send' },
        // { src: '/1989.jpeg', name: "1989 (Taylor's Version)" },
        { src: '/sctw.png', name: 'So Close To What' },
        { src: '/gracie.png', name: 'The Secret Of Us' },
    ];

    const shows = [
        { src: '/devi.png', name: 'Never Have I Ever' },
        { src: '/dho.png', name: 'Desperate Housewives' },
        { src: '/ted.png', name: 'How I Met Your Mother' },
        // { src: '/nakamura.png', name: 'Go for it, Nakamura-kun!' },
        { src: '/mf.png', name: 'Modern Family' },
        { src: '/gng.png', name: 'Ginny & Georgia' },
        { src: '/nakamura.png', name: 'Go for it, Nakamura-kun!' },
    ];

    const books = [
        { src: '/hl.jpg', name: 'Heartless' },
        { src: '/thoii.png', name: 'The Half Of It' },
        { src: '/twbf.jpg', name: 'This Will Be Fun' },
        { src: '/tnc.jpg', name: 'The Night Circus' },
        { src: '/tml.jpg', name: 'The Midnight Library' },
    ];

    return (
        <div className="flex items-center justify-center flex-col">
            <MyNav2 variant="About to home" />

            <div className="px-10 md:w-2/3 md:px-0 lg:w-[85%] 2xl:w-[80%] flex flex-col justify-center items-center">
                <div className="w-full mt-6 mb-9 flex justify-between items-center">
                    <MyButton variant="hyperlink" text="Return to home" link="" textSize="text-sm" target="_self"/>
                    <div className="flex">
                        <MyButton variant="blue-button" text="Resume" link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" textSize="text-sm" target="_blank"/>
                    </div>
                </div>
                <div className="mb-20"></div>
                <div className="w-[89%] 2xl:w-[93%]">
                    <AboutHero/>
                </div>
                <div className="mb-20 2xl:mb-25"></div>
            </div>

            {/* <SlideUpScroll> */}
            <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-1/3 2xl:w-[30%] mt-10">
                <Heading text="Hi, my name is Hung." variant="black"/>
                {/* <p className="text-lg text-[var(--colour-bodytext)] leading-loose mb-6">Hi, my name is Hung.</p> */}
                {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-6">I&rsquo;m a UX designer. Previously, I designed at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="hyperlink" text="Samsung" textSize="text-sm"/></span> and <span className="inline-block"><MyButton link="https://fraserhealth.ca/" target="_blank" variant="hyperlink" text="Fraser Health" textSize="text-md"/></span>.</p> */}
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">For me, designing an experience is like telling a story - with people, technology, and context as threads of different colours and textures.</p>
                {/* <div className="mb-6"></div> */}
                {/* <p className="text-sm text-[var(--colour-bodytext)] leading-loose">I have been playing with those threads since childhood. From posting my self-important, fictional stories to Wattpad, to now designing actual experiences as a UX designer - where I connect users, technology, and context the way a story connects its characters and their journeys.</p> */}
                <div className="mb-6"></div>

                {/* <div className="">
                    <p className="text-sm text-[var(--colour-bodytext)]">Send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="email" textSize="text-sm"/></span>.</p>
                    <p className="text-sm text-[var(--colour-bodytext)]">Send me a message on <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="hyperlink" text="LinkedIn" textSize="text-sm"/></span>.</p>
                    <p className="text-sm text-[var(--colour-bodytext)]">Check out my <span className="inline-block"><MyButton link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" target="_blank" variant="hyperlink" text="resume" textSize="text-sm"/></span>.</p>
                </div> */}

                <p className="text-sm text-[var(--colour-bodytext)]">Our first chapter has to start somewhere - maybe an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="email" textSize="text-sm"/></span>, a message on <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="hyperlink" text="LinkedIn" textSize="text-sm"/></span>, or my <span className="inline-block"><MyButton link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" target="_blank" variant="hyperlink" text="resume" textSize="text-sm"/></span>?</p>
                

                <div className="mb-25"></div>
                <Heading text="Where I have been" variant="black"/>
                {/* <p className="text-lg text-[var(--colour-bodytext)] leading-loose mb-6">Where I have been.</p> */}
                {/* <div className="flex flex-col gap-5 md:gap-1">
                    <Experience job="UX designer" company="Samsung" time="2026" companyLink="https://research.samsung.com/srca"/>
                    <Experience job={<>UX designer <span className="text-[var(--colour-bodytext-3)]">(intern)</span></>} company="Samsung" time="2025" companyLink="https://research.samsung.com/srca"/>
                    <Experience job={<>Visual designer <span className="text-[var(--colour-bodytext-3)]">(intern)</span></>} company="Fraser Health" time="2023-2024" companyLink="https://fraserhealth.ca/"/>
                    <Experience job="Visual designer" company="Douglas College, Athletics" time="2022-2023" companyLink="https://douglascollegeroyals.ca/landing/index"/>
                    <Experience job="Visual designer" company="University of Greenwich" time="2020-2021" companyLink="https://greenwich.edu.vn/en/about-greenwich-vietnam/"/>
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-[2.5fr_2fr_1fr] w-full gap-y-2">
                    <div className="w-full flex items-center -mb-1 md:mb-0">
                        <MyButton link="https://research.samsung.com/srca" target="_blank" variant="hyperlink" text="Samsung" textSize="text-sm"/>
                    </div>
                    <div className="w-full flex items-center">
                        <p className="text-sm text-[var(--colour-bodytext)]">UX designer</p>
                    </div>
                    <div className="w-full flex items-center md:justify-end">
                        <p className="text-sm text-[var(--colour-bodytext-3)]">2026</p>
                    </div>
                    <div></div>
                    <div className="w-full flex items-center">
                        <p className="text-sm text-[var(--colour-bodytext)]">UX designer <span className="text-[var(--colour-bodytext-3)]">(intern)</span></p>
                    </div>
                    <div className="w-full flex md:justify-end">
                        <p className="text-sm text-[var(--colour-bodytext-3)]">2025</p>
                    </div>
                </div>

                <div className="mb-5"></div>
                <div className="border-b-1 border-[var(--nav-border)]"></div>
                <div className="mb-5"></div>

                <div className="grid grid-cols-1 md:grid-cols-[2.5fr_2fr_1fr] w-full gap-y-2">
                    <div className="w-full flex items-center -mb-1 md:mb-0">
                        <MyButton link="https://fraserhealth.ca/" target="_blank" variant="hyperlink" text="Fraser Health" textSize="text-sm"/>
                    </div>
                    <div className="w-full flex items-center">
                        <p className="text-sm text-[var(--colour-bodytext)]">Visual designer <span className="text-[var(--colour-bodytext-3)]">(intern)</span></p>
                    </div>
                    <div className="w-full flex items-center md:justify-end">
                        <p className="text-sm text-[var(--colour-bodytext-3)]">2023-2024</p>
                    </div>
                </div>

                <div className="mb-5"></div>
                <div className="border-b-1 border-[var(--nav-border)]"></div>
                <div className="mb-5"></div>

                <div className="grid grid-cols-1 md:grid-cols-[2.5fr_2fr_1fr] w-full gap-y-2">
                    <div className="w-full flex items-center -mb-1 md:mb-0">
                        <MyButton link="https://douglascollegeroyals.ca/landing/index" target="_blank" variant="hyperlink" text="Douglas College" textSize="text-sm"/>
                    </div>
                    <div className="w-full flex items-center">
                        <p className="text-sm text-[var(--colour-bodytext)]">Visual designer</p>
                    </div>
                    <div className="w-full flex items-center md:justify-end">
                        <p className="text-sm text-[var(--colour-bodytext-3)]">2022-2023</p>
                    </div>
                </div>

                <div className="mb-5"></div>
                <div className="border-b-1 border-[var(--nav-border)]"></div>
                <div className="mb-5"></div>

                <div className="grid grid-cols-1 md:grid-cols-[2.5fr_2fr_1fr] w-full gap-y-2">
                    <div className="w-full flex items-center -mb-1 md:mb-0">
                        <MyButton link="https://greenwich.edu.vn/en/about-greenwich-vietnam/" target="_blank" variant="hyperlink" text="University of Greenwich" textSize="text-sm"/>
                    </div>
                    <div className="w-full flex items-center">
                        <p className="text-sm text-[var(--colour-bodytext)]">Visual designer</p>
                    </div>
                    <div className="w-full flex items-center md:justify-end">
                        <p className="text-sm text-[var(--colour-bodytext-3)]">2020-2021</p>
                    </div>
                </div>

                <div className="" id="story"></div>
                <div className="mb-30"></div>

                <Heading text="My story" variant="black"/>

                <div className="w-full flex items-center justify-center">
                    <div className="w-full h-auto relative mt-3 mb-9">
                        <Image src="/small.jpg" width={2040} height={1179} alt="hung tran" className="object-cover rounded-3xl shadow-md mb-3" style={{ filter: 'contrast(80%)' }}/>
                        <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose">Me but #2008 ✨</p>
                        {/* <Polaroid imageSrc="/small.jpg" alt="hung tran" desc="Summer 2008 🐦" angle={-4} textSize="text-xl"/> */}
                    </div>
                </div>

                <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">Born and raised in Vietnam, I spent my childhood full of curiosity and bold ideas, often quietly observing the world around me.</p>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">In a world where quietness is considered absence, where presence is measured by volume, a quiet child needs to look out for themselves to avoid being left behind. They notice patterns, tone shifts, and emotions that pass too quickly for louder conversations to catch. Many of them learn empathy early - not because they are taught, but because they have to understand people without always being heard themselves.</p>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">(<MyButton variant="hyperlink" text="The Psychology of a Quiet Kid" textSize="font-sm" link="https://youtu.be/t4f2LLExHrY?si=BLNxWPEcgEFO1mQX" target="_blank" />, 2025)</p>
                <div className="mb-15"></div>
                
                <Heading text="Read rooms rather than dominate them" variant="black"/>
                {/* <p className="text-lg text-[var(--colour-bodytext)] leading-loose mb-6">Read rooms rather than dominate them.</p> */}
                <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">Growing up as one of those quiet kids meant learning to read rooms rather than dominate them.</p>
                <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">And I believe that way of seeing never really disappear!</p>
                <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">In UX design, understanding users often goes beyond what is said out loud. Insight can be found in hesitation before a click, in abandoned flows, or in moments where something feels off but goes unspoken.</p>
                <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">For many quiet kids, listening closely, sitting with uncertainty, and noticing subtle signals become familiar habits over time. In UX, those habits naturally translate into a way of designing that prioritizes care, empathy, and intention.</p>
                <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose"></p>
                <div className="mb-15"></div>

                <Heading text="Everything happens for a reason" variant="black"/>
                {/* <p className="text-lg text-[var(--colour-bodytext)] leading-loose mb-6">Everything happens for a reason.</p> */}
                <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">I&rsquo;m a firm believer of the saying: "Everything happens for a reason".</p>
                <p className="mb-4 text-sm text-[var(--colour-bodytext)] leading-loose">If you&rsquo;re still here reading my yapping session, maybe that&rsquo;s one of them, so please don&rsquo;t hesitate to <MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="reach out" textSize="text-sm"/>. Let&rsquo;s chat :)</p>


                <div className="mb-30"></div>
                <Heading text="If loving these is wrong, I don't wanna be right" variant="black"/>
                <div className="mb-8"></div>

                <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                        <p className="text-sm text-[var(--colour-bodytext-3)]">Albums</p>
                        <p className="text-sm text-[var(--colour-bodytext)]">
                            {hoveredAlbum || ' '}
                        </p>
                    </div>

                    <button
                        onClick={() => setShowAlbums(prev => !prev)}
                        className="text-sm bg-transparent rounded-full text-[var(--main-colour)] leading-loose hover:underline font-medium p-0 cursor-pointer"
                    >
                        {showAlbums ? "Hide" : "Show"}
                    </button>
                </div>
                <div className="mb-6"></div>
                {showAlbums && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-9">
                        {albums.map((album, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setHoveredAlbum(album.name)}
                                onMouseLeave={() => setHoveredAlbum(null)}
                                className="rounded-full aspect-square overflow-hidden flex justify-center items-center bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_40%),radial-gradient(circle,rgba(0,0,0),black)]"
                            >
                                <div className="rounded-full w-[93%] h-[93%] flex items-center justify-center border-2 border-[#303030]">
                                    {/* <div className="rounded-full w-[95%] h-[95%] flex items-center justify-center border-1  border-[#404040]"> */}
                                        <div className="rounded-full w-[95%] h-[95%] flex items-center justify-center border-1  border-[#303030]">
                                            <div className="rounded-full w-[55%] h-[55%] flex items-center justify-center border-2  border-[#303030]">
                                                <Image
                                                    src={album.src}
                                                    width={1179}
                                                    height={1179}
                                                    alt={album.name}
                                                    className="w-[90%] rounded-full object-cover duration-300 shadow-[0px_0px_15px_rgba(0,0,0,0.1)] transition-all transition-duration-300 filter-[contrast(90%)]"
                                                />
                                            </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="border-b-1 border-[var(--nav-border)] mb-6"></div>

                <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                        <p className="text-sm text-[var(--colour-bodytext-3)]">Shows</p>
                        <p className="text-sm text-[var(--colour-bodytext)]">
                            {hoveredShow || ' '}
                        </p>
                    </div>

                    <button
                        onClick={() => setShowShows(prev => !prev)}
                        className="text-sm bg-transparent rounded-full text-[var(--main-colour)] leading-loose hover:underline font-medium p-0 cursor-pointer"
                    >
                        {showShows ? "Hide" : "Show"}
                    </button>
                </div>
                <div className="mb-6"></div>
                {showShows && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-9">
                        {shows.map((show, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setHoveredShow(show.name)}
                                onMouseLeave={() => setHoveredShow(null)}
                                className="overflow-hidden rounded-3xl"
                            >
                                <Image
                                    src={show.src}
                                    width={1179}
                                    height={1179}
                                    alt={show.name}
                                    className="object-cover duration-300 shadow-[0px_0px_15px_rgba(0,0,0,0.03)] transition-all transition-duration-300 filter-[contrast(90%)]"
                                />
                            </div>
                        ))}
                    </div>
                )}

                <div className="border-b-1 border-[var(--nav-border)] mb-6"></div>

                <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                        <p className="text-sm text-[var(--colour-bodytext-3)]">Books</p>
                        <p className="text-sm text-[var(--colour-bodytext)]">
                            {hoveredBook || ' '}
                        </p>
                    </div>

                    <button
                        onClick={() => setShowBooks(prev => !prev)}
                        className="text-sm bg-transparent rounded-full text-[var(--main-colour)] leading-loose hover:underline font-medium p-0 cursor-pointer"
                    >
                        {showBooks ? "Hide" : "Show"}
                    </button>
                </div>
                <div className="mb-6"></div>
                {showBooks && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-9">
                        {books.map((book, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setHoveredBook(book.name)}
                                onMouseLeave={() => setHoveredBook(null)}
                                className="flex items-center justify-center rounded-2xl overflow-hidden aspect-auto py-4 px-6"
                            >
                                <Image
                                    src={book.src}
                                    width={1179}
                                    height={1179}
                                    alt={book.name}
                                    className="h-full w-auto rounded-2xl origin-center rotate-6 shadow-[0px_0px_5px_rgba(0,0,0,0.2)] transition-all transition-duration-300 filter-[contrast(90%)]"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* <p className="text-lg text-[var(--colour-bodytext-3)] leading-loose mb-10">Outside of UX?</p> */}


                <div className="mb-33"></div>

                <div className="w-full flex items-center justify-center">
                    <MyButton variant="blue-button-outline" text="Return to home" link="" target="_self" textSize="text-sm"/>
                </div>

                <div className="-mb-2"></div>

                <Footer/>
            </div>
            {/* </SlideUpScroll> */}
        </div>
    );
}
