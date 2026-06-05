// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Me() {
//   return (
//     <div className="w-[65px] h-[65px]">
//       <div className="relative aspect-square rounded-full overflow-hidden bg-black border-none">
//         <Image
//           src="/me.png"
//           fill
//           alt="Hung Tran"
//           className="object-cover"
//           style={{ filter: 'contrast(100%) brightness(100%)' }}
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Me() {
  return (
    // <motion.div
    //   layout
    //   initial={{ scale: 0.85, y: 10, opacity: 0, filter: "blur(6px)" }}
    //   animate={{ scale: 1, y: 0, opacity: 1, filter: "blur(0px)" }}
    //   transition={{
    //     duration: 0.9,
    //     ease: [0.2, 1, 0.4, 1],
    //   }}
    //   className="flex-shrink-0"
    // >
      <div className="w-[65px] h-[65px]">
        <div className="relative aspect-square rounded-full overflow-hidden bg-black border-none">
          <Image
            src="/yay.jpg"
            fill
            alt="Hung Tran"
            className="object-cover"
            style={{ filter: 'contrast(100%) brightness(100%)' }}
          />
        </div>
      </div>
    // </motion.div>
  );
}