import Card from "@/app/tip-calculator/_components/card"
import Image from "next/image"
import logo from "#/tip-calculator/logo.svg"
import { Space_Mono } from "next/font/google"

const spaceMono = Space_Mono({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
})

export default function Page() {
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center gap-8 bg-[--light-grayish-cyan] pt-8 sm:justify-center ${spaceMono.className} sm:p-6 sm:pt-8`}
      style={
        {
          "--strong-cyan": "hsl(172, 67%, 45%)",
          "--very-dark-cyan": "hsl(183, 100%, 15%)",
          "--dark-grayish-cyan": "hsl(186, 14%, 43%)",
          "--grayish-cyan": "hsl(184, 14%, 56%)",
          "--light-grayish-cyan": "hsl(185, 41%, 84%)",
          "--very-light-grayish-cyan": "hsl(189, 41%, 97%)",
          "--white": "hsl(0, 0%, 100%)",
        } as React.CSSProperties
      }
    >
      <Image src={logo} alt={""} />
      <Card />
    </div>
  )
}
