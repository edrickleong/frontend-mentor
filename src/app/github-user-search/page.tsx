import { cn } from "@/app/utils"
import { Space_Mono } from "next/font/google"
import MoonIcon from "@/app/github-user-search/_components/icon-moon.svg"
import { GithubSearch } from "@/app/github-user-search/_components/GithubSearch"
import { userSchema } from "@/app/github-user-search/_types/user"
import { ThemeProvider } from "next-themes"

const styles = {
  "--blue": "hsl(212,100%,50%)",
  "--grey": "hsl(217,20%,51%)",
  "--desaturated-blue": "hsl(217,35%,45%)",
  "--dark-grey": "hsl(217,21%,21%)",
  "--light-blue": "hsl(227,100%,98%)",
  "--ghost-white": "hsl(0,0%,100%)",
  "--dark-mode-blue": "hsl(212,100%,50%)",
  "--dark-mode-white": "hsl(0,0%,100%)",
  "--dark-mode-black": "hsl(220,40%,13%)",
  "--dark-mode-dark-blue": "hsl(222,41%,20%)",
} as React.CSSProperties

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
    <ThemeProvider>
      <div
        style={styles}
        className={cn(
          "flex min-h-screen w-full flex-col items-center bg-[--light-blue] px-6 md:pt-[140px]",
          spaceMono.className
        )}
      >
        <div className="flex w-full max-w-[573px] flex-col lg:max-w-[730px]">
          <header className="mt-8 flex w-full items-center justify-between">
            <div className="text-[26px] font-bold leading-[1.2]">devfinder</div>
            <button className="flex flex-row items-center gap-4 text-[13px] font-bold uppercase text-[--grey]">
              Dark
              <MoonIcon />
            </button>
          </header>
          <GithubSearch initialUsername={username} user={data} />
        </div>
      </div>
    </ThemeProvider>
  )
}

async function getUser(username: string) {
  const token = process.env.GITHUB_TOKEN
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })

  if (res.status === 404) {
    return null
  }

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const body = await res.json()
  return userSchema.parse(body)
}
