import CompletionSummaryCard from "../../components/challenge/CompletionSummaryCard";
import ResourceCard from "../../components/challenge/ResourceCard";
import SubmissionChecklist from "../../components/challenge/SubmissionChecklist";
import SubmissionForm from "../../components/challenge/SubmissionForm";
import TaskCard from "../../components/challenge/TaskCard";
import TimeDifficultyCard from "../../components/challenge/TimeDifficultyCard";

import {
    getTodayChallenge,
    getSubmission,
    getUser,
} from "../../lib/api";
import { submission } from "../../data/submission";

export default async function ChallengeDayPage() {
    const [challenge, existingSubmission, user] = await Promise.all([
        getTodayChallenge(),
        getSubmission(12),
        getUser(),
    ]);
    return (
        <main className="min-h-screen bg-background px-4 py-8">
            <div className="mx-auto flex max-w-sm flex-col gap-6">

                {/* Header */}
                <section className="space-y-2">
                    <p className="text-sm font-medium text-text-secondary">
                        Day {challenge.day}
                    </p>

                    <h1 className="text-2xl font-bold text-text-primary">
                        {challenge.title}
                    </h1>

                    <p className="text-sm leading-6 text-text-secondary">
                        Complete today&apos;s challenge and submit your proof of work.
                    </p>
                </section>

                <TimeDifficultyCard
                    difficulty={challenge.difficulty}
                    estimatedTime={challenge.estimatedTime}
                />

                <TaskCard
                    description={challenge.description}
                />

                {/* Requirements */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-text-primary">
                        Requirements
                    </h2>

                    <ul className="space-y-3">
                        {challenge.requirements.map((requirement) => (
                            <li
                                key={requirement}
                                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3"
                            >
                                <span>✓</span>
                                <span>{requirement}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Skills */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold">
                        Skills You&apos;ll Practice
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {challenge.skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-border px-3 py-1"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Resources */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold">
                        Resources
                    </h2>

                    {challenge.resources.map((resource) => (
                        <ResourceCard
                            key={resource.url}
                            title={resource.title}
                            url={resource.url}
                        />
                    ))}
                </section>

                <SubmissionChecklist
                    items={submission.checklist}
                />

                {existingSubmission.completed ? (
                    <CompletionSummaryCard
                        title="Challenge Completed"
                        currentStreak={user.streak}
                        nextMilestone={user.nextMilestone.title}
                    />
                ) : (
                    <SubmissionForm />
                )}

            </div>
        </main>
    );
}