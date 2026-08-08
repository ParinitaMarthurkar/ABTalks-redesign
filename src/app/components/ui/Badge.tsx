import { HTMLAttributes, ReactNode } from "react";

export interface BadgeProps
    extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;

    variant?: "default" | "success" | "warning" | "difficulty";

    className?: string;
}