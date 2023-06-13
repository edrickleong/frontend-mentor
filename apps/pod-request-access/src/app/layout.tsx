import "./globals.css"
import { Chivo } from "next/font/google"

const chivo = Chivo({ subsets: ["latin"] })

export const metadata = {
  title: "Pod Request Access",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={chivo.className}>{children}</body>
    </html>
  )
}
