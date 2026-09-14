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
//                         <Image src="/me.png" width={3363} height={3363} className="w-[54px] aspect-square" alt="Hung Tran"/> 
//                     </a>
//                     <div>
//                     <p className="text-sm text-[var(--colour-bodytext)] leading-loose -mb-1">Hung Tran</p>
//                     <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">UX Designer, UI Engineer</p>
//                     </div>
//                 </div>
//                 <div className="flex gap-x-6 items-center">
//                     {/* <MyButton variant="secondary-menu" text="Contacts" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" textSize="text-xs"/> */}
//                     {/* <MyButton variant="secondary-theme" text="Dark Mode" link="#" target="_blank" textSize="text-xs"/> */}
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
//                         <Image src="/me.png" width={3363} height={3363} className="w-[54px] aspect-square" alt="Hung Tran"/> 
//                     </a>
//                     <div>
//                     <p className="text-sm text-[var(--colour-bodytext)] leading-loose -mb-1">Hung Tran</p>
//                     <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose">UX Designer, UI Engineer</p>
//                     </div>
//                 </div>
//                 <div className="flex gap-x-6 items-center">
//                     {/* <MyButton variant="secondary-menu" text="Contacts" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" textSize="text-xs"/> */}
//                     {/* <MyButton variant="secondary-theme" text="Dark Mode" link="#" target="_blank" textSize="text-xs"/> */}
//                     <Menu/>
//                 </div>
//             </div>
//         )
//     }
// }


"use client"

import { useState, useEffect } from "react";
import Menu from "./menu";
import Image from "next/image";

interface Props {
  variant: string;
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
            <a href="/" className="w-[54px]">
                <Image
                    src="/me.png"
                    width={3363}
                    height={3363}
                    className={`aspect-square ${isHome ? "" : "transition-all duration-300"} hover:w-[54px] ${
                    isScrolled ? "w-[54px]" : "w-[54px]"
                    }`}
                    alt="Hung Tran"
                />
            </a>
            <div
            className={`overflow-hidden hidden lg:block ${isHome ? "" : "transition-all duration-300"} ${
                isScrolled ? "opacity-0 translate-y-0" : "opacity-100 translate-y-0"
            }`}
            >
              <p className="text-sm text-[var(--colour-bodytext)] leading-loose -mb-1 whitespace-nowrap">
                  Hung Tran
              </p>
              <p className="text-xs text-[var(--colour-bodytext-light)] leading-loose whitespace-nowrap">
                  UX Designer, gamer, influencer (aspiring)
              </p>
            </div>
        </div>
        <div className="fixed top-10 right-10 z-100 lg:static flex gap-x-6 items-center bg-[var(--container-bg)] lg:bg-transparent border-1 lg:border-0">
            <Menu />
        </div>
    </div>
  );
}