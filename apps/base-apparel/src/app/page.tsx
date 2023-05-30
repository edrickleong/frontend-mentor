import Image from "next/image"
import logo from "#/logo.svg"
import heroMobile from "#/hero-mobile.jpg"
import heroDesktop from "#/hero-desktop.jpg"
import bgPatternDesktop from "#/bg-pattern-desktop.svg"
import { EmailForm } from "@/components/email-form"

export default function Home() {
  return (
    <>
      <header className="p-8 lg:hidden">
        <Image src={logo} className="lg h-5 w-auto" alt={""} />
      </header>
      <main className="flex flex-1 flex-col items-center lg:flex-row lg:items-stretch">
        <Image
          src={bgPatternDesktop}
          className="absolute left-0 top-0 -z-10 h-full"
          alt={""}
        />
        <Image src={heroMobile} className="w-full lg:hidden" alt={""} />
        <div className="flex flex-col items-center px-8 lg:items-start lg:px-24 lg:pt-[76px]">
          <header className="hidden lg:block">
            <Image src={logo} className="lg h-8 w-auto" alt={""} />
          </header>
          <div className="mt-16 text-center text-[40px] font-light uppercase leading-[42px] tracking-[10.83px] text-desaturated-red lg:mt-[136px] lg:text-left lg:text-[64px] lg:leading-[71px] lg:tracking-[17.32px]">
            {"We're"}
            <br />
            <span className="font-semibold text-dark-grayish-red">
              coming soon
            </span>
          </div>
          <div className="mt-4 text-center text-[14px] leading-[22px] text-desaturated-red lg:mt-8 lg:text-left">
            Hello fellow shoppers! {"We're"} currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </div>
          <EmailForm />
        </div>
        <Image
          src={heroDesktop}
          className="hidden h-screen w-auto lg:block"
          alt={""}
        />
      </main>
    </>
  )
}
