export function getCompletionPercentage(
    completedDays: number,
    totalDays: number
): number {
    return Math.round((completedDays / totalDays) * 100);
}

export function getRemainingDays(
    completedDays: number,
    totalDays: number
): number {
    return totalDays - completedDays;
}