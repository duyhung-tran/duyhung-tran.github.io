"use client"

import MyButton from "@/components/my-button";
import { useState, useEffect } from "react";
import Menu from "./menu";
import Image from "next/image";

interface Props {
  variant: string;
}

export default function Nav(props: Props) {
    if (props.variant == "home") {
        return (
            <div className={`w-full flex items-center relative justify-between`}>
                <div className="flex gap-x-4 items-center" >
                    <a href="/about">
                        <Image src="/me.png" width={3363} height={3363} className="w-[54px] aspect-square" alt="Hung Tran"/> 
                    </a>
                    <div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose -mb-1">Hung Tran</p>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">UX Designer, UI Engineer, (aspiring) influencer, gamer, and more.</p>
                    </div>
                </div>
                <div className="flex gap-x-6 items-center">
                    {/* <MyButton variant="secondary-menu" text="Contacts" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" textSize="text-xs"/> */}
                    {/* <MyButton variant="secondary-theme" text="Dark Mode" link="#" target="_blank" textSize="text-xs"/> */}
                    <Menu/>
                </div>
            </div>
        )
    }
    else if (props.variant == "others") {
        return (
            <div className={`w-full flex items-center relative justify-between`}>
                <div className="flex gap-x-4 items-center" >
                    <a href="/">
                        <Image src="/me.png" width={3363} height={3363} className="w-[54px] aspect-square" alt="Hung Tran"/> 
                    </a>
                    <div>
                    <p className="text-sm text-[var(--colour-bodytext)] leading-loose -mb-1">Hung Tran</p>
                    <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">UX Designer, UI Engineer, (aspiring) influencer, gamer, and more.</p>
                    </div>
                </div>
                <div className="flex gap-x-6 items-center">
                    {/* <MyButton variant="secondary-menu" text="Contacts" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" textSize="text-xs"/> */}
                    {/* <MyButton variant="secondary-theme" text="Dark Mode" link="#" target="_blank" textSize="text-xs"/> */}
                    <Menu/>
                </div>
            </div>
        )
    }
}