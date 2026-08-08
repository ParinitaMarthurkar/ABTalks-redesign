import { HTMLAttributes } from "react";
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
    return (
        <Card
            className={cn("flex flex-col gap-5", className)}
            {...props}
        >
            <div>
                <p className="text-sm font-medium text-text-secondary">
                    Today&apos;s Progress
                </p>

                <h3 className="mt-1 text-lg font-semibold text-text-primary">
                    {title}
                </h3>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">
                        ✓
                    </div>

                    <div>
                        <p className="text-sm font-medium text-text-primary">
                            Challenge Completed
                        </p>

                        <p className="text-sm text-text-secondary">
                            Your submission has been recorded successfully.
                        </p>
                    </div>
                </div>

                <div className="border-t border-border" />

                <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">
                        Current Streak
                    </span>

                    <span className="font-semibold text-text-primary">
                        {currentStreak} Days
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">
                        Next Milestone
                    </span>

                    <span className="font-semibold text-primary">
                        {nextMilestone}
                    </span>
                </div>
            </div>
        </Card>
    );
}