import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "600"] })

export const metadata = {
  title: "Four cards",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex min-h-screen w-full flex-col bg-very-light-gray`}
      >
        {children}
      </body>
    </html>
  )
}
