import type { Progress } from "../types";

export const progress: Progress = {
    completedDays: 12,
    remainingDays: 48,
    completionPercentage: 20,

    achievements: [
        "First Commit",
        "7-Day Streak",
        "10-Day Streak",
    ],

    recentActivity: [
        {
            type: "GitHub",
            status: "Submitted",
            timestamp: "2h ago",
        },
        {
            type: "LinkedIn",
            status: "Posted",
            timestamp: "Yesterday",
        },
    ],
};