import { Inter, Lexend_Deca } from "next/font/google"
import Image from "next/image"
import React from "react"
import imageHeaderMobile from "#/stats-preview/image-header-mobile.jpg"
import imageHeaderDesktop from "#/stats-preview/image-header-desktop.jpg"
import { cn } from "@/app/utils"

const inter = Inter({ subsets: ["latin"] })

const lexendDeca = Lexend_Deca({ subsets: ["latin"] })

const styles = {
  // Primary
  "--very-dark-blue": "hsl(233, 47%, 7%)",
  "--dark-desaturated-blue": "hsl(244, 38%, 16%)",
  "--soft-violet": "hsl(277, 64%, 61%)",
  // Neutral
  "--slightly-transparent-white-paragraph": "hsla(0, 0%, 100%, 0.75)",
  "--slightly-transparent-white-heading": "hsla(0, 0%, 100%, 0.6)",
} as React.CSSProperties

export default function Page() {
  return (
    <div
      style={styles}
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center bg-[--very-dark-blue] px-6 py-[88px]",
        inter.className
      )}
    >
      <div className="flex max-w-[1110px] flex-col overflow-hidden rounded-lg bg-[--dark-desaturated-blue] text-white items-stretch lg:flex-row">
        <div className="lg:hidden bg-[--soft-violet]">
          <Image src={imageHeaderMobile} alt={""} className="w-full object-cover mix-blend-multiply opacity-75" />
        </div>
        <div className="flex flex-col items-center px-7 pb-8 pt-10 text-center lg:p-[72px] lg:text-left ">
          <div
            className={
              "text-[28px] font-bold leading-8 lg:text-[36px] lg:leading-[44px]"
            }
          >
            Get <span className="text-[--soft-violet]">insights</span> that help
            your business grow.
          </div>
          <div className="mt-4 text-[15px] leading-[25px] opacity-75">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </div>
          <div className="mt-10 flex w-full flex-col gap-6 lg:mt-[62px] lg:flex-row lg:gap-8">
            <div>
              <div className="text-[1.5rem] font-bold">10k+</div>
              <div
                className={cn(
                  "mt-0.5 text-xs uppercase leading-[25px] opacity-60",
                  lexendDeca.className
                )}
              >
                companies
              </div>
            </div>
            <div>
              <div className="text-[1.5rem] font-bold">314</div>
              <div
                className={cn(
                  "mt-0.5 text-xs uppercase leading-[25px] opacity-60",
                  lexendDeca.className
                )}
              >
                templates
              </div>
            </div>
            <div>
              <div className="text-[1.5rem] font-bold">12M+</div>
              <div
                className={cn(
                  "mt-0.5 text-xs uppercase leading-[25px] opacity-60",
                  lexendDeca.className
                )}
              >
                queries
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-full lg:block bg-[--soft-violet]">
          <Image className="object-cover mix-blend-multiply opacity-75 h-full" src={imageHeaderDesktop} alt={""} />
        </div>
      </div>
    </div>
  )
}
