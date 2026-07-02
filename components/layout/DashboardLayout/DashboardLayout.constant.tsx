import {
  LayoutDashboard,
  Tags,
  Package,
  Image,
  ClipboardList,
  Users,
  CreditCard,
} from "lucide-react"

export type UserRole = "ADMIN" | "CAMPAINGNER" | "DONATOR"

export interface SidebarItem {
  title: string
  href: string
  icon: React.ElementType
  exact?: boolean
}

export interface SidebarGroup {
  label: string
  items: SidebarItem[]
}

export const SIDEBAR_ADMIN: SidebarGroup[] = [
  {
    label: "Menu Utama",
    items: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
        exact: true,
      },
    ],
  },
]

export const SIDEBAR_CAMPAIGNER: SidebarGroup[] = [
  {
    label: "Menu Utama",
    items: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
        exact: true,
      },
    ],
  },
]

export const getSidebarItems = (role: UserRole): SidebarGroup[] => {
  switch (role) {
    case "ADMIN":
      return SIDEBAR_ADMIN
    case "CAMPAINGNER":
      return SIDEBAR_CAMPAIGNER
    default:
      return SIDEBAR_ADMIN
  }
}
