import { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    className?: string;
}

export default function Input({
    label,
    error,
    className,
    id,
    ...props
}: InputProps) {
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

            <input
                id={id}
                className={cn(
                    "w-full rounded-[var(--radius-input)] border border-border bg-surface px-4 py-3 text-text-primary outline-none transition focus:border-primary",
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