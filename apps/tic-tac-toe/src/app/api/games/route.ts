import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

type Game = {
  id: string
  state: {
    board: string[][]
  }
}

export async function POST() {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  )
  const { data, error } = await supabase
    .from("games")
    .insert([
      {
        state: {
          board: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ],
        },
      },
    ])
    .select()

  if (error) {
    return new NextResponse("", { status: 500 })
  }

  const game = data![0] as Game

  return Response.json({
    gameId: game.id,
  })
}
