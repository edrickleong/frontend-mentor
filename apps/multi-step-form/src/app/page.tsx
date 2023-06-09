"use client"
import bgSidebarMobile from "#/bg-sidebar-mobile.svg"
import bgSidebarDesktop from "#/bg-sidebar-desktop.svg"
import Image from "next/image"
import React, { useState } from "react"
import { Step1 } from "@/app/step1"
import { Step2 } from "@/app/step2"
import { Step3 } from "@/app/step3"
import { Step4 } from "@/app/step4"
import { FormData } from "@/app/formSchema"
import { ThankYou } from "@/app/thank-you"
import { cn } from "@/lib/utils"

const stepTitles = [
  {
    number: 1,
    title: "Your Info",
  },
  {
    number: 2,
    title: "Select Plan",
  },
  {
    number: 3,
    title: "Add-Ons",
  },
  {
    number: 4,
    title: "Summary",
  },
]

export default function Page() {
  const [stepIndex, setStepIndex] = useState(0)
  const [formData, setFormData] = useState<FormData>({})

  const steps: Record<number, React.JSX.Element> = {
    0: (
      <Step1
        data={formData.step1}
        onSubmit={(data) => {
          setFormData({ ...formData, step1: data })
          setStepIndex(1)
        }}
      />
    ),
    1: (
      <Step2
        data={formData.step2}
        onSubmit={(data) => {
          setFormData({ ...formData, step2: data })
          setStepIndex(2)
        }}
        onBack={() => setStepIndex(0)}
      />
    ),
    2: (
      <Step3
        data={formData.step3}
        isYearlyBillingPeriod={formData.step2?.isYearlyBillingPeriod ?? false}
        onSubmit={(data) => {
          setFormData({ ...formData, step3: data })
          setStepIndex(3)
        }}
        onBack={() => setStepIndex(1)}
      />
    ),
    3: (
      <Step4
        data={formData}
        onChangePlan={() => setStepIndex(1)}
        onSubmit={() => setStepIndex(4)}
        onBack={() => setStepIndex(2)}
      />
    ),
    4: <ThankYou />,
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-4 pb-[96px] lg:justify-center">
      <Image
        src={bgSidebarMobile}
        alt=""
        className="fixed inset-x-0 top-0 w-full lg:hidden"
      />
      <div className="relative mt-8 flex flex-row gap-4 lg:hidden">
        {stepTitles.map((it) => (
          <div
            key={it.number}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-body-m font-bold",
              stepIndex === it.number - 1
                ? "bg-sky-blue text-denim"
                : "border border-white bg-transparent text-white"
            )}
          >
            {it.number}
          </div>
        ))}
      </div>
      <main className="relative mt-8 flex w-full max-w-[940px] flex-row rounded-[10px] bg-white px-6 py-8 shadow-card lg:p-4 lg:shadow-none">
        <Image src={bgSidebarDesktop} alt="" className="hidden lg:block" />
        <div className="absolute hidden flex-col gap-8 px-8 py-10 lg:flex">
          {stepTitles.map((it) => (
            <div key={it.number} className="flex flex-row items-center">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-body-m font-bold",
                  stepIndex === it.number - 1
                    ? "bg-sky-blue text-denim"
                    : "border border-white bg-transparent text-white"
                )}
              >
                {it.number}
              </div>
              <div className="ml-4">
                <div className="text-body-s uppercase text-light-blue">
                  Step {it.number}
                </div>
                <div className="mt-1 text-body-m font-bold uppercase tracking-wide text-white">
                  {it.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col lg:px-24 lg:pb-4 lg:pt-10">
          {steps[stepIndex]}
        </div>
      </main>
    </div>
  )
}
