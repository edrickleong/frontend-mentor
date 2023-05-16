"use client"
import iconStar from "#/interactive-rating/icon-star.svg"
import Image from "next/image"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { addItem } from "@/app/interactive-rating/_actions"

export default function Page() {
  return (
    <form
      className="max-w-[327px] rounded-xl bg-[#1f2630] p-6"
      action={addItem}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[--dark-blue]">
        <Image src={iconStar} alt={""} />
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
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[--dark-blue] hover:bg-[--light-grey] hover:text-white data-[state=checked]:bg-[--orange] data-[state=checked]:text-white"
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
