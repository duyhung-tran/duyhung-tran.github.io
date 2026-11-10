import MyButton from "@/components/my-button";
import { SquareArrowOutUpRight } from "lucide-react";
import type { ProjectOverview } from "@/lib/project-overviews";

// First section of a project page: the same content as the project modal's text
// column (Figma: Portfolio 2027, node 478:40109), so the modal can morph into it.
// Each piece carries data-morph-target, matching a data-morph piece in the modal.

const labelClass = "text-xs text-[var(--colour-bodytext-light)] leading-loose";
const valueClass = "text-sm text-[var(--colour-bodytext)] leading-loose";

export default function ProjectIntro({ p }: { p: ProjectOverview }) {
    return (
        <section id="overview">
            {/* Same style as the other project page titles; the morph eases size, weight and tracking from the modal title */}
            <h1 data-morph-target="title" className="text-5xl text-[var(--colour-bodytext)] leading-normal tracking-tight">
                {p.title}
            </h1>
            <div className="mb-1"></div>
            <p data-morph-target="summary" className="text-sm leading-loose text-[var(--colour-bodytext-light)]">
                {p.summary}
            </p>

            {p.overview && (
                <>
                    <div className="mb-10"></div>
                    <div data-morph-target="overview" className="grid grid-cols-[auto_auto] justify-start gap-x-32 gap-y-4">
                        <div>
                            <p className={labelClass}>Company</p>
                            <p className={valueClass}>{p.overview.company}</p>
                        </div>
                        <div>
                            <p className={labelClass}>Product</p>
                            <p className={valueClass}>{p.overview.product}</p>
                        </div>
                        <div>
                            <p className={labelClass}>Status</p>
                            <div className="flex items-center gap-2">
                                <p className={valueClass}>{p.overview.status}</p>
                                <span
                                    className={`w-1.5 h-1.5 rounded-full ${p.overview.status === "Live" ? "bg-green-500" : "bg-blue-500"}`}
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                        <div>
                            <p className={labelClass}>Focus</p>
                            {p.overview.focus.map((f) => (
                                <p key={f} className={valueClass}>{f}</p>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {p.description && (
                <>
                    <div className="mb-10"></div>
                    {/* Larger than in the modal; the morph grows it on the way */}
                    <p data-morph-target="description" className="text-base text-[var(--colour-bodytext)] leading-loose max-w-[880px]">
                        {p.description}
                    </p>
                </>
            )}

            {/* {p.secondary && (
                <>
                    <div className="mb-10"></div>
                    <div className="flex">
                        <div data-morph-target="secondary">
                            <MyButton
                                variant="secondary"
                                icon={SquareArrowOutUpRight}
                                text={p.secondary.label}
                                link={p.secondary.link}
                                target="_blank"
                                textSize="text-sm"
                            />
                        </div>
                    </div>
                </>
            )} */}

            {/* Closes the intro, same divider as between the page's other sections */}
            <div className="mb-15"></div>
            <hr className="border-[var(--nav-border)]" />
        </section>
    );
}
