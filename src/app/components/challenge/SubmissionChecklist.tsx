import { HTMLAttributes } from "react";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface SubmissionChecklistItem {
    title: string;
    completed: boolean;
}

export interface SubmissionChecklistProps
    extends HTMLAttributes<HTMLDivElement> {
    items: SubmissionChecklistItem[];
    className?: string;
}

export default function SubmissionChecklist({
    items,
    className,
    ...props
}: SubmissionChecklistProps) {
    return (
        <Card
            className={cn("flex flex-col gap-5", className)}
            {...props}
        >
            <div>
                <h3 className="text-lg font-semibold text-text-primary">
                    Submission Checklist
                </h3>

                <p className="mt-1 text-sm text-text-secondary">
                    Complete each step before submitting today&apos;s challenge.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                {items.map((item) => (
                    <div
                        key={item.title}
                        className="flex items-center gap-3 rounded-[var(--radius-button)] border border-border bg-surface-elevated px-4 py-3"
                    >
                        <div
                            className={cn(
                                "flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs font-semibold",
                                item.completed
                                    ? "border-success bg-success text-white"
                                    : "border-border bg-background text-transparent"
                            )}
                        >
                            ✓
                        </div>

                        <span
                            className={cn(
                                "text-sm",
                                item.completed
                                    ? "font-medium text-text-primary"
                                    : "text-text-secondary"
                            )}
                        >
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    );
}