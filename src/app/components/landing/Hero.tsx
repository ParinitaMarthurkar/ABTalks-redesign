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
                "px-6 pt-16 pb-12",
                className
            )}
            {...props}
        >
            <div className="mx-auto flex max-w-sm flex-col gap-8">

                {/* Brand */}
                <div className="inline-flex w-fit rounded-full border border-border bg-surface px-4 py-2 shadow-sm">
                    <span className="text-sm font-semibold tracking-wide text-primary">
                        ABTalks
                    </span>
                </div>

                {/* Hero */}
                <div className="space-y-5">

                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
                        Build • Commit • Grow
                    </p>

                    <h1 className="text-5xl font-bold leading-tight text-text-primary">
                        Build in
                        <br />
                        Public.
                    </h1>

                    <p className="text-lg leading-8 text-text-secondary">
                        One challenge every day.
                        <br />
                        One portfolio recruiters
                        actually notice.
                    </p>

                </div>

                {/* CTA */}

                <div className="space-y-3">

                    <Link
                        href="/dashboard"
                        className="block w-full"
                    >
                        <Button fullWidth>
                            Start Building
                        </Button>
                    </Link>

                    <p className="text-sm text-text-secondary">
                        Start your 60-day journey in under a minute.
                    </p>

                </div>

            </div>
        </section>
    );
}