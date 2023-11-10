import "./globals.css"
import { Josefin_Sans } from "next/font/google"

const josefinSans = Josefin_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Base Apparel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} flex min-h-screen flex-col bg-gradient-one`}
      >
        {children}
      </body>
    </html>
  )
}
