import React from "react"
import Image from "next/image"
import iconThankYou from "#/icon-thank-you.svg"

export function ThankYou() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src={iconThankYou} alt="" />
      <div className="mt-6 text-heading font-bold lg:mt-8">Thank you!</div>
      <div className="mt-2 text-center text-body-l text-grey lg:mt-3.5">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </div>
  )
}
