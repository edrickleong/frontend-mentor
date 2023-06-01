import { classed } from "@tw-classed/react"
import Image from "next/image"
import logo from "#/logo.svg"
import illustrationApp from "#/illustration-app.png"
import bgPattern1 from "#/bg-pattern-1.svg"
import bgPattern2 from "#/bg-pattern-2.svg"
import bgMainMobile from "#/bg-main-mobile.png"
import bgMainTablet from "#/bg-main-tablet.png"
import bgMainDesktop from "#/bg-main-desktop.png"
import iconFacebook from "#/icon-facebook.svg"
import iconInstagram from "#/icon-instagram.svg"
import iconTwitter from "#/icon-twitter.svg"
import iconApple from "#/icon-apple.svg"
import iconAndroid from "#/icon-android.svg"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center">
      <Image
        className="absolute right-0 top-0 -z-20 -translate-y-1/3 translate-x-1/3 md:hidden"
        src={bgMainMobile}
        alt=""
      />
      <Image
        className="absolute -z-20 hidden md:block lg:hidden"
        src={bgMainTablet}
        alt=""
      />
      <Image
        className="absolute -z-20 hidden lg:block"
        src={bgMainDesktop}
        alt=""
      />
      <Image
        className="absolute -right-0 top-0 -z-10 hidden h-[400px] w-auto -translate-y-8 md:block"
        src={bgPattern1}
        alt=""
      />
      <header className="mt-10 w-full max-w-[1100px] px-6 md:mt-16 md:px-10">
        <Image src={logo} alt={""} />
      </header>
      <main className="lg:mt-30 mt-16 w-full max-w-[1100px] md:mt-20">
        <div className="mx-6 max-w-[520px] text-off-black md:mx-10 lg:max-w-[900px]">
          <Text size="h1">We make your music sound extraordinary.</Text>
          <Text size="body1" className="mt-5 md:mt-7 lg:mt-10">
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </Text>
        </div>
        <div className="relative mt-[68px] flex w-full flex-col items-center pt-24 md:mt-[110px] md:px-10">
          <Image
            src={illustrationApp}
            alt=""
            className="absolute z-10 -mt-24 max-w-[210px] md:-mt-28 md:-translate-x-32 lg:max-w-[312px] lg:-translate-x-52"
            priority={true}
          />
          <div className="flex w-full flex-col items-center bg-off-black px-12 md:h-[600px] md:rounded-xl">
            <Image src={bgPattern2} priority={true} alt="" />
          </div>
          <div className="relative z-20 -mt-9 rounded-xl bg-orange px-9 py-12 text-white md:-mt-[450px] md:max-w-[400px] md:translate-x-24 lg:translate-x-52">
            <Text size="h2" className="text-white">
              Premium EQ
            </Text>
            <Text size="body1" className="mt-3">
              Get expert-level control with a robust equalizer, volume mixer,
              and spatial audio. Take your listening experience to a whole new
              level and access all our incredible features!
            </Text>
            <div className="mt-9 flex flex-row items-center gap-4">
              <p className="text-[65px] leading-[52px]">$4</p>
              <p className="text-[20px] leading-[32px]">/ month</p>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <button className="flex h-[60px] flex-row items-center justify-center gap-2 rounded-xl bg-off-black text-[18px] font-bold leading-[32px] text-ghost-white hover:bg-cyan">
                <Image src={iconApple} priority={true} alt="" />
                iOS Download
              </button>
              <button className="flex h-[60px] flex-row items-center justify-center gap-2 rounded-xl bg-ghost-white text-[18px] font-bold leading-[32px] text-off-black hover:bg-light-orange">
                <Image src={iconAndroid} priority={true} alt="" />
                Android Download
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex w-full max-w-[1100px] flex-col px-6 pb-20 pt-[60px] md:px-10 md:pt-[82px] lg:flex-row lg:items-center lg:gap-32">
        <Image src={logo} alt={""} />
        <div className="flex w-full flex-col items-center md:flex-row md:justify-between">
          <Text size="body2" className="mt-8 max-w-[366px]">
            All rights reserved © Equalizer 2021 Have any problems? Contact us
            via social media or email us at{" "}
            <span className="font-bold"> equalizer@example.com</span>
          </Text>
          <div className=" flex flex-row gap-5">
            <Link href="#">
              <Image src={iconFacebook} alt={""} />
            </Link>
            <Link href="#">
              <Image src={iconInstagram} alt={""} />
            </Link>
            <Link href="#">
              <Image src={iconTwitter} alt={""} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const Text = classed.p({
  variants: {
    size: {
      h1: "text-[40px] md:leading-[64px] md:text-[64px] lg:leading-[88px] lg:text-[88px] leading-[48px] font-bold",
      h2: "text-[32px] leading-[40px] md:text-[32px] md:leading-[40px] font-bold lg:text-[40px] lg:leading-[52px]",
      body1:
        "text-[16px] leading-[26px] md:text-[18px] lg:text-[20px] lg:leading-[34px] md:leading-[28px]",
      body2: "text-[16px] leading-[26px] ",
    },
  },
})
