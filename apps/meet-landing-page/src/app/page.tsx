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
                <Image src={logo} alt=""/>
            </header>
            <main className="mt-12 flex flex-col items-center">
                <Image src={imageHeroTablet} alt=""/>
                <div className="mt-[72px]  text-center text-[40px] font-extrabold leading-[44px]">
                    Group Chat <br/> for Everyone
                </div>
                <div className="mx-6 mt-6 text-center font-medium leading-[26px] text-[#87879D]">
                    Meet makes it easy to connect with others face-to-face virtually and
                    collaborate across any device.
                </div>

                <button className="mt-8 rounded-[30px] bg-teal px-10 py-4 font-extrabold text-white">
                    Download <span className="text-light-blue">v1.3</span>
                </button>
                <button className="mt-4 rounded-[30px] bg-purple px-10 py-4 font-extrabold text-white">
                    What is it?
                </button>

                <div className="mt-16 w-[1px] h-[84px] bg-light-grey/25"/>
                <div
                    className="w-14 h-14 grid place-items-center rounded-full border border-light-grey/25 text-light-grey font-extrabold">
                    01
                </div>
                <div className="mt-16 grid grid-cols-2 gap-6 mx-6">
                    <Image className="rounded-lg" src={imageWomanInVideoCall} alt=""/>
                    <Image className="rounded-lg" src={imageWomanVideoChatting} alt=""/>
                    <Image className="rounded-lg" src={imageMenInMeeting} alt=""/>
                    <Image className="rounded-lg" src={imageManTexting} alt=""/>

                </div>
                <div className="mt-16 uppercase text-teal tracking-[4px] font-extrabold">Built for modern use</div>

                <div className="mt-6 text-dark-grey font-extrabold text-[32px] leading-[36px] text-center">
                    Smarter meetings, <br/>all in one place
                </div>

                <div className="mt-8 text-light-grey text-center font-medium leading-[26px] mx-6">
                    Send messages, share files, show your screen, and record your meetings
                    — all in one workspace. Control who can join with invite-only team
                    access, data encryption, and data export.
                </div>

                <div className="mt-16 w-[1px] h-[84px] bg-light-grey/25"/>
                <div
                    className="w-14 -mb-8 z-10 bg-white h-14 grid place-items-center rounded-full border border-light-grey/25 text-light-grey font-extrabold">
                    02
                </div>
                <div className="relative pt-16 pb-[72px] bg-teal flex items-center flex-col z-0">
                    <Image src={imageFooter} alt="" objectFit="cover" className="opacity-10 -z-10" fill={true}/>
                    <div className="font-extrabold text-white text-[32px] leading-[36px] text-center">Experience more
                        together
                    </div>

                    <div className="font-medium leading-[26px] text-[18px] text-center mx-6 text-white mt-6">
                        Stay connected with reliable HD meetings and unlimited one-on-one and
                        group video sessions.
                    </div>

                    <button className="mt-8 rounded-[30px] bg-purple px-10 py-4 font-extrabold text-white">
                        Download <span className="text-light-purple">v1.3</span>
                    </button>
                </div>
            </main>
        </div>
    )
}
