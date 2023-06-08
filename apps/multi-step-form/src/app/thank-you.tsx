import React from "react"
import Image from "next/image"
import iconThankYou from "#/icon-thank-you.svg"

export function ThankYou() {
  return (
    <main className="relative mx-4 -mt-[72px] flex flex-col items-center rounded-[10px] bg-white px-6 py-20 text-center shadow-[0px_25px_40px_-20px_rgba(0,0,0,0.0951141)]">
      <Image src={iconThankYou} alt="" />
      <div className="mt-6 text-heading font-bold">Thank you!</div>
      <div className="mt-2 text-body-l text-grey">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </main>
  )
}
