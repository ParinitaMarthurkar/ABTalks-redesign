import { HTMLAttributes } from "react";
import Button from "../ui/Button";
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
            className={cn("px-4 py-10", className)}
            {...props}
        >
            <div className="mx-auto flex max-w-sm flex-col items-center gap-6 rounded-[var(--radius-card)] border border-border bg-surface p-6 text-center shadow-[var(--shadow-card)]">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-text-primary">
                        Ready to build for 60 days?
                    </h2>
                </div>

                <Button fullWidth>
                    Start Challenge
                </Button>
            </div>
        </section>
    );
}