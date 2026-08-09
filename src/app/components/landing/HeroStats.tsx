import Badge from "../ui/Badge";
import Card from "../ui/Card";

export default function HeroStats() {
    return (
        <section className="-mt-2 px-6 pb-14">
            <div className="mx-auto flex max-w-sm flex-col gap-6">

                {/* Journey Card */}

                <Card className="relative -mt-8 ml-6 rounded-[32px] border border-border/60 bg-surface p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                    <div className="flex items-center justify-between">

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                            Your Journey
                        </p>

                        <Badge>
                            Day 12 / 60
                        </Badge>

                    </div>

                    <h2 className="mt-5 text-5xl font-bold leading-none text-text-primary">
                        20%
                    </h2>

                    <p className="mt-1 text-text-secondary">
                        Overall Progress
                    </p>

                    <div className="mt-6">

                        <div className="mt-2 h-4 overflow-hidden rounded-full bg-border/60">

                            <div className="h-full w-1/5 rounded-full bg-primary shadow-lg" />

                        </div>

                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-5">

                        <div className="rounded-2xl bg-surface p-4">

                            <p className="text-xs uppercase tracking-wide text-text-secondary">
                                Streak
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-text-primary">
                                🔥 11
                            </h3>

                            <p className="text-sm text-text-secondary">
                                Days
                            </p>

                        </div>

                        <div className="rounded-3xl border border-border/60 bg-background p-5">

                            <p className="text-xs uppercase tracking-wide text-text-secondary">
                                Next Badge
                            </p>

                            <h3 className="mt-2 text-xl font-bold text-primary">
                                2 Days
                            </h3>

                            <p className="text-sm text-text-secondary">
                                Remaining
                            </p>

                        </div>

                    </div>

                </Card>

                {/* Challenge Card */}

                <Card className="relative rounded-[32px] border border-border/60 bg-surface p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                    <div className="flex items-center justify-between">

                        <Badge>
                            Today&apos;s Challenge
                        </Badge>

                        <Badge variant="difficulty">
                            Medium
                        </Badge>

                    </div>

                    <h2 className="mt-5 text-2xl font-bold text-text-primary">
                        Responsive Dashboard
                    </h2>

                    <p className="mt-3 leading-7 text-text-secondary">
                        Design and build a responsive dashboard
                        using reusable components and mobile-first
                        layouts.
                    </p>

                    <div className="mt-6 flex items-center justify-between">

                        <span className="text-sm font-medium text-text-secondary">
                            ⏱ 25 mins
                        </span>

                        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                            Ready to Build
                        </span>

                    </div>

                </Card>

            </div >
        </section >
    );
}