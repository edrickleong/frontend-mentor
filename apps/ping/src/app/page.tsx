import Image from "next/image"
import logo from "#/logo.svg"
import illustrationDashboard from "#/illustration-dashboard.png"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { EmailForm } from "@/components/email-form"

export default function Page() {
  return (
    <>
      <main className="mt-20 flex max-w-[640px] flex-col items-center">
        <Image src={logo} alt={""} />
        <div className="mt-8 text-[22px] leading-[32px] text-gray lg:mt-10 lg:text-[48px] lg:leading-[60px]">
          We are launching{" "}
          <span className="font-bold text-very-dark-blue">soon!</span>
        </div>
        <div className="mt-4 text-xs font-light text-very-dark-blue lg:text-xl">
          Subscribe and get notified
        </div>
        <EmailForm />
        <Image src={illustrationDashboard} className="mt-[84px]" alt={""} />
      </main>
      <footer className="mb-9 mt-auto flex flex-col items-center">
        <div className="flex flex-row gap-3">
          <Link
            href="#"
            className="group flex h-8 w-8 items-center justify-center rounded-full border border-pale-blue hover:bg-blue"
          >
            <Facebook className="h-4 w-4 text-blue group-hover:text-white" />
          </Link>
          <Link
            href="#"
            className="group flex h-8 w-8 items-center justify-center rounded-full border border-pale-blue hover:bg-blue"
          >
            <Twitter className="h-4 w-4 text-blue group-hover:text-white" />
          </Link>
          <Link
            href="#"
            className="group flex h-8 w-8 items-center justify-center rounded-full border border-pale-blue hover:bg-blue"
          >
            <Instagram className="h-4 w-4 text-blue group-hover:text-white" />
          </Link>
        </div>
        <div className="mt-7 text-[10px] font-light text-gray lg:text-[12px]">
          &copy; Copyright Ping. All rights reserved.
        </div>
      </footer>
    </>
  )
}
