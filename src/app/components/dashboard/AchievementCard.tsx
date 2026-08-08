import { HTMLAttributes } from "react";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface AchievementCardProps
    extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    unlocked?: boolean;
    className?: string;
}

export default function AchievementCard({
    title,
    description,
    unlocked = true,
    className,
    ...props
}: AchievementCardProps) {
    return (
        <Card
            className={cn("flex items-start gap-4", className)}
            {...props}
        >
            <div
                className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                    unlocked
                        ? "bg-success/10 text-success"
                        : "bg-surface-elevated text-text-secondary"
                )}
            >
                🏆
            </div>

            <div className="flex flex-1 flex-col">
                <p className="text-sm font-medium text-text-secondary">
                    Achievement
                </p>

                <h3 className="mt-1 text-lg font-semibold text-text-primary">
                    {title}
                </h3>

                {description && (
                    <p className="mt-2 text-sm leading-5 text-text-secondary">
                        {description}
                    </p>
                )}

                <span
                    className={cn(
                        "mt-3 text-xs font-medium",
                        unlocked ? "text-success" : "text-text-secondary"
                    )}
                >
                    {unlocked ? "Unlocked" : "Locked"}
                </span>
            </div>
        </Card>
    );
}
