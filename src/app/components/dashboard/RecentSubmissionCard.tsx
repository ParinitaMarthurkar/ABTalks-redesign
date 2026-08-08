import { HTMLAttributes } from "react";
import Card from "../ui/Card";
import { cn } from "../../lib/utils";

export interface RecentSubmissionsCardProps
    extends HTMLAttributes<HTMLDivElement> {
    githubTimestamp: string;
    linkedinTimestamp: string;
    className?: string;
}

export default function RecentSubmissionsCard({
    githubTimestamp,
    linkedinTimestamp,
    className,
    ...props
}: RecentSubmissionsCardProps) {
    return (
        <Card
            className={cn("flex flex-col gap-5", className)}
            {...props}
        >
            <div>
                <h3 className="text-lg font-semibold text-text-primary">
                    Recent Submissions
                </h3>

                <p className="mt-1 text-sm text-text-secondary">
                    Your latest challenge activity.
                </p>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg">
                        💻
                    </div>

                    <div>
                        <p className="font-medium text-text-primary">
                            GitHub Submitted
                        </p>
                        <p className="text-sm text-text-secondary">
                            {githubTimestamp}
                        </p>
                    </div>
                </div>

                <div className="border-t border-border" />

                <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg">
                        🔗
                    </div>

                    <div>
                        <p className="font-medium text-text-primary">
                            LinkedIn Posted
                        </p>
                        <p className="text-sm text-text-secondary">
                            {linkedinTimestamp}
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
}