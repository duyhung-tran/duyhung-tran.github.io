"use client"

import Image from "next/image";
import MyButton from "@/components/my-button";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { SquareArrowOutUpRight, Undo2, X } from "lucide-react";
import { NO_LINK_YET, type ProjectOverview } from "@/lib/project-overviews";

type Props = {
    project: ProjectOverview | null;
    onClose: () => void;
};

// Sizing: from lg up the panel is two columns, 76% of the window wide at a
// 1000:585 shape, shrinking further if the window is too short for that shape
// (min-height keeps room for the text). Below lg the columns stack: 80% wide
// on tablets, full width as a bottom sheet on phones.
//
// Project overview shown over the archive grid (Figma: Portfolio 2027, node 464:18952).
// A dimmed, blurred backdrop with a white panel: media on the left, title,
// description, credits and the "View project" / "Go back" buttons on the right.
//
// The panel slides up into place while fading in and coming into focus
// (opacity + blur), and reverses on close.
const ease = [0.22, 1, 0.36, 1] as const;

// Media sits inset on the white column instead of being cropped to fill
const mediaClass = "relative w-[80%] h-auto max-h-[80%] object-contain";
const panelMotion = {
    initial: { opacity: 0, y: 0, filter: "blur(0px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0 } },
    exit: { opacity: 0, y: 0, filter: "blur(0px)", transition: { duration: 0 } },
};

export default function ProjectModal({ project, onClose }: Props) {
    return (
        // AnimatePresence keeps the closing modal (with its last project) mounted
        // until its exit animation finishes
        <AnimatePresence>
            {project && <ModalContent key={project.slug} p={project} onClose={onClose} />}
        </AnimatePresence>
    );
}

function ModalContent({ p, onClose }: { p: ProjectOverview; onClose: () => void }) {
    const link = p.link ?? NO_LINK_YET;

    return (
        <Dialog static open onClose={onClose} className="relative z-[150]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
                className="fixed inset-0 bg-black/10 backdrop-blur-[11px]"
                aria-hidden="true"
            />

            <div className="fixed inset-0 flex items-end md:items-center justify-center md:p-10">
                {/* The motion div animates; the Headless UI panel fills it, so any click
                    inside counts as inside (framer's transition prop would clash with
                    Headless UI's own if they were the same element) */}
                <motion.div
                    {...panelMotion}
                    className="relative w-full md:w-[80vw] max-h-[92dvh] md:max-h-[calc(100dvh-80px)] lg:w-[min(76vw,calc((100dvh-80px)*1000/540))] lg:aspect-[1000/540] lg:min-h-[min(560px,calc(100dvh-80px))] lg:max-h-none overflow-y-auto lg:overflow-hidden bg-[var(--container-bg)] shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
                >
                <DialogPanel className="lg:h-full lg:grid lg:grid-cols-[2.5fr_2fr]">
                        <>
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close"
                                className="absolute top-5 right-5 z-10 p-2 text-[var(--colour-bodytext-light)] hover:text-[var(--colour-bodytext)] cursor-pointer"
                            >
                                <X className="size-5" strokeWidth={1.5} />
                            </button>

                            {/* Media on the left (on top on phones), content on the right */}
                            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full flex items-center justify-center overflow-hidden bg-[var(--container-bg)]">
                                {p.videoSrc !== undefined ? (
                                    <video
                                        key={p.videoSrc}
                                        src={p.videoSrc}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        aria-label={p.title}
                                        className={mediaClass}
                                    />
                                ) : (
                                    <Image
                                        src={p.imageSrc}
                                        alt={p.title}
                                        width={1640}
                                        height={1228}
                                        className={mediaClass}
                                    />
                                )}
                            </div>

                            <div className="p-8 md:p-10 lg:pt-[clamp(56px,11vh,104px)] lg:pb-[clamp(40px,9vh,88px)] lg:overflow-y-auto lg:flex lg:flex-col">
                                <DialogTitle className="text-xl md:text-xl text-[var(--colour-bodytext)] leading-normal">
                                    {p.title}
                                </DialogTitle>

                                <div className="mb-4"></div>
                                {/* The description is the tile's grey text, so it stays grey here */}
                                <p className="text-sm leading-loose text-[var(--colour-bodytext-light)]">
                                    {p.summary}
                                </p>

                                {p.credits && p.credits.length > 0 && (
                                    <>
                                        <div className="mb-8"></div>
                                        {/* Heading uses the same text style as the names */}
                                        <div className="text-sm text-[var(--colour-bodytext)] leading-loose">
                                            <p>Thank you to:</p>
                                            <ul>
                                                {p.credits.map((name) => (
                                                    <li key={name}>{name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}

                                <div className="mb-10"></div>
                                {/* Outer flex row keeps the buttons at their natural width instead of
                                    stretching across the column; mt-auto pins them to the bottom in the
                                    side-by-side layout. The inner grid's equal columns make both buttons
                                    as wide as the wider one. */}
                                <div className="flex lg:mt-auto">
                                    <div className="grid grid-cols-2 gap-3">
                                        <MyButton
                                            variant="primary"
                                            icon={SquareArrowOutUpRight}
                                            text="View project"
                                            link={link}
                                            // Placeholder links stay on the page instead of opening a blank tab
                                            target={link === NO_LINK_YET ? undefined : "_blank"}
                                            textSize="text-sm"
                                        />
                                        <MyButton variant="secondary" icon={Undo2} text="Go back" onClick={onClose} textSize="text-sm" />
                                    </div>
                                </div>
                            </div>
                        </>
                </DialogPanel>
                </motion.div>
            </div>
        </Dialog>
    );
}

