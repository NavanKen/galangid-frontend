import DashboardLayout from "../DashboardLayout"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <DashboardLayout role="ADMIN">{children}</DashboardLayout>
    </>
  )
}
