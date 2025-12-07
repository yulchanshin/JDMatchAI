import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" // Note: Badge not installed yet, need to replace or add.
import { Button } from "@/components/ui/button"
import { ArrowUpRight, MoreHorizontal } from "lucide-react"

// Simple mock for Badge if missing, or use div
function StatusBadge({ status }: { status: string }) {
    const colors = {
        Applied: "bg-green-500/20 text-green-400 border-green-500/50",
        Pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
        New: "bg-blue-500/20 text-blue-400 border-blue-500/50"
    }
    const colorClass = colors[status as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/50"

    return (
        <div className={`px-2 py-0.5 rounded text-xs border ${colorClass}`}>
            {status}
        </div>
    )
}

const recentBookmarks = [
    {
        company: "Google",
        role: "Senior Software Engineer",
        date: "2024-05-12",
        score: 4.8,
        status: "Applied",
    },
    {
        company: "Anthropic",
        role: "Product Engineer",
        date: "2024-05-10",
        score: 4.9,
        status: "New",
    },
    {
        company: "Netflix",
        role: "UI/UX Developer",
        date: "2024-05-08",
        score: 4.5,
        status: "Pending",
    },
    {
        company: "Stripe",
        role: "Backend Engineer",
        date: "2024-05-05",
        score: 4.2,
        status: "Applied",
    },
    {
        company: "Vercel",
        role: "Developer Advocate",
        date: "2024-05-01",
        score: 4.7,
        status: "New",
    },
]

export function RecentBookmarks() {
    return (
        <Card className="col-span-3 bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle>Recent Bookmarks</CardTitle>
                        <CardDescription>Your saved job applications</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">View All</Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {recentBookmarks.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 rounded-lg bg-background/40 hover:bg-background/60 transition-colors border border-border/50"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {item.company[0]}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm">{item.role}</h4>
                                    <p className="text-xs text-muted-foreground">{item.company} • {item.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right hidden sm:block">
                                    <div className="text-sm font-bold text-primary">{item.score}/5.0</div>
                                    <p className="text-xs text-muted-foreground">Match Score</p>
                                </div>
                                <StatusBadge status={item.status} />
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
