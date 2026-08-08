import Link from "next/link";
import { HTMLAttributes } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { cn } from "../../lib/utils";

export interface ChallengePreviewSectionProps
    extends HTMLAttributes<HTMLElement> {
    className?: string;
}

export default function ChallengePreviewSection({
    className,
    ...props
}: ChallengePreviewSectionProps) {
    return (
        <section
            className={cn("px-4 py-8", className)}
            {...props}
        >
            <div className="mx-auto flex max-w-sm flex-col gap-6">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-text-primary">
                        Preview Today&apos;s Challenge
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                        Experience what a typical challenge looks like before you begin your
                        60-day journey.
                    </p>
                </div>

                <Card>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-text-secondary">
                                Day 12
                            </span>

                            <div className="flex gap-2">
                                <Badge variant="difficulty">Medium</Badge>
                                <Badge>25 mins</Badge>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-text-primary">
                                Responsive Dashboard
                            </h3>

                        </div>

                        <Link href="/day/12" className="w-full">
                            <Button variant="secondary" fullWidth>
                                Preview Today&apos;s Challenge →
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </section>
    );
}