import { cn } from "@/lib/utils"
import { Space_Mono } from "next/font/google"
import { GithubSearch } from "@/components/GithubSearch"
import { userSchema } from "@/types/user"
import { ToggleThemeButton } from "@/components/ToggleThemeButton"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
})

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({ searchParams }: Props) {
  if (Array.isArray(searchParams)) {
    throw new Error("Invalid search params")
  }
  const username = searchParams["username"] as string
  const data = await getUser(username ?? "octocat")

  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col items-center bg-background px-6 pt-8",
        spaceMono.className
      )}
    >
      <div className="flex w-full max-w-[573px] flex-col lg:max-w-[730px]">
        <header className="flex w-full items-baseline justify-between">
          <div className="text-[26px] font-bold leading-[1.2] text-[#222731] dark:text-white">
            devfinder
          </div>
          <ToggleThemeButton />
        </header>
        <GithubSearch initialUsername={username} user={data} />
      </div>
    </div>
  )
}

async function getUser(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`)

  if (res.status === 404) {
    return null
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch data`)
  }

  const body = await res.json()
  return userSchema.parse(body)
}
