import { classed } from "@tw-classed/react"

export const HeadingL = classed.div(
  "text-[32px] leading-[1.2] lg:text-[64px] lg:leading-[77px]"
)

export const HeadingM = classed.div(
  "text-[18px] leading-[24px] lg:text-[24px] lg:leading-[29px]"
)

export const HeadingS = classed.div(
  "text-[16px] lg:text-[20px] lg:leading-[24px]"
)

export const BodyM = classed.div(
  "text-[15px] leading-[24px] lg:text-[18px] lg:leading-[24px]"
)

export const BodyS = classed.div("text-[14px] leading-[17px]")

const Text = classed.p({
  variants: {
    size: {
      s: "text-[14px] leading-[17px]",
      m: "text-[15px] leading-[24px] lg:text-[18px] lg:leading-[24px]",
      l: "text-[16px] leading-[1.2] lg:text-[20px] lg:leading-[24px]",
      xl: "text-[18px] leading-[24px] lg:text-[24px] lg:leading-[29px]",
      "2xl": "text-[32px] leading-[1.2] lg:text-[64px] lg:leading-[77px]",
    },
  },
})
