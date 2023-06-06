"use client"
import Image from "next/image"
import patternDividerMobile from "#/pattern-divider-mobile.svg"
import iconDice from "#/icon-dice.svg"
import { useState } from "react"

const advices = [
  "“It is easy to sit up and take notice, what's difficult is getting up and taking action.”",
  "“A ship in harbor is safe, but that's not why ships are built.”",
  "“If you want to lift yourself up, lift up someone else.”",
  "“Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.”",
]

export default function Home() {
  const [adviceIndex, setAdviceIndex] = useState(0)

  return (
    <div className="flex flex-col items-center px-4 pt-[120px]">
      <main className="flex max-w-[540px] flex-col items-center rounded-[10px] bg-dark-grayish-blue px-6 pt-10 text-center lg:px-12 lg:pt-12">
        <div className="text-[11px] font-extrabold uppercase tracking-[0.25rem] text-neon-green lg:text-[13px]">
          Advice #{adviceIndex + 1}
        </div>
        <div className="mt-6 text-2xl text-[1.75rem] font-extrabold leading-tight text-light-cyan">
          {advices[adviceIndex]}
        </div>
        <div className="mt-6 flex h-4 w-full items-center lg:mt-10">
          <div className="h-[1px] w-full bg-grayish-blue" />
          <Image src={patternDividerMobile} alt="" />
          <div className="h-[1px] w-full bg-grayish-blue" />
        </div>
        <button
          className="-mb-8 mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-neon-green hover:shadow-[0px_0px_40px_#53FFAA] lg:mt-10"
          onClick={() => setAdviceIndex((adviceIndex + 1) % advices.length)}
        >
          <Image src={iconDice} alt="" />
        </button>
      </main>
    </div>
  )
}
