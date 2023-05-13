import { Card } from "@/app/interactive-rating/_components/card"
import { Overpass } from "next/font/google"

const overpass = Overpass({
  subsets: ["latin-ext"],
})

export default function Page() {
  return (
    <div
      className={`flex h-screen w-full items-center justify-center bg-[--very-dark-blue] px-6 ${overpass.className}`}
      style={
        {
          "--orange": "hsl(25, 97%, 53%)",
          "--light-grey": "hsl(217, 12%, 63%)",
          "--medium-grey": "hsl(216, 12%, 54%)",
          "--dark-blue": "hsl(213, 19%, 18%)",
          "--very-dark-blue": "hsl(216, 12%, 8%)",
        } as React.CSSProperties
      }
    >
      <Card />
    </div>
  )
}
