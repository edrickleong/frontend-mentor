"use client"
import arrow from "/public/icon-arrow.svg"
import Image from "next/image"
import { FieldError, useForm } from "react-hook-form"
import { useMemo, useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

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
      .min(1, { message: "Must be a valid day" }),
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

  const today = useMemo(() => new Date(), [])

  return (
    <form
      className="w-full max-w-[840px] rounded-3xl rounded-br-[96px] bg-white px-6 pb-12 pt-[52px]"
      onSubmit={handleSubmit((it) => {
        const birthDate = new Date(it.year, it.month - 1, it.day)
        const { years, months, days } = getAge(birthDate, today)
        setAge({ years, months, days })
      })}
    >
      <div className="flex w-full flex-row gap-4">
        <div className="flex flex-col">
          <label
            htmlFor="day"
            className={`text-sm font-semibold uppercase text-[--smokey-grey] ${
              errors.day && "text-[--light-red]"
            }`}
          >
            Day
          </label>
          <input
            type="number"
            className={`mt-2 h-[54px] w-full max-w-[160px] rounded border border-[--light-grey] p-4 font-bold outline-purple ${
              errors.day && "border-[--light-red] "
            }`}
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
            className={`w-full text-sm font-semibold uppercase text-[--smokey-grey] ${
              errors.month && "text-[--light-red]"
            }`}
          >
            Month
          </label>
          <input
            className={`mt-2 h-[54px] w-full max-w-[160px] rounded border border-[--light-grey] p-4 font-bold outline-purple ${
              errors.month && "border-[--light-red] "
            }`}
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
            className={
              `w-full text-sm font-semibold uppercase text-[--smokey-grey] ${errors.year && "text-[--light-red]"}`
            }
          >
            Year
          </label>
          <input
            className={`mt-2 h-[54px] w-full max-w-[160px] rounded border border-[--light-grey] p-4 font-bold outline-purple ${
              errors.year && "border-[--light-red] "
            }`}
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
      <div className="relative mt-12 h-[1px] w-full bg-[--light-grey]">
        <button className="absolute bottom-0 right-1/2 flex h-16 w-16 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-purple outline-offset-2 outline-purple hover:bg-purple/90 sm:right-0 sm:h-24 sm:w-24 sm:translate-x-0">
          <Image
            src={arrow}
            alt=""
            height={36}
            width={36}
            className="h-6 w-6 sm:h-9 sm:w-9"
          />
        </button>
      </div>
      <div className="mt-[68px] text-5xl font-bold italic">
        <div>
          <span className="text-purple">{age?.years ?? "- -"}</span>
          <span className=""> years</span>
        </div>
        <div>
          <span className="text-purple">{age?.months ?? "- -"}</span>
          <span className=""> months</span>
        </div>
        <div>
          <span className="text-purple">{age?.days ?? "- -"}</span>
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
