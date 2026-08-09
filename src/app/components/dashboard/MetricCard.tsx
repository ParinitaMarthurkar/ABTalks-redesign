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
            className={cn(
                "rounded-[28px] border border-border/60 bg-surface p-5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                className
            )}
            {...props}
        >
            <div className="flex items-center justify-between">

                <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary">
                        {title}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold leading-none text-text-primary">
                        {value}
                    </h3>

                    {subtitle && (
                        <p className="mt-2 text-sm leading-6 text-text-secondary">
                            {subtitle}
                        </p>
                    )}

                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
                    {icon}
                </div>

            </div>
        </Card>
    );
}