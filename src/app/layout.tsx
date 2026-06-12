import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { BottomNav } from "@/components/cultureiq/BottomNav"
import { TopBar } from "@/components/cultureiq/TopBar"
import { XPPopup } from "@/components/engine/XPPopup"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })

export const metadata: Metadata = {
  title: "CultureIQ",
  description: "Duolingo for creative culture — photography, fashion, art, film.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-zinc-950 text-white">
        <TopBar />
        <main className="pb-20">{children}</main>
        <BottomNav />
        <XPPopup />
      </body>
    </html>
  )
}
