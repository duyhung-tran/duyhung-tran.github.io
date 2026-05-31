import MyButton from "@/components/my-button";

export default function Footer() {
    return (
        <div className="mt-40 pb-28 flex flex-col">
            <div className="w-full justify-between flex">
                <p className="text-sm text-[var(--colour-bodytext-2)]">I&rsquo;d love to hear from you. Let&rsquo;s connect!</p>
                {/* <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">This site was designed and coded by me with Next.js</p> */}
            </div>
            <div className="mb-7"></div>
            <div className="flex flex-col md:flex-row w-full justify-between">
                <MyButton variant="hyperlink" text="LinkedIn" link="https://www.linkedin.com/in/hung-tran-profile" target="_blank" textSize="text-sm"></MyButton>
                <div className="mb-1"></div>
                <MyButton variant="hyperlink" text="GitHub" link="https://github.com/hungiie" target="_blank" textSize="text-sm"></MyButton>
                <div className="mb-1"></div>
                <MyButton variant="hyperlink" text="d.hungtran12@gmail.com" link="mailto:d.hungtran12@gmail.com" target="_blank" textSize="text-sm"></MyButton>
                <div className="mb-1"></div>
                <MyButton variant="hyperlink" text="Resume" link="https://drive.google.com/file/d/1CrubhoYF0ok5oFfJT3Ffxlkr6Jp0p8Jk/view?usp=sharing" target="_blank" textSize="text-sm"></MyButton>
            </div>
            {/* <div className="mb-7"></div>
            <div className="w-full justify-between flex">
                <div></div>
                <p className="text-sm text-[var(--colour-bodytext-4)] leading-loose">This site was designed and coded by me with Next.js</p>
            </div> */}
        </div>
    )
}