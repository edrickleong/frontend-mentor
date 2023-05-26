import { Space_Mono } from "next/font/google"
import { cn } from "@/app/utils"
import SearchIcon from "./_components/icon-search.svg"
import LocationIcon from "./_components/icon-location.svg"
import MoonIcon from "./_components/icon-moon.svg"
import CompanyIcon from "./_components/icon-company.svg"
import TwitterIcon from "./_components/icon-twitter.svg"
import WebsiteIcon from "./_components/icon-website.svg"
import Image from "next/image"
import { redirect } from "next/navigation"

const styles = {
  "--blue": "hsl(212,100%,50%)",
  "--grey": "hsl(217,20%,51%)",
  "--desaturated-blue": "hsl(217,35%,45%)",
  "--dark-grey": "hsl(217,21%,21%)",
  "--light-blue": "hsl(227,100%,98%)",
  "--ghost-white": "hsl(0,0%,100%)",
} as React.CSSProperties

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
})

async function getUserData(username: string) {
  const token = process.env.GITHUB_TOKEN
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return (await res.json()) as {
    name: string
    login: string
    avatar_url: string
    created_at: string
    bio: string
    public_repos: number
    followers: number
    following: number
    location: string
    blog: string
    twitter_username: string
    company: string
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  if (Array.isArray(searchParams)) {
    throw new Error("Invalid search params")
  }
  const username = searchParams["username"] ?? "octocat"
  const data = await getUserData(
    typeof username === "string" ? username : username[0]
  )

  return (
    <div
      style={styles}
      className={cn(
        "flex min-h-screen w-full flex-col items-center bg-[--light-blue] px-6",
        spaceMono.className
      )}
    >
      <header className="mt-8 flex w-full items-center justify-between">
        <div className="text-[26px] font-bold leading-[1.2]">devfinder</div>
        <button>
          <MoonIcon />
        </button>
      </header>
      <main className="mt-9 w-full">
        <form
          className="relative flex flex-row items-center overflow-hidden rounded-2xl bg-white drop-shadow-[0_16px_30px_rgba(70,96,187,0.1986)]"
          action={async (formData: FormData) => {
            "use server"
            const username = formData.get("username")
            redirect(`/github-user-search?username=${username}`)
          }}
        >
          <SearchIcon className="absolute ml-4 h-4 w-4" />
          <input
            type="text"
            name="username"
            placeholder={"Search GitHub username…"}
            className="w-full truncate py-5 pl-11 pr-[108px] text-[13px] leading-[25px] outline-none"
          />
          <button className="absolute right-4 flex items-center justify-center rounded-[10px] bg-[--blue] px-4 py-3 pl-4 text-sm font-bold text-white ">
            Search
          </button>
        </form>
        <div className="mt-4 rounded-2xl bg-white px-6 py-8 drop-shadow-[0_16px_30px_rgba(70,96,187,0.1986)]">
          <div className="flex flex-row">
            <Image
              src={data.avatar_url}
              height={70}
              width={70}
              alt={""}
              className="h-[70px] w-[70px] rounded-full"
            />
            <div className="ml-5">
              <div className="font-bold text-[--dark-grey]">{data.name}</div>
              <div className="font-[13px] text-[--blue]">@{data.login}</div>
              <div className="font-[13px] text-[--grey]">
                Joined{" "}
                {new Date(data.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
          <div className="mt-8 font-[13px] leading-[25px] text-[--grey]">
            {data.bio}
          </div>
          <div className="mt-6 rounded-[10px] bg-[--light-blue]">
            <div className="flex w-full flex-row px-4 py-5 text-center">
              <div className="flex-1">
                <div className="text-[11px] text-[--grey]">Repos</div>
                <div className="mt-2 font-bold text-[--dark-blue]">
                  {data.public_repos}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[11px] text-[--grey]">Followers</div>
                <div className="mt-2 font-bold text-[--dark-blue]">
                  {data.followers}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[11px] text-[--grey]">Following</div>
                <div className="mt-2 font-bold text-[--dark-blue]">
                  {data.following}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4 text-[13px] text-[--desaturated-blue]">
            <div
              className={cn(
                "flex flex-row gap-3",
                !data.location && "opacity-50"
              )}
            >
              <LocationIcon className="h-5 w-5" />
              <div>{data.location ?? "Not available"}</div>
            </div>
            <div
              className={cn("flex flex-row gap-3", !data.blog && "opacity-50")}
            >
              <WebsiteIcon className="h-5 w-5" />
              <div>{data.blog ?? "Not available"}</div>
            </div>
            <div
              className={cn(
                "flex flex-row gap-3",
                !data.twitter_username && "opacity-50"
              )}
            >
              <TwitterIcon className="h-5 w-5" />
              <div>{data.twitter_username ?? "Not available"}</div>
            </div>
            <div
              className={cn(
                "flex flex-row gap-3",
                !data.company && "opacity-50"
              )}
            >
              <CompanyIcon className="h-5 w-5" />
              <div>{data.company ?? "Not available"}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
