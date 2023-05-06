"use client"
import star from "/public/icon-star.svg"
import thankYou from "/public/illustration-thank-you.svg"
import Image from "next/image"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { useState } from "react"

export function Card() {
  const [value, setValue] = useState<string>()

  if (!value) return <Form onSubmit={setValue} />

  return <Completed value={value} />
}

type FormProps = {
  onSubmit: (value: string) => void
}

function Form({ onSubmit }: FormProps) {
  return (
    <form
      className="h-[360px] w-[327px] rounded-xl bg-[#1f2630] p-6"
      onSubmit={(e) => {
        e.preventDefault()
        // @ts-ignore
        const rating = e.target.rating.value as string
        onSubmit(rating)
      }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#273039]">
        <Image src={star} alt={"Star"} />
      </div>
      <p className="mt-5 text-xl text-white">How did we do?</p>
      <p className="mt-4 text-sm text-[--light-grey]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RadioGroup.Root
        name="rating"
        className="mt-6 flex flex-row gap-4 text-sm text-[--light-grey]"
      >
        {Array.from({ length: 5 }, (_, i) => i + 1).map((it) => (
          <RadioGroup.Item
            key={it}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#273039] hover:bg-[--light-grey] hover:text-white data-[state=checked]:bg-[--orange] data-[state=checked]:text-white"
            value={it.toString()}
          >
            {it}
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
      <button className="mt-5 w-full rounded-xl bg-[--orange] px-3 py-2 text-sm font-medium uppercase tracking-widest text-white hover:bg-white hover:text-[--orange]">
        Submit
      </button>
    </form>
  )
}

function Completed({ value }: { value: string }) {
  return (
    <div className="flex h-[360px] w-[327px] flex-col items-center rounded-xl bg-[#1f2630] p-6">
      <div className="pt-2">
        <Image src={thankYou} height={98} alt="Thank you" />
        <div className="mt-6 rounded-full bg-[#273039] px-2 py-1 text-sm text-[--orange]">
          You selected {value} out of 5
        </div>
      </div>
      <div className="mb-4 mt-7 flex flex-col items-center">
        <p className="text-xl text-white">Thank you!</p>
        <p className="mt-4 text-center text-sm text-[--light-grey]">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}
