"use client"
import arrow from "#/age-calculator/icon-arrow.svg"
import Image from "next/image"
import { FieldError, useForm } from "react-hook-form"
import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/app/utils"

type Age = {
  years: number
  months: number
  days: number
}

const ageSchema = z
  .object({
    day: z
      .number({
        required_error: "This field is required",
        invalid_type_error: "Must be a valid day",
      })
      .min(1, { message: "Must be a valid day" })
      .max(31, { message: "Must be a valid day" }),
    month: z
      .number({
        required_error: "This field is required",
        invalid_type_error: "Must be a valid month",
      })
      .min(1, { message: "Must be a valid month" })
      .max(12, { message: "Must be a valid month" }),
    year: z
      .number({
        required_error: "This field is required",
        invalid_type_error: "Must be a valid year",
      })
      .min(1900, { message: "Must be from 1900" })
      .max(new Date().getFullYear(), { message: "Must be in the past" }),
  })
  .refine(
    (obj) => {
      const daysInMonth = new Date(obj.year, obj.month, 0).getDate()
      return obj.day >= 1 && obj.day <= daysInMonth
    },
    {
      message: "Must be a valid date",
      path: ["day"],
    }
  )

export function Card() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ageSchema),
  })
  const [age, setAge] = useState<Age>()

  return (
    <form
      className="w-full max-w-[840px] rounded-3xl rounded-br-[96px] bg-white px-6 pb-12 pt-[52px]"
      onSubmit={handleSubmit((it) => {
        const birthDate = new Date(it.year, it.month - 1, it.day)
        const { years, months, days } = getAge(birthDate, new Date())
        setAge({ years, months, days })
      })}
    >
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <label
            htmlFor="day"
            className={cn(
              "text-sm font-semibold uppercase text-[--smokey-grey]",
              errors.day && "text-[--light-red]"
            )}
          >
            Day
          </label>
          <input
            className={cn(
              "mt-2 w-full max-w-[160px] rounded border border-[--light-grey] p-4 font-bold",
              errors.day && "ring-2 ring-[--light-red]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--purple]"
            )}
            placeholder="DD"
            {...register("day", { valueAsNumber: true })}
          />
          {errors.day && (
            <span className="mt-2 text-sm text-[--light-red]">
              {(errors.day as FieldError).message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="month"
            className={cn(
              "w-full text-sm font-semibold uppercase text-[--smokey-grey]",
              errors.month && "text-[--light-red]"
            )}
          >
            Month
          </label>
          <input
            className={cn(
              "mt-2 w-full max-w-[160px] rounded border border-[--light-grey] p-4 font-bold",
              errors.month && "ring-2 ring-[--light-red]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--purple]"
            )}
            placeholder="MM"
            {...register("month", { valueAsNumber: true })}
          />
          {errors.month && (
            <span className="mt-2 text-sm text-[--light-red]">
              {(errors.month as FieldError).message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="year"
            className={cn(
              "w-full text-sm font-semibold uppercase text-[--smokey-grey]",
              errors.year && "text-[--light-red]"
            )}
          >
            Year
          </label>
          <input
            className={cn(
              "mt-2 w-full max-w-[160px] rounded border border-[--light-grey] p-4 font-bold",
              errors.year && "ring-2 ring-[--light-red]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--purple]"
            )}
            placeholder="YYYY"
            {...register("year", { valueAsNumber: true })}
          />
          {errors.year && (
            <span className="mt-2 text-sm text-[--light-red]">
              {(errors.year as FieldError).message}
            </span>
          )}
        </div>
      </div>
      <div className="relative isolate mt-4 flex justify-center sm:justify-end">
        <div className="absolute top-1/2 -z-10 h-[1px] w-full bg-[--light-grey]"></div>
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[--purple] hover:bg-[--purple-90] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--purple] focus-visible:ring-offset-2 sm:h-24 sm:w-24">
          <Image
            src={arrow}
            alt=""
            height={36}
            width={36}
            className="h-6 w-6 sm:h-9 sm:w-9"
          />
        </button>
      </div>
      <div className="mt-9 text-5xl font-bold italic">
        <div>
          <span className="text-[--purple]">{age?.years ?? "- -"}</span>
          <span className=""> years</span>
        </div>
        <div>
          <span className="text-[--purple]">{age?.months ?? "- -"}</span>
          <span className=""> months</span>
        </div>
        <div>
          <span className="text-[--purple]">{age?.days ?? "- -"}</span>
          <span className=""> days</span>
        </div>
      </div>
    </form>
  )
}

function getAge(birthdate: Date, currentDate: Date) {
  const yearsDiff = currentDate.getFullYear() - birthdate.getFullYear()
  const monthsDiff = currentDate.getMonth() - birthdate.getMonth()
  const daysDiff = currentDate.getDate() - birthdate.getDate()

  let ageInYears = yearsDiff
  let ageInMonths = monthsDiff
  let ageInDays = daysDiff

  if (daysDiff < 0) {
    const daysInMonth = new Date(
      birthdate.getFullYear(),
      birthdate.getMonth(),
      0
    ).getDate()
    ageInDays = currentDate.getDate() - birthdate.getDate() + daysInMonth
    ageInMonths--
  }

  if (ageInMonths < 0) {
    ageInMonths = ageInMonths + 12
    ageInYears--
  }

  return {
    years: ageInYears,
    months: ageInMonths,
    days: ageInDays,
  }
}
