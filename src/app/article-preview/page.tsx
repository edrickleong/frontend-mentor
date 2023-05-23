"use client"
import Image from "next/image"
import drawers from "#/article-preview/drawers.jpg"
import { Manrope } from "next/font/google"
import { cn } from "@/app/utils"
import avatarMichelle from "#/article-preview/avatar-michelle.jpg"
import iconFacebook from "#/article-preview/icon-facebook.svg"
import iconTwitter from "#/article-preview/icon-twitter.svg"
import iconPinterest from "#/article-preview/icon-pinterest.svg"
import React from "react"
import * as Tooltip from "@radix-ui/react-tooltip"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700"],
})

const styles = {
  "--very-dark-grayish-blue": "hsl(217, 19%, 35%)",
  "--desaturated-dark-blue": "hsl(214, 17%, 51%)",
  "--grayish-blue": "hsl(212, 23%, 69%)",
  "--light-grayish-blue": "hsl(210, 46%, 95%)",
} as React.CSSProperties

export default function Page() {
  return (
    <div
      style={styles}
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center bg-[--light-grayish-blue] p-6",
        manrope.className
      )}
    >
      <div className="flex max-w-[325px] flex-col overflow-hidden rounded-[10px] bg-white md:max-w-[730px] md:flex-row">
        <Image
          src={drawers}
          className="h-[200px] md:h-auto md:w-[285px]"
          alt={""}
        />
        <div className="px-8 pb-5 pt-9 md:px-10 md:py-8">
          <div className="font-bold leading-6 text-[--very-dark-grayish-blue]">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </div>
          <div className="mt-3 text-[13px] font-medium leading-[20px] text-[--desaturated-dark-blue]">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </div>
          <div className="relative mt-8 flex flex-row items-center">
            <Image
              className="h-10 w-10 rounded-full"
              src={avatarMichelle}
              alt={""}
            />
            <div className="ml-4">
              <div className="text-[13px] font-bold leading-[20px] text-[--very-dark-grayish-blue]">
                Michelle Appleton
              </div>
              <div className="text-[13px] font-medium leading-[20px] text-[--grayish-blue]">
                28 Jun 2020
              </div>
            </div>

            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className="group ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-[--light-grayish-blue] text-[--desaturated-dark-blue] hover:bg-[--very-dark-grayish-blue] hover:text-white data-[state=delayed-open]:bg-[--very-dark-grayish-blue] data-[state=delayed-open]:text-white">
                    <ShareIcon />
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Content
                  sideOffset={16}
                  className="animate-in fade-in-50 z-50 flex flex-row overflow-hidden rounded-[10px] bg-[--very-dark-grayish-blue] px-[36px] py-[18px] shadow-md"
                >
                  <div className="text-[13px] font-bold uppercase leading-5 tracking-[5px] text-[--grayish-blue]">Share</div>
                  <div className="ml-5 flex flex-row gap-4">
                    <button>
                      <Image src={iconFacebook} alt={""} />
                    </button>
                    <button>
                      <Image src={iconTwitter} alt={""} />
                    </button>
                    <button>
                      <Image src={iconPinterest} alt={""} />
                    </button>
                  </div>
                  <Tooltip.Arrow className="fill-[--very-dark-grayish-blue]" />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}

function ShareIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
      <path
        fill="currentColor"
        d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
      />
    </svg>
  )
}
