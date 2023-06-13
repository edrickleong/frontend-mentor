import Image from "next/image"
import logo from "#/logo.svg"
import spotify from "#/spotify.svg"
import applePodcast from "#/apple-podcast.svg"
import googlePodcast from "#/google-podcasts.svg"
import pocketCasts from "#/pocket-casts.svg"
import { classed } from "@tw-classed/react"
import bgMobile from "#/image-host-mobile.jpg"
import bgTablet from "#/image-host-tablet.jpg"
import bgDesktop from "#/image-host-desktop.jpg"
import bgPatternDots from "#/bg-pattern-dots.svg"

export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center bg-dark-blue px-6 md:items-start md:pl-10 xl:pl-40">
      <Image
        src={bgMobile}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10 mix-blend-screen md:hidden"
      />
      <Image
        src={bgTablet}
        alt=""
        className="absolute right-0 top-0 -z-10 hidden md:block xl:hidden"
      />
      <Image
        src={bgDesktop}
        alt=""
        className="absolute right-0 top-0 -z-10 mt-32 hidden xl:block"
      />
      <Image
        src={bgPatternDots}
        alt=""
        className="absolute bottom-0 left-0 -z-10 ml-10 hidden md:block xl:bottom-20 xl:left-auto xl:right-0"
      />
      <Image className="mt-16 xl:mt-24" src={logo} alt="" />
      <div className="mt-14 flex flex-col items-center md:mt-36 md:max-w-[570px] md:bg-dark-blue md:py-20 md:pr-14 md:text-left xl:mt-24 xl:max-w-[723px]">
        <Title className="text-center font-thin uppercase text-white md:text-left">
          <span className="text-neon">Publish your podcasts</span> everywhere.
        </Title>
        <Body className="mt-4 text-center font-light text-very-light-grey md:text-left">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </Body>
        <div className="mt-8 grid grid-cols-4 items-center gap-6">
          <Image src={spotify} alt="" />
          <Image src={applePodcast} alt="" />
          <Image src={googlePodcast} alt="" />
          <Image src={pocketCasts} alt="" />
        </div>
        <input
          className="mt-12 h-12 w-full rounded-[28px] bg-grey px-8 text-[14px]/[28px] text-white placeholder:text-opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon"
          placeholder="Email address"
        />
        <button className="mt-4 flex w-full items-center justify-center rounded-[28px] bg-neon py-2 text-[14px]/[28px] text-dark-blue hover:bg-neon/90">
          Request Access
        </button>
      </div>
    </main>
  )
}

const Title = classed.p(
  "text-[1.625rem]/[2.375rem] md:text-[3.25rem]/[3.875rem]"
)

const Body = classed.p(
  "text-[0.9375rem]/[1.5625rem] md:text-[1.125rem]/[1.75rem]"
)
