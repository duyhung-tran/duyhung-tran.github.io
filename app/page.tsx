"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import ProjectThumbnail2 from "@/components/project-thumbnail2";
import SlideUp from "@/components/slide-up";
import { useEffect, useState } from "react";
import SlideUpNoThres from "@/components/slide-up-nothres";
import { useTheme } from "next-themes";
import MyNav2 from "@/components/nav2";
import ProjectThumbnail from "@/components/project-thumbnail";
import { ThemeSelector } from "@/components/ui/shadcn-io/colour-toggle-button";
import { ThemeToggleButton } from "@/components/ui/shadcn-io/theme-toggle-button";
import Testimonial from "@/components/testimonial";

export default function Home2() {
  const [animate, setAnimate] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <div className="flex items-center justify-center" id="top">
        <MyNav2 variant="Home"/>
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-[85%] 2xl:w-[80%] mt-28">
            <SlideUpNoThres>
              <div className={`w-full flex items-center relative justify-between`}>
                <div className="flex justify-start items-start" >
                  <Image src="/yay.jpg" width={3099} height={3363} className="w-[64px] aspect-square mb-2 rounded-2xl shadow-xl" alt="Hung Tran"/> 
                </div>
                <div className="flex justify-end">
                  <MyButton variant="blue-button-outline" text="About me" link="about" target="_self" textSize="text-sm"/>
                  <div className="ml-4"></div>
                  <MyButton variant="blue-button" text="Resume" link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" textSize="text-sm" target="_blank"/>
                </div>
              </div>

              <div className="mb-12"></div>

              <div className="flex justify-between">
                <p className="text-md font-semibold text-[var(--colour-pure)] leading-loose">Hi, my name is Hung.</p>
              </div>
              <div className="mb-9"></div>
              <div className="w-full md:w-[75%]">
                <p className="text-md text-[var(--colour-bodytext)] leading-loose">As an overthinker, I think a lot about all my interactions... probably more than I should.</p>
                {/* <p className="text-md text-[var(--colour-bodytext)] leading-loose">Luckily, that's also my job. I'm a UX designer, previously at <span className="inline-block"><MyButton link="https://fraserhealth.ca/" target="_blank" variant="hyperlink" text="Fraser Health" textSize="text-md"/></span>, currently at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="hyperlink" text="Samsung" textSize="text-md"/></span>.</p> */}
                <p className="text-md text-[var(--colour-bodytext)] leading-loose">Luckily, that's also my job. I'm a UX designer, currently at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="hyperlink" text="Samsung" textSize="text-md"/></span>.</p>
              </div>
              <div className="mb-9"></div>
              <div>
                {/* <p className="text-md text-[var(--colour-bodytext)]">Good things start with a hello - whether through an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="email" textSize="text-md"/></span>, a <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="hyperlink" text="LinkedIn" textSize="text-md"/></span> message, or my <span className="inline-block"><MyButton link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" target="_blank" variant="hyperlink" text="resume" textSize="text-md"/></span>!</p> */}
                {/* <p className="text-md text-[var(--colour-bodytext)]">See who's said hello before. View my <span className="inline-block"><MyButton link="#testimonials" target="_self" variant="hyperlink" text="testimonials" textSize="text-md"/></span>.</p> */}
                <p className="text-md text-[var(--colour-bodytext)]">Send me an <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="email" textSize="text-md"/></span>.</p>
                <p className="text-md text-[var(--colour-bodytext)]">Send me a message on <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="hyperlink" text="LinkedIn" textSize="text-md"/></span>.</p>
                <p className="text-md text-[var(--colour-bodytext)]">Check out my <span className="inline-block"><MyButton link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" target="_blank" variant="hyperlink" text="resume" textSize="text-md"/></span>.</p>
                {/* <p className="text-md text-[var(--colour-bodytext)]">View my <span className="inline-block"><MyButton link="#testimonials" target="_self" variant="hyperlink" text="testimonials" textSize="text-md"/></span>.</p> */}
              </div>
              <div className="mb-9"></div>
              <p className="text-md text-[var(--colour-bodytext-3)] leading-loose">Scroll down for works.</p>
              <div className="w-full hidden md:flex justify-start items-center mt-14 gap-4">
                <ThemeToggleButton
                  theme={theme === "light" ? "dark" : "light"}
                  onClick={() => {
                    const next = theme === "dark" ? "light" : "dark";
                    setTheme(next);
                  }}
                  variant="none"
                  start="center"
                  className="hover:cursor-pointer"
                  showLabel={false}
                />
                <ThemeSelector/>
              </div>
            </SlideUpNoThres>

            <div className="mb-45"></div>

            {/* <Heading text="These are what I have done." variant="black"/>
            <div className="mb-12"></div> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-20">
              <SlideUpNoThres>
                <ProjectThumbnail2 isLink="video-link" link="rules" name="Samsung Knox Manage: Rules" desc="Designed a device management feature that triggers actions when specific conditions are met (time, location, device status, etc.)" imageSrc="/Rule video.mp4" imageSrcPoster="rule-poster.png" imageSrcDark="/Rule video - d.mp4" imageSrcPosterDark="rule-poster - d.png" target="_self"/>
              </SlideUpNoThres>
              <SlideUpNoThres>
                  <ProjectThumbnail2 isLink="image-link" link="organizations" name="Samsung Knox Manage: Organizations" desc="Designed a scalable, design-system–ready component that visualizes the inheritance logic among parent-child entities." imageSrc="/organize.png" imageSrcDark="/organize - d.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
              </SlideUpNoThres>
              <SlideUp>
                  <ProjectThumbnail2 isLink="video-link" link="cardio" name="card.io" desc="Designed a Spotify feature that guides runners in creating personalized cardio playlists, helping them feel confident and in control." imageSrc="/cardio video.mp4" imageSrcPoster="/cardio-poster.png" imageSrcDark="/cardio video - d.mp4" imageSrcPosterDark="/cardio-poster - d.png" target="_self"/>
              </SlideUp>
              {/* <SlideUp>
                  <ProjectThumbnail2 isLink="image-link" link="" name="Samsung Health (coming soon)" desc="Researched user needs, wellness trends, and competitor offerings to inform future Samsung Health wearable experiences, including Galaxy Watch & Galaxy Ring." imageSrc="/shealth.png" imageSrcPoster="" imageSrcDark="" imageSrcPosterDark="" target="_self"/>
              </SlideUp> */}
            </div>

            <div className="mb-45"></div>

            {/* <Heading text="My other work spans development, visual design, and service design." variant="black"/>
            <div className="mb-12"></div> */}
            <p className="text-lg text-[var(--colour-bodytext)] leading-loose mb-12">My other work spans development, visual design, and service design.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-15 mt-12">
              <SlideUp>
                  <ProjectThumbnail isLink="image-link" link="https://drive.google.com/file/d/1d0jGR0QJN3mzwX6o9n0C54g6aHej0I9l/view" name="Full stack" desc="React Native note-taking app, integrating Apple Maps API, Text-to-speech API, and Firebase." imageSrc="/memorymate.png" imageSrcDark="/memorymate - d.png" imageSrcPoster="" imageSrcPosterDark="" target="_blank"/>
              </SlideUp>
              <SlideUp>
                  <ProjectThumbnail isLink="image-link" link="visuals" name="Visual design" desc={`I like to play around with visual design and motions. Here's the damage.`} imageSrc="/visuall.png" imageSrcDark="/visuall - d.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
              </SlideUp>
              <SlideUp>
                  <ProjectThumbnail isLink="image-link" link="servicedesign" name="Service design" desc="A cooling initiative helping neighbourhood houses protect vulnerable communities from extreme heat." imageSrc="/cool-tgt.png" imageSrcDark="/organize - d.png" imageSrcPoster="" imageSrcPosterDark="" target="_self"/>
              </SlideUp>
            </div>

            <div className="mb-45" id="testimonials"></div>

            <div className="mb-12">
              <p className="text-lg text-[var(--colour-bodytext)] leading-loose mb-2">They said it, not me.</p>
              {/* <Heading text="They said it, not me." variant="black"/> */}
              <p className="text-md text-[var(--colour-bodytext-3)] leading-loose">Testimonials from those I reported to.</p>
            </div>

            <SlideUp>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="flex flex-col gap-5">
                    <Testimonial name="Tian Jia" job="Senior UX Designer, UX Manager" company="Samsung" text={<>Hung has demonstrated <span className="underline decoration-[var(--main-colour)] underline-offset-4 font-semibold">a strong talent for both UX research and graphical UI tasks</span>. His ability to analyze user needs and translate them into intuitive, visually appealing designs has been impressive. <br /> <div className="mt-5"></div> Overall, his dedication and versatility make him a valuable asset to any design team.</>} imgSrc="/tian.jpeg"/>
                    {/* <Testimonial name="Tian Jia" job="Senior UX Designer, UX Lead" company="Samsung" text={<>Hung has demonstrated a strong talent for both UX research and graphical UI tasks. His ability to analyze user needs and translate them into intuitive, visually appealing designs has been impressive. <br /> <div className="mt-5"></div> Overall, his dedication and versatility make him a valuable asset to any design team.</>} imgSrc="/tian.jpeg"/> */}
                </div>
                {/* <div className="flex flex-col gap-5">
                  <SlideUp>
                    <Testimonial name="Andrea Lin" job="Senior UX Designer" company="Samsung" text="Hung is a dumb ho." imgSrc="/andrea.jpeg"/>
                  </SlideUp>
                  <SlideUp>
                    <Testimonial name="Jessica Yuki Huang" job="Senior UX Designer" company="Samsung" text="Hung is a dumb ho." imgSrc="/jessica.jpeg"/>
                  </SlideUp>
                </div> */}
                <div className="flex flex-col gap-5">
                    <Testimonial name="Thomas Nelles" job="Senior Communications Consultant" company="Fraser Health" text={<>From designing a multi-page document for our Indigenous Health team to crafting a Urgent Care video, <span className="underline decoration-[var(--main-colour)] underline-offset-4 font-semibold">his clients have been very impressed with his work to date</span>. He adapts to changing timelines easily including timely requests and juggling multiple projects. <br /> <div className="mt-5"></div>His calm demeanor and ability to clearly communicate his working progress are just some of his strengths.</>} imgSrc="/thomas.jpeg"/>
                    {/* <Testimonial name="Thomas Nelles" job="Senior Communications Consultant" company="Fraser Health" text={<>From designing a multi-page document for our Indigenous Health team to crafting a Urgent Care video, his clients have been very impressed with his work to date. He adapts to changing timelines easily including timely requests and juggling multiple projects. <br /> <div className="mt-5"></div> His calm demeanor and ability to clearly communicate his working progress are just some of his strengths.</>} imgSrc="/thomas.jpeg"/> */}
                </div>
                <div className="flex flex-col gap-5">
                    <div className="h-fit bg-[var(--container-bg)] shadow-[0px_0px_15px_rgba(0,0,0,0.01)] px-7 py-6 rounded-3xl">
                      <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose">This spot is for you :"&#41;</p> 
                      <div className="mb-5"></div>
                      <p className="text-sm text-[var(--colour-bodytext-3)] leading-loose">Let's build something great together! I’d love to hear from you via my <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="email" textSize="text-md"/></span>, or <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="hyperlink" text="LinkedIn" textSize="text-md"/></span>.</p> 
                    </div>
                </div>
              </div>
            </SlideUp>
            <Footer/>
        </div>
    </div>
  );
}

