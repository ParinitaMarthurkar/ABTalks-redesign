export interface Activity {
    type: "GitHub" | "LinkedIn";
    status: string;
    timestamp: string;
}

export interface Progress {
    completedDays: number;
    remainingDays: number;
    completionPercentage: number;

    achievements: string[];

    recentActivity: Activity[];
}