"use client"
import MyButton from "./my-button";

interface Props {
    job: React.ReactNode;
    company: string;
    companyLink: string;
    time: string;
}

export default function Experience(props: Props) {
    return (
        <div>
            <div className="flex justify-between">
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{props.job} <span className="md:hidden"><br /></span>@ <span><MyButton link={props.companyLink} target="_blank" variant="hyperlink" text={props.company} textSize="text-sm"/></span></p>
                <p className="text-sm text-[var(--colour-bodytext)] leading-loose">{props.time}</p>
            </div>
        </div>
    );
}