import { Card } from "@/app/age-calculator/_components/card"
import { poppins } from "@/app/styles/fonts"

export default function Page() {
  return (
    <div
      className={`flex h-screen max-h-screen w-full items-center justify-center overflow-hidden bg-gray-100 ${poppins.className} p-4`}
      style={
        {
          "--purple": "hsl(259, 100%, 65%)",
          "--light-red": "hsl(0, 100%, 67%)",
          "--white": "hsl(0, 0%, 100%)",
          "--off-white": "hsl(0, 0%, 94%)",
          "--light-grey": "hsl(0, 0%, 86%)",
          "--smokey-grey": "hsl(0, 1%, 44%)",
          "--off-black": "hsl(0, 0%, 8%)",
        } as React.CSSProperties
      }
    >
      <Card />
    </div>
  )
}
