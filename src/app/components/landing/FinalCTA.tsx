import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface FinalCTAProps extends HTMLAttributes<HTMLElement> {
    className?: string;
}

export default function FinalCTA({
    className,
    ...props
}: FinalCTAProps) {
    return (
        <section
            className={cn("px-6 py-16", className)}
            {...props}
        >
            <div className="mx-auto max-w-sm rounded-[32px] border border-border/60 bg-surface p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    60-Day Challenge
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight text-text-primary">
                    Ready to build
                    <br />
                    something amazing?
                </h2>

                <p className="mt-4 leading-7 text-text-secondary">
                    Join hundreds of students building projects, sharing their
                    work, and growing one challenge at a time.
                </p>

            </div>
        </section>
    );
}