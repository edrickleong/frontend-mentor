import { classed } from "@tw-classed/react"
import Image from "next/image"
import imageHeroMobile from "#/image-hero-mobile.webp"
import imageHeroTablet from "#/image-hero-tablet@2x.webp"
import imageHeroDesktop from "#/image-hero-desktop.webp"
import iconAnimation from "#/icon-animation.svg"
import iconDesign from "#/icon-design.svg"
import iconPhotography from "#/icon-photography.svg"
import iconCrypto from "#/icon-crypto.svg"
import iconBusiness from "#/icon-business.svg"

const sections = [
  {
    icon: iconAnimation,
    title: "Animation",
    description:
      "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
  },
  {
    icon: iconDesign,
    title: "Design",
    description:
      "Create beautiful, usable interfaces to help shape the future of how the web looks.",
  },
  {
    icon: iconPhotography,
    title: "Photography",
    description:
      "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
  },
  {
    icon: iconCrypto,
    title: "Crypto",
    description:
      "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
  },
  {
    icon: iconBusiness,
    title: "Business",
    description:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <header className="mt-4 flex w-full items-center mx-4 md:mt-6 md:mx-10 lg:max-w-screen-lg">
        <div className="grow text-[28px] font-extrabold text-black">
          skilled
        </div>
        <Button1 className="grid h-12 place-items-center px-6 font-bold text-white">
          Get Started
        </Button1>
      </header>
      <main className="mx-4 pb-20 pt-[2.375rem] md:mx-10 lg:max-w-screen-lg lg:pt-[11.12rem]">
        <div className="md:mr-80 lg:mr-[40rem]">
          <p className="text-[2.5rem]/[3.25rem] font-extrabold text-black lg:text-[3.5rem]/[4.375rem]">
            Maximize skill, minimize budget
          </p>
          <Body className="mt-6 text-[1rem]/[1.75rem] font-medium text-grey lg:text-[1.125rem]/[1.75rem]">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </Body>
          <Button2 className="lg:[3.9375rem] mt-6 grid h-[3.5rem] place-items-center px-9 font-bold text-white lg:text-[1.125rem]/[1.75rem]">
            Get Started
          </Button2>
        </div>
        <Image className="mt-12 md:hidden" src={imageHeroMobile} alt=""></Image>
        <Image
    className="absolute lg:hidden -right-[17rem] -top-[5rem] -z-10 hidden w-[40rem] object-cover md:block"
    src={imageHeroTablet}
    alt=""
    /> <Image
    className="absolute -right-[21rem] -top-[9rem] -z-10 hidden lg:block"
    src={imageHeroDesktop}
    alt=""
    />
        <div className="mt-16 grid gap-10 md:mt-52 md:grid-cols-2 md:gap-x-2.5 md:gap-y-14 lg:mt-[15.625rem] lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
          <div className="rounded-[10px] bg-gradient-to-b from-orange to-red px-7 pb-8 pt-6 md:pt-14">
            <HeadingS className="font-extrabold text-white">
              Check out our most popular courses!
            </HeadingS>
          </div>
          {sections.map((it) => (
            <div
              key={it.title}
              className="relative flex flex-col items-start rounded-[10px] bg-white px-7 pb-8 pt-14 shadow-card"
            >
              <Image
                className="absolute top-0 -translate-y-1/2"
                src={it.icon}
                alt=""
              />
              <div className="text-[20px] font-extrabold text-black">
                {it.title}
              </div>
              <div className="mt-4 grow font-medium text-grey">
                {it.description}
              </div>
              <button>
                <Body className="mt-8 font-bold text-rose hover:opacity-50">Get Started</Body>
              </button>
            </div>
          ))}
        </div>
      </main>
      <footer className="h-[7.5rem] flex items-center flex-col w-full bg-black px-4 md:px-10">
        <div className="lg:max-w-screen-lg h-full w-full flex items-center">
          <div className="grow text-[28px] font-extrabold text-white">
            skilled
          </div>
          <Button3 className="grid h-12 place-items-center px-6 font-bold text-white">
            Get Started
          </Button3></div>
      </footer>
    </div>
  )
}

const HeadingXL = classed.p("text-[3.5rem]/[4.375rem]")
const HeadingL = classed.p("text-[2.5rem]/[3.25rem]")
const HeadingM = classed.p("text-[2rem]/[2.5rem]")
const HeadingS = classed.p("text-[1.5rem]/[1.75rem]")
const Body = classed.p("text-[1rem]/[1.75rem] lg:text-[1.125rem]/[1.75rem]")

const Button1 = classed.button("bg-black rounded-[28px] hover:bg-opacity-50")
const Button2 = classed.button(
  "bg-gradient-to-b from-orange rounded-[28px] to-red hover:from-orange/50 hover:to-red/50"
)
const Button3 = classed.button(
  "bg-gradient-to-b from-blue rounded-[28px] to-purple-pink hover:from-blue/50 hover:to-purple-pink/50"
)
