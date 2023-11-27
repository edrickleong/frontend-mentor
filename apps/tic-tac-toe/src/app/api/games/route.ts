import { v4 as uuidv4 } from "uuid"
import {
  createUserSupabaseClient,
  getOrCreateAnonymousUser,
} from "@/app/supabase"
import { cookies } from "next/headers"
import { createCommandHandler } from "@/app/create-command-handler"

export async function POST() {
  const userSupabase = createUserSupabaseClient(cookies())
  const userId = await getOrCreateAnonymousUser(userSupabase)

  const commandHandler = createCommandHandler()
  const gameRoomId = uuidv4()
  await commandHandler.createGame({
    roomId: gameRoomId,
    playerId: userId,
  })

  return Response.json({
    gameId: gameRoomId,
  })
}
