import { Outfit } from "next/font/google"
import Image from "next/image"
import imageEquilibrium from "#/nft-preview/image-equilibrium.jpg"
import iconEthereum from "#/nft-preview/icon-ethereum.svg"
import iconClock from "#/nft-preview/icon-clock.svg"
import imageAvatar from "#/nft-preview/image-avatar.png"
import iconView from "#/nft-preview/icon-view.svg"
import { cn } from "@/app/utils"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
})

const styles = {
  // Primary
  "--soft-blue": "hsl(215, 51%, 70%)",
  "--cyan": "hsl(178, 100%, 50%)",
  // Neutral
  "--very-dark-blue-main-bg": "hsl(217, 54%, 11%)",
  "--very-dark-blue-card-bg": "hsl(216, 50%, 16%)",
  "--very-dark-blue-line": "hsl(215, 32%, 27%)",
} as React.CSSProperties

export default function Page() {
  return (
    <div
      style={styles}
      className={cn(
        "flex min-h-screen flex-col items-center justify-center bg-[--very-dark-blue-main-bg] p-6",
        outfit.className
      )}
    >
      <div className="max-w-[348px] rounded-2xl bg-[--very-dark-blue-card-bg] px-6 py-5">
        <div className="relative">
          <Image
            src={imageEquilibrium}
            alt={""}
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 transition-opacity hover:bg-cyan-500/50 hover:opacity-100">
            <Image src={iconView} width={50} height={50} alt="Eye icon" />
          </div>
        </div>
        <div className="mt-7 cursor-pointer text-2xl font-medium text-white hover:text-[--cyan]">
          Equilibrium #3429
        </div>
        <div className="mt-4 font-light text-[--soft-blue] text-white">
          Our Equilibrium collection promotes balance and calm.
        </div>
        <div className="mt-4 flex justify-between">
          <div className="flex items-center gap-2 font-medium  text-[--cyan]">
            <Image src={iconEthereum} alt={""} />
            0.041 ETH
          </div>
          <div className="flex items-center gap-2 font-light text-[--soft-blue]">
            <Image src={iconClock} alt={""} />3 days left
          </div>
        </div>
        <div className="mt-2.5 h-[1px] bg-[--very-dark-blue-line]" />
        <div className="mt-2.5 flex items-center gap-4">
          <Image
            src={imageAvatar}
            className="h-9 w-9 rounded-full border border-white"
            alt={""}
          />
          <div className="font-light">
            <span className="text-[--soft-blue]">Creation of </span>
            <span className="cursor-pointer text-white hover:text-[--cyan]">
              Jules Wyvern
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
