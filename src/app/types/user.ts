export interface Milestone {
    title: string;
    daysRemaining: number;
}

export interface User {
    id: string;
    name: string;
    avatar: string;

    currentDay: number;
    totalDays: number;

    streak: number;
    completion: number;

    standing: string;

    nextMilestone: Milestone;
}