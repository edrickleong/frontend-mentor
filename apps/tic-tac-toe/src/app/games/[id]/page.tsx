"use client"
import React, { useEffect, useState } from "react"
import logo from "#/logo.svg"
import Image from "next/image"
import { RestartIcon, XIcon, XIconOutline } from "@/app/_components/icons"
import { Board } from "@/app/types"
import { supabase } from "@/app/supabase"

type Props = {
  params: {
    id: string
  }
}

const emptyBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
] satisfies Board

export default function Page({ params }: Props) {
  const [gameState, setGameState] = useState<{
    board: Board
  }>({ board: emptyBoard })

  useEffect(() => {
    async function createGame() {
      const { data: games, error } = await supabase
        .from("games")
        .select("*")
        .eq("id", params.id)
      console.log(error)
      console.log(games)
      const game = games![0]
      setGameState(
        game.state as {
          board: Board
        },
      )
    }

    createGame()
    return () => {}
  }, [params.id])

  return (
    <section className="flex min-h-screen flex-col items-center bg-dark-navy px-6">
      <header className="mt-6 grid w-full max-w-lg grid-cols-3 items-center">
        <div>
          <Image src={logo} alt="Logo" />
        </div>
        <div className="grid place-items-center">
          <div className="flex h-9 items-center gap-2.5 rounded-md bg-semi-dark-navy px-4 shadow-[0_4px_0_0_#10212A]">
            <XIcon className="h-4 w-4 text-silver" />
            <div className="text-sm font-bold uppercase tracking-wider text-silver">
              Turn
            </div>
          </div>
        </div>
        <div className="grid place-items-end">
          <button className="grid h-9 w-10 place-items-center rounded-md bg-silver shadow-[0_4px_#6B8997] hover:bg-silver-hover">
            <RestartIcon className="h-4 w-4 text-dark-navy" />
          </button>
        </div>
      </header>
      <div className="mt-16 grid w-full max-w-lg gap-4">
        {gameState?.board.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="grid w-full grid-cols-3 gap-4">
              {row.map((cell, colIndex) => {
                return (
                  <button
                    key={colIndex}
                    className="group grid aspect-square w-full place-items-center rounded-[10px] bg-semi-dark-navy text-silver shadow-[0_-8px_0_0_#10212A_inset]"
                  >
                    <XIconOutline className="invisible h-10 w-10 group-hover:visible" />
                    {cell === "X" && <XIcon className="h-10 w-10" />}
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="mt-5 grid w-full max-w-lg grid-cols-3 gap-5">
        <div className="flex w-full flex-col items-center rounded-xl bg-light-blue py-3 uppercase text-dark-navy">
          <div className="text-sm tracking-wider">X (You)</div>
          <div className="mt-1.5 text-xl font-bold tracking-widest">14</div>
        </div>
        <div className="flex w-full flex-col items-center rounded-xl bg-silver py-3 uppercase text-dark-navy">
          <div className="text-sm tracking-wider">Ties</div>
          <div className="mt-1.5 text-xl font-bold tracking-widest">14</div>
        </div>
        <div className="flex w-full flex-col items-center rounded-xl bg-light-yellow py-3 uppercase text-dark-navy">
          <div className="text-sm tracking-wider">O</div>
          <div className="mt-1.5 text-xl font-bold tracking-widest">11</div>
        </div>
      </div>
    </section>
  )
}
