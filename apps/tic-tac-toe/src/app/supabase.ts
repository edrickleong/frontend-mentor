import { createClient, SupabaseClient } from "@supabase/supabase-js"
import { Database } from "@/app/database-definitions"
import { createBrowserClient, createServerClient } from "@supabase/ssr"
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"
import { v4 as uuidv4 } from "uuid"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createBrowserClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
)

export function createUserSupabaseClient(cookies: ReadonlyRequestCookies) {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookies.get(name)?.value
        },
      },
    },
  )
}

export function createServiceSupabaseClient() {
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  )
}

export async function getOrCreateAnonymousUser(supabase: SupabaseClient) {
  const getSessionResult = await supabase.auth.getSession()
  if (getSessionResult.error) {
    throw new Error("Error getting session")
  }

  const session = getSessionResult.data.session
  if (session) return session.user.id

  const signUpResult = await supabase.auth.signUp({
    email: uuidv4() + "@example.com",
    password: uuidv4(),
  })

  if (signUpResult.error) {
    throw new Error("Error signing up")
  }

  const user = signUpResult.data.user
  if (!user) throw new Error("No user")

  return user.id
}
