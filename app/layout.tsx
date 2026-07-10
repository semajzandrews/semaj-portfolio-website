import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter, Sacramento } from "next/font/google"
import "./globals.css"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
  display: "swap",
})

const siteUrl = "https://www.bysemaj.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Semaj Andrews — Software Engineer",
    template: "%s — Semaj Andrews",
  },
  description:
    "Semaj Andrews is a software engineer building AI-orchestrated websites, iOS apps, and platforms — full-lifecycle work from design to deployment across web, AI, and mobile.",
  keywords: ["Semaj Andrews", "software engineer", "iOS developer", "web developer", "full stack developer"],
  authors: [{ name: "Semaj Andrews", url: siteUrl }],
  creator: "Semaj Andrews",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Semaj Andrews",
    title: "Semaj Andrews — Software Engineer",
    description:
      "Portfolio of Semaj Andrews — AI-orchestrated websites, iOS apps, and platforms.",
    images: [{ url: "/ascii-face-static.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semaj Andrews — Software Engineer",
    description:
      "Portfolio of Semaj Andrews — AI-orchestrated websites, iOS apps, and platforms.",
    images: ["/ascii-face-static.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Semaj Andrews",
  url: siteUrl,
  jobTitle: "Software Engineer",
  description:
    "Software engineer building AI-orchestrated websites, iOS apps, and platforms.",
  sameAs: [
    "https://github.com/semajzandrews",
    "https://www.linkedin.com/in/semajzandrews2",
  ],
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sacramento.variable}`}>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

