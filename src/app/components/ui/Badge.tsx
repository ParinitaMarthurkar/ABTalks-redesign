import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    variant?: "default" | "success" | "warning" | "difficulty";
    className?: string;
}

const badgeVariants = {
    default:
        "bg-surface-elevated text-text-primary border border-border",

    success:
        "bg-success/10 text-success border border-success/20",

    warning:
        "bg-warning/10 text-warning border border-warning/20",

    difficulty:
        "bg-primary/10 text-primary border border-primary/20",
};

export default function Badge({
    children,
    variant = "default",
    className,
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200",
                badgeVariants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}