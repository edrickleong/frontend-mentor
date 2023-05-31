import Image from "next/image"
import illustrationHero from "#/order-summary/illustration-hero.svg"
import iconMusic from "#/order-summary/icon-music.svg"
import { cn } from "@/app/utils"
import { Red_Hat_Display } from "next/font/google"

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
})

const styles = {
  // Primary
  "--pale-blue": "hsl(225, 100%, 94%)",
  "--bright-blue": "hsl(245, 75%, 52%)",
  "--bright-blue-90": "hsla(245, 75%, 52%, 0.9)",
  // Neutral
  "--very-pale-blue": "hsl(225, 100%, 98%)",
  "--desaturated-blue": "hsl(224, 23%, 55%)",
  "--dark-blue": "hsl(223, 47%, 23%)",
} as React.CSSProperties

export default function Page() {
  return (
    <div
      style={styles}
      className={cn(
        "flex min-h-screen flex-col items-center justify-center bg-[--pale-blue] p-6",
        redHatDisplay.className
      )}
    >
      <div className="flex max-w-[451px] flex-col items-center overflow-hidden rounded-3xl bg-white">
        <Image src={illustrationHero} className="h-40" alt={""} />
        <div className="flex flex-col items-center p-6 sm:p-12">
          <div className="text-xl font-black">Order Summary</div>
          <div className="mt-5 text-center text-[15px] font-medium leading-6 text-[--desaturated-blue]">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </div>
          <div className="mt-6 flex w-full items-center rounded-lg bg-[--very-pale-blue] p-4">
            <Image src={iconMusic} alt={""} />
            <div className="ml-4">
              <div className="text-sm font-bold">Annual Plan</div>
              <div className="text-sm text-[--desaturated-blue]">
                $59.99/year
              </div>
            </div>
            <button className="ml-auto text-sm font-bold text-[--bright-blue] underline hover:text-[--bright-blue-90] hover:no-underline">
              Change
            </button>
          </div>
          <button className="mt-6 w-full rounded-lg bg-[--bright-blue] py-4 text-center font-bold text-white shadow-2xl shadow-[--pale-blue] hover:bg-[--bright-blue-90]">
            Proceed to Payment
          </button>
          <button className="mt-2 py-4 font-bold text-[--desaturated-blue] hover:text-black">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  )
}
