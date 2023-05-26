import React from "react"
import Image from "next/image"
import bgPatternCard from "#/profile-card/bg-pattern-card.svg"
import imageVictor from "#/profile-card/image-victor.jpg"
import { Kumbh_Sans } from "next/font/google"

const kumbhSans = Kumbh_Sans({
  subsets: ["latin-ext"],
})

const styles = {
  // Primary
  "--dark-cyan": "hsl(185, 75%, 39%)",
  "--very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
  "--dark-grayish-blue": "hsl(227, 10%, 46%)",
  // Neutral
  "--dark-gray": "hsl(0, 0%, 59%)",
} as React.CSSProperties

export default function Page() {
  return (
    <div
      className={`flex min-h-screen w-full items-center justify-center bg-[--dark-cyan] px-6 ${kumbhSans.className}`}
      style={styles}
    >
      <div className="w-full max-w-[350px] overflow-hidden rounded-2xl bg-white">
        <div className="relative flex h-[286px] w-full flex-col items-center border-b border-gray-200">
          <Image src={bgPatternCard} alt={""} className="w-full" />
          <Image
            src={imageVictor}
            alt={""}
            width={96}
            height={96}
            className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-white"
          />
          <div className="mt-20">
            <span className="text-lg font-medium text-[very-dark-desaturated-blue]">
              Vector Crest
            </span>
            <span className="ml-2 text-lg text-[--dark-grayish-blue]">26</span>
          </div>
          <div className="mt-1 text-sm text-[--dark-grayish-blue]">London</div>
        </div>
        <div className="flex w-full flex-row items-center justify-between px-10 py-8">
          <div className="flex w-full flex-col items-center">
            <div className="text-xl font-semibold  text-[very-dark-desaturated-blue]">
              80K
            </div>
            <div className="font-mediium text-sm text-[--dark-grayish-blue]">
              Followers
            </div>
          </div>
          <div className="flex w-full flex-col items-center">
            <div className="text-xl font-semibold  text-[very-dark-desaturated-blue]">
              803K
            </div>
            <div className="font-mediium text-sm text-[--dark-grayish-blue]">
              Likes
            </div>
          </div>
          <div className="flex w-full flex-col items-center">
            <div className="text-xl font-semibold  text-[very-dark-desaturated-blue]">
              1.4k
            </div>
            <div className="font-mediium text-sm text-[--dark-grayish-blue]">
              Photos
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
