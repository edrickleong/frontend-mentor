import React from "react"
import logo from "#/logo.svg"
import Image from "next/image"
import { RestartIcon, XIcon, XIconOutline } from "@/app/_components/icons"

export default function Page() {
  return (
    <section className="bg-dark-navy flex min-h-screen flex-col items-center px-6">
      <header className="mt-6 flex w-full items-center justify-between">
        <Image src={logo} alt="Logo" />

        <div className="bg-semi-dark-navy flex items-center gap-2.5 rounded-md px-4 pb-4 pt-3 shadow-[0_-4px_0_0_#10212A_inset]">
          <XIcon className="text-silver h-4 w-4" />
          <div className="text-silver text-sm font-bold uppercase tracking-wider">
            Turn
          </div>
        </div>
        <button className="bg-silver hover:bg-silver-hover grid h-10 w-10 place-items-center rounded-md shadow-[0_-4px_#6B8997_inset]">
          <RestartIcon className="text-dark-navy h-4 w-4" />
        </button>
      </header>
      <div className="mt-16 grid w-full grid-cols-3 gap-4">
        {new Array(9).fill(undefined).map((_, index) => (
          <button
            key={index}
            className="bg-semi-dark-navy group grid aspect-square w-full place-items-center rounded-[10px] shadow-[0_-8px_0_0_#10212A_inset]"
          >
            <XIconOutline className="invisible h-10 w-10 group-hover:visible" />
          </button>
        ))}
      </div>
      <div className="mt-5 grid w-full grid-cols-3 gap-5">
        <div className="bg-light-blue text-dark-navy flex w-full flex-col items-center rounded-xl py-3 uppercase">
          <div className="text-sm tracking-wider">X (You)</div>
          <div className="mt-1.5 text-xl font-bold tracking-widest">14</div>
        </div>
        <div className="bg-silver text-dark-navy flex w-full flex-col items-center rounded-xl py-3 uppercase">
          <div className="text-sm tracking-wider">Ties</div>
          <div className="mt-1.5 text-xl font-bold tracking-widest">14</div>
        </div>
        <div className="bg-light-yellow text-dark-navy flex w-full flex-col items-center rounded-xl py-3 uppercase">
          <div className="text-sm tracking-wider">O</div>
          <div className="mt-1.5 text-xl font-bold tracking-widest">11</div>
        </div>
      </div>
    </section>
  )
}
