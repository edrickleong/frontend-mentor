import { Overpass } from "next/font/google"
import { cn } from "@/app/utils"

const overpass = Overpass({
  subsets: ["latin"],
})

const styles = {
  // Primary
  "--orange": "hsl(25, 97%, 53%)",
  // Neutral
  "--light-grey": "hsl(217, 12%, 63%)",
  "--medium-grey": "hsl(216, 12%, 54%)",
  "--dark-blue": "hsl(213, 19%, 18%)",
  "--very-dark-blue": "hsl(216, 12%, 8%)",
} as React.CSSProperties

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={styles}
      className={cn(
        "flex h-screen w-full items-center justify-center bg-[--very-dark-blue] px-6",
        overpass.className
      )}
    >
      {children}
    </div>
  )
}
