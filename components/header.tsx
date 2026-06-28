"use client"

export default function Header(){
  return (
    <div className="w-full fixed z-2 h-36 flex top-0 items-center px-10">
        <div className="grid grid-cols-[2fr_3fr] gap-10 w-full">
            <div className="">
                <p className="text-lg font-semibold text-[var(--colour-bodytext)] leading-loose tracking-tight">Hi, my name is Hung.</p>
                <p className="text-lg text-[var(--colour-bodytext-2)] leading-loose tracking-tight">Currently a UX designer at Samsung Electronics.</p>
            </div>
            <div>
                <p className="text-lg text-[var(--colour-bodytext-2)] leading-loose tracking-tight">As an overthinker, I think a lot about all my interactions... probably more than I should.</p>
                <p className="text-lg text-[var(--colour-bodytext-2)] leading-loose tracking-tight">Luckily, that's also my job - I'm an interaction designer.</p>
            </div>
        </div>
    </div>
  );
}
