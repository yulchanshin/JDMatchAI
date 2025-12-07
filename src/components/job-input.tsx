"use client"

import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkIcon } from "lucide-react"

export function JobInput({ value, onChange }: { value: string, onChange: (val: string) => void }) {
    return (
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shrink-0">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-blue-400" />
                    Job Link
                </CardTitle>
                <CardDescription>
                    Paste the LinkedIn job posting URL
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Input
                    placeholder="https://www.linkedin.com/jobs/view/..."
                    className="font-mono text-sm bg-background/50 focus:bg-background transition-colors border-primary/30"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </CardContent>
        </Card>
    )
}
