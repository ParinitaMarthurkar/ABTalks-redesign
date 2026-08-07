export interface ChecklistItem {
    title: string;
    completed: boolean;
}

export interface Submission {
    githubUrl: string;
    linkedinUrl: string;
    notes: string;

    submitted: boolean;
    submittedAt: string;

    checklist: ChecklistItem[];
}