import { HTMLAttributes, ReactNode } from "react";

export interface SectionHeaderProps
    extends HTMLAttributes<HTMLDivElement> {
    title: string;

    subtitle?: string;

    icon?: ReactNode;

    action?: ReactNode;

    className?: string;
}