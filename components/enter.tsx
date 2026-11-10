"use client"

import { motion, useReducedMotion } from "framer-motion";

// Page entrance used on the home, archive and about pages: each piece slides up out
// of a blur, one after another by `order`. The nav is left out on purpose and stays still.
// With reduced motion the pieces are simply there.

const enterEase = [0.22, 1, 0.36, 1] as const;
// Gap between one piece starting and the next (s)
const STAGGER = 0.08;

export default function Enter({
    order,
    className,
    children,
}: {
    order: number;
    // Classes for the wrapper, when it has to take the place of the element it wraps
    // (e.g. a grid or flex item)
    className?: string;
    children: React.ReactNode;
}) {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) return className ? <div className={className}>{children}</div> : <>{children}</>;
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
            // Once in place, drop the filter and transform: left on, they would trap anything
            // position: fixed inside
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none", transform: "none" } }}
            transition={{ duration: 0.8, ease: enterEase, delay: order * STAGGER }}
        >
            {children}
        </motion.div>
    );
}
