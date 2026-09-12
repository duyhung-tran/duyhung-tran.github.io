"use client";

import Image from "next/image";
import MyButton from "@/components/my-button";
import { useState } from "react";
import Nav from "@/components/nav";

export default function Testimonials() {
    return (
        <div className="w-full p-10">
            <Nav variant="home" />
            <div className="mb-20"></div>

            <p className="text-5xl text-[var(--colour-bodytext)] font-semibold tracking-tight">Testimonials</p>
            <div className="mb-6"></div>
            <p className="text-md text-[var(--colour-bodytext-light)] leading-loose">from those I reported to.</p>
            <div className="mb-15"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
                <div className="p-8 border-1 rounded-xl flex flex-col">
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-2">"Hung has demonstrated a strong talent for both UX research and graphical UI tasks. His ability to analyze user needs and translate them into intuitive, visually appealing designs has been impressive.</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Overall, his dedication and versatility make him a valuable asset to any design team."</p>
                    <div className="mb-8"></div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Tian Jia</p>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose">Senior UX Designer, UX Manager at Samsung Electronics Canada.</p>
                </div>
                <div className="p-8 border-1 rounded-xl flex flex-col">
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose mb-2">"From designing a multi-page document for our Indigenous Health team to crafting a Urgent Care video, his clients have been very impressed with his work to date. He adapts to changing timelines easily including timely requests and juggling multiple projects.</p>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">His calm demeanor and ability to clearly communicate his working progress are just some of his strengths."</p>
                    <div className="mb-8"></div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose">Thomas Nelles</p>
                    <p className="text-sm text-[var(--colour-bodytext-light)] leading-loose">Senior Communications Consultant at Fraser Health.</p>
                </div>
            </div>

        </div>
    );
}
