import { HTMLAttributes } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
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
            className={cn(
                "rounded-[28px] border border-border/60 bg-surface p-6 shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                className
            )}
            {...props}
        >
            <div className="flex items-start justify-between gap-5">

                <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                        <BookOpen
                            size={26}
                            className="text-primary"
                        />
                    </div>

                    <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                            Learning Resource
                        </p>

                        <h3 className="mt-2 text-xl font-semibold text-text-primary">
                            {title}
                        </h3>

                        <p className="mt-2 leading-6 text-text-secondary">
                            {description ??
                                "Official documentation and reference material."}
                        </p>

                    </div>

                </div>

                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    aria-label={`Open ${title}`}
                >
                    <ArrowUpRight size={20} />
                </a>

            </div>
        </Card>
    );
}