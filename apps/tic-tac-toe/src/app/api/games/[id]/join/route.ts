import { cookies } from "next/headers"
import {
  createUserSupabaseClient,
  getOrCreateAnonymousUser,
} from "@/app/supabase"
import { createCommandHandler } from "@/app/create-command-handler"
import {
  CannotJoinWhenGameStartedError,
  PlayerAlreadyJoinedError,
} from "@/domain/command-handler"
import { NextRequest } from "next/server"

type Params = {
  id: string
}

export async function POST({ params }: { params: Params }) {
  const cookieStore = cookies()
  const userSupabase = createUserSupabaseClient(cookieStore)
  const playerId = await getOrCreateAnonymousUser(userSupabase)

  const commandHandler = createCommandHandler()
  try {
    await commandHandler.joinGame({ roomId: params.id, playerId })
  } catch (e) {
    if (
      e instanceof PlayerAlreadyJoinedError ||
      e instanceof CannotJoinWhenGameStartedError
    ) {
    } else {
      return new Response("", { status: 400 })
    }
  }

  return new Response("", { status: 200 })
}
