import "./globals.css"
import { Big_Shoulders_Display, Lexend_Deca } from "next/font/google"
import { cn } from "@/lib/utils"

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400"],
})

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--heading",
})

export const metadata = {
  title: "3 Column Preview",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(lexendDeca.className, bigShouldersDisplay.variable)}>
        {children}
      </body>
    </html>
  )
}
