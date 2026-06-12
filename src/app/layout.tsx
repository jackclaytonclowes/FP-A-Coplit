import type { Metadata } from "next"
import "./globals.css"
import { BottomNav } from "@/components/cultureiq/BottomNav"
import { TopBar } from "@/components/cultureiq/TopBar"
import { XPPopup } from "@/components/engine/XPPopup"

export const metadata: Metadata = {
  title: "CultureIQ",
  description: "Duolingo for creative culture — photography, fashion, art, film.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body>
        <TopBar />
        <main style={{ paddingBottom: "calc(5rem + env(safe-area-inset-bottom, 0px))" }}>{children}</main>
        <BottomNav />
        <XPPopup />
      </body>
    </html>
  )
}
