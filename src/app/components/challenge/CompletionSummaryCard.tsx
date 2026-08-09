import { HTMLAttributes } from "react";
import { Flame, Target, TrendingUp } from "lucide-react";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface CompletionSummaryCardProps
    extends HTMLAttributes<HTMLDivElement> {
    title: string;
    currentStreak: number;
    nextMilestone: string;
    className?: string;
}

export default function CompletionSummaryCard({
    title,
    currentStreak,
    nextMilestone,
    className,
    ...props
}: CompletionSummaryCardProps) {
    const progress = Math.min((currentStreak / 14) * 100, 100);

    return (
        <Card
            className={cn(
                "rounded-[28px] border border-border/60 bg-surface p-6 shadow-[0_12px_32px_rgba(0,0,0,0.06)]",
                className
            )}
            {...props}
        >
            {/* Header */}

            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    Your Journey
                </p>

                <h3 className="mt-2 text-2xl font-bold text-text-primary">
                    {title}
                </h3>
            </div>

            {/* Streak */}

            <div className="mt-4 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Flame
                        size={28}
                        className="text-primary"
                    />
                </div>

                <div>

                    <p className="text-sm text-text-secondary">
                        Current Streak
                    </p>

                    <h2 className="text-3xl font-bold text-text-primary">
                        {currentStreak} Days
                    </h2>

                </div>

            </div>

            {/* Progress */}

            <div className="mt-6">

                <div className="mb-2 flex items-center justify-between text-sm text-text-secondary">

                    <span>Milestone Progress</span>

                    <span>{Math.round(progress)}%</span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-border">

                    <div
                        className="h-full rounded-full bg-primary transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />

                </div>

            </div>

            {/* Footer */}

            <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-border/60 p-4">

                    <div className="flex items-center gap-2">

                        <TrendingUp
                            size={18}
                            className="text-primary"
                        />

                        <span className="text-sm font-medium text-text-secondary">
                            Status
                        </span>

                    </div>

                    <p className="mt-3 font-semibold text-text-primary">
                        Keep Going
                    </p>

                </div>

                <div className="rounded-2xl border border-border/60 p-4">

                    <div className="flex items-center gap-2">

                        <Target
                            size={18}
                            className="text-primary"
                        />

                        <span className="text-sm font-medium text-text-secondary">
                            Next Goal
                        </span>

                    </div>

                    <p className="mt-3 font-semibold text-primary">
                        {nextMilestone}
                    </p>

                </div>

            </div>

        </Card>
    );
}