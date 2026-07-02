"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
// import { type UserDisplayInfo } from "@/components/layout/DashboardLayout/DashboardLayout"

export function NavUser() {
  //   const { displayName, displayEmail, avatarUrl, initials, isLoading } = userInfo

  //   if (isLoading) {
  //     return (
  //       <SidebarMenu>
  //         <SidebarMenuItem>
  //           <div className="flex items-center gap-3 rounded-lg px-2 py-2">
  //             <Skeleton className="size-8 rounded-lg" />
  //             <div className="grid flex-1 gap-1">
  //               <Skeleton className="h-3.5 w-24" />
  //               <Skeleton className="h-3 w-32" />
  //             </div>
  //           </div>
  //         </SidebarMenuItem>
  //       </SidebarMenu>
  //     )
  //   }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center gap-3 rounded-lg px-2 py-2">
          <Avatar className="size-8 rounded-lg">
            <AvatarImage src={undefined} alt={"url"} />
            <AvatarFallback className="rounded-lg bg-primary/10 text-xs font-semibold text-primary">
              {"NA"}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{"ApanApin"}</span>
            <span className="truncate text-xs text-muted-foreground">
              {"ApanApin"}
            </span>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
