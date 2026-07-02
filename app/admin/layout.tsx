import AdminLayout from "@/components/layout/AdminLayout/AdminLayout"

export default function RootAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AdminLayout>{children}</AdminLayout>
}
