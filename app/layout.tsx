import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Noto_Sans_TC } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/sections/Header"
import { ScrollProgress } from "@/components/animations/ScrollProgress"
import { LenisProvider } from "@/components/animations/LenisProvider"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Evelyn Wu — UI/UX Designer",
  description:
    "Product designer specializing in fintech and complex system design. Building intuitive experiences for financial products.",
  keywords: ["UI/UX", "Product Design", "Fintech", "Portfolio", "Evelyn Wu"],
  openGraph: {
    title: "Evelyn Wu — UI/UX Designer",
    description:
      "Product designer specializing in fintech and complex system design.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hant" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansTC.variable} antialiased`}
      >
        <LenisProvider>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  )
}
