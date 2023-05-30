"use client"
import Image from "next/image"
import iconArrow from "#/icon-arrow.svg"
import iconError from "#/icon-error.svg"
import { z } from "zod"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormMessage } from "@/components/ui/form"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  email: z.string().email({
    message: "Please provide a valid email",
  }),
})

export function EmailForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  })
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form

  return (
    <FormProvider {...form}>
      <form
        className="mt-8 w-full lg:mt-10"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className="relative w-full">
          <input
            className={cn(
              "flex h-12 w-full flex-row items-center rounded-[28px] border border-desaturated-red bg-transparent px-6 text-[14px] leading-[28px] text-dark-grayish-red placeholder-desaturated-red ring-inset ring-desaturated-red focus-visible:outline-none focus-visible:ring-2",
              errors.email && "ring-2 ring-inset ring-soft-red"
            )}
            placeholder="Email Address"
            {...register("email")}
          />
          <div className="absolute inset-y-0 right-0 flex flex-row items-center gap-2">
            {errors.email && (
              <Image src={iconError} className="h-6 w-6" alt={""} />
            )}
            <button className="flex h-full w-16 flex-row items-center justify-center rounded-[28px] bg-gradient-two">
              <Image src={iconArrow} alt={""} />
            </button>
          </div>
        </div>
        <FormMessage name={"email"} className="mt-2 px-6" />
      </form>
    </FormProvider>
  )
}
