"use client"

import { useSyncExternalStore } from "react";
import { MotionGlobalConfig } from "framer-motion";

// The "Animations" switch in the menu (components/menu.tsx). Off, every animation on the
// site is skipped: Framer Motion's (entrances, modal, morphs, scroll ring) finish instantly,
// CSS transitions and keyframe animations are cut by the `no-motion` class on <html>
// (app/globals.css), and the morphs aren't attempted at all. On by default; the choice is
// remembered in this browser. A visitor's system "reduce motion" setting is respected too.

const KEY = "animations";
const CLASS = "no-motion";
const EVENT = "animations-change";

let on = true;

function apply() {
    MotionGlobalConfig.skipAnimations = !on;
    document.documentElement.classList.toggle(CLASS, !on);
}

// Read the saved choice as soon as this module loads in the browser, before anything animates
if (typeof window !== "undefined") {
    try {
        on = localStorage.getItem(KEY) !== "off";
    } catch {
        // Storage blocked: stay on
    }
    apply();
}

export function setAnimations(next: boolean) {
    on = next;
    try {
        localStorage.setItem(KEY, next ? "on" : "off");
    } catch {
        // Storage blocked: the choice lasts until the page reloads
    }
    apply();
    window.dispatchEvent(new Event(EVENT));
}

// False when the switch is off or the system asks for reduced motion
export function motionAllowed() {
    if (!on) return false;
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// The switch's state, kept in sync wherever it's shown
export function useAnimationsOn() {
    return useSyncExternalStore(
        (notify) => {
            window.addEventListener(EVENT, notify);
            return () => window.removeEventListener(EVENT, notify);
        },
        () => on,
        () => true,
    );
}

// Runs in <head> before the first paint, so a visitor who turned animations off never sees
// the page's CSS entrance play before the scripts load
export const animationSettingScript = `try{if(localStorage.getItem("${KEY}")==="off")document.documentElement.classList.add("${CLASS}")}catch(e){}`;
