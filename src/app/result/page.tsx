import { hankenGrotesk } from "@/app/styles/fonts"
import Card from "@/app/result/_components/card"

export default function Page() {
  return (
    <div
      className={`overflow-hidden flex h-screen max-h-screen w-full items-center justify-center bg-gray-100 sm:overflow-auto ${hankenGrotesk.className} sm:p-6`}
      style={
        {
          "--light-red": "hsl(0, 100%, 67%)",
          "--orangey-yellow": "hsl(39, 100%, 56%)",
          "--green-teal": "hsl(166, 100%, 37%)",
          "--cobalt-blue": "hsl(234, 85%, 45%)",
          "--light-slate-blue": "hsl(252, 100%, 67%)",
          "--light-royal-blue": "hsl(241, 81%, 54%)",
          "--violet-blue": "hsla(256, 72%, 46%, 1)",
          "--persian-blue": "hsla(241, 72%, 46%, 0)",
          "--pale-blue": "hsl(221, 100%, 96%)",
          "--light-lavender": "hsl(241, 100%, 89%)",
          "--dark-gray-blue": "hsl(224, 30%, 27%)",
        } as React.CSSProperties
      }
    >
      <Card />
    </div>
  )
}
