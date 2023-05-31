"use client"
import { classed } from "@tw-classed/react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import Image from "next/image"
import iconError from "#/icon-error.svg"
import { FormMessage } from "@/components/FormMessage"

const formSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters"),
})

export default function Page() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  return (
    <main className="flex w-full max-w-screen-lg flex-col items-center text-white lg:flex-row lg:gap-8">
      <div className="w-full">
        <div className="text-center text-3xl font-bold text-white lg:text-left">
          Learn to code by watching others
        </div>
        <div className="mt-4 text-center text-lg lg:text-left">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </div>
      </div>
      <div className="w-full">
        <div className="mt-8 w-full rounded-lg bg-blue px-4 py-6 text-center">
          <span className="font-bold">Try it free 7 days</span> then
          <br />
          $20/mo. thereafter
        </div>
        <FormProvider {...form}>
          <form
            className="mt-8 flex w-full flex-col gap-4 rounded-lg bg-white p-6"
            onSubmit={handleSubmit((hello) => {
              console.log(hello)
            })}
          >
            <div className="flex flex-col">
              <div className="relative">
                <Input
                  placeholder="First Name"
                  className={errors["firstName"] && "border-red"}
                  {...register("firstName")}
                />
                {errors["firstName"] && (
                  <Image
                    src={iconError}
                    alt=""
                    className="absolute inset-y-0 right-4 my-auto"
                  />
                )}
              </div>
              <FormMessage
                name={"firstName"}
                className="mt-2 w-full text-right"
              />
            </div>
            <div className="flex flex-col">
              <div className="relative">
                <Input
                  placeholder="Last Name"
                  className={errors["lastName"] && "border-red"}
                  {...register("lastName")}
                />
                {errors["lastName"] && (
                  <Image
                    src={iconError}
                    alt=""
                    className="absolute inset-y-0 right-4 my-auto"
                  />
                )}
              </div>
              <FormMessage
                name={"lastName"}
                className="mt-2 w-full text-right"
              />
            </div>
            <div className="flex flex-col">
              <div className="relative">
                <Input
                  placeholder="Email Address"
                  className={errors["email"] && "border-red"}
                  type="email"
                  {...register("email")}
                />
                {errors["email"] && (
                  <Image
                    src={iconError}
                    alt=""
                    className="absolute inset-y-0 right-4 my-auto"
                  />
                )}
              </div>
              <FormMessage name={"email"} className="mt-2 w-full text-right" />
            </div>
            <div className="flex flex-col">
              <div className="relative">
                <Input
                  placeholder="Password"
                  className={errors["password"] && "border-red"}
                  type="password"
                  {...register("password")}
                />
                {errors["password"] && (
                  <Image
                    src={iconError}
                    alt=""
                    className="absolute inset-y-0 right-4 my-auto"
                  />
                )}
              </div>
              <FormMessage
                name={"password"}
                className="mt-2 w-full text-right"
              />
            </div>
            <button className="rounded-xl bg-green px-4 py-3 text-lg uppercase hover:bg-green/90">
              Claim your free trial
            </button>

            <div className="text-sm text-grayish-blue">
              By clicking the button, you are agreeing to our{" "}
              <span className="font-bold text-red">Terms and Services</span>
            </div>
          </form>
        </FormProvider>
      </div>
    </main>
  )
}

const Input = classed.input(
  "w-full border p-4 focus:outline-none text-black focus:border-black rounded-lg"
)
