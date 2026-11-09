"use client"

import { useEffect, useState } from "react";

// True below the md breakpoint. Phones skip the project overview modal:
// tapping a tile goes straight to the project instead.
export function useIsPhone() {
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsPhone(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isPhone;
}
