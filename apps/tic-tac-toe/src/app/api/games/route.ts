import { v4 as uuidv4 } from "uuid"
import { createUserSupabaseClient } from "@/app/supabase"
import { cookies } from "next/headers"
import { createCommandHandler } from "@/app/create-command-handler"

export async function POST() {
  const userSupabase = createUserSupabaseClient(cookies())
  const { data, error } = await userSupabase.auth.getSession()
  if (error) {
    console.error(error)
    return new Response("", { status: 500 })
  }
  if (!data.session) {
    console.error("user is not logged in")
    return new Response("", { status: 401 })
  }
  const userId = data.session.user.id

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
