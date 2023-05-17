import { Hanken_Grotesk } from "next/font/google"
import { cn } from "@/app/utils"
import React from "react"
import Image from "next/image"
import reaction from "#/results-summary/icon-reaction.svg"
import memory from "#/results-summary/icon-memory.svg"
import verbal from "#/results-summary/icon-verbal.svg"
import visual from "#/results-summary/icon-visual.svg"

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
})

const styles = {
  // Primary
  // https://stackoverflow.com/questions/40010597/how-do-i-apply-opacity-to-a-css-color-variable
  "--light-red": "0, 100%, 67%",
  "--orangey-yellow": "39, 100%, 56%",
  "--green-teal": "166, 100%, 37%",
  "--cobalt-blue": "234, 85%, 45%",
  // Gradients
  "--light-slate-blue": "hsl(252, 100%, 67%)",
  "--light-royal-blue": "hsl(241, 81%, 54%)",
  "--violet-blue": "hsla(256, 72%, 46%, 1)",
  "--persian-blue": "hsla(241, 72%, 46%, 0)",
  // Neutral
  "--pale-blue": "hsl(221, 100%, 96%)",
  "--light-lavender": "hsl(241, 100%, 89%)",
  "--dark-gray-blue": "224, 30%, 27%",
} as React.CSSProperties

const results = [
  {
    title: "Reaction",
    icon: reaction,
    score: 76,
    color: "--light-red",
  },
  {
    title: "Memory",
    icon: memory,
    score: 92,
    color: "--orangey-yellow",
  },
  {
    title: "Verbal",
    icon: verbal,
    score: 61,
    color: "--green-teal",
  },
  {
    title: "Visual",
    icon: visual,
    score: 72,
    color: "--cobalt-blue",
  },
]

export default function Page() {
  return (
    <div
      style={styles}
      className={cn(
        `flex min-h-screen items-center justify-center bg-gray-100 sm:p-6`,
        hankenGrotesk.className
      )}
    >
      <div className="flex flex-col bg-white sm:max-w-[736px] sm:flex-row sm:rounded-3xl ">
        <div className="flex flex-col items-center justify-center rounded-b-3xl bg-gradient-to-b from-[--light-slate-blue] to-[--light-royal-blue] px-10 pb-10 pt-6 text-center text-white sm:w-1/2 sm:rounded-3xl">
          <div className="text-[--light-lavender]">Your Result</div>
          <div className="mt-4 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-black/10">
            <div className="text-5xl">76</div>
            <div className="text-xs text-[--light-lavender]">of 100</div>
          </div>
          <div className="mt-4 text-2xl">Great</div>
          <div className="mt-1 text-sm text-[--light-lavender]">
            You scored higher than 65% of the people who have taken these tests.
          </div>
        </div>
        <div className="flex flex-col justify-center bg-white px-4 pt-7 sm:w-1/2 sm:px-10 sm:pb-0">
          <div className="text-lg font-semibold">Summary</div>
          <div className="mt-5 flex flex-col items-center gap-4">
            {results.map((result) => (
              <div
                key={result.title}
                style={
                  {
                    "--color": `hsl(var(${result.color}))`,
                    "--bg-color": `hsla(var(${result.color}), 0.1)`,
                  } as React.CSSProperties
                }
                className={cn(
                  "flex w-full justify-between rounded-md bg-[--bg-color] px-3 py-4 text-sm font-bold text-[--color]"
                )}
              >
                <div className="flex flex-row">
                  <Image src={result.icon} alt={""} />
                  <div className="ml-2">{result.title}</div>
                </div>
                <div>
                  <span className="text-black">{result.score} </span>
                  <span className="text-gray-400">/ 100</span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full pb-6 pt-7">
            <button className="w-full rounded-3xl bg-[hsl(var(--dark-gray-blue))] px-3 py-4 font-bold text-white hover:bg-[hsla(var(--dark-gray-blue),0.9)]">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
