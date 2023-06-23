import "./globals.css"
import { Josefin_Sans } from "next/font/google"

const josefinSans = Josefin_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Todo App",
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
