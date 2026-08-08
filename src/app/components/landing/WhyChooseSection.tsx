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
            "Build a public portfolio with daily commits that showcase your skills.",
        icon: "💻",
    },
    {
        title: "Daily Consistency",
        description:
            "Develop a sustainable coding habit through small daily challenges.",
        icon: "🔥",
    },
    {
        title: "Recruiter Visibility",
        description:
            "Stay visible with consistent GitHub activity and LinkedIn updates.",
        icon: "🚀",
    },
    {
        title: "Daily Proof of Work",
        description:
            "Document your progress every day and create a track record of learning.",
        icon: "✅",
    },
];

export default function WhyChooseSection({
    className,
    ...props
}: WhyChooseSectionProps) {
    return (
        <section
            className={cn("px-4 py-8", className)}
            {...props}
        >
            <div className="mx-auto flex max-w-sm flex-col gap-6">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-text-primary">
                        Why Students Choose ABTalks
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                        Build real projects, stay consistent, and grow your public portfolio.
                    </p>
                </div>

                <div className="grid gap-4">
                    {benefits.map((benefit) => (
                        <Card key={benefit.title}>
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl">
                                    {benefit.icon}
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-text-primary">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-text-secondary">
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