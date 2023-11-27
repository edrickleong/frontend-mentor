import React from "react"
import Game from "@/app/games/[id]/game"

type Props = {
  params: {
    id: string
  }
}

export default async function Page(props: Props) {
  return <Game id={props.params.id} />
}
