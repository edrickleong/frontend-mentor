import { Open_Sans, Poppins } from "next/font/google"
import Image from "next/image"
import bgMobile from "#/huddle-landing-page/bg-mobile.svg"
import logo from "#/huddle-landing-page/logo.svg"
import illustrations from "#/huddle-landing-page/illustration-mockups.svg"

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin-ext"],
})

export default function Page() {
  return (
    <div
      className={`flex min-h-screen w-full flex-col p-9 ${openSans.className}`}
      style={
        {
          "--violet": "hsl(257, 40%, 49%)",
          "--soft-magenta": "hsl(300, 69%, 71%)",
        } as React.CSSProperties
      }
    >
      <Image
        className="-z-10 bg-[--violet]"
        src={bgMobile}
        fill={true}
        alt={""}
      />
      <Image src={logo} alt={""} />
      <Image src={illustrations} alt={""} />

      <div
        className={
          "mt-6 flex flex-col items-center gap-4 text-center text-white"
        }
      >
        <div className={`text-2xl font-bold ${poppins.className}`}>
          Build The Community Your Fans Will Love
        </div>
        <div className={`font-light`}>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </div>

        <button className={"w-44 rounded-3xl bg-white py-2 text-[--violet]"}>
          Register
        </button>
      </div>
    </div>
  )
}
