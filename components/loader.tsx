"use client";

import Image from "next/image";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={`${styles.story} w-full h-full relative hidden md:block`}>
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <Image
          src="/yay.jpg"
          alt="Story Image"
          fill
          className="rounded-full object-cover hidden"
        />
      </div>

      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="40"
          pathLength={100}
          className={styles.circle}
        />
      </svg>
    </div>
  );
}
