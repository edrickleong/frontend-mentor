"use client"
import iconSearch from "#/github-user-search/icon-search.svg"
import Image from "next/image"
import { cn } from "@/app/utils"
import iconLocation from "#/github-user-search/icon-location.svg"
import iconWebsite from "#/github-user-search/icon-website.svg"
import iconTwitter from "#/github-user-search/icon-twitter.svg"
import iconCompany from "#/github-user-search/icon-company.svg"
import { usePathname, useRouter } from "next/navigation"
import { User } from "@/app/github-user-search/_types/user"

type Props = {
  initialUsername: string
  user: User | null
}

export function GithubSearch({ initialUsername, user }: Props) {
  const pathname = usePathname()
  const { push } = useRouter()

  return (
    <main className="mt-9 w-full">
      <form
        className="relative flex flex-row items-center overflow-hidden rounded-2xl bg-white drop-shadow-[0_16px_30px_rgba(70,96,187,0.1986)] dark:drop-shadow-none"
        action={async (formData: FormData) => {
          const username = formData.get("username")
          await push(pathname + (username ? `?username=${username}` : ""))
        }}
      >
        <Image className="absolute ml-4 h-4 w-4" src={iconSearch} alt={""} />
        <input
          type="text"
          name="username"
          placeholder={"Search GitHub username…"}
          defaultValue={initialUsername}
          className="w-full truncate py-5 pl-11 pr-[108px] text-[13px] leading-[25px] outline-none"
        />
        <div className="flex-roww absolute right-4 flex items-center gap-4">
          <button className="flex items-center justify-center rounded-[10px] bg-[--blue] px-4 py-3 pl-4 text-sm font-bold text-white ">
            Search
          </button>
        </div>
      </form>
      <div className="mt-4 rounded-2xl bg-white px-6 py-8 drop-shadow-[0_16px_30px_rgba(70,96,187,0.1986)] dark:drop-shadow-none">
        {!user ? (
          <div className="text-[15px] font-bold text-[#F74646]">
            No results found
          </div>
        ) : (
          <CardContent user={user} />
        )}
      </div>
    </main>
  )
}

function CardContent({ user }: { user: User }) {
  return (
    <>
      <div className="flex flex-row">
        <Image
          src={user.avatar_url}
          height={70}
          width={70}
          alt={""}
          className="h-[70px] w-[70px] rounded-full"
        />
        <div className="ml-5">
          <div className="font-bold text-[--dark-grey]">{user.name}</div>
          <div className="font-[13px] text-[--blue]">@{user.login}</div>
          <div className="font-[13px] text-[--grey]">
            Joined{" "}
            {new Date(user.created_at).toLocaleDateString("en-US", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
      <div className="mt-8 font-[13px] leading-[25px] text-[--grey]">
        {user.bio}
      </div>
      <div className="mt-6 rounded-[10px] bg-[--light-blue]">
        <div className="flex w-full flex-row px-4 py-5 text-center">
          <div className="flex-1">
            <div className="text-[11px] text-[--grey]">Repos</div>
            <div className="mt-2 font-bold text-[--dark-blue]">
              {user.public_repos}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-[11px] text-[--grey]">Followers</div>
            <div className="mt-2 font-bold text-[--dark-blue]">
              {user.followers}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-[11px] text-[--grey]">Following</div>
            <div className="mt-2 font-bold text-[--dark-blue]">
              {user.following}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 text-[13px] text-[--desaturated-blue] md:grid md:grid-cols-2">
        <div
          className={cn("flex flex-row gap-3", !user.location && "opacity-50")}
        >
          <Image src={iconLocation} alt={""} className="h-5 w-5 shrink-0" />
          <div>{user.location ?? "Not available"}</div>
        </div>
        <div className={cn("flex flex-row gap-3", !user.blog && "opacity-50")}>
          <Image src={iconWebsite} alt="" className="h-5 w-5" />
          <div>{user.blog?.length !== 0 ? user.blog : "Not available"}</div>
        </div>
        <div
          className={cn(
            "flex flex-row gap-3",
            !user.twitter_username && "opacity-50"
          )}
        >
          <Image src={iconTwitter} alt={""} className="h-5 w-5" />
          <div>{user.twitter_username ?? "Not available"}</div>
        </div>
        <div
          className={cn("flex flex-row gap-3", !user.company && "opacity-50")}
        >
          <Image src={iconCompany} alt={""} className="h-5 w-5" />
          <div>{user.company ?? "Not available"}</div>
        </div>
      </div>
    </>
  )
}
