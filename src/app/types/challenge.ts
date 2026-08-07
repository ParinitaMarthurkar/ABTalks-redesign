export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Resource {
    title: string;
    url: string;
}

export interface Challenge {
    day: number;

    title: string;

    difficulty: Difficulty;

    estimatedTime: string;

    description: string;

    requirements: string[];

    resources: Resource[];

    skills: string[];
}