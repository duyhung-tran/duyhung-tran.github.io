// "use client"

// import MyButton from "@/components/my-button";
// import { useState, useEffect } from "react";
// import Menu from "./menu";
// import Image from "next/image";

// interface Props {
//   variant: string;
// }

// export default function Nav(props: Props) {
//     if (props.variant == "home") {
//         return (
//             <div className={`w-full flex items-center relative justify-between`}>
//                 <div className="flex gap-x-4 items-center" >
//                     <a href="/about">
//                         <Image src="/about/me.png" width={3363} height={3363} className="w-[54px] aspect-square" alt="Hung Tran"/> 
//                     </a>
//                     <div>
//                     <p className="text-sm text-[var(--colour-bodytext)] leading-loose -mb-1">Hung Tran</p>
//                     <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">UX Designer, UI Engineer</p>
//                     </div>
//                 </div>
//                 <div className="flex gap-x-6 items-center">
//                     {/* <MyButton variant="secondary" icon={Mail} text="Contacts" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" textSize="text-xs"/> */}
//                     <Menu/>
//                 </div>
//             </div>
//         )
//     }
//     else if (props.variant == "others") {
//         return (
//             <div className={`w-full flex items-center justify-between sticky top-10`}>
//                 <div className="flex gap-x-4 items-center" >
//                     <a href="/">
//                         <Image src="/about/me.png" width={3363} height={3363} className="w-[54px] aspect-square" alt="Hung Tran"/> 
//                     </a>
//                     <div>
//                     <p className="text-sm text-[var(--colour-bodytext)] leading-loose -mb-1">Hung Tran</p>
//                     <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">UX Designer, UI Engineer</p>
//                     </div>
//                 </div>
//                 <div className="flex gap-x-6 items-center">
//                     {/* <MyButton variant="secondary" icon={Mail} text="Contacts" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" textSize="text-xs"/> */}
//                     <Menu/>
//                 </div>
//             </div>
//         )
//     }
// }


"use client"

import { useState, useEffect } from "react";
import Menu from "./menu";
import MrForkToggle from "./mr-fork/toggle-button";
import Image from "next/image";
import { Undo2 } from "lucide-react";
import Hyperlink from "./hyperlink";

interface Props {
  variant: string;
  // Show the Mr. Fork button to the left of the menu
  mrFork?: boolean;
  // Leave out the name and title next to the photo (redesigned project pages)
  hideName?: boolean;
  // Show a "Back" link to the homepage in place of the photo (project pages)
  backLink?: boolean;
}

export default function Nav(props: Props) {
  const isHome = props.variant === "home";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isScrolled = !isHome && scrolled;

  return (
    <div
      className={`w-full flex items-center justify-between z-50 bg-[var(--colour-background)] ${
        isHome ? "" : "lg:sticky lg:top-10 transition-all duration-300"
      }`}
    >
        <div className={`flex gap-x-4 items-center ${isHome ? "" : "transition-all duration-300"}`}>
            {props.backLink ? (
            <div className="h-[54px] flex items-center">
                <Hyperlink link="/" text="Back" variant="icon" icon={Undo2} muted />
            </div>
            ) : (
            <a href="/" className="w-[54px]">
                <Image
                    src="/about/me.png"
                    width={3363}
                    height={3363}
                    className="w-[54px] aspect-square"
                    alt="Hung Tran"
                />
            </a>
            )}
            {!props.hideName && (
            <div
            className={`overflow-hidden hidden lg:block ${isHome ? "" : "transition-all duration-300"} ${
                isScrolled ? "opacity-0 translate-y-0" : "opacity-100 translate-y-0"
            }`}
            >
              <p className="text-sm text-[var(--colour-bodytext)] leading-loose -mb-1 whitespace-nowrap">
                  Hung Tran
              </p>
              <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose whitespace-nowrap">
                  UX Designer, UI Engineer
              </p>
            </div>
            )}
        </div>
        <div className="fixed top-10 right-10 z-100 lg:static flex gap-x-3 items-center bg-[var(--container-bg)] lg:bg-transparent border-1 lg:border-0">
            {/* {props.mrFork && <MrForkToggle />} */}
            <Menu />
        </div>
    </div>
  );
}