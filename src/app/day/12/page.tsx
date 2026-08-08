import CompletionSummaryCard from "../../components/challenge/CompletionSummaryCard";
import ResourceCard from "../../components/challenge/ResourceCard";
import SubmissionChecklist from "../../components/challenge/SubmissionChecklist";
import TaskCard from "../../components/challenge/TaskCard";
import TimeDifficultyCard from "../../components/challenge/TimeDifficultyCard";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";

import { challenge } from "../../data/challenge";
import { submission } from "../../data/submission";
import { user } from "../../data/user";

export default function ChallengeDayPage() {
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

                {/* Time & Difficulty */}
                <TimeDifficultyCard
                    difficulty={challenge.difficulty}
                    estimatedTime={challenge.estimatedTime}
                />

                {/* Task */}
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
                                className="flex items-center gap-3 rounded-[var(--radius-button)] border border-border bg-surface px-4 py-3"
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                    ✓
                                </span>

                                <span className="text-sm text-text-primary">
                                    {requirement}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Skills */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-text-primary">
                        Skills You&apos;ll Practice
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {challenge.skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-text-primary"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Resources */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-text-primary">
                        Resources
                    </h2>

                    <div className="space-y-4">
                        {challenge.resources.map((resource) => (
                            <ResourceCard
                                key={resource.url}
                                title={resource.title}
                                url={resource.url}
                            />
                        ))}
                    </div>
                </section>

                {/* Checklist */}
                <SubmissionChecklist items={submission.checklist} />

                {/* Submission Form */}
                <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-text-primary">
                        Submit Your Work
                    </h2>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                label="GitHub Repository / Commit"
                                placeholder="https://github.com/..."
                            />

                            <p className="text-xs text-text-secondary">
                                Required to verify your submission.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Input
                                label="LinkedIn Post"
                                placeholder="https://linkedin.com/..."
                            />

                            <p className="text-xs text-text-secondary">
                                Optional, but recommended for building in public.
                            </p>
                        </div>

                        <Textarea
                            label="Submission Notes"
                            placeholder="Briefly describe your approach, challenges you faced, and what you learned..."
                            rows={5}
                        />

                        <p className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-secondary">
                            Double-check that your GitHub repository is public and your links are accessible before submitting.
                        </p>

                        <Button fullWidth>
                            Submit Today&apos;s Work
                        </Button>
                    </div>
                </section>

                {/* Completion Summary */}
                <CompletionSummaryCard
                    title="Challenge Completed"
                    currentStreak={user.streak}
                    nextMilestone={user.nextMilestone.title}
                />
            </div>
        </main>
    );
}