import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    className?: string;
}

const buttonVariants = {
    primary:
        "bg-primary text-white hover:opacity-90",

    secondary:
        "bg-surface border border-border text-text-primary hover:bg-surface-elevated",

    ghost:
        "bg-transparent text-text-primary hover:bg-surface",
};

const buttonSizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-base",
    lg: "h-12 px-6 text-lg",
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-[var(--radius-button)] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
                fullWidth && "w-full",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}