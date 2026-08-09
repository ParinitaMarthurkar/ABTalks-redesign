import { HTMLAttributes } from "react";
import { Target } from "lucide-react";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface MilestoneCardProps
    extends HTMLAttributes<HTMLDivElement> {
    title: string;
    daysRemaining: number;
    className?: string;
}

export default function MilestoneCard({
    title,
    daysRemaining,
    className,
    ...props
}: MilestoneCardProps) {
    return (
        <Card
            className={cn(
                "rounded-[28px] border border-border/60 bg-surface p-6 shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                className
            )}
            {...props}
        >
            <div className="flex items-start justify-between">

                <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                        Next Milestone
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-text-primary">
                        {title}
                    </h3>

                    <p className="mt-2 leading-7 text-text-secondary">
                        Keep your streak alive. You&apos;re only{" "}
                        <span className="font-semibold text-primary">
                            {daysRemaining} day{daysRemaining !== 1 ? "s" : ""}
                        </span>{" "}
                        away.
                    </p>

                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Target
                        size={28}
                        className="text-primary"
                    />
                </div>

            </div>

            {/* Progress */}

            <div className="mt-6">

                <div className="mb-2 flex justify-between text-sm text-text-secondary">
                    <span>Progress</span>
                    <span>{14 - daysRemaining}/14 Days</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-border">

                    <div
                        className="h-full rounded-full bg-primary transition-all duration-500"
                        style={{
                            width: `${((14 - daysRemaining) / 14) * 100}%`,
                        }}
                    />

                </div>

            </div>

        </Card>
    );
}