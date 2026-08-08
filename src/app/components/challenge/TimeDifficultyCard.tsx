import { HTMLAttributes } from "react";
import type { Difficulty } from "../../types/challenge";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface TimeDifficultyCardProps
    extends HTMLAttributes<HTMLDivElement> {
    difficulty: Difficulty;
    estimatedTime: string;
    className?: string;
}

export default function TimeDifficultyCard({
    difficulty,
    estimatedTime,
    className,
    ...props
}: TimeDifficultyCardProps) {
    return (
        <Card
            className={cn("grid grid-cols-2 gap-4", className)}
            {...props}
        >
            <div className="flex flex-col">
                <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                    Difficulty
                </p>

                <div className="mt-3">
                    <Badge variant="difficulty">
                        {difficulty}
                    </Badge>
                </div>
            </div>

            <div className="flex flex-col items-end">
                <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                    Estimated Time
                </p>

                <div className="mt-3">
                    <Badge>
                        ⏱ {estimatedTime}
                    </Badge>
                </div>
            </div>
        </Card>
    )
};