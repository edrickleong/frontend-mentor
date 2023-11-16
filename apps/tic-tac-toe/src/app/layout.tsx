import "./globals.css"
import { Outfit } from "next/font/google"
import { ReactNode } from "react"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata = {
  title: "Tic Tac Toe",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
