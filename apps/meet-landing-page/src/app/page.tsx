import Image from "next/image"
import logo from "#/logo.svg"
import imageHeroTablet from "#/tablet/image-hero.png"
import imageWomanInVideoCall from "#/desktop/image-woman-in-videocall.jpg"
import imageWomanVideoChatting from "#/desktop/image-women-videochatting.jpg"
import imageMenInMeeting from "#/desktop/image-men-in-meeting.jpg"
import imageManTexting from "#/desktop/image-man-texting.jpg"
import imageFooter from "#/mobile/image-footer.jpg"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <header className="mt-12">
        <Image src={logo} alt="" />
      </header>
      <main className="mt-12 flex flex-col items-center sm:mt-16">
        <Image src={imageHeroTablet} alt="" />
        <div className="mt-[72px]  text-center text-[40px] font-extrabold leading-[44px] sm:text-[48px] sm:leading-[1]">
          Group Chat <br /> for Everyone
        </div>
        <div className="mx-6 mt-6 text-center font-medium leading-[26px] text-[#87879D] sm:max-w-md">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-[30px] bg-teal px-10 py-4 font-extrabold text-white">
            Download <span className="text-light-blue">v1.3</span>
          </button>
          <button className="rounded-[30px] bg-purple px-10 py-4 font-extrabold text-white">
            What is it?
          </button>
        </div>

        <div className="mt-16 h-[84px] w-[1px] bg-light-grey/25 sm:mt-20" />
        <div className="grid h-14 w-14 place-items-center rounded-full border border-light-grey/25 font-extrabold text-light-grey">
          01
        </div>
        <div className="mx-6 mt-16 grid grid-cols-2 gap-6 sm:gap-3 sm:grid-cols-4">
          <Image className="rounded-lg" src={imageWomanInVideoCall} alt="" />
          <Image className="rounded-lg" src={imageWomanVideoChatting} alt="" />
          <Image className="rounded-lg" src={imageMenInMeeting} alt="" />
          <Image className="rounded-lg" src={imageManTexting} alt="" />
        </div>
        <div className="mt-16 font-extrabold uppercase tracking-[4px] text-teal sm:mt-12">
          Built for modern use
        </div>

        <div className="mt-6 text-center text-[32px] font-extrabold leading-[36px] text-dark-grey sm:text-[40px] sm:leading-[44px]">
          Smarter meetings, <br />
          all in one place
        </div>

        <div className="mx-6 mt-8 text-center font-medium leading-[26px] text-light-grey sm:max-w-xl">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </div>

        <div className="mt-16 h-[84px] w-[1px] bg-light-grey/25 sm:mt-20" />
        <div className="z-10 -mb-8 grid h-14 w-14 place-items-center rounded-full border border-light-grey/25 bg-white font-extrabold text-light-grey">
          02
        </div>
        <div className="relative z-0 flex w-full flex-col items-center bg-teal pb-[72px] pt-16 sm:pt-[92px]">
          <Image
            src={imageFooter}
            objectFit={"cover"}
            alt=""
            className="-z-10 opacity-10"
            fill={true}
          />
          <div className="text-center text-[32px] font-extrabold leading-[36px] text-white sm:text-[40px] sm:leading-[44px]">
            Experience more together
          </div>

          <div className="mx-6 mt-6 text-center text-[18px] font-medium leading-[26px] text-white sm:mt-8 sm:max-w-xl">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </div>

          <button className="mt-8 rounded-[30px] bg-purple px-10 py-4 font-extrabold text-white sm:mt-10">
            Download <span className="text-light-purple">v1.3</span>
          </button>
        </div>
      </main>
    </div>
  )
}
