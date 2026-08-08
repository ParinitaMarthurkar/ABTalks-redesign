import { HTMLAttributes, ReactNode } from "react";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface MetricCardProps
    extends HTMLAttributes<HTMLDivElement> {
    icon: ReactNode;
    title: string;
    value: string;
    subtitle?: string;
    className?: string;
}

export default function MetricCard({
    icon,
    title,
    value,
    subtitle,
    className,
    ...props
}: MetricCardProps) {
    return (
        <Card
            className={cn("flex items-start gap-4", className)}
            {...props}
        >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                {icon}
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
                <p className="text-sm font-medium text-text-secondary">
                    {title}
                </p>

                <h3 className="mt-1 text-xl font-bold leading-tight text-text-primary">
                    {value}
                </h3>

                {subtitle && (
                    <p className="mt-1 text-sm leading-5 text-text-secondary">
                        {subtitle}
                    </p>
                )}
            </div>
        </Card>
    );
}