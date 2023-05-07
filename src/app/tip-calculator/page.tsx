import { spaceMono } from "@/app/styles/fonts"
import Card from "@/app/tip-calculator/_components/card"

export default function Page() {
  return (
    <div
      className={`flex h-screen max-h-screen w-full items-center justify-center overflow-hidden bg-[--light-grayish-cyan] ${spaceMono.className} sm:p-6`}
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
      <Card />
    </div>
  )
}
