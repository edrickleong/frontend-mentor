import { NextRequest } from "next/server"
import { createUserSupabaseClient } from "@/app/supabase"
import { createCommandHandler } from "@/app/create-command-handler"
import { cookies } from "next/headers"

type Params = {
  id: string
}

export async function POST(
  request: NextRequest,
  {
    params,
  }: {
    params: Params
  },
) {
  const requestBody = await request.json()
  const userSupabase = createUserSupabaseClient(cookies())
  const { data, error } = await userSupabase.auth.getSession()
  if (error) throw error
  if (!data.session) throw new Error("session is null")

  const commandHandler = createCommandHandler()

  await commandHandler.placeMark({
    roomId: params.id,
    playerId: data.session.user.id,
    row: requestBody.row,
    col: requestBody.col,
    // mark: requestBody.mark,
  })

  return new Response("", { status: 200 })
}
