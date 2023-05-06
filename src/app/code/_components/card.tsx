import { outfit } from "@/app/styles/fonts"
import Image from "next/image"
import qrCode from "/public/image-qr-code.png"

export function Card() {
  return (
    <div className="flex w-full max-w-[319px] flex-col rounded-2xl bg-white p-4">
      <Image
        className="h-[288px] w-[288px] rounded-lg"
        src={qrCode}
        alt={"QR Code to open Frontend Mentor"}
      ></Image>
      <div className="flex flex-col gap-4 p-4 pt-7">
        <p
          className={`text-center text-xl font-bold text-[--dark-blue] ${outfit.className}`}
        >
          Improve your front-end skills by building projects
        </p>
        <p
          className={`text-center text-sm text-[--grayish-blue] ${outfit.className}`}
        >
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}
