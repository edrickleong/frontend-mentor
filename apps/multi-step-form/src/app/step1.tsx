import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { classed } from "@tw-classed/react"

export const step1Schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[0-9]+$/),
})

type Step1Data = z.infer<typeof step1Schema>

export function Step1({ onSubmit }: { onSubmit: (data: Step1Data) => void }) {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(step1Schema),
  })

  return (
    <main className="relative mx-4 -mt-[72px] rounded-[10px] bg-white px-6 py-8 shadow-[0px_25px_40px_-20px_rgba(0,0,0,0.0951141)]">
      <div className="text-heading font-bold">Personal info</div>
      <div className="mt-2 text-body-l text-grey">
        Please provide your name, email address, and phone number.
      </div>
      <form
        className="mt-6"
        onSubmit={handleSubmit((data) => onSubmit(data as Step1Data))}
      >
        <div>
          <div className="text-body-s">Name</div>
          <Input placeholder="e.g. Stephen King" {...register("name")} />
        </div>
        <div className="mt-4">
          <div className="text-body-s">Email Address</div>
          <Input
            placeholder="e.g. stephenking@lorem.com"
            {...register("email")}
          />
        </div>
        <div className="mt-4">
          <div className="text-body-s">Phone Number</div>
          <Input placeholder="e.g. +1 234 567 890" {...register("phone")} />
        </div>
        <div className="fixed inset-x-0 bottom-0 flex h-[72px] justify-end bg-white px-4 py-4">
          <button className="rounded bg-denim px-4 text-body-m font-medium text-white hover:bg-denim/90">
            Next Step
          </button>
        </div>
      </form>
    </main>
  )
}

const Input = classed.input(
  "mt-0.5 border border-border-color rounded w-full focus-visible:outline-none focus-visible:border-purple text-body-l px-4 h-10"
)
