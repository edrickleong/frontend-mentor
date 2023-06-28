"use client"
import {
  Slider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@radix-ui/react-slider"
import Image from "next/image"
import iconSlider from "#/icon-slider.svg"
import iconCheck from "#/icon-check.svg"
import patternCircles from "#/pattern-circles.svg"
import { Switch, SwitchThumb } from "@radix-ui/react-switch"

export default function Home() {
  return (
    <main className="relative flex flex-col items-center px-6 pb-6 pt-20 sm:py-24">
      <div className="absolute top-0 -z-10 h-[400px] w-full rounded-bl-[200px] bg-[#F1F5FE]"></div>
      <div className="relative">
        <Image
          className="absolute inset-x-0 -z-10 mx-auto -translate-y-1/4"
          src={patternCircles}
          alt=""
        />
        <p className="text-center text-xl font-extrabold text-dark-desaturated-blue sm:text-[28px]">
          Simple, traffic-based pricing
        </p>
        <p className="mt-2 text-center text-sm font-semibold text-grayish-blue sm:mt-3 sm:text-base">
          Sign-up for our 30-day trial. <br className="sm:hidden" />
          No credit card required.
        </p>
      </div>
      <div className="mt-16 flex w-full flex-col items-center rounded-lg bg-white px-6 py-8 shadow-card sm:mt-24 sm:max-w-[540px] sm:px-11 sm:py-10">
        <div className="flex w-full items-center   justify-center sm:justify-between">
          <p className="text-xs font-extrabold uppercase tracking-[2px] text-grayish-blue sm:text-sm">
            100k Pageviews
          </p>
          <div className="hidden items-center sm:flex">
            <p className="text-3xl font-extrabold text-dark-desaturated-blue sm:text-[40px]">
              $16.00
            </p>
            <p className="ml-2.5 text-sm font-semibold text-grayish-blue sm:ml-2 sm:text-base">
              / month
            </p>
          </div>
        </div>
        <Slider
          className="relative mt-10 flex h-5 w-full touch-none select-none items-center"
          defaultValue={[1]}
          max={2}
          step={1}
        >
          <SliderTrack className="relative h-2 grow rounded-full bg-light-grayish-blue-1">
            <SliderRange className="absolute h-full rounded-full bg-soft-cyan" />
          </SliderTrack>
          <SliderThumb className="flex h-10 w-10 items-center justify-center rounded-full bg-strong-cyan drop-shadow-[0_15px_30px_hsla(174,100,50,0.6)] focus:outline-none">
            <Image src={iconSlider} alt={""} />
          </SliderThumb>
        </Slider>
        <div className="mt-10 flex items-center sm:hidden">
          <p className="text-3xl font-extrabold text-dark-desaturated-blue">
            $16.00
          </p>
          <p className="ml-2.5 text-sm font-semibold text-grayish-blue">
            / month
          </p>
        </div>
        <div className="mt-9 flex items-center gap-3 text-xs font-semibold text-grayish-blue sm:mt-14">
          <div>Monthly Billing</div>
          <Switch className="relative h-[22px] w-[42px] rounded-full bg-light-grayish-blue-2 outline-none hover:bg-soft-cyan">
            <SwitchThumb className="block h-[14px] w-[14px] translate-x-1 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[24px]" />
          </Switch>
          <div className="flex items-center">
            <div>Yearly Billing</div>
            <div className="ml-2 flex h-5 items-center justify-center rounded-full bg-light-grayish-red px-2 text-[10px] font-bold text-light-red">
              <span className="sm:hidden">-25%</span>
              <span className="hidden sm:block">25% discount</span>
            </div>
          </div>
        </div>
        <div className="mt-9 h-[1px] w-full bg-light-grayish-blue-1" />
        <div className="flex w-full flex-col items-center justify-between sm:flex-row">
          <div className="mt-6 flex flex-col gap-3 text-xs font-semibold text-grayish-blue sm:mt-8">
            <div className="flex items-center gap-4">
              <Image src={iconCheck} alt="" /> Unlimited websites
            </div>
            <div className="flex items-center gap-4">
              <Image src={iconCheck} alt="" /> 100% data ownership
            </div>
            <div className="flex items-center gap-4">
              <Image src={iconCheck} alt="" /> Email reports
            </div>
          </div>
          <button className="mt-8 flex hover:text-white h-10 items-center justify-center rounded-[20px] bg-dark-desaturated-blue px-11 text-xs  font-extrabold text-[#BECDFF]">
            Start my trial
          </button>
        </div>
      </div>
    </main>
  )
}
