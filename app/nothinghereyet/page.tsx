"use client";

import Image from "next/image";
import MyButton from "@/components/my-button";
import { useState } from "react";
import Nav from "@/components/nav";
import { Info } from "lucide-react";

export default function Nothing() {
    return (
        <div className="w-full p-10">
            <Nav variant="home" />
            <div className="mb-20"></div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
                <div>
                     <p className="text-5xl text-[var(--colour-bodytext)] font-semibold leading-relaxed tracking-tight">Nothing here yet</p>
                    <div className="mb-15"></div>
                    
                    <div className="pl-9 pr-6 py-6 border-1 rounded-xl flex flex-col lg:flex-row gap-6 lg:justify-between">
                        <div className="flex gap-6 items-center">
                            <Info className="w-5 h-5 text-[var(--colour-bodytext)] flex-shrink-0" />
                            <p className="text-sm text-[var(--colour-bodytext)] leading-loose">This project is likely under a stricter NDA, or hasn't been launched yet.</p>
                        </div>
                        <MyButton variant="secondary-menu" text="Contacts" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" textSize="text-sm"/>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
}
