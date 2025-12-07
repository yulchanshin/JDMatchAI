import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Star, TrendingUp, Bookmark } from "lucide-react"

export function DashboardCards() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Resumes</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg Match Score</CardTitle>
                    <Star className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">4.2</div>
                    <p className="text-xs text-muted-foreground">+0.3 from last week</p>
                </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Interview Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">15%</div>
                    <p className="text-xs text-muted-foreground">+2.5% increase</p>
                </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Bookmarked</CardTitle>
                    <Bookmark className="h-4 w-4 text-secondary-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">7</div>
                    <p className="text-xs text-muted-foreground">Jobs to apply</p>
                </CardContent>
            </Card>
        </div>
    )
}
