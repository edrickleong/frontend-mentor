import { z } from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RadioGroup } from "@/app/radio-group"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import Image from "next/image"
import { cn } from "@/lib/utils"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import React from "react"
import { plans } from "@/app/plans"

export const step2Schema = z.object({
  plan: z.union([z.literal("arcade"), z.literal("advanced"), z.literal("pro")]),
  isYearlyBillingPeriod: z.boolean(),
})

type Step2Data = z.infer<typeof step2Schema>

export function Step2({
  data,
  onBack,
  onSubmit,
}: {
  data?: Step2Data
  onBack: () => void
  onSubmit: (data: Step2Data) => void
}) {
  const { control, watch, handleSubmit, register } = useForm({
    resolver: zodResolver(step2Schema),
    values: data,
  })

  const isYearlyBillingPeriod = watch("isYearlyBillingPeriod")

  return (
    <main className="relative mx-4 -mt-[72px] rounded-[10px] bg-white px-6 py-8 shadow-[0px_25px_40px_-20px_rgba(0,0,0,0.0951141)]">
      <div className="text-heading font-bold">Select your plan</div>
      <div className="mt-2 text-body-l text-grey">
        You have the option of monthly or yearly billing.
      </div>
      <form
        className="mt-6"
        onSubmit={handleSubmit((data) => onSubmit(data as Step2Data))}
      >
        <Controller
          name={"plan"}
          control={control}
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              defaultValue={plans[0].id}
              onValueChange={field.onChange}
            >
              {plans.map((plan) => (
                <RadioGroupPrimitive.Item
                  key={plan.name}
                  className="flex flex-row items-start gap-3.5 rounded-lg border border-light-grey px-4 py-4 hover:border-purple data-[state=checked]:border-purple data-[state=checked]:bg-very-light-grey"
                  value={plan.id}
                  {...register("plan")}
                >
                  <Image src={plan.icon} alt="" />
                  <div className="text-left">
                    <div className="text-body-l font-medium text-denim">
                      {plan.name}
                    </div>
                    <div className="mt-1.5 text-body-m text-grey">
                      {isYearlyBillingPeriod
                        ? `$${plan.price.year}/yr`
                        : `$${plan.price.month}/mo`}
                    </div>
                    {isYearlyBillingPeriod && (
                      <div className="mt-1.5 text-body-s text-denim">
                        2 months free
                      </div>
                    )}
                  </div>
                </RadioGroupPrimitive.Item>
              ))}
            </RadioGroup>
          )}
        />
        <div className="mt-6 flex h-12 items-center justify-center gap-6 rounded-xl bg-very-light-grey">
          <Controller
            name="isYearlyBillingPeriod"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <>
                <div
                  className={cn(
                    "text-body-m font-medium",
                    field.value ? "text-grey" : "text-denim"
                  )}
                >
                  Monthly
                </div>
                <SwitchPrimitives.Root
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className={cn(
                    "peer inline-flex h-[20px] w-[38px] shrink-0 cursor-pointer items-center rounded-full border-4 border-transparent bg-denim focus-visible:outline-none"
                  )}
                >
                  <SwitchPrimitives.Thumb
                    className={cn(
                      "pointer-events-none block h-3 w-3 rounded-full bg-white transition-transform data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-0"
                    )}
                  />
                </SwitchPrimitives.Root>
                <div
                  className={cn(
                    "text-body-m font-medium",
                    field.value ? "text-denim" : "text-grey"
                  )}
                >
                  Yearly
                </div>
              </>
            )}
          />
        </div>
        <div className="fixed inset-x-0 bottom-0 flex h-[72px] justify-between bg-white px-4 py-4">
          <button
            type="button"
            className="text-body-m font-medium text-grey hover:text-denim"
            onClick={onBack}
          >
            Go Back
          </button>
          <button className="rounded bg-denim px-4 text-body-m font-medium text-white hover:bg-denim/90">
            Next Step
          </button>
        </div>
      </form>
    </main>
  )
}
