import { Geist, Geist_Mono } from "next/font/google"
import "../styles/globals.css"
import Provider from "@/components/layout/ProviderLayout"
import { cn } from "@/lib/utils"
import { Metadata } from "next"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Galang ID",
}

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
