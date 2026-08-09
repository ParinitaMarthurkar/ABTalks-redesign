"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import { submitChallenge } from "../../lib/api";

export default function SubmissionForm() {
    const [githubUrl, setGithubUrl] = useState("");
    const [linkedinUrl, setLinkedinUrl] = useState("");
    const [notes, setNotes] = useState("");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit() {
        setLoading(true);
        setMessage("");

        try {
            await submitChallenge({
                challenge_day: 12,
                github_url: githubUrl,
                linkedin_url: linkedinUrl,
                notes,
            });

            setMessage("Submission successful!");

            setGithubUrl("");
            setLinkedinUrl("");
            setNotes("");
        } catch (error) {
            console.error(error);
            setMessage("Submission failed.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="space-y-4">
            <h2 className="text-lg font-semibold text-text-primary">
                Submit Your Work
            </h2>

            <Input
                label="GitHub Repository"
                placeholder="https://github.com/..."
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
            />

            <Input
                label="LinkedIn Post"
                placeholder="https://linkedin.com/..."
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
            />

            <Textarea
                label="Submission Notes"
                placeholder="Describe what you built..."
                rows={5}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />

            <Button
                fullWidth
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? "Submitting..." : "Submit Today's Work"}
            </Button>

            {message && (
                <p className="text-center text-sm">
                    {message}
                </p>
            )}
        </section>
    );
}