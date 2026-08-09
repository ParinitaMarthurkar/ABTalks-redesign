import { HTMLAttributes } from "react";
import { Check } from "lucide-react";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface SubmissionChecklistItem {
    title: string;
    completed: boolean;
}

export interface SubmissionChecklistProps
    extends HTMLAttributes<HTMLDivElement> {
    items?: SubmissionChecklistItem[];
    className?: string;
}

export default function SubmissionChecklist({
    items = [],
    className,
    ...props
}: SubmissionChecklistProps) {
    console.log("SubmissionChecklist items:", items);

    return (
        <Card
            className={cn(
                "rounded-[28px] border border-border/60 bg-surface p-6 shadow-[0_12px_32px_rgba(0,0,0,0.06)]",
                className
            )}
            {...props}
        >
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    Progress
                </p>

                <h3 className="mt-2 text-2xl font-bold text-text-primary">
                    Submission Checklist
                </h3>

                <p className="mt-2 leading-7 text-text-secondary">
                    Complete every step before submitting your challenge.
                </p>
            </div>

            <div className="mt-6 space-y-4">
                {items.length === 0 ? (
                    <p className="text-sm text-text-secondary">
                        No checklist items available.
                    </p>
                ) : (
                    items.map((item, index) => (
                        <div
                            key={item.title}
                            className={cn(
                                "flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300",
                                item.completed
                                    ? "border-primary/20 bg-primary/5"
                                    : "border-border bg-surface"
                            )}
                        >
                            <div
                                className={cn(
                                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                                    item.completed
                                        ? "bg-primary text-white"
                                        : "border border-border bg-background text-text-secondary"
                                )}
                            >
                                {item.completed ? (
                                    <Check size={18} strokeWidth={3} />
                                ) : (
                                    <span className="text-sm font-semibold">
                                        {index + 1}
                                    </span>
                                )}
                            </div>

                            <div className="flex-1">
                                <p
                                    className={cn(
                                        "font-medium",
                                        item.completed
                                            ? "text-text-primary"
                                            : "text-text-secondary"
                                    )}
                                >
                                    {item.title}
                                </p>
                            </div>

                            {item.completed && (
                                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                                    Done
                                </span>
                            )}
                        </div>
                    ))
                )}
            </div>
        </Card>
    );
}