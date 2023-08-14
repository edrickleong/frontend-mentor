import "./globals.css"
import { Red_Hat_Display } from "next/font/google"

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] })

export const metadata = {
  title: "meet Landing Page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={redHatDisplay.className}>{children}</body>
    </html>
  )
}
