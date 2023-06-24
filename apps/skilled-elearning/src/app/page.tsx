import { classed } from "@tw-classed/react"
import Image from "next/image"
import imageHeroMobile from "#/image-hero-mobile@2x.webp"
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
    <div>
      <header className="mt-4 flex items-center px-4">
        <div className="grow text-[28px] font-extrabold text-black">
          skilled
        </div>
        <Button1 className="grid h-12 place-items-center px-6 font-bold text-white">
          Get Started
        </Button1>
      </header>
      <main className="px-4 pb-20 pt-[38px]">
        <HeadingL className="font-extrabold text-black">
          Maximize skill, minimize budget
        </HeadingL>
        <BodyS className="mt-[26px] font-medium text-grey">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </BodyS>
        <Button2 className="mt-6 grid h-[56px] place-items-center px-9 font-bold text-white">
          Get Started
        </Button2>
        <Image className="mt-12" src={imageHeroMobile} alt=""></Image>
        <div className="mt-[66px] rounded-[10px] bg-gradient-to-b from-orange to-red px-7 pb-8 pt-6">
          <HeadingS className="font-extrabold text-white">
            Check out our most popular courses!
          </HeadingS>
        </div>
        <div className="mt-12 flex flex-col gap-10">
          {sections.map((it) => (
            <div
              key={it.title}
              className="relative rounded-[10px] bg-white px-7 pb-8 pt-14 shadow-card"
            >
              <Image
                className="absolute top-0 -translate-y-1/2"
                src={it.icon}
                alt=""
              />
              <div className="text-[20px] font-extrabold text-black">
                {it.title}
              </div>
              <div className="mt-4 font-medium text-grey">{it.description}</div>
              <BodyM className="text-roose mt-8 font-bold">Get Started</BodyM>
            </div>
          ))}
        </div>
      </main>
      <footer className="flex h-[7.5rem] items-center bg-black px-4">
        <div className="grow text-[28px] font-extrabold text-white">
          skilled
        </div>
        <Button3 className="grid h-12 place-items-center px-6 font-bold text-white">
          Get Started
        </Button3>
      </footer>
    </div>
  )
}

const HeadingXL = classed.p("text-[3.5rem]/[4.375rem]")
const HeadingL = classed.p("text-[40px]/[51px]")
const HeadingM = classed.p("text-[32px]/[40px]")
const HeadingS = classed.p("text-[24px]/[28px]")
const BodyM = classed.p("text-[18px]/[28px]")
const BodyS = classed.p("text-[16px]/[28px]")

const Button1 = classed.button("bg-black rounded-[28px] hover:bg-opacity-50")
const Button2 = classed.button(
  "bg-gradient-to-b from-orange rounded-[28px] to-red hover:from-orange/50 hover:to-red/50"
)
const Button3 = classed.button(
  "bg-gradient-to-b from-blue rounded-[28px] to-purple-pink hover:from-blue/50 hover:to-purple-pink/50"
)
