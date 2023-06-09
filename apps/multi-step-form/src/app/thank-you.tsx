import React from "react"
import Image from "next/image"
import iconThankYou from "#/icon-thank-you.svg"

export function ThankYou() {
  return (
    <>
      <Image src={iconThankYou} alt="" />
      <div className="mt-6 text-heading font-bold">Thank you!</div>
      <div className="mt-2 text-body-l text-grey">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </>
  )
}
