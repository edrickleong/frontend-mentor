import "./globals.css"
import { Kumbh_Sans } from "next/font/google"

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Pomodoro App",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>{children}</body>
    </html>
  )
}
