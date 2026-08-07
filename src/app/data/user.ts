import type { User } from "../types";

export const user: User = {
    id: "user-001",
    name: "Parinita",
    avatar: "/images/avatar.png",

    currentDay: 12,
    totalDays: 60,

    streak: 11,
    completion: 20,

    standing: "Top 12%",

    nextMilestone: {
        title: "14-Day Streak",
        daysRemaining: 2,
    },
};