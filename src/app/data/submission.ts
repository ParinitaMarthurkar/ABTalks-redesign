import type { Submission } from "../types";

export const submission: Submission = {
    githubUrl: "",
    linkedinUrl: "",
    notes: "",

    submitted: false,
    submittedAt: "",

    checklist: [
        {
            title: "Read Challenge",
            completed: true,
        },
        {
            title: "Build Solution",
            completed: false,
        },
        {
            title: "Push GitHub Commit",
            completed: false,
        },
        {
            title: "Publish LinkedIn Post",
            completed: false,
        },
        {
            title: "Submit Challenge",
            completed: false,
        },
    ],
};