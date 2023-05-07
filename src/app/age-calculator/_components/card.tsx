"use client"
import arrow from "/public/icon-arrow.svg"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { useState } from "react"

type SimpleDate = {
  day: number
  month: number
  year: number
}

type Age = {
  years: number
  months: number
  days: number
}

export function Card() {
  const { register, handleSubmit } = useForm<SimpleDate>()
  const [age, setAge] = useState<Age>()

  return (
    <form
      className="max-w-[840px] w-full rounded-3xl rounded-br-[96px] bg-white px-6 pb-12 pt-[52px]"
      onSubmit={handleSubmit((it) => {
        const birthDate = new Date(it.year, it.month - 1, it.day)
        const now = new Date()
        const { years, months, days } = getAge(birthDate, now)
        setAge({ years, months, days })
      })}
    >
      <div className="flex w-full flex-row gap-4">
        <div className="flex flex-col">
          <label
            htmlFor="day"
            className="text-sm font-semibold uppercase text-[--smokey-grey]"
          >
            Day
          </label>
          <input
            className="mt-2 h-[54px] w-full max-w-[160px] rounded border border-[--light-grey] p-4 font-bold outline-purple"
            placeholder="DD"
            {...register("day", { valueAsNumber: true })}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="month"
            className="w-full text-sm font-semibold uppercase text-[--smokey-grey]"
          >
            Month
          </label>
          <input
            className="mt-2 h-[54px] w-full max-w-[160px] rounded border border-[--light-grey] p-4 font-bold outline-purple"
            placeholder="MM"
            {...register("month", { valueAsNumber: true })}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="year"
            className="w-full text-sm font-semibold uppercase text-[--smokey-grey]"
          >
            Year
          </label>
          <input
            className="mt-2 h-[54px] w-full max-w-[160px] rounded border border-[--light-grey] p-4 font-bold outline-purple"
            placeholder="YYYY"
            {...register("year", { valueAsNumber: true })}
          />
        </div>
      </div>
      <div className="relative mt-12 h-[1px] w-full bg-[--light-grey]">
        <button className="absolute bottom-0 right-1/2 flex h-16 w-16 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-purple outline-offset-2 outline-purple hover:bg-purple/90 sm:right-0 sm:h-24 sm:w-24 sm:translate-x-0">
          <Image src={arrow} alt="" height={36} width={36} className="h-6 w-6 sm:w-9 sm:h-9" />
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
