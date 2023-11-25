import { GameRoom, Repository } from "@/domain/types"
import { SupabaseClient } from "@supabase/supabase-js"
import { Database } from "@/app/database-definitions"

export class SupabaseRepository implements Repository {
  constructor(private supabase: SupabaseClient<Database>) {}

  async load(id: string): Promise<GameRoom | undefined> {
    const { data, error } = await this.supabase
      .from("games")
      .select()
      .eq("id", id)
    if (error) throw error

    return data[0]
  }

  async save(gameRoom: GameRoom): Promise<void> {
    const { data, error } = await this.supabase
      .from("games")
      .upsert({
        id: gameRoom.id,
        state: gameRoom.state,
        version: gameRoom.version,
      })
      .eq("id", gameRoom.id)
      .eq("version", gameRoom.version - 1)
      .select()
    if (error) throw error
    if (data == null) throw new Error("data is null")
  }
}
