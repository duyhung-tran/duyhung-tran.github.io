import MyButton from "@/components/my-button";

export default function Footer() {
    return (
        <div className="mt-40 pb-28 flex flex-col">
            {/* <div className="w-full justify-between flex">
                <p className="text-sm text-[var(--colour-bodytext-light)]">I&rsquo;d love to hear from you. Let&rsquo;s connect!</p>
            </div> */}
            <div className="mb-7"></div>
            <div className="flex flex-col md:flex-row w-full justify-between">
                <MyButton variant="secondary" text="LinkedIn" link="https://www.linkedin.com/in/hung-tran-profile" target="_blank" textSize="text-sm"></MyButton>
                <div className="mb-1"></div>
                <MyButton variant="secondary" text="GitHub" link="https://github.com/duyhung-tran" target="_blank" textSize="text-sm"></MyButton>
                <div className="mb-1"></div>
                <MyButton variant="secondary" text="Email" link="mailto:d.hungtran12@gmail.com" target="_blank" textSize="text-sm"></MyButton>
                <div className="mb-1"></div>
                <MyButton variant="secondary" text="Resume" link="https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing" target="_blank" textSize="text-sm"></MyButton>
            </div>
        </div>
    )
}