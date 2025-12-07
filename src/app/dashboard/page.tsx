import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardCards } from "@/components/dashboard-cards"
import { StatsChart } from "@/components/stats-chart"
import { RecentBookmarks } from "@/components/recent-bookmarks"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

export const metadata: Metadata = {
    title: "Dashboard - Tailor.AI",
    description: "Resume Optimization Dashboard",
}

export default function DashboardPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background/50">
            <div className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex h-16 items-center px-4">
                    <MainNav className="mx-6" />
                    <div className="ml-auto flex items-center space-x-4">
                        <UserNav />
                    </div>
                </div>
            </div>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Overview
                    </h2>
                    <div className="flex items-center space-x-2">
                        <Link href="/optimize">
                            <Button>New Optimization</Button>
                        </Link>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="analytics" disabled>Analytics</TabsTrigger>
                        <TabsTrigger value="reports" disabled>Reports</TabsTrigger>
                        <TabsTrigger value="notifications" disabled>Notifications</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                        <DashboardCards />
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <StatsChart />
                            <RecentBookmarks />
                        </div>
                    </TabsContent>
                </Tabs >
            </div >
        </div >
    )
}
