"use client";

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import MyNav2 from "@/components/nav2";
import { useState } from "react";
import Nav from "@/components/nav";

export default function About() {
    return (
        <div className="w-full p-10">
            <Nav variant="others" />
            <div className="mb-15"></div>

            <div className="grid grid-cols-2 w-full">
                <div>
                    <p className="text-3xl text-[var(--colour-bodytext)] leading-11">Xin chào thế giới! <span className="text-[var(--colour-bodytext-light)]">(it means "Hello, world!" in Vietnamese)</span></p>
                    <div className="mb-10"></div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Hi! My name is Hung (as in hungry). I’m a UX Designer and UI Engineer. Currently, I’m reading tickets at <span className="inline-block"><MyButton link="https://research.samsung.com/srca" target="_blank" variant="hyperlink" text="Samsung Electronics Canada" textSize="text-sm"/></span>.</p>
                    <div className="mb-5"></div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Reach me via <span className="inline-block"><MyButton link="mailto:d.hungtran12@gmail.com" target="_blank" variant="hyperlink" text="email" textSize="text-sm"/></span>, <span className="inline-block"><MyButton link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" variant="hyperlink" text="LinkedIn" textSize="sm"/></span>, or check out my <span className="inline-block"><MyButton link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" variant="hyperlink" text="resume" textSize="text-sm"/></span>!</p>
                    <div className="mb-10"></div>
                    <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Where I have been</p>
                    <div className="mb-5"></div>
                    <div className="grid grid-cols-2 w-[75%] gap-y-2">
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">UX Designer</p>
                        <MyButton link="https://research.samsung.com/srca" target="_blank" variant="hyperlink" text="Samsung Electronics Canada" textSize="text-sm"/>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Visual Designer</p>
                        <MyButton link="https://www.fraserhealth.ca/" target="_blank" variant="hyperlink" text="Fraser Health" textSize="text-sm"/>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Visual Designer</p>
                        <MyButton link="https://www.douglascollegeroyals.ca/landing/index" target="_blank" variant="hyperlink" text="Douglas College" textSize="text-sm"/>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Visual Designer</p>
                        <MyButton link="https://greenwich.edu.vn/en/about-greenwich-vietnam/" target="_blank" variant="hyperlink" text="Greenwich University" textSize="text-sm"/>
                    </div>
                </div>
                <div className="flex items-start justify-end">
                    <Image src="/about.png" width={3363} height={3363} className="w-[35%] aspect-square" alt="Hung Tran"/>
                </div>
            </div>
        </div>
    );
}
