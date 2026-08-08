import { HTMLAttributes } from "react";
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
            className={cn("flex items-start gap-4", className)}
            {...props}
        >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                🎯
            </div>

            <div className="flex flex-1 flex-col">
                <p className="text-sm font-medium text-text-secondary">
                    Upcoming Milestone
                </p>

                <h3 className="mt-1 text-lg font-semibold text-text-primary">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-5 text-text-secondary">
                    You&apos;re{" "}
                    <span className="font-semibold text-text-primary">
                        {daysRemaining} day{daysRemaining !== 1 ? "s" : ""}
                    </span>{" "}
                    away from reaching this milestone.
                </p>
            </div>
        </Card>
    );
}