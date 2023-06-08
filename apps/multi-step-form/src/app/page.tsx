"use client"
import bgSidebarMobile from "#/bg-sidebar-mobile.svg"
import Image from "next/image"
import React, { useState } from "react"
import { Step1 } from "@/app/step1"
import { Step2 } from "@/app/step2"
import { Step3 } from "@/app/step3"
import { Step4 } from "@/app/step4"
import { FormData } from "@/app/formSchema"
import { ThankYou } from "@/app/thank-you"

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
    <div className="min-h-screen bg-background pb-[96px]">
      <Image src={bgSidebarMobile} alt="" className="w-full" />
      {steps[stepIndex]}
    </div>
  )
}
