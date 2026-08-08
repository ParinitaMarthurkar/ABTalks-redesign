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
                    <h3 className="text-lg font-semibold text-text-primary">
                        {title}
                    </h3>

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
                className="text-sm font-medium text-primary hover:underline"
            >
                Open ↗
            </a>
        </Card>
    );
}