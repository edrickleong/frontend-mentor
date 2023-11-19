"use client"
import Image from "next/image"
import logo from "#/logo.svg"
import { OIcon, XIcon } from "@/app/_components/icons"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [startingMark, setStartingMark] = useState<"X" | "O">("O")

  return (
    <main className="flex min-h-screen flex-col  items-center bg-dark-navy px-6">
      <Image className="mt-32" src={logo} alt="Logo" />
      <section className="mt-8 flex w-full flex-col items-center rounded-2xl bg-semi-dark-navy px-6 pb-8 pt-6 shadow-[0_-8px_0_0px_#10212A_inset]">
        <h2 className=" text-center font-bold uppercase leading-5 tracking-wider text-silver">
          {"Pick Player 1's Mark"}
        </h2>
        <Tabs
          value={startingMark}
          onValueChange={(value) => setStartingMark(value as "X" | "O")}
          asChild
        >
          <TabsList className="mt-6 grid w-full grid-cols-2 items-center rounded-xl bg-gray-800 p-2">
            <TabsTrigger
              value="O"
              className="grid h-[54px] place-items-center rounded-lg text-silver data-[state=active]:bg-silver data-[state=active]:text-dark-navy"
            >
              <XIcon className="h-8 w-8" />
            </TabsTrigger>
            <TabsTrigger
              value="X"
              className="grid h-[54px] place-items-center rounded-lg text-silver data-[state=active]:bg-silver data-[state=active]:text-dark-navy"
            >
              <OIcon className="h-8 w-8" />
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <p className="mt-4 text-center text-sm uppercase tracking-wider text-silver opacity-50">
          Remember: X goes first
        </p>
      </section>
      <button
        disabled
        className="mt-8 w-full rounded-2xl bg-light-yellow pb-6 pt-4 text-center text-base font-bold uppercase tracking-wider text-dark-navy shadow-[0_-8px_#CC8B13_inset] hover:bg-light-yellow-hover disabled:bg-gray-400 disabled:shadow-none"
      >
        New game (vs CPU)
      </button>
      <button
        className="mt-4 w-full rounded-2xl bg-light-blue pb-6 pt-4 text-center text-base font-bold uppercase tracking-wider text-dark-navy shadow-[0_-8px_0_0_#118C87_inset] hover:bg-light-blue-hover"
        onClick={async () => {
          const response = await fetch("/api/games", {
            method: "POST",
          })
          const body = await response.json()
          router.push(`/games/${body.gameId}`)
        }}
      >
        New game (vs player)
      </button>
    </main>
  )
}
