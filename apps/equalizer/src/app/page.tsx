import { classed } from "@tw-classed/react"
import Image from "next/image"
import logo from "#/logo.svg"
import illustrationApp from "#/illustration-app.png"
import bgPattern2 from "#/bg-pattern-2.svg"
import bgMainMobile from "#/bg-main-mobile.png"
import iconFacebook from "#/icon-facebook.svg"
import iconInstagram from "#/icon-instagram.svg"
import iconTwitter from "#/icon-twitter.svg"

export default function Page() {
  return (
    <div>
      <Image
        className="absolute right-0 top-0 -translate-y-1/3 translate-x-1/3 md:hidden"
        src={bgMainMobile}
        alt=""
      />
      <header className="mt-10 px-6 md:mt-16 md:px-10">
        <Image src={logo} alt={""} />
      </header>
      <main className="mt-16 md:mt-20">
        <div className="mx-6 max-w-[520px] text-off-black md:mx-10">
          <Text size="h1">We make your music sound extraordinary.</Text>
          <Text size="body1" className="mt-5 md:mt-7">
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
            className="absolute z-10 -mt-24 max-w-[210px] md:-mt-28 md:-translate-x-32"
            priority={true}
          />
          <div className="flex w-full flex-col items-center bg-off-black px-12 md:h-[600px] md:rounded-xl">
            <Image src={bgPattern2} priority={true} alt="" />
          </div>
          <div className="relative z-20 -mt-9 translate-x-[88px] rounded-xl bg-orange px-9 py-12 text-white md:-mt-[450px] md:max-w-[400px]">
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
              <button className="flex h-[60px] flex-row items-center justify-center rounded-xl bg-off-black text-[18px] font-bold leading-[32px] text-ghost-white hover:bg-off-black/90">
                iOS Download
              </button>
              <button className="flex h-[60px] flex-row items-center justify-center rounded-xl bg-ghost-white text-[18px] font-bold leading-[32px] text-off-black hover:bg-ghost-white/90">
                Android Download
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="gap-16 px-6 pb-20 pt-[60px] md:px-10 md:pt-[82px]">
        <Image src={logo} alt={""} />
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <Text size="body2" className="mt-8 max-w-[366px]">
            All rights reserved © Equalizer 2021 Have any problems? Contact us
            via social media or email us at{" "}
            <span className="font-bold"> equalizer@example.com</span>
          </Text>
          <div className=" flex flex-row gap-5">
            <Image src={iconFacebook} alt={""} />
            <Image src={iconInstagram} alt={""} />
            <Image src={iconTwitter} alt={""} />
          </div>
        </div>
      </footer>
    </div>
  )
}

const Text = classed.p({
  variants: {
    size: {
      h1: "text-[40px] md:leading-[64px] md:text-[64px] leading-[48px] font-bold",
      h2: "text-[32px] leading-[40px] md:text-[32px] md:leading-[40px] font-bold",
      body1: "text-[16px] leading-[26px] md:text-[18px] md:leading-[28px]",
      body2: "text-[16px] leading-[26px] ",
    },
  },
})
