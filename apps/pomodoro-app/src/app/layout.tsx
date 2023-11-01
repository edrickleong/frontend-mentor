import "./globals.css"
import { Kumbh_Sans, Roboto_Slab, Space_Mono } from "next/font/google"
import { Providers } from "@/app/providers"

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbh-sans",
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata = {
  title: "Pomodoro App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${kumbhSans.variable} ${robotoSlab.variable} ${spaceMono.variable}`}
    >
      <Providers>{children}</Providers>
    </html>
  )
}
