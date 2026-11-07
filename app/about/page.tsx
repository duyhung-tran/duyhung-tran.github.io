"use client";

import Image from "next/image";
import Hyperlink from "@/components/hyperlink";
import { useState } from "react";
import Nav from "@/components/nav";

export default function About() {
    return (
        <div className="w-full p-10">
            <Nav variant="others" mrFork />
            <div className="mb-20"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                <div className="flex lg:hidden items-center justify-center mb-15">
                    <div className="block overflow-hidden aspect-square w-[100%]">
                        <Image src="/about.png" width={3363} height={3363} className="w-full scale-103 origin-bottom aspect-square" alt="Hung Tran"/>
                    </div>
                </div>
                <div>
                    <p className="text-5xl text-[var(--colour-bodytext)] font-semibold tracking-tight">About me</p>
                    <div className="mb-10 lg:mb-15"></div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Hi! My name is Hung (as in hungry). I’m a UX Designer and UI Engineer. Currently, I’m reading tickets at <Hyperlink link="https://research.samsung.com/srca" target="_blank" text="Samsung Electronics Canada"/>.</p>
                    <div className="mb-5"></div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Reach me via <Hyperlink link="mailto:d.hungtran12@gmail.com" target="_blank" text="email"/>, <Hyperlink link="https://www.linkedin.com/in/hung-tran-profile/" target="_blank" text="LinkedIn"/>, or check out my <Hyperlink link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" text="resume"/>!</p>
                    <div className="mb-10"></div>
                    <p className="text-lg text-[var(--colour-bodytext)] leading-loose">Where I have been</p>
                    <div className="mb-5"></div>
                    <div className="grid grid-cols-2 w-full lg:w-[65%] gap-y-2 gap-x-0">
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">UX Designer</p>
                        <Hyperlink link="https://research.samsung.com/srca" target="_blank" text="Samsung Electronics Canada"/>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Visual Designer</p>
                        <Hyperlink link="https://www.fraserhealth.ca/" target="_blank" text="Fraser Health"/>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Visual Designer</p>
                        <Hyperlink link="https://www.douglascollegeroyals.ca/landing/index" target="_blank" text="Douglas College"/>
                        <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Visual Designer</p>
                        <Hyperlink link="https://greenwich.edu.vn/en/about-greenwich-vietnam/" target="_blank" text="Greenwich University"/>
                    </div>
                </div>
                <div className="hidden lg:flex items-start justify-end">
                    <div className="block overflow-hidden aspect-square w-[35%]">
                        <Image src="/about.png" width={3363} height={3363} className="w-full scale-103 origin-bottom aspect-square" alt="Hung Tran"/>
                    </div>
                </div>
            </div>

            <div className="mb-25 lg:mb-0"></div>

        </div>
    );
}
