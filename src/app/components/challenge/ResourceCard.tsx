import { HTMLAttributes } from "react";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface ResourceCardProps
    extends HTMLAttributes<HTMLDivElement> {
    title: string;
    url: string;
    description?: string;
    className?: string;
}

export default function ResourceCard({
    title,
    url,
    description,
    className,
    ...props
}: ResourceCardProps) {
    return (
        <Card
            className={cn("flex items-start justify-between gap-4", className)}
            {...props}
        >
            <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    📚
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                    <h3 className="text-base font-semibold text-text-primary">
                        {title}
                    </h3>

                    <p className="mt-1 text-sm text-text-secondary">
                        Official Documentation
                    </p>

                    {description && (
                        <p className="mt-2 text-sm leading-6 text-text-secondary">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition hover:bg-primary/20"
            >
                Open ↗
            </a>
        </Card>
    );
}