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
                "px-4 pt-12 pb-10 text-center",
                className
            )}
            {...props}
        >
            <div className="mx-auto flex max-w-sm flex-col items-center gap-6">
                {/* Logo / Brand */}
                <div className="flex flex-col items-center gap-2">
                    <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-[var(--shadow-card)]">
                        ABTalks
                    </span>

                    <h1 className="text-[30px] font-bold leading-[1.2] text-text-primary">
                        Build in public.
                        <br />
                        Grow with consistency.
                    </h1>

                    <p className="max-w-xs text-base leading-6 text-text-secondary">
                        Build a portfolio recruiters can actually see.
                    </p>
                </div>

                {/* Primary CTA */}
                <div className="flex w-full flex-col items-center gap-3">
                    <Link href="/dashboard" className="w-full">
                        <Button fullWidth>
                            Start Challenge
                        </Button>
                    </Link>
                    <p className="text-sm leading-5 text-text-secondary">
                        No setup. Start today&apos;s challenge in under a minute.
                    </p>
                </div>
            </div>
        </section>
    );
}