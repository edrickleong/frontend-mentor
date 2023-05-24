import { Fraunces, Manrope } from "next/font/google"
import { cn } from "@/app/utils"
import Image from "next/image"
import illustrationHero from "#/workit/illustration-hero.png"
import imageLouis from "#/workit/image-louis.png"
import { classed } from "@tw-classed/react"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"
import { Logo } from "@/app/workit/Logo"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const styles = {
  "--dark-purple": "#24053E",
  "--eucalyptus": "#44FFA1",
  "--davys-grey": "#584D62",
  "--ghost-white": "#FCF8FF",
} as React.CSSProperties

const features = [
  {
    index: 1,
    title: "Actionable insights",
    description:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
  },
  {
    index: 2,
    title: "Data-driven decisions",
    description:
      "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
  },
  {
    index: 3,
    title: "Always affordable",
    description:
      "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
  },
]

export default function Page() {
  return (
    <div
      style={styles}
      className={cn(
        manrope.variable,
        fraunces.variable,
        "flex min-h-screen w-full flex-col items-center bg-white [font-family:var(--font-manrope)]"
      )}
    >
      <header className="flex w-full flex-row justify-between bg-[--dark-purple] px-4 py-8">
        <div className="text-white">
          <Logo />
        </div>
        <SecondaryButton className="font-bold leading-[32px] text-white underline decoration-[--eucalyptus] decoration-[3px] underline-offset-8">
          Apply for access
        </SecondaryButton>
      </header>
      <div className="flex w-full flex-col items-center bg-[--dark-purple] px-4 pb-[156px] pt-16 md:px-24">
        <HeadingL className="text-center text-white">
          Data{" "}
          <span className="underline decoration-[--eucalyptus] decoration-[3px]">
            tailored
          </span>{" "}
          to your needs.
        </HeadingL>
        <PrimaryButton className="mt-10">Learn more</PrimaryButton>
      </div>
      <div className="flex w-full flex-col items-center bg-[--ghost-white] px-4 pb-[72px] md:px-24">
        <Image
          src={illustrationHero}
          className="w-full max-w-[514px] -translate-y-[92px]"
          alt={""}
        />
        <div className="flex flex-col gap-10">
          {features.map((it) => (
            <div
              key={it.index}
              className="flex flex-col items-center gap-y-4 md:flex-row md:items-start md:gap-x-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[--davys-grey] text-xl font-semibold leading-[36px] text-[--dark-purple] [font-family:var(--font-fraunces)] md:mt-[44px]">
                {it.index}
              </div>
              <div className="flex flex-col items-center md:items-start">
                <HeadingS>{it.title}</HeadingS>
                <div className="mt-4 leading-[28px]">{it.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="isolate mt-[100px] flex w-full flex-col px-4 md:px-10 md:max-w-screen-md items-center">
        <Image
          className="-z-10 h-[281px] w-[281px] translate-y-[54px] md:translate-y-1/2 md:self-start"
          src={imageLouis}
          alt={""}
        />
        <div className="flex flex-col items-center bg-[--dark-purple] px-8 py-8 text-center text-white md:max-w-[514px] md:self-end md:px-12 md:pb-14 md:pt-12 md:text-left">
          <HeadingM>Be the first to test</HeadingM>
          <Body className="mt-4 md:mt-6">
            Hi, I&apos;m Louis Graham, the founder of the company. Book a demo
            call with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </Body>
          <PrimaryButton className="mt-6">Apply for access</PrimaryButton>
        </div>
      </div>
      <footer className="flex flex-col items-center pb-16 pt-[74px]">
        <div className="text-[--dark-purple]">
          <Logo />
        </div>
        <div className="mt-14 flex flex-row gap-7">
          <FacebookIcon className="h-5 w-5 text-[--davys-grey]" />
          <TwitterIcon className="h-5 w-5 text-[--davys-grey]" />
          <InstagramIcon className="h-5 w-5 text-[--davys-grey]" />
        </div>
      </footer>
    </div>
  )
}

const PrimaryButton = classed.button(
  "flex items-center justify-center bg-[--eucalyptus] px-6 py-3 font-bold leading-[32px] text-[--dark-purple] hover:text-[--eucalyptus] hover:bg-[--dark-purple] border border-[--eucalyptus] transition-colors"
)

const SecondaryButton = classed.button(
  "font-bold leading-[32px] text-white underline decoration-[--eucalyptus] decoration-[3px] underline-offset-8 hover:text-[--eucalyptus]"
)

const HeadingL = classed.div(
  "font-semibold [font-family:var(--font-fraunces)] text-[50px] md:text-[60px] md:leading-[60px] leading-[50px] lg:text-[80px] lg:leading-[80px]"
)

const HeadingM = classed.div(
  "font-semibold [font-family:var(--font-fraunces)] text-[32px] leading-[48px] text-[48px] leading-[56px] lg:text-[56px] lg:leading-[64px]"
)

const HeadingS = classed.div(
  "text-[28px] font-semibold leading-[36px] [font-family:var(--font-fraunces)]"
)

const Body = classed.div(
  "lg:font-[18px] leading-[28px] lg:leading-[32px] [font-family:var(--font-manrope)]"
)
