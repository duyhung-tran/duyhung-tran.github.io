"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutHero() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const getCenterText = () => {
    if (!hovered) return "...";
    return hovered;
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full 2xl:w-[90%] grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_2fr_1fr_1fr_1fr]">
        {/* column 1 */}
        <div className="w-full justify-center items-center hidden md:flex">
          {/* <motion.div
            onHoverStart={() => setHovered("Tim Drake #1 fan")}
            onHoverEnd={() => setHovered(null)}
            initial={{
              opacity: 0,
              filter: "blur(12px)",
               
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
               
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className=" w-[60%] mb-9"
          >
            <motion.div
              animate={{ scale: hovered === "Tim Drake #1 fan" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/robin.jpg" width={837} height={779} className="w-full rounded-2xl 2xl:rounded-2xl shadow-md -rotate-6" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div> */}
        </div>


        {/* column 2 */}
        <div className="w-full justify-center items-center hidden md:flex">
          <motion.div
            onHoverStart={() => setHovered("Madison Beer Spinnin' tour 🎤")}
            onHoverEnd={() => setHovered(null)}
            initial={{
              opacity: 0,
              filter: "blur(12px)",
               
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
               
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-[60%] mr-2 mb-9"
          >
            <motion.div
              animate={{ scale: hovered === "Madison Beer Spinnin' tour 🎤" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/mad.jpg" width={837} height={779} className="w-full rounded-2xl 2xl:rounded-2xl shadow-md -rotate-6" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>
        </div>


        {/* column 3 */}
        <div className="w-full flex-col justify-center items-center hidden md:flex">

          {/* top */}
          <motion.div
            onHoverStart={() => setHovered("Samsung 2025 interns 📚")}
            onHoverEnd={() => setHovered(null)}
            className="flex justify-center  w-[60%]"
            initial={{
              opacity: 0,
              filter: "blur(12px)",
               
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
               
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{ scale: hovered === "Samsung 2025 interns 📚" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/work1.png" width={837} height={779} className="w-full rounded-2xl shadow-md rotate-6" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>

          <div className="mb-25 2xl:mb-40"></div>

          {/* bottom */}
          <motion.div
            onHoverStart={() => setHovered("Sunday coffee ☀️")}
            onHoverEnd={() => setHovered(null)}
            className="flex justify-start  w-[60%]"
            initial={{
              opacity: 0,
              filter: "blur(12px)",
               
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
               
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{ scale: hovered === "Sunday coffee ☀️" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/coffee.JPG" width={837} height={779} className="w-full rounded-2xl shadow-md -rotate-8" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>

        </div>

        {/* column 4 (center) */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)"}}
          animate={{ opacity: 1, filter: "blur(0px)"}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col justify-center items-center relative"
        >

          <div className="w-[55%]">
            <motion.div
              onHoverStart={() => setHovered("...")}
              onHoverEnd={() => setHovered(null)}
              animate={{ scale: hovered === "..." ? 1.02 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image src="/la.png" width={3099} height={3363} className="w-full mb-2 rounded-3xl shadow-2xl -rotate-2" alt="Hung Tran" style={{ filter: "contrast(100%)" }}/>
            </motion.div>
          </div>

          <div className="mt-10 text-sm text-[var(--colour-bodytext-3)] z-10 pointer-events-none hidden md:block">
            Hung's stories
          </div>
          <div className="mt-1 text-sm text-[var(--colour-bodytext-3)] z-10 pointer-events-none hidden md:block">
            {getCenterText()}
          </div>
        </motion.div>

        {/* column 5 */}
        <div className="w-full flex-col justify-center items-center hidden md:flex">

          {/* top */}
          <motion.div
            onHoverStart={() => setHovered("Matcha chronicles 🍵")}
            onHoverEnd={() => setHovered(null)}
            className="flex justify-start  w-[60%]"
            initial={{
              opacity: 0,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{ scale: hovered === "Matcha chronicles 🍵" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/matcha.jpeg" width={837} height={779} className="w-full rounded-2xl shadow-md -rotate-8" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>

          <div className="mb-25 2xl:mb-40"></div>

          {/* bottom */}
          <motion.div
            onHoverStart={() => setHovered("Losing voice at concerts 🔇")}
            onHoverEnd={() => setHovered(null)}
            initial={{
              opacity: 0,
              filter: "blur(12px)",
               
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className=" w-[60%]"
          >
            <motion.div
              animate={{ scale: hovered === "Losing voice at concerts 🔇" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/spinning.jpeg" width={837} height={779} className="w-full rounded-2xl 2xl:rounded-2xl shadow-md rotate-6" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>
        </div>

        {/* column 6 */}
        <div className="w-full justify-center items-center hidden md:flex">
          <motion.div
            onHoverStart={() => setHovered("Bellini enthusiast 🍹")}
            onHoverEnd={() => setHovered(null)}
            className="mb-9 ml-2 w-[60%]"
            initial={{
              opacity: 0,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{ scale: hovered === "Bellini enthusiast 🍹" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/belini.jpg" width={837} height={779} className="w-full rounded-2xl shadow-md rotate-6" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>
        </div>

        {/* column 7 */}
        <div className="w-full flex-col justify-center items-center hidden md:flex">

          {/* top */}
          {/* <motion.div
            onHoverStart={() => setHovered("Night market finds 🍜")}
            onHoverEnd={() => setHovered(null)}
            className="flex justify-center  w-[60%]"
            initial={{
              opacity: 0,
              filter: "blur(12px)",
               
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
               
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{ scale: hovered === "Night market finds 🍜" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/richmond.jpg" width={837} height={779} className="w-full rounded-2xl shadow-md rotate-6" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div>

          <div className="mb-25 2xl:mb-40"></div> */}

          {/* bottom */}
          {/* <motion.div
            onHoverStart={() => setHovered("Bellini enthusiast 🍹")}
            onHoverEnd={() => setHovered(null)}
            className="flex justify-start  w-[60%]"
            initial={{
              opacity: 0,
              filter: "blur(12px)",
               
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
               
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{ scale: hovered === "Bellini enthusiast 🍹" ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" "
            >
              <Image src="/belini.jpg" width={837} height={779} className="w-full rounded-2xl shadow-md rotate-8" alt="hung tran dark mode"/>
            </motion.div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}