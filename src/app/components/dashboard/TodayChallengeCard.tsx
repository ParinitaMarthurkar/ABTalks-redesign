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
            className={cn("flex flex-col gap-5", className)}
            {...props}
        >
            <div className="flex items-center justify-between gap-3">
                <Badge>Day {day}</Badge>

                <div className="flex items-center gap-2">
                    <Badge variant="difficulty">{difficulty}</Badge>
                    <Badge variant="default">{estimatedTime}</Badge>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-text-primary">
                    {title}
                </h3>

                <p className="text-sm leading-6 text-text-secondary">
                    {description}
                </p>
            </div>

            <Link href="/day/12" className="w-full">
                <Button fullWidth>
                    Start Challenge
                </Button>
            </Link>
        </Card>
    );
}