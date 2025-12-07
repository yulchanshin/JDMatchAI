"use client"

import { Area, AreaChart, CartesianGrid, XAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const data = [
    { date: "Jan", score: 65 },
    { date: "Feb", score: 59 },
    { date: "Mar", score: 80 },
    { date: "Apr", score: 81 },
    { date: "May", score: 92 },
    { date: "Jun", score: 95 },
]

export function StatsChart() {
    return (
        <Card className="col-span-4 bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle>Resume Performance</CardTitle>
                        <CardDescription>Average match score per month</CardDescription>
                    </div>
                    <Select defaultValue="6m">
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Period" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="6m">Last 6 Months</SelectItem>
                            <SelectItem value="1y">Last Year</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent className="pl-2">
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="date"
                                stroke="#888888"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                                itemStyle={{ color: 'var(--foreground)' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="score"
                                stroke="var(--color-primary)"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorScore)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}
