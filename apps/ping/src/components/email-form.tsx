"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  email: z.string().email({
    message: "Please provide a valid email address",
  }),
})

export function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  return (
    <form
      className="mt-8 flex w-full flex-col gap-4 lg:mt-10 lg:flex-row"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="w-full">
        <input
          className={cn(
            "h-10 w-full rounded-[28px] border border-pale-blue px-8 text-xs font-light placeholder-[#B8C7ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
            errors.email && "border-light-red"
          )}
          placeholder="Your email address..."
          {...register("email")}
        />
        {errors.email && (
          <div className="mt-[2px] text-center text-[10px] text-xs leading-[20px] text-light-red lg:pl-8 lg:text-left">
            {errors.email.message as string}
          </div>
        )}
      </div>
      <button className="mt-2.5 flex h-10 w-full items-center justify-center rounded-[28px] bg-blue text-xs font-semibold text-white shadow-[0px_5px_10px_2px_rgba(76,123,243,0.230414)] hover:bg-blue/90 lg:mt-0 lg:w-auto lg:whitespace-nowrap lg:px-16">
        Notify Me
      </button>
    </form>
  )
}
