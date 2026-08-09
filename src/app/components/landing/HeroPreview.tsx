import {
    Flame,
    FolderGit2,
    CheckCircle2,
    Trophy,
} from "lucide-react";

export default function HeroPreview() {
    return (
        <div className="relative mt-12 flex justify-center">

            {/* Glow */}

            <div className="absolute inset-0 mx-auto h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

            {/* Phone */}

            <div className="relative w-[290px] overflow-hidden rounded-[36px] border border-border/60 bg-surface p-6 shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

                <div className="mb-6 flex items-center justify-between">

                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-primary">
                            Day 12
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-text-primary">
                            Responsive Dashboard
                        </h3>
                    </div>

                    <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                        Medium
                    </div>

                </div>

                {/* Progress */}

                <div>

                    <div className="mb-2 flex justify-between text-sm text-text-secondary">
                        <span>Journey</span>
                        <span>20%</span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-border">
                        <div className="h-full w-1/5 rounded-full bg-primary" />
                    </div>

                </div>

                {/* Stats */}

                <div className="mt-6 space-y-4">

                    <div className="flex items-center justify-between rounded-2xl bg-background p-4">

                        <div className="flex items-center gap-3">
                            <Flame
                                size={22}
                                className="text-primary"
                            />

                            <span className="font-medium">
                                Current Streak
                            </span>
                        </div>

                        <span className="font-bold">
                            11 Days
                        </span>

                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-background p-4">

                        <div className="flex items-center gap-3">
                            <FolderGit2
                                size={22}
                                className="text-primary"
                            />

                            <span className="font-medium">
                                GitHub
                            </span>
                        </div>

                        <CheckCircle2
                            size={20}
                            className="text-green-500"
                        />

                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-background p-4">

                        <div className="flex items-center gap-3">
                            <Trophy
                                size={22}
                                className="text-primary"
                            />

                            <span className="font-medium">
                                Next Milestone
                            </span>
                        </div>

                        <span className="font-semibold text-primary">
                            14 Days
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}