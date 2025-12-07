"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export interface Experience {
    id: string
    title: string
    type: "Project" | "Experience"
    description: string
    techStack: string
}

export function ExperienceForm({
    experiences,
    onUpdate
}: {
    experiences: Experience[],
    onUpdate: (exps: Experience[]) => void
}) {
    const [isAdding, setIsAdding] = useState(false)
    const [newExp, setNewExp] = useState<Partial<Experience>>({ type: "Project" })

    const addExperience = () => {
        if (!newExp.title || !newExp.description) return;

        const experience: Experience = {
            id: Math.random().toString(36).substr(2, 9),
            title: newExp.title,
            type: newExp.type || "Project",
            description: newExp.description,
            techStack: newExp.techStack || ""
        }

        onUpdate([...experiences, experience])
        setNewExp({ type: "Project", title: "", description: "", techStack: "" })
        setIsAdding(false)
    }

    const removeExperience = (id: string) => {
        onUpdate(experiences.filter(e => e.id !== id))
    }

    return (
        <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 flex flex-col">
            <CardHeader className="py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-lg">Additional Projects/Experience</CardTitle>
                        <CardDescription>Add things not on your resume</CardDescription>
                    </div>
                    <Button size="sm" onClick={() => setIsAdding(!isAdding)} variant={isAdding ? "secondary" : "default"}>
                        {isAdding ? "Cancel" : <><Plus className="mr-2 h-4 w-4" /> Add New</>}
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="flex-1 min-h-0 relative">
                <ScrollArea className="h-full pr-4">
                    {isAdding && (
                        <div className="mb-4 p-4 border rounded-lg bg-background/50 space-y-3">
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Title (e.g. E-commerce App)"
                                    value={newExp.title || ""}
                                    onChange={e => setNewExp({ ...newExp, title: e.target.value })}
                                    className="flex-1"
                                />
                                <select
                                    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    value={newExp.type}
                                    onChange={e => setNewExp({ ...newExp, type: e.target.value as any })}
                                >
                                    <option value="Project">Project</option>
                                    <option value="Experience">Experience</option>
                                </select>
                            </div>
                            <Textarea
                                placeholder="Description of tasks, role, metrics..."
                                value={newExp.description || ""}
                                onChange={e => setNewExp({ ...newExp, description: e.target.value })}
                                className="min-h-[80px]"
                            />
                            <div className="flex gap-2">
                                <Code className="h-4 w-4 mt-3 text-muted-foreground" />
                                <Input
                                    placeholder="Tech Stack (React, Node, AWS...)"
                                    value={newExp.techStack || ""}
                                    onChange={e => setNewExp({ ...newExp, techStack: e.target.value })}
                                />
                            </div>
                            <Button className="w-full" onClick={addExperience}>Save Experience</Button>
                        </div>
                    )}

                    <div className="space-y-3">
                        {experiences.length === 0 && !isAdding && (
                            <div className="text-center text-muted-foreground py-8 text-sm">
                                No extra experiences added yet.
                                <br />Add them here so AI can swap them in!
                            </div>
                        )}
                        {experiences.map(exp => (
                            <div key={exp.id} className="p-3 rounded-lg border bg-card/30 hover:bg-card/50 transition-colors group relative">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-semibold text-sm">{exp.title}</h4>
                                    <Badge variant="outline" className="text-[10px] h-5">{exp.type}</Badge>
                                </div>
                                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{exp.description}</p>
                                {exp.techStack && (
                                    <div className="flex flex-wrap gap-1">
                                        {exp.techStack.split(',').map((tech, i) => (
                                            <span key={i} className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                                                {tech.trim()}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 h-6 w-6 text-destructive"
                                    onClick={() => removeExperience(exp.id)}
                                >
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}
