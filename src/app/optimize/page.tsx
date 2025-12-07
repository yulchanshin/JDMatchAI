"use client"

import { useState } from "react"
import { ResumeUploader } from "@/components/resume-uploader"
import { JobInput } from "@/components/job-input"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { ArrowRight, Sparkles, Loader2 } from "lucide-react"

import { ExperienceForm, Experience } from "@/components/experience-form"

export default function OptimizePage() {
    const [file, setFile] = useState<File | null>(null)
    const [jobDescription, setJobDescription] = useState("")
    const [experiences, setExperiences] = useState<Experience[]>([])
    const [isAnalyzing, setIsAnalyzing] = useState(false)

    const canAnalyze = file && jobDescription.trim().length > 10;

    // ... handleAnalyze ...
    const handleAnalyze = async () => {
        if (!canAnalyze) return;
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            console.log("Analyzing with:", { file, jobDescription, experiences });
            alert("Analysis Placeholder: Ready to connect API!");
        }, 2000);
    }

    return (
        <div className="flex h-screen flex-col bg-background/50 overflow-hidden">
            {/* Header */}
            <div className="shrink-0 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex h-16 items-center px-4">
                    <MainNav className="mx-6 hover:text-primary transition-colors" />
                    <div className="ml-auto flex items-center space-x-4">
                        <UserNav />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-hidden p-4 md:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                    {/* Left Column: Input - Full height */}
                    <div className="h-full min-h-0">
                        <ResumeUploader onFileSelect={setFile} />
                    </div>

                    {/* Right Column: Split Vertical */}
                    <div className="flex flex-col gap-6 h-full min-h-0">
                        {/* Top: Job Link (Compact, Fixed height naturally by shrink-0 in component) */}
                        <div>
                            <JobInput value={jobDescription} onChange={setJobDescription} />
                        </div>

                        {/* Bottom: Experience Bank (Takes remaining space) */}
                        <div className="flex-1 min-h-0">
                            <ExperienceForm experiences={experiences} onUpdate={setExperiences} />
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer / Action Bar */}
            <div className="shrink-0 h-20 border-t border-border/40 bg-background/95 backdrop-blur flex items-center justify-between px-6 md:px-8">
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Ready to Optimize?</h2>
                    <p className="text-xs text-muted-foreground">{file ? file.name : "Upload a resume"} • {jobDescription.length > 10 ? "Job Description added" : "Add Job Description"}</p>
                </div>
                <Button
                    size="lg"
                    className="md:w-auto text-lg px-8 shadow-lg shadow-primary/25"
                    disabled={!canAnalyze || isAnalyzing}
                    onClick={handleAnalyze}
                >
                    {isAnalyzing ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Analyzing...
                        </>
                    ) : (
                        <>
                            <Sparkles className="mr-2 h-5 w-5 text-yellow-300" />
                            Analyze & Tailor Check
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                    )}
                </Button>
            </div>
        </div>
    )
}
