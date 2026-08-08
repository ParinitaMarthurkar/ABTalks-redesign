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
        <main className="min-h-screen bg-background px-4 py-8">
            <div className="mx-auto flex max-w-sm flex-col gap-6">
                {/* Greeting */}
                <section className="space-y-2">
                    <p className="text-sm font-medium text-text-secondary">
                        👋 Hi, {user.name}
                    </p>

                    <h1 className="text-2xl font-bold text-text-primary">
                        Day {user.currentDay} of {user.totalDays}
                    </h1>

                    <p className="text-sm leading-6 text-text-secondary">
                        You&apos;re {user.nextMilestone.daysRemaining} days away
                        from your next milestone.
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
                    <h2 className="text-lg font-semibold text-text-primary">
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

                {/* Milestone */}
                <MilestoneCard
                    title={user.nextMilestone.title}
                    daysRemaining={user.nextMilestone.daysRemaining}
                />

                {/* Achievements */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-text-primary">
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

                {/* Recent Submissions */}
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