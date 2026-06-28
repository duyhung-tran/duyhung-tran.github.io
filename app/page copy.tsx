"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import Footer from "@/components/footer";
import SlideUp from "@/components/slide-up";
import { useEffect, useState } from "react";
import SlideUpNoThres from "@/components/slide-up-nothres";
import { useTheme } from "next-themes";
import MyNav2 from "@/components/nav2";
import { ThemeSelector } from "@/components/ui/shadcn-io/colour-toggle-button";
import { ThemeToggleButton } from "@/components/ui/shadcn-io/theme-toggle-button";
import Testimonial from "@/components/testimonial";
import ProjectThumbnailNew from "@/components/project-thumbnail-new";
import Header from "@/components/header";

export default function Home2() {
  const [animate, setAnimate] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <div className="flex items-center justify-center" id="top">
        <Header/>
    </div>
  );
}

