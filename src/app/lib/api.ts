import type { Challenge } from "../types";

const API_URL = "http://127.0.0.1:8000";

export async function getTodayChallenge(): Promise<Challenge> {
    const response = await fetch(`${API_URL}/challenge/today`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch today's challenge");
    }

    return (await response.json()) as Challenge;
}
export async function getUser() {
    const response = await fetch("http://127.0.0.1:8000/user", {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    return response.json();
}

export async function getProgress() {
    const response = await fetch("http://127.0.0.1:8000/progress", {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch progress");
    }

    return response.json();
}