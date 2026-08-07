import type { Challenge } from "../types";

export const challenge: Challenge = {
    day: 12,

    title: "Responsive Dashboard",

    difficulty: "Medium",

    estimatedTime: "25 mins",

    description:
        "Design and build a responsive dashboard that works seamlessly across mobile devices while maintaining clean layouts and reusable components.",

    requirements: [
        "Mobile-first",
        "Responsive Layout",
        "Reusable Components",
        "Accessibility",
    ],

    resources: [
        {
            title: "Tailwind CSS",
            url: "https://tailwindcss.com/docs",
        },
        {
            title: "CSS Grid Guide",
            url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
        },
        {
            title: "Flexbox Guide",
            url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        },
    ],

    skills: [
        "Responsive Design",
        "CSS Grid",
        "Flexbox",
        "Component Architecture",
    ],
};