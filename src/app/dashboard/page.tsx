import AchievementCard from "../components/dashboard/AchievementCard";
import MetricCard from "../components/dashboard/MetricCard";
import MilestoneCard from "../components/dashboard/MilestoneCard";
import RecentSubmissionCard from "../components/dashboard/RecentSubmissionCard";
import TodayChallengeCard from "../components/dashboard/TodayChallengeCard";

import { challenge } from "../data/challenge";
import { progress } from "../data/progress";
import { user } from "../data/user";

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-background px-6 py-8">
            <div className="mx-auto flex max-w-sm flex-col gap-8">

                {/* Hero */}

                <section className="space-y-6">

                    <div>

                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            Welcome Back
                        </p>

                        <h1 className="mt-3 text-4xl font-bold leading-tight text-text-primary">
                            Hi, {user.name} 👋
                        </h1>

                        <p className="mt-3 leading-7 text-text-secondary">
                            Day {user.currentDay} of {user.totalDays}
                            <br />
                            Keep building. You&apos;re only{" "}
                            {user.nextMilestone.daysRemaining} days away
                            from your next milestone.
                        </p>

                    </div>

                    {/* Journey */}

                    <div className="rounded-[32px] border border-border/60 bg-surface p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">

                        <div className="flex items-center justify-between">

                            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                                Your Journey
                            </span>

                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                Day {user.currentDay}/{user.totalDays}
                            </span>

                        </div>

                        <div className="mt-6">

                            <div className="mb-2 flex justify-between text-sm text-text-secondary">

                                <span>Progress</span>

                                <span>{user.completion}%</span>

                            </div>

                            <div className="h-3 overflow-hidden rounded-full bg-border">

                                <div
                                    className="h-full rounded-full bg-primary"
                                    style={{ width: `${user.completion}%` }}
                                />

                            </div>

                        </div>

                        <div className="mt-6 flex items-center justify-between">

                            <div>

                                <p className="text-sm text-text-secondary">
                                    Current Streak
                                </p>

                                <h3 className="text-2xl font-bold text-text-primary">
                                    🔥 {user.streak} Days
                                </h3>

                            </div>

                            <div className="text-right">

                                <p className="text-sm text-text-secondary">
                                    Next Badge
                                </p>

                                <h3 className="text-lg font-semibold text-primary">
                                    {user.nextMilestone.daysRemaining} Days
                                </h3>

                            </div>

                        </div>

                    </div>

                </section>

                {/* About */}

                <section className="rounded-[32px] border border-border/60 bg-surface p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        About ABTalks
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-text-primary">
                        Build. Commit. Share. Grow.
                    </h2>

                    <p className="mt-3 leading-7 text-text-secondary">
                        ABTalks helps students build real-world projects,
                        maintain consistency, showcase their work publicly,
                        and create a portfolio recruiters can actually see.
                    </p>

                </section>

                {/* Today's Challenge */}

                <TodayChallengeCard
                    day={challenge.day}
                    title={challenge.title}
                    difficulty={challenge.difficulty}
                    estimatedTime={challenge.estimatedTime}
                    description={challenge.description}
                />

                {/* Progress */}

                <section className="space-y-4">

                    <h2 className="text-2xl font-bold text-text-primary">
                        Your Progress
                    </h2>

                    <div className="grid gap-4">

                        <MetricCard
                            icon="🔥"
                            title="Current Streak"
                            value={`${user.streak} Days`}
                        />

                        <MetricCard
                            icon="📈"
                            title="Completion"
                            value={`${user.completion}%`}
                        />

                        <MetricCard
                            icon="🏆"
                            title="Standing"
                            value={user.standing}
                        />

                    </div>

                </section>

                <MilestoneCard
                    title={user.nextMilestone.title}
                    daysRemaining={user.nextMilestone.daysRemaining}
                />

                <section className="space-y-4">

                    <h2 className="text-2xl font-bold text-text-primary">
                        Achievements
                    </h2>

                    <div className="grid gap-4">

                        {progress.achievements.map((achievement) => (
                            <AchievementCard
                                key={achievement}
                                title={achievement}
                                unlocked
                            />
                        ))}

                    </div>

                </section>

                <RecentSubmissionCard
                    githubTimestamp={
                        progress.recentActivity.find(
                            (activity) => activity.type === "GitHub"
                        )?.timestamp ?? ""
                    }
                    linkedinTimestamp={
                        progress.recentActivity.find(
                            (activity) => activity.type === "LinkedIn"
                        )?.timestamp ?? ""
                    }
                />

            </div>
        </main>
    );
}