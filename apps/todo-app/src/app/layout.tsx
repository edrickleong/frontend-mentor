import "./globals.css"
import { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"

const josefinSans = Josefin_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Todo App",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#F2F2F2] ${josefinSans.className}`}>
        {children}
      </body>
    </html>
  )
}
