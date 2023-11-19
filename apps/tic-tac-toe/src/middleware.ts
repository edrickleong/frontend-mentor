import { type CookieOptions, createServerClient } from "@supabase/ssr"
import { type NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const response = await refreshTokenIfNecessary(request)
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname === "/api/games") {
    await createAnonymousUserIfNotLoggedIn(request, response)
  }

  return response
}

// https://supabase.com/docs/guides/auth/server-side/creating-a-client?environment=middleware
async function refreshTokenIfNecessary(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: "",
            ...options,
          })
        },
      },
    },
  )

  await supabase.auth.getSession()

  return response
}

async function createAnonymousUserIfNotLoggedIn(
  request: NextRequest,
  response: NextResponse,
) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value: "",
            ...options,
          })
        },
      },
    },
  )

  const getSessionResult = await supabase.auth.getSession()
  if (
    getSessionResult.error !== null &&
    getSessionResult.data.session === null
  ) {
    await supabase.auth.signUp({
      email: crypto.randomUUID() + "@example.com",
      password: crypto.randomUUID(),
    })
  }
}

export const runtime = "nodejs"
