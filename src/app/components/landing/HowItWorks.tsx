import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface HowItWorksProps extends HTMLAttributes<HTMLElement> {
    className?: string;
}

const steps = ["Learn", "Build", "Share", "Grow"];

export default function HowItWorks({
    className,
    ...props
}: HowItWorksProps) {
    return (
        <section
            className={cn("px-4 py-8", className)}
            {...props}
        >
            <div className="mx-auto flex max-w-sm flex-col items-center gap-8">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-text-primary">
                        How ABTalks Works
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                        One small challenge every day. Build consistently and showcase your
                        progress publicly.
                    </p>
                </div>

                <div className="flex w-full flex-col items-center gap-3">
                    {steps.map((step, index) => (
                        <div
                            key={step}
                            className="flex flex-col items-center gap-3"
                        >
                            <div className="w-full rounded-[var(--radius-card)] border border-border bg-surface px-6 py-4 text-center shadow-[var(--shadow-card)]">
                                <span className="text-lg font-semibold text-text-primary">
                                    {step}
                                </span>
                            </div>

                            {index < steps.length - 1 && (
                                <span className="text-xl text-text-secondary">↓</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}