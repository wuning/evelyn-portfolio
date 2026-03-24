import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/sections/Header"
import { ScrollProgress } from "@/components/animations/ScrollProgress"
import { LenisProvider } from "@/components/animations/LenisProvider"
import { I18nProvider } from "@/lib/i18n"
import { ThemeProvider } from "@/components/animations/ThemeProvider"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Evelyn Wu — Senior Product Designer | Eve's Eye",
  description:
    "See the risk before the click. Senior Product Designer specializing in fintech & web3 trust systems. 10+ years designing high-stakes decisions.",
  keywords: ["Product Design", "Senior Designer", "Fintech", "Web3", "Portfolio", "Evelyn Wu", "Eve's Eye"],
  openGraph: {
    title: "Evelyn Wu — Senior Product Designer",
    description:
      "See the risk before the click. Designing trust into high-stakes decisions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider>
          <I18nProvider>
            <LenisProvider>
              <ScrollProgress />
              <Header />
              <div className="grain-overlay" aria-hidden="true" />
              <main>{children}</main>
            </LenisProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
