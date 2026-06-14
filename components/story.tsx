// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Story() {
//   const [demoHover, setDemoHover] = useState(false);
//   const [hover, setHover] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDemoHover(true);
//       const leaveTimer = setTimeout(() => setDemoHover(false), 800);
//       return () => clearTimeout(leaveTimer);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   const isVisible = demoHover || hover; // text visible on demo hover OR real hover

//   return (
//     <a className="w-full flex justify-center items-center" href="#story">
//       <div
//         className="group relative flex flex-col items-center"
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//       >
//         <motion.div
//           initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
//           animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="w-full flex justify-center items-center"
//         >
//           <motion.p
//             initial={{ opacity: 0, y: 12 }}
//             animate={{
//               opacity: isVisible ? 1 : 0,
//               y: isVisible ? 0 : 12,
//             }}
//             transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//             className="absolute -top-10 text-sm text-[var(--colour-bodytext)] leading-loose origin-center"
//           >
//             View Hung's story :)
//           </motion.p>

//           <div
//             className={`
//               w-[65%] 2xl:w-[65%] aspect-square rounded-full overflow-hidden 
//               border-4 p-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
//               ${isVisible ? "border-[var(--main-colour)]" : "border-stone-300"}
//             `}
//           >
//             <div
//               className={`
//                 w-full rounded-full overflow-hidden transition-all duration-300
//                 ${isVisible ? "scale-[0.97]" : ""}
//               `}
//             >
//               <Image
//                 src="/yay.jpg"
//                 width={716}
//                 height={716}
//                 alt="hung tran"
//                 className="object-cover block origin-center"
//                 style={{
//                   filter: "contrast(87%) brightness(95%) saturate(115%)",
//                 }}
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </a>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Loader from "@/components/loader";

// export default function Story() {
//   const [demoHover, setDemoHover] = useState(false);
//   const [hover, setHover] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDemoHover(true);
//       const leaveTimer = setTimeout(() => setDemoHover(false), 1900);
//       return () => clearTimeout(leaveTimer);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   const isVisible = demoHover || hover; // text visible on demo hover OR real hover

//   return (
//     <a className="w-full flex justify-center items-center" href="#story">
//       <div
//         className="group relative flex flex-col items-center"
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//       >
//         <motion.div
//           initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
//           animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="w-full flex justify-center items-center relative"
//         >
//           {demoHover && (
//             <div className="absolute inset-0 flex items-center justify-center z-20">
//               <div className="w-[120%] h-[120%]">
//                 <Loader />
//               </div>
//             </div>
//           )}

//           <motion.p
//             initial={{ opacity: 0, y: 12 }}
//             animate={{
//               opacity: isVisible ? 1 : 0,
//               y: isVisible ? 0 : 12,
//             }}
//             transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//             className="group absolute -top-10 text-sm text-[var(--colour-bodytext)] leading-loose origin-center z-10 hidden md:block"
//           >
//             View Hung's story :)
//           </motion.p>

//           <div
//             className={`
//               w-[65%] 2xl:w-[65%] aspect-square rounded-full overflow-hidden 
//               border-0 md:border-4 p-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-[var(--main-colour)]
//               ${isVisible ? "border-transparent" : "border-stone-300"}
//             `}
//           >
//             <div
//               className={`
//                 w-full rounded-full overflow-hidden transition-all duration-300
//                 ${isVisible ? "md:scale-[0.97]" : ""}
//               `}
//             >
//               <Image
//                 src="/yay.jpg"
//                 width={716}
//                 height={716}
//                 alt="hung tran"
//                 className="object-cover block origin-center"
//                 style={{
//                   filter: "contrast(87%) brightness(95%) saturate(115%)",
//                 }}
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </a>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Loader from "@/components/loader";

export default function Story() {
  const [hover, setHover] = useState(false);

  return (
    <a className="w-full flex justify-center items-center" href="#story">
      <div
        className="group relative flex flex-col items-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center items-center relative"
        >
          {/* Loader appears only on real hover */}
          {hover && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-[122%] h-[122%]">
                <Loader />
              </div>
            </div>
          )}

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: hover ? 1 : 0,
              y: hover ? 0 : 12,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-10 text-sm text-[var(--colour-bodytext)] leading-loose origin-center z-10 hidden md:block"
          >
            View Hung's story :&#41;
          </motion.p>

          {/* Circle + Border */}
          <div
            className={`
              w-[65%] 2xl:w-[50%] aspect-square rounded-full overflow-hidden 
              md:border-4 p-1 transition-all duration-0 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${hover ? "border-transparent" : "border-stone-300"}
            `}
          >
            <div
              className={`
                w-full rounded-full overflow-hidden transition-all duration-300
                ${hover ? "md:scale-[0.97]" : ""}
              `}
            >
              <Image
                src="/yay.jpg"
                width={716}
                height={716}
                alt="hung tran"
                className="object-cover block origin-center"
                style={{
                  filter: "contrast(87%) brightness(95%) saturate(115%)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </a>
  );
}
