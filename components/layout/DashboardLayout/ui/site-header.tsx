"use client"

import { usePathname, useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
// import { Skeleton } from "@/components/ui/skeleton"
import { useSidebar } from "@/components/ui/sidebar"
import {
  PanelLeftIcon,
  SettingsIcon,
  LogOutIcon,
  ChevronDownIcon,
} from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useState } from "react"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()
  const pathname = usePathname()
  const router = useRouter()
  const [showLogoutDialog, setShowLogoutDialog] = useState<boolean>(false)

  const getPageTitle = () => {
    const segments = pathname.split("/").filter(Boolean)
    if (segments.length <= 1) return "Dashboard"
    const lastSegment = segments[segments.length - 1]
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
  }

  const handleLogout = async () => {
    router.push("/login")
  }

  return (
    <>
      <header className="sticky top-0 z-50 flex h-16 w-full items-center border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
        <div className="flex w-full items-center gap-2 px-4">
          <Button
            className="h-8 w-8"
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
          >
            <PanelLeftIcon />
          </Button>
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
          />

          <div className="flex-1">
            <h1 className="text-sm font-semibold">{getPageTitle()}</h1>
          </div>
          {/* {isLoading ? (
            <div className="flex items-center gap-2 px-2 py-1.5">
              <Skeleton className="size-7 rounded-full" />
              <div className="hidden sm:block">
                <Skeleton className="mb-1 h-3.5 w-20" />
                <Skeleton className="h-3 w-28" />
              </div>
            </div>
          ) : ( */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-auto items-center gap-2 rounded-full px-2 py-1.5 hover:bg-accent"
              >
                <Avatar className="size-7">
                  <AvatarImage src={"url"} alt={"url"} />
                  <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                    {"NA"}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden text-left sm:block">
                  <p className="text-sm leading-none font-medium">
                    {"ApanApin"}
                  </p>
                  <p className="text-xs text-muted-foreground">{"ApanApin"}</p>
                </div>
                <ChevronDownIcon className="hidden size-3.5 text-muted-foreground sm:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm leading-none font-medium">
                    {"ApanApin"}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {"apanapin@gmail.com"}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => router.push("/admin/pengaturan")}
              >
                <SettingsIcon className="size-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setShowLogoutDialog(true)}
                className="text-destructive"
              >
                <LogOutIcon className="size-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* )} */}
        </div>
      </header>
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi Keluar</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah Anda yakin ingin keluar dari sistem? Anda perlu login
              kembali untuk mengakses aplikasi.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700"
            >
              Ya, Keluar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
