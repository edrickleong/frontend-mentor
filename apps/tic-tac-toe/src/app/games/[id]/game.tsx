"use client"
import React, { useEffect, useState } from "react"
import logo from "#/logo.svg"
import Image from "next/image"
import {
  OIcon,
  OIconOutline,
  RestartIcon,
  XIcon,
  XIconOutline,
} from "@/app/_components/icons"
import { Board } from "@/app/types"
import { supabase } from "@/app/supabase"
import { GameState } from "@/domain/types"
import Link from "next/link"
import { Database } from "@/app/database-definitions"

const emptyBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
] satisfies Board

type Props = {
  id: string
}

export default function Game({ id }: Props) {
  const [gameState, setGameState] = useState<GameState | undefined>()
  const [userId, setUserId] = useState<string>()

  useEffect(() => {
    async function getGame() {
      const { data: games, error } = await supabase
        .from("games")
        .select("*")
        .eq("id", id)
      const game = games![0]
      setGameState(game.state)

      if (game.state.type === "Waiting") {
        await fetch(`/api/games/${game.id}/join`, {
          method: "POST",
        })
      }
    }

    const changes = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          schema: "public",
          table: "games",
          event: "*",
        },
        (payload) => {
          const row =
            payload.new as Database["public"]["Tables"]["games"]["Row"]
          setGameState(row.state)
        },
      )
      .subscribe()
    getGame()

    return () => {
      changes.unsubscribe()
    }
  }, [id])

  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        console.error(error)
        return
      }
      if (!data.session) {
        console.error("No session!!")
        return
      }

      setUserId(data.session.user.id)
    }

    getUser()
  }, [])

  const board = gameState?.type === "Playing" ? gameState?.board : emptyBoard

  if (!gameState || gameState.type === "Waiting") {
    return (
      <div className="flex min-h-screen flex-col items-center bg-dark-navy px-6">
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="text-center text-2xl font-bold text-white sm:text-4xl">
            Waiting for opponent...
          </div>

          <div className="mt-4">
            <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-white sm:h-14 sm:w-14"></div>
          </div>
        </div>
      </div>
    )
  }

  const userMark = gameState?.playerIdToMark[userId!]

  return (
    <section className="flex min-h-screen flex-col items-center bg-dark-navy px-6">
      <header className="relative mt-6 flex w-full max-w-lg flex-row items-end justify-around">
        <Link href="/" className="absolute left-0">
          <Image src={logo} alt="Logo" />
        </Link>
        <div className="grid place-items-center">
          {gameState?.type === "Playing" && (
            <div className="flex h-9 items-center gap-2.5 rounded-md bg-semi-dark-navy px-4 text-sm font-bold uppercase tracking-wider text-silver shadow-[0_4px_0_0_#10212A]">
              {gameState?.currentPlayerMark === "X" ? (
                <XIcon className="h-4 w-4 text-silver" />
              ) : (
                <OIcon className="h-4 w-4 text-silver" />
              )}
              <div>
                {userMark === undefined
                  ? "Turn"
                  : gameState.currentPlayerMark === userMark
                    ? "Turn (You)"
                    : "Turn (Them)"}
              </div>
            </div>
          )}
        </div>
        <div className="absolute right-0">
          <button className="grid h-9 w-10 place-items-center rounded-md bg-silver shadow-[0_4px_#6B8997] hover:bg-silver-hover">
            <RestartIcon className="h-4 w-4 text-dark-navy" />
          </button>
        </div>
      </header>
      <div className="mt-16 grid w-full max-w-lg gap-4">
        {board.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="grid w-full grid-cols-3 gap-4">
              {row.map((cell, colIndex) => {
                return (
                  <button
                    key={colIndex}
                    className="group grid aspect-square w-full place-items-center rounded-[10px] bg-semi-dark-navy text-silver shadow-[0_-8px_0_0_#10212A_inset]"
                    disabled={
                      cell !== "" ||
                      (gameState?.type === "Playing" &&
                        gameState.currentPlayerMark !== userMark)
                    }
                    onClick={async () => {
                      await fetch(`/api/games/${id}/place-mark`, {
                        method: "POST",
                        body: JSON.stringify({
                          row: rowIndex,
                          col: colIndex,
                        }),
                        credentials: "include",
                      })
                    }}
                  >
                    {cell === "X" ? (
                      <XIcon className="h-10 w-10 text-light-blue sm:h-16 sm:w-16" />
                    ) : cell === "O" ? (
                      <OIcon className="h-10 w-10 text-light-yellow sm:h-16 sm:w-16" />
                    ) : gameState.type === "Playing" &&
                      gameState.currentPlayerMark === "X" ? (
                      <XIconOutline className="hidden h-10 w-10 group-hover:block group-hover:group-disabled:hidden sm:h-16 sm:w-16" />
                    ) : (
                      <OIconOutline className="hidden h-10 w-10 group-hover:block group-hover:group-disabled:hidden sm:h-16 sm:w-16" />
                    )}
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="mt-5 grid w-full max-w-lg grid-cols-3 gap-5">
        <div className="flex w-full flex-col items-center rounded-xl bg-light-blue py-3 uppercase text-dark-navy">
          <div className="text-sm tracking-wider">{`X${
            userMark === "X" ? " (You)" : ""
          }`}</div>
          {/*<div className="mt-1.5 text-xl font-bold tracking-widest">14</div>*/}
        </div>
        <div className="flex w-full flex-col items-center rounded-xl bg-silver py-3 uppercase text-dark-navy">
          <div className="text-sm tracking-wider">Ties</div>
          {/*<div className="mt-1.5 text-xl font-bold tracking-widest">14</div>*/}
        </div>
        <div className="flex w-full flex-col items-center rounded-xl bg-light-yellow py-3 uppercase text-dark-navy">
          <div className="text-sm tracking-wider">{`O${
            userMark === "O" ? " (You)" : ""
          }`}</div>
          {/*<div className="mt-1.5 text-xl font-bold tracking-widest">11</div>*/}
        </div>
      </div>
    </section>
  )
}
