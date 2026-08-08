import { HTMLAttributes } from "react";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface TaskCardProps
    extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    className?: string;
}

export default function TaskCard({
    title,
    description,
    className,
    ...props
}: TaskCardProps) {
    return (
        <Card
            className={cn("flex flex-col gap-4", className)}
            {...props}
        >
            <div className="space-y-2">
                <p className="text-sm font-medium text-text-secondary">
                    Today&apos;s Challenge
                </p>

                <h2 className="text-lg font-semibold text-text-primary">
                    {title}
                </h2>

                <p className="text-sm leading-6 text-text-secondary">
                    {description}
                </p>
            </div>
        </Card>
    );
}