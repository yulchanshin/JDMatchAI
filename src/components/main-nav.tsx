import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Link
                href="/dashboard"
                className="text-sm font-medium text-primary transition-colors hover:text-primary"
            >
                Dashboard
            </Link>
            <Link
                href="/jobs"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Job Tracker
            </Link>
            <Link
                href="/resumes"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Resumes
            </Link>
            <Link
                href="/settings"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Settings
            </Link>
        </nav>
    )
}
