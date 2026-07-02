"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

const queryClient = new QueryClient()

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            {children}
            <Toaster position="top-right" />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}
