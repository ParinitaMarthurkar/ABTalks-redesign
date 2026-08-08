import { TextareaHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface TextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    className?: string;
}

export default function Textarea({
    label,
    error,
    className,
    id,
    ...props
}: TextareaProps) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label
                    htmlFor={id}
                    className="text-sm font-medium text-text-primary"
                >
                    {label}
                </label>
            )}

            <textarea
                id={id}
                className={cn(
                    "min-h-32 rounded-[var(--radius-input)] border border-border bg-surface px-4 py-3 text-text-primary outline-none transition focus:border-primary",
                    className
                )}
                {...props}
            />

            {error && (
                <p className="text-sm text-error">
                    {error}
                </p>
            )}
        </div>
    );
}