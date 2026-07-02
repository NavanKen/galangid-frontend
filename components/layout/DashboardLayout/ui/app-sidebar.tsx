"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  type UserRole,
  getSidebarItems,
} from "@/components/layout/DashboardLayout/DashboardLayout.constant"
import { NavUser } from "./nav-user"
import { type UserDisplayInfo } from "@/components/layout/DashboardLayout/DashboardLayout"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { StoreIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function AppSidebar({
  role = "ADMIN",
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  role?: UserRole
  //   userInfo: UserDisplayInfo
}) {
  const pathname = usePathname()
  const sidebarGroups = getSidebarItems(role)

  const isActive = (href: string, exact = false) => {
    if (href === "#") return false

    if (exact) {
      return pathname === href
    }

    return pathname === href || pathname.startsWith(`${href}/`)
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex h-16 border-b border-sidebar-border p-4">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <StoreIcon className="size-4 text-white" />
          </div>
          <div className="grid flex-1 text-left leading-tight">
            <span className="text-sm font-semibold">GalangID</span>
            <span className="text-xs text-muted-foreground">Admin Panel</span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2 py-3">
        {sidebarGroups.map((group) => (
          <SidebarGroup key={group.label} className="py-2">
            <SidebarGroupLabel className="mb-1 px-3 text-[11px] font-semibold tracking-widest text-muted-foreground/60 uppercase">
              {group.label}
            </SidebarGroupLabel>
            <SidebarMenu className="gap-0.5">
              {group.items.map((item) => {
                const active = isActive(item.href, item.exact)
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={active}
                      size="lg"
                      className={cn(
                        "h-11 gap-3 rounded-lg px-3 text-sm font-normal transition-all duration-200",
                        active
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-foreground/70 hover:text-foreground"
                      )}
                    >
                      <Link href={item.href}>
                        <item.icon className="size-4.5 shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
