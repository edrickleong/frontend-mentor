import { Open_Sans, Poppins } from "next/font/google"
import Image from "next/image"
import bgMobile from "#/huddle-landing-page/bg-mobile.svg"
import logo from "#/huddle-landing-page/logo.svg"
import illustrationMockups from "#/huddle-landing-page/illustration-mockups.svg"
import { cn } from "@/app/utils"
import { Facebook, Instagram, Twitter } from "lucide-react"
import React from "react"
import Link from "next/link"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
})

const styles = {
  "--violet": "hsl(257, 40%, 49%)",
  "--soft-magenta": "hsl(300, 69%, 71%)",
} as React.CSSProperties

export default function Page() {
  return (
    <div
      style={styles}
      className={cn(
        "relative flex min-h-screen w-full flex-col p-10 md:py-20",
        openSans.className
      )}
    >
      <Image
        className="-z-10 bg-[--violet]"
        src={bgMobile}
        fill={true}
        alt={""}
      />
      <header>
        <Image src={logo} className="w-[120px] md:w-[200px]" alt={""} />
      </header>
      <main className="mt-16 flex flex-col items-center text-white md:flex-row">
        <div className={"flex-1"}>
          <Image src={illustrationMockups} alt={""} />
        </div>
        <div className="mt-16 flex-1 text-center md:ml-14 md:mt-0 md:text-left">
          <div
            className={cn("text-2xl font-bold md:text-5xl", poppins.className)}
          >
            Build The Community Your Fans Will Love
          </div>
          <div className={"mt-6 md:text-lg"}>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </div>
          <button
            className={
              "mt-6 w-52 rounded-3xl bg-white px-3 py-2 text-[--violet] shadow-lg hover:bg-[--soft-magenta] hover:text-white"
            }
          >
            Register
          </button>
        </div>
      </main>
      <footer className="mt-6 flex flex-row items-center justify-center gap-2 text-white md:justify-end">
        <Link
          href={"#"}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white"
        >
          <Facebook size={16} />
        </Link>
        <Link
          href={"#"}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white"
        >
          <Twitter size={16} />
        </Link>
        <Link
          href={"#"}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white"
        >
          <Instagram size={16} />
        </Link>
      </footer>
    </div>
  )
}
