import { Card } from "@/app/qr-code/_components/card"
import { Outfit } from "next/font/google"

const outfit = Outfit({
  subsets: ["latin-ext"],
})

export default function Page() {
  return (
    <div
      className={`flex h-screen w-full items-center justify-center bg-[--light-gray] px-7 ${outfit.className}`}
      style={
        {
          "--light-gray": "hsl(212, 45%, 89%)",
          "--grayish-blue": "hsl(220, 15%, 55%)",
          "--dark-blue": "hsl(218, 44%, 22%)",
        } as React.CSSProperties
      }
    >
      <Card />
    </div>
  )
}
