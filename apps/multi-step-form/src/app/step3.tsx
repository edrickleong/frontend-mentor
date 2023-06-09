import { z } from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import iconCheckmark from "#/icon-checkmark.svg"
import Image from "next/image"
import React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { addons } from "@/app/plans"

export const step3Schema = z.object({
  addons: z.array(
    z.union([
      z.literal("onlineService"),
      z.literal("largerStorage"),
      z.literal("customizableProfile"),
    ])
  ),
})

export type Step3Data = z.infer<typeof step3Schema>

export function Step3({
  data,
  isYearlyBillingPeriod,
  onBack,
  onSubmit,
}: {
  data?: Step3Data
  isYearlyBillingPeriod: boolean
  onBack: () => void
  onSubmit: (data: Step3Data) => void
}) {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(step3Schema),
    values: data,
  })

  return (
    <form
      className="flex h-full flex-col"
      onSubmit={handleSubmit((data) => onSubmit(data as Step3Data))}
    >
      <div className="mb-auto">
        <div className="text-heading font-bold">Pick add-ons</div>
        <div className="mt-2 text-body-l text-grey lg:mt-3">
          Add-ons help enhance your gaming experience.
        </div>
        <div className="mt-6 grid gap-4 lg:mt-9">
          <Controller
            name="addons"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <>
                {addons.map((addon) => (
                  <CheckboxPrimitive.Root
                    key={addon.name}
                    className="group flex flex-row items-center rounded-lg border border-light-grey px-4 py-4 hover:border-purple data-[state=checked]:border-purple data-[state=checked]:bg-very-light-grey"
                    checked={field.value?.includes(addon.id)}
                    onCheckedChange={(checked) => {
                      return checked
                        ? field.onChange([...field.value, addon.id])
                        : field.onChange(
                            field.value?.filter(
                              (value: string) => value !== addon.id
                            )
                          )
                    }}
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded border border-light-grey group-data-[state=checked]:bg-purple">
                      <CheckboxPrimitive.Indicator>
                        <Image src={iconCheckmark} alt="" />
                      </CheckboxPrimitive.Indicator>
                    </div>
                    <div className="ml-4 flex-1 text-left">
                      <div className="text-body-l font-medium text-denim">
                        {addon.name}
                      </div>
                      <div className="mt-1.5 text-body-m text-grey">
                        {addon.description}
                      </div>
                    </div>
                    <div className="ml-5 text-body-s text-purple">
                      {isYearlyBillingPeriod
                        ? `$${addon.price.year}/yr`
                        : `$${addon.price.month}/mo`}
                    </div>
                  </CheckboxPrimitive.Root>
                ))}
              </>
            )}
          />
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 flex h-[72px] justify-between bg-white p-4 lg:static lg:h-auto lg:p-0">
        <button
          type="button"
          className="text-body-m font-medium text-grey hover:text-denim"
          onClick={onBack}
        >
          Go Back
        </button>
        <button className="h-10 rounded-lg bg-denim px-4 text-body-m font-medium text-white hover:bg-denim/90 lg:h-12 lg:px-6">
          Next Step
        </button>
      </div>
    </form>
  )
}
