import React from "react"
import reaction from "/public/icon-reaction.svg"
import memory from "/public/icon-memory.svg"
import verbal from "/public/icon-verbal.svg"
import visual from "/public/icon-visual.svg"
import Image from "next/image"

function Card() {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-white sm:h-[512px] sm:w-[736px] sm:flex-row sm:rounded-3xl ">
      <div className="flex shrink-0 flex-col items-center justify-center rounded-b-3xl bg-gradient-to-b from-[--light-slate-blue] to-[--light-royal-blue] px-10 pb-10 pt-6 text-center text-white sm:w-1/2 sm:flex-1 sm:rounded-3xl">
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
      <div className="flex w-full flex-col justify-center bg-white px-4 pt-7 sm:w-1/2 sm:px-10 sm:pb-0">
        <div className="text-lg font-semibold">Summary</div>
        <div className="mt-5 flex w-full flex-col items-center gap-4">
          <div className="flex w-full justify-between rounded-md bg-light-red/10 px-3 py-4 text-sm font-bold text-light-red">
            <div className="flex flex-row">
              <Image src={reaction} alt={"Reaction"} />
              <div className="ml-2">Reaction</div>
            </div>
            <div>
              <span className="text-black">80 </span>
              <span className="text-gray-400">/ 100</span>
            </div>
          </div>
          <div className="flex w-full justify-between rounded-md bg-orangey-yellow/10 px-3 py-4 text-sm font-bold text-orangey-yellow">
            <div className="flex flex-row">
              <Image src={memory} alt={"Reaction Icon"} />
              <div className="ml-2">Memory</div>
            </div>
            <div>
              <span className="text-black">92 </span>
              <span className="text-gray-400">/ 100</span>
            </div>
          </div>
          <div className="flex w-full justify-between rounded-md bg-green-teal/10 px-3 py-4 text-sm font-bold text-green-teal">
            <div className="flex flex-row">
              <Image src={verbal} alt={"Verbal Icon"} />
              <div className="ml-2">Verbal</div>
            </div>
            <div>
              <span className="text-black">61 </span>
              <span className="text-gray-400">/ 100</span>
            </div>
          </div>
          <div className="flex w-full justify-between rounded-md bg-cobalt-blue/10 px-3 py-4 text-sm font-bold text-cobalt-blue">
            <div className="flex flex-row">
              <Image src={visual} alt={"Visual Icon"} />
              <div className="ml-2">Visual</div>
            </div>
            <div>
              <span className="text-black">72 </span>
              <span className="text-gray-400">/ 100</span>
            </div>
          </div>
        </div>
        <div className="w-full pb-6 pt-7">
          <button className="w-full rounded-3xl bg-dark-gray-blue px-3 py-4 font-bold text-white hover:bg-dark-gray-blue/90">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
