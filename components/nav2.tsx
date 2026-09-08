"use client"

import MyButton from "@/components/my-button";
import { useState, useEffect } from "react";
import Menu from "./menu";
import Image from "next/image";

interface Props {
  variant: string;
}

export default function MyNav2(props: Props) {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // base classes for nav
  const baseNavClasses ="w-full bg-[var(--nav-bg)] backdrop-blur-2xl border-b-1 border-[var(--nav-border)] fixed z-20 h-14 flex justify-center top-0 transition-all duration-400";
  return (
    <nav className={`${baseNavClasses} ${showNav ? "translate-y-0" : "-translate-y-full"}`}>
      {props.variant === "About to home" && (
        <div className="w-full px-10 md:w-2/3 md:px-0 lg:w-[85%] 2xl:w-[80%] flex items-center justify-between">
          <MyButton variant="hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
          <MyButton variant="primary" text="Resume" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" textSize="text-sm" target="_blank"/>
        </div>
      )}

      {props.variant === "Projects to home" && (
        <div className="w-full px-10 md:px-0 md:w-2/3 lg:w-[75%] 2xl:w-[75%] flex items-center justify-between relative">
          <MyButton variant="hyperlink" text="Return to home" link="/" textSize="text-sm" target="_self"/>
          {/* Desktop buttons */}
          <div className="hidden md:flex">
            <MyButton variant="secondary" text="About me" link="about" textSize="text-sm" target="_self"/>
            <div className="ml-3" />
            <MyButton variant="primary" text="Resume" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" textSize="text-sm" target="_blank"/>
          </div>
          {/* Mobile 3-dots menu */}
          <Menu />
        </div>
      )}

      {props.variant === "Home" && (
        <div className="w-full px-10 md:px-0 md:w-2/3 lg:w-[85%] 2xl:w-[80%] flex items-center justify-between relative">
          <MyButton variant="hyperlink" text="Back to top" link="#top" textSize="text-sm" target="_self"/>
          {/* Desktop buttons */}
          <div className="hidden md:flex items-center">
            <MyButton variant="secondary" text="About me" link="about" textSize="text-sm" target="_self"/>
            <div className="ml-3" />
            <MyButton variant="primary" text="Resume" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" textSize="text-sm" target="_blank"/>
          </div>
          {/* Mobile 3-dots menu */}
          <Menu />
        </div>
      )}

    </nav>
  );
}
