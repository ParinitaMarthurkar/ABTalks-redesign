import Link from "next/link";
import { HTMLAttributes } from "react";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

export interface HeroProps extends HTMLAttributes<HTMLElement> {
    className?: string;
}

export default function Hero({
    className,
    ...props
}: HeroProps) {
    return (
        <section
            className={cn(
                "relative overflow-hidden px-6 pt-16 pb-12",
                className
            )}
            {...props}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed25,transparent_60%)]" />

            <div className="relative mx-auto flex max-w-sm flex-col gap-8">

                {/* Brand */}
                <div className="inline-flex w-fit rounded-full border border-border bg-surface px-4 py-2 shadow-sm">
                    <span className="text-sm font-semibold tracking-wide text-primary">
                        ABTalks
                    </span>
                </div>

                {/* Hero */}
                <div className="space-y-5">

                    <p className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        🚀 60-Day Student Challenge
                    </p>

                    <h1 className="text-5xl font-bold leading-tight text-text-primary">
                        Build
                        <br />
                        Consistently.
                        <br />
                        Ship in Public.
                    </h1>

                    <p className="text-lg leading-8 text-text-secondary">
                        Complete one real-world challenge every day,
                        showcase your work on GitHub and LinkedIn,
                        and build a portfolio recruiters can actually verify.
                    </p>

                </div>

                {/* CTA Card */}
                <div className="rounded-[28px] border border-border bg-surface p-6 shadow-[var(--shadow-floating)] transition-all duration-300 hover:-translate-y-1">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Start Today
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-text-primary">
                        Start your 60-day coding journey
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-text-secondary">
                        Build one project every day, stay consistent,
                        and grow a portfolio that speaks for itself.
                    </p>

                    <div className="mt-6">
                        <Link
                            href="/dashboard"
                            className="block w-full"
                        >
                            <Button fullWidth>
                                Start Building →
                            </Button>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}