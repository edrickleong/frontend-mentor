import { createServiceSupabaseClient } from "@/app/supabase"
import { SupabaseRepository } from "@/data/repository"
import { GameCommandHandler } from "@/domain/command-handler"

export function createCommandHandler() {
  const serviceAccountSupabase = createServiceSupabaseClient()
  const repository = new SupabaseRepository(serviceAccountSupabase)
  return new GameCommandHandler(repository)
}
