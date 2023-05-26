import { Card } from "@/app/age-calculator/_components/card"
import { Poppins } from "next/font/google"
import { cn } from "@/app/utils"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const styles = {
  // Primary
  "--purple": "hsl(259, 100%, 65%)",
  "--purple-90": "hsla(259, 100%, 65%, 0.9)",
  "--light-red": "hsl(0, 100%, 67%)",
  // Neutral
  "--off-white": "hsl(0, 0%, 94%)",
  "--light-grey": "hsl(0, 0%, 86%)",
  "--smokey-grey": "hsl(0, 1%, 44%)",
  "--off-black": "hsl(0, 0%, 8%)",
} as React.CSSProperties

export default function Page() {
  return (
    <div
      style={styles}
      className={cn(
        "flex min-h-screen w-full items-center justify-center bg-gray-100 p-4",
        poppins.className
      )}
    >
      <Card />
    </div>
  )
}
