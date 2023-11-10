import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "@/app/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dictionary",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
