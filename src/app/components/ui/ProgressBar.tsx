import { HTMLAttributes } from "react";

export interface ProgressBarProps
    extends HTMLAttributes<HTMLDivElement> {
    value: number;

    max?: number;

    showLabel?: boolean;

    className?: string;
}