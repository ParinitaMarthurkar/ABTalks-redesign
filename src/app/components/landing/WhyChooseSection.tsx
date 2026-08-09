import { HTMLAttributes } from "react";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface WhyChooseSectionProps
    extends HTMLAttributes<HTMLElement> {
    className?: string;
}

const benefits = [
    {
        title: "GitHub Portfolio",
        description:
            "Create a portfolio filled with real projects and meaningful daily commits.",
        icon: "💻",
    },
    {
        title: "Consistency",
        description:
            "Small daily challenges build a habit that compounds over time.",
        icon: "🔥",
    },
    {
        title: "Recruiter Visibility",
        description:
            "Show recruiters continuous growth through GitHub and LinkedIn activity.",
        icon: "🚀",
    },
    {
        title: "Proof of Work",
        description:
            "Every completed challenge becomes evidence of your practical skills.",
        icon: "🏆",
    },
];

export default function WhyChooseSection({
    className,
    ...props
}: WhyChooseSectionProps) {
    return (
        <section
            className={cn("px-6 py-16", className)}
            {...props}
        >
            <div className="mx-auto max-w-sm">

                {/* Heading */}

                <div className="text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        Your Outcome
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-text-primary">
                        What you&apos;ll have
                        <br />
                        after 60 days.
                    </h2>

                    <p className="mt-4 leading-7 text-text-secondary">
                        Every challenge you complete contributes to a stronger
                        portfolio, better habits, and visible progress.
                    </p>

                </div>

                {/* Benefits */}

                <div className="mt-10 space-y-5">

                    {benefits.map((benefit) => (
                        <Card
                            key={benefit.title}
                            className="rounded-[28px] border border-border/60 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex items-start gap-5">

                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                                    {benefit.icon}
                                </div>

                                <div>

                                    <h3 className="text-xl font-semibold text-text-primary">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-2 leading-7 text-text-secondary">
                                        {benefit.description}
                                    </p>

                                </div>

                            </div>
                        </Card>
                    ))}

                </div>

            </div>
        </section>
    );
}