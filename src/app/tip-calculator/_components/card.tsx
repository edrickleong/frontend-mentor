"use client"
import React, { useMemo, useState } from "react"
import dollarIcon from "#/icon-dollar.svg"
import personIcon from "#/icon-person.svg"
import Image from "next/image"
import * as RadioGroup from "@radix-ui/react-radio-group"

function Card() {
  const [bill, setBill] = useState<number | "">("")
  const [tip, setTip] = useState<number | "">("")
  const [customTip, setCustomTip] = useState<number | "">("")
  const [people, setPeople] = useState<number | "">("")

  const billIsZeroOrNegative = bill !== "" && bill <= 0
  const tipIsNegative = customTip !== "" && customTip < 0
  const peopleIsZeroOrNegative = people !== "" && people <= 0

  const tipPerPerson = useMemo(() => {
    if (bill === "") return
    if (tip === "" && customTip === "") return
    if (people === "") return
    const finalTip = tip !== "" ? tip : customTip !== "" ? customTip : 0
    if (people <= 0) return

    const tipAmount = bill * (finalTip / 100)
    return tipAmount / people
  }, [bill, customTip, people, tip])

  const totalPerPerson = useMemo(() => {
    if (bill === "") return
    if (tip === "" && customTip === "") return
    if (people === "") return
    const finalTip = tip !== "" ? tip : customTip !== "" ? customTip : 0
    if (people <= 0) return

    const tipAmount = bill * (finalTip / 100)
    return (bill + tipAmount) / people
  }, [bill, customTip, people, tip])

  return (
    <div className="flex min-w-[375px] flex-col gap-6 rounded-t-3xl bg-white p-6 sm:rounded-3xl">
      <div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <label htmlFor="bill">Bill</label>
            {billIsZeroOrNegative && (
              <div className="text-red-500">{"Can't be zero"}</div>
            )}
          </div>
          <div className="relative mt-1.5 h-[46px] w-full rounded">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Image src={dollarIcon} alt="" />
            </div>
            <input
              className={`h-full w-full appearance-none rounded bg-[#F3F8FB] pl-7 pr-3 text-right font-bold text-[--very-dark-cyan] outline-none focus:ring-2 ${
                billIsZeroOrNegative
                  ? "ring-2 ring-red-500"
                  : "ring-[--strong-cyan]"
              }`}
              type="number"
              id="bill"
              min={1}
              value={bill}
              onChange={(e) => {
                const value = Number(e.target.value)
                setBill(isNaN(value) ? "" : value)
              }}
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="flex flex-row justify-between">
            <label htmlFor="customTip">Select Tip %</label>
            {tipIsNegative && (
              <div className="text-red-500">{"Can't be negative"}</div>
            )}
          </div>
          <RadioGroup.Root
            id="tip"
            value={tip?.toString()}
            onValueChange={(value) => {
              setCustomTip("")
              const number = Number(value)
              setTip(isNaN(number) ? "" : number)
            }}
            className="mt-1.5 grid grid-cols-2 gap-4"
          >
            {[5, 10, 15, 25, 50].map((it) => (
              <RadioGroup.Item
                key={it}
                className="flex w-full items-center justify-center rounded bg-[--very-dark-cyan] py-3 text-xl font-bold text-white hover:bg-[--strong-cyan] hover:text-[--very-dark-cyan] data-[state=checked]:bg-[--strong-cyan] data-[state=checked]:text-[--very-dark-cyan]"
                value={it.toString()}
              >
                {`${it}%`}
              </RadioGroup.Item>
            ))}
            <input
              type="number"
              min="0"
              placeholder="CUSTOM"
              className={`w-full rounded bg-[#F3F8FB] py-3 text-center text-xl font-bold outline-none focus:ring-2 ${
                tipIsNegative ? "ring-2 ring-red-500" : "ring-[--strong-cyan]"
              }`}
              id="customTip"
              value={customTip}
              onChange={(e) => {
                setTip("")
                setCustomTip(
                  isNaN(e.target.valueAsNumber) ? "" : e.target.valueAsNumber
                )
              }}
            />
          </RadioGroup.Root>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="flex flex-row justify-between">
            <label htmlFor="people">Number of People</label>
            {peopleIsZeroOrNegative && (
              <div className="text-red-500">{"Can't be zero"}</div>
            )}
          </div>
          <div className="relative mt-1.5 h-[46px] w-full rounded">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Image src={personIcon} alt="" />
            </div>
            <input
              type="number"
              className={`h-full w-full rounded bg-[#F3F8FB] pl-7 pr-3 text-right font-bold text-[--very-dark-cyan] outline-none focus:ring-2  ${
                peopleIsZeroOrNegative
                  ? "ring-2 ring-red-500"
                  : "ring-[--strong-cyan]"
              }`}
              id="people"
              min={1}
              value={people}
              onChange={(e) =>
                setPeople(
                  isNaN(e.target.valueAsNumber) ? "" : e.target.valueAsNumber
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-[--very-dark-cyan] px-4 py-6">
        <div className="flex flex-row items-end justify-between">
          <div>
            <div className="text-sm text-white">Tip Amount</div>
            <div className="text-xs text-[--light-grayish-cyan]">/ person</div>
          </div>
          <div className="text-2xl text-[--strong-cyan]">
            ${(tipPerPerson ?? 0).toFixed(2)}
          </div>
        </div>
        <div className="mt-4 flex flex-row items-end justify-between">
          <div>
            <div className="text-sm text-white">Total</div>
            <div className="text-xs text-[--light-grayish-cyan]">/ person</div>
          </div>
          <div className="text-2xl text-[--strong-cyan]">
            ${(totalPerPerson ?? 0).toFixed(2)}
          </div>
        </div>
        <button
          className="mt-6 w-full rounded bg-[--strong-cyan] px-3 py-1.5 text-lg font-bold uppercase text-[--very-dark-cyan]"
          onClick={() => {
            setBill("")
            setTip("")
            setCustomTip("")
            setPeople("")
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Card
