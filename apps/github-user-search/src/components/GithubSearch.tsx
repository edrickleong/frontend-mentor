"use client"
import iconSearch from "#/icon-search.svg"
import Image from "next/image"
import { cn } from "@/lib/utils"
import iconLocation from "#/icon-location.svg"
import iconWebsite from "#/icon-website.svg"
import iconTwitter from "#/icon-twitter.svg"
import iconCompany from "#/icon-company.svg"
import { usePathname, useRouter } from "next/navigation"
import { User } from "@/types/user"
import React from "react"
import Link from "next/link"

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
        className="relative flex flex-row items-center overflow-hidden rounded-2xl bg-card drop-shadow-[0_16px_30px_rgba(70,96,187,0.1986)] dark:drop-shadow-none"
        action={async (formData: FormData) => {
          const username = formData.get("username")
          await push(pathname + (username ? `?username=${username}` : ""))
        }}
      >
        <Image
          className="absolute ml-4 h-4 w-4 md:ml-8 md:h-5 md:w-5"
          src={iconSearch}
          alt={""}
        />
        <input
          type="text"
          name="username"
          placeholder={"Search GitHub username…"}
          defaultValue={initialUsername}
          className="w-full truncate bg-card py-5 pl-11 pr-[108px] text-[13px] leading-[25px] outline-none md:py-6 md:pl-20 md:text-[18px]"
        />
        <div className="absolute right-4 flex flex-row items-center gap-4">
          <button className="flex items-center justify-center rounded-[10px] bg-primary px-4 py-3 pl-4 text-sm font-bold text-white hover:bg-primary/90 md:px-6 md:text-base ">
            Search
          </button>
        </div>
      </form>
      <div className="mt-4 rounded-2xl bg-card px-6 py-8 drop-shadow-[0_16px_30px_rgba(70,96,187,0.1986)] dark:drop-shadow-none md:mt-6 md:p-10 lg:p-12">
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
    <div className="flex flex-row gap-9">
      <Image
        src={user.avatar_url}
        height={117}
        width={117}
        alt={""}
        className="hidden h-[117px] w-[117px] rounded-full lg:block"
      />
      <div className="flex w-full flex-col">
        <div className="flex flex-row gap-5">
          <Image
            src={user.avatar_url}
            height={117}
            width={117}
            alt={""}
            className="h-[70px] w-[70px] rounded-full md:h-[117px] md:w-[117px] lg:hidden"
          />
          <div className="flex w-full flex-col lg:flex-row lg:items-baseline lg:justify-between">
            <div className="flex flex-col">
              <div className="font-bold text-card-foreground md:text-[26px]">
                {user.name}
              </div>
              <div className="text-[13px] text-primary md:text-base">
                @{user.login}
              </div>
            </div>
            <div className="text-[13px] text-muted-foreground md:text-[15px]">
              Joined{" "}
              {new Date(user.created_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 text-[13px] leading-[25px] text-muted-foreground md:text-[15px]">
          {user.bio}
        </div>
        <div className="mt-6 rounded-[10px] bg-background">
          <div className="flex w-full flex-row px-4 py-5 text-center">
            <div className="flex-1">
              <div className="text-[11px] text-muted-foreground md:text-[13px]">
                Repos
              </div>
              <div className="mt-2 font-bold text-card-foreground md:text-[22px]">
                {user.public_repos}
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[11px] text-muted-foreground md:text-[13px]">
                Followers
              </div>
              <div className="mt-2 font-bold text-card-foreground md:text-[22px]">
                {user.followers}
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[11px] text-muted-foreground md:text-[13px]">
                Following
              </div>
              <div className="mt-2 font-bold text-card-foreground md:text-[22px]">
                {user.following}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4 text-[13px] text-muted-foreground md:grid md:grid-cols-2 md:text-[15px]">
          <div
            className={cn(
              "flex flex-row gap-3",
              !user.location && "opacity-50"
            )}
          >
            <Image src={iconLocation} alt={""} className="h-5 w-5 shrink-0" />
            <div>{user.location ?? "Not available"}</div>
          </div>
          <div
            className={cn("flex flex-row gap-3", !user.blog && "opacity-50")}
          >
            <Image src={iconWebsite} alt="" className="h-5 w-5" />
            {user.blog?.length !== 0 ? (
              <Link href={user.blog!!} className="hover:underline">
                {user.blog}
              </Link>
            ) : (
              <div>Not available</div>
            )}
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
      </div>
    </div>
  )
}
