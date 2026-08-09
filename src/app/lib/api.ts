import type { Challenge } from "../types";

const API_URL =
    process.env.NEXT_PUBLIC_API_URL ??
    "http://127.0.0.1:8000";

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
    const response = await fetch(`${API_URL}/user`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    return response.json();
}

export async function getProgress() {
    const response = await fetch(`${API_URL}/progress`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch progress");
    }

    return response.json();
}

export async function submitChallenge(data: {
    challenge_day: number;
    github_url: string;
    linkedin_url: string;
    notes: string;
}) {
    const response = await fetch(`${API_URL}/submission`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to submit challenge");
    }

    return response.json();
}

export async function getSubmission(day: number) {
    const response = await fetch(`${API_URL}/submission/${day}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch submission");
    }

    return response.json();
}