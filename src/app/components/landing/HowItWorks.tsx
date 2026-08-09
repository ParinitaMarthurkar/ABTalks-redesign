import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface HowItWorksProps extends HTMLAttributes<HTMLElement> {
    className?: string;
}

const steps = [
    {
        number: "01",
        title: "Build",
        description: "Complete one practical challenge every day.",
        icon: "💻",
    },
    {
        number: "02",
        title: "Commit",
        description: "Push your work to GitHub and track your progress.",
        icon: "🚀",
    },
    {
        number: "03",
        title: "Share",
        description: "Post your work publicly and build your presence.",
        icon: "🌍",
    },
    {
        number: "04",
        title: "Grow",
        description: "Create a portfolio recruiters can actually see.",
        icon: "🏆",
    },
];

export default function HowItWorks({
    className,
    ...props
}: HowItWorksProps) {
    return (
        <section
            className={cn("px-6 py-16", className)}
            {...props}
        >
            <div className="mx-auto max-w-sm">

                {/* Heading */}

                <div className="text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        How It Works
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-text-primary">
                        Build your portfolio
                        <br />
                        one day at a time.
                    </h2>

                    <p className="mt-4 leading-7 text-text-secondary">
                        Every challenge becomes a public proof of work that
                        strengthens your skills, consistency, and visibility.
                    </p>

                </div>

                {/* Timeline */}

                <div className="mt-12 flex flex-col gap-6">

                    {steps.map((step, index) => (
                        <div key={step.number}>

                            <div className="rounded-[32px] border border-border/60 bg-surface p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">

                                <div className="flex items-start justify-between">

                                    <div>

                                        <span className="text-sm font-semibold tracking-widest text-primary">
                                            {step.number}
                                        </span>

                                        <h3 className="mt-3 text-2xl font-bold text-text-primary">
                                            {step.title}
                                        </h3>

                                        <p className="mt-3 leading-7 text-text-secondary">
                                            {step.description}
                                        </p>

                                    </div>

                                    <div className="text-4xl">
                                        {step.icon}
                                    </div>

                                </div>

                            </div>

                            {index < steps.length - 1 && (
                                <div className="mx-auto h-8 w-[2px] bg-border" />
                            )}

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}