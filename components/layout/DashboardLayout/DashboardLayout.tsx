"use client"

import { AppSidebar } from "@/components/layout/DashboardLayout/ui/app-sidebar"
import { SiteHeader } from "@/components/layout/DashboardLayout/ui/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { type UserRole } from "@/components/layout/DashboardLayout/DashboardLayout.constant"
import { useRouter } from "next/navigation"

export interface UserDisplayInfo {
  displayName: string
  displayEmail: string
  avatarUrl: string | null
  initials: string
  isLoading: boolean
}

export default function DashboardLayout({
  children,
  role = "ADMIN",
}: {
  children: React.ReactNode
  role?: UserRole
}) {
  //   const router = useRouter()

  return (
    <SidebarProvider>
      <AppSidebar role={"ADMIN"} />
      <SidebarInset>
        <SiteHeader />
        <div className="p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
