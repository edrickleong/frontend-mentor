import React from "react"
import Game from "@/app/games/[id]/game"
import {
  createUserSupabaseClient,
  getOrCreateAnonymousUser,
} from "@/app/supabase"
import { cookies } from "next/headers"
import { createCommandHandler } from "@/app/create-command-handler"
import {CannotJoinWhenGameStartedError, PlayerAlreadyJoinedError} from "@/domain/command-handler";

type Props = {
  params: {
    id: string
  }
}

export default async function Page(props: Props) {
  const cookieStore = cookies()
  const userSupabase = createUserSupabaseClient(cookieStore)
  const playerId = await getOrCreateAnonymousUser(userSupabase)

  // TODO: Move this to an API call
  const commandHandler = createCommandHandler()
  try {
    await commandHandler.joinGame({roomId: props.params.id, playerId})
  } catch (e) {
    if (e instanceof PlayerAlreadyJoinedError || e instanceof CannotJoinWhenGameStartedError) {
    } else {
      throw e
    }
  }

  return <Game id={props.params.id} />
}

