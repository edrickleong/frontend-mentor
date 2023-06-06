import bgSidebarMobile from "#/bg-sidebar-mobile.svg"
import Image from "next/image"
import { classed } from "@tw-classed/react"

export default function Home() {
  return (
    <div className="h-[100dvh] bg-background">
      <Image src={bgSidebarMobile} alt="" className="w-full" />
      <main className="relative mx-4 -mt-[72px] rounded-[10px] bg-white px-6 py-8 shadow-[0px_25px_40px_-20px_rgba(0,0,0,0.0951141)]">
        <div className="text-heading font-bold">Personal info</div>
        <div className="mt-2 text-body-l text-grey">
          Please provide your name, email address, and phone number.
        </div>
        <div className="mt-6">
          <div className="text-body-s">Name</div>
          <Input placeholder="e.g. Stephen King" />
        </div>
        <div className="mt-4">
          <div className="text-body-s">Email Address</div>
          <Input placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div className="mt-4">
          <div className="text-body-s">Phone Number</div>
          <Input placeholder="e.g. +1 234 567 890" />
        </div>
      </main>
      <div className="fixed bottom-0 flex h-[72px] w-full justify-end bg-white px-4 py-4">
        <button className="rounded bg-denim px-4 text-body-m font-medium text-white hover:bg-denim/90">
          Next Step
        </button>
      </div>
    </div>
  )
}

const Input = classed.input(
  "mt-0.5 border border-border-color rounded w-full focus-visible:outline-none focus-visible:border-purple text-body-l px-4 h-10"
)
