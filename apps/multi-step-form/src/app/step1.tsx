import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { classed } from "@/lib/classed"

export const step1Schema = z.object({
  name: z.string().min(1, { message: "This field is required" }),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[0-9]+$/),
})

type Step1Data = z.infer<typeof step1Schema>

export function Step1({
  data,
  onSubmit,
}: {
  data?: Step1Data
  onSubmit: (data: Step1Data) => void
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(step1Schema),
    values: data,
  })

  return (
    <form className="flex h-full flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-auto">
        <div className="text-heading font-bold">Personal info</div>
        <div className="mt-2 text-body-l text-grey lg:mt-3">
          Please provide your name, email address, and phone number.
        </div>
        <div
          className="mt-6 lg:mt-9"
          onSubmit={handleSubmit((data) => onSubmit(data as Step1Data))}
        >
          <div>
            <div className="flex flex-row justify-between">
              <label htmlFor="name" className="text-body-s">
                Name
              </label>
              {errors.name && (
                <div className="text-body-s font-bold text-red-errors">
                  {errors.name?.message as string}
                </div>
              )}
            </div>
            <Input
              placeholder="e.g. Stephen King"
              {...register("name")}
              className={errors.name && "border-red-errors"}
            />
          </div>
          <div className="mt-4 lg:mt-6">
            <div className="flex flex-row justify-between">
              <label htmlFor="email" className="text-body-s">
                Email Address
              </label>
              {errors.email && (
                <div className="text-body-s font-bold text-red-errors">
                  {errors.email?.message as string}
                </div>
              )}
            </div>
            <Input
              placeholder="e.g. stephenking@lorem.com"
              {...register("email")}
              className={errors.email && "border-red-errors"}
            />
          </div>
          <div className="mt-4 lg:mt-6">
            <div className="flex flex-row justify-between">
              <label htmlFor="phone" className="text-body-s">
                Phone Number
              </label>
              {errors.phone && (
                <div className="text-body-s font-bold text-red-errors">
                  {errors.phone?.message as string}
                </div>
              )}
            </div>
            <Input
              placeholder="e.g. +1 234 567 890"
              {...register("phone")}
              className={errors.phone && "border-red-errors"}
            />
          </div>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 flex h-[72px] justify-end bg-white p-4 lg:static lg:h-auto lg:p-0">
        <button className="h-10 rounded-lg bg-denim px-4 text-body-m font-medium text-white hover:bg-denim/90 lg:h-12 lg:px-6">
          Next Step
        </button>
      </div>
    </form>
  )
}

const Input = classed.input(
  "mt-0.5 lg:mt-2 border border-border-color rounded w-full focus-visible:outline-none focus-visible:border-purple text-body-l px-4 h-10 lg:h-12"
)
