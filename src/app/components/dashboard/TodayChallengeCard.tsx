import Link from "next/link";
import { HTMLAttributes } from "react";
import type { Difficulty } from "../../types/challenge";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface TodayChallengeCardProps
    extends HTMLAttributes<HTMLDivElement> {
    day: number;
    title: string;
    difficulty: Difficulty;
    estimatedTime: string;
    description: string;
    className?: string;
}

export default function TodayChallengeCard({
    day,
    title,
    difficulty,
    estimatedTime,
    description,
    className,
    ...props
}: TodayChallengeCardProps) {
    return (
        <Card
            className={cn(
                "rounded-[32px] border border-border/60 bg-surface p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)]",
                className
            )}
            {...props}
        >
            <div className="flex items-center justify-between">

                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Today&apos;s Challenge
                    </p>

                    <h2 className="mt-3 text-3xl font-bold leading-tight text-text-primary">
                        {title}
                    </h2>
                </div>

                <Badge>
                    Day {day}
                </Badge>

            </div>

            <p className="mt-5 leading-7 text-text-secondary">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

                <Badge variant="difficulty">
                    {difficulty}
                </Badge>

                <Badge>
                    ⏱ {estimatedTime}
                </Badge>

            </div>

            <div className="mt-8 flex items-center justify-between">

                <div>
                    <p className="text-sm text-text-secondary">
                        Today&apos;s Goal
                    </p>

                    <p className="font-semibold text-text-primary">
                        Complete & Push to GitHub
                    </p>
                </div>

                <Link href="/day/12">
                    <Button>
                        Continue →
                    </Button>
                </Link>

            </div>

        </Card>
    );
}