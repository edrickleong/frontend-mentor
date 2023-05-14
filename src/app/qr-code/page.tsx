import { Outfit } from "next/font/google"
import { cn } from "@/app/utils"
import Image from "next/image"
import qrCode from "#/qr-code/image-qr-code.png"

const outfit = Outfit({
  subsets: ["latin"],
})

const styles = {
  "--light-gray": "hsl(212, 45%, 89%)",
  "--grayish-blue": "hsl(220, 15%, 55%)",
  "--dark-blue": "hsl(218, 44%, 22%)",
} as React.CSSProperties

export default function Page() {
  return (
    <div
      style={styles}
      className={cn(
        "flex min-h-screen items-center justify-center bg-[--light-gray]",
        outfit.className
      )}
    >
      <div className={"flex max-w-[320px] flex-col rounded-2xl bg-white p-4"}>
        <Image
          className={"h-[288px] w-[288px] rounded-lg"}
          src={qrCode}
          alt={"QR Code to open Frontend Mentor"}
        />
        <div className={"flex flex-col gap-4 p-4 pt-7"}>
          <p className={"text-center text-xl font-bold text-[--dark-blue]"}>
            Improve your front-end skills by building projects
          </p>
          <p className={"text text-center text-[--grayish-blue]"}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}
