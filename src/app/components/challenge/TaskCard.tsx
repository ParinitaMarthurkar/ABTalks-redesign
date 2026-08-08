import { HTMLAttributes } from "react";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface TaskCardProps
    extends HTMLAttributes<HTMLDivElement> {
    description: string;
    className?: string;
}

export default function TaskCard({
    description,
    className,
    ...props
}: TaskCardProps) {
    return (
        <Card
            className={cn("flex flex-col gap-4", className)}
            {...props}
        >
            <div className="space-y-3">
                <h2 className="text-lg font-semibold text-text-primary">
                    Challenge Details
                </h2>

                <p className="text-sm leading-6 text-text-secondary">
                    {description}
                </p>
            </div>
        </Card>
    );
}