import React from "react"
import { FormData } from "@/app/formSchema"
import {
  getAddonName,
  getAddonPrice,
  getPlanName,
  getPlanPrice,
} from "@/app/plans"

export function Step4({
  data,
  onChangePlan,
  onBack,
  onSubmit,
}: {
  data: FormData
  onChangePlan: () => void
  onBack: () => void
  onSubmit: () => void
}) {
  const planId = data.step2?.plan!!
  const isYearlyBillingPeriod = data.step2?.isYearlyBillingPeriod!!
  const totalPrice =
    getPlanPrice(planId, isYearlyBillingPeriod ? "year" : "month")!! +
    (data.step3?.addons ?? []).reduce(
      (acc, addonId) =>
        acc +
        getAddonPrice(addonId, isYearlyBillingPeriod ? "year" : "month")!!,
      0
    )

  return (
    <>
      <div className="text-heading font-bold">Finishing up</div>
      <div className="mt-2 text-body-l text-grey">
        Double-check everything looks OK before confirming.
      </div>
      <div className="mt-6 flex flex-col rounded-lg bg-very-light-grey p-4">
        <div className="flex justify-between">
          <div>
            <div className="text-body-m font-medium text-denim">
              {getPlanName(planId)} (
              {isYearlyBillingPeriod ? "Yearly" : "Monthly"})
            </div>
            <button
              type="button"
              className="text-body-m text-grey underline hover:text-purple"
              onClick={onChangePlan}
            >
              Change
            </button>
          </div>
          <div className="text-body-m font-bold text-denim">
            ${getPlanPrice(planId, isYearlyBillingPeriod ? "year" : "month")}/
            {isYearlyBillingPeriod ? "yr" : "mo"}
          </div>
        </div>
        {data.step3?.addons?.length !== 0 && (
          <>
            <div className="mt-3 h-[1px] w-full bg-grey opacity-20"></div>
            <div className="mt-3 flex flex-col gap-3">
              {data.step3?.addons.map((addonId) => (
                <div key={addonId} className="flex justify-between">
                  <div className="text-body-m text-grey">
                    {getAddonName(addonId)}
                  </div>
                  <div className="text-body-m text-denim">
                    $
                    {getAddonPrice(
                      addonId,
                      isYearlyBillingPeriod ? "year" : "month"
                    )}
                    /{isYearlyBillingPeriod ? "yr" : "mo"}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="mt-6 flex justify-between px-4">
        <div className="text-body-m text-grey">Total (per month)</div>
        <div className="text-body-l font-bold text-purple">
          ${totalPrice}/{isYearlyBillingPeriod ? "yr" : "mo"}
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 flex h-[72px] justify-between bg-white px-4 py-4">
        <button
          type="button"
          className="text-body-m font-medium text-grey hover:text-denim"
          onClick={onBack}
        >
          Go Back
        </button>
        <button
          type="button"
          className="rounded bg-purple px-4 text-body-m font-medium text-white hover:bg-purple/90"
          onClick={onSubmit}
        >
          Confirm
        </button>
      </div>
    </>
  )
}
