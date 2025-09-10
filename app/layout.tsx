import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "DevOps Engineer | Portfolio",
  description: "Professional DevOps Engineer specializing in cloud infrastructure, automation, and scalable systems",
  generator: "v0.app",
  keywords: ["DevOps", "Cloud", "AWS", "Docker", "Kubernetes", "CI/CD", "Infrastructure"],
  authors: [{ name: "DevOps Engineer" }],
  openGraph: {
    title: "DevOps Engineer | Portfolio",
    description: "Professional DevOps Engineer specializing in cloud infrastructure, automation, and scalable systems",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
