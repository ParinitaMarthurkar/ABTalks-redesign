import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export default function Card({
    children,
    className,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                "rounded-[var(--radius-card)] border border-border bg-surface p-5 shadow-[var(--shadow-card)]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}