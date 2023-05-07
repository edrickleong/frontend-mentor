"use client"
import React, {useMemo, useState} from "react"
import dollar from "../../../../public/icon-dollar.svg"
import person from "../../../../public/icon-person.svg"
import Image from "next/image"
import * as RadioGroup from "@radix-ui/react-radio-group"

function Card() {
    const [bill, setBill] = useState<number | "">("")
    const [tip, setTip] = useState<number | "">("")
    const [customTip, setCustomTip] = useState<number | "">("")
    const [people, setPeople] = useState<number | "">("")

    const tipPerPerson = useMemo(() => {
        if (bill === "") return
        if (tip === "") return
        if (people === "") return

        const tipAmount = bill * (tip / 100)
        return tipAmount / people
    }, [bill, people, tip])

    const totalPerPerson = useMemo(() => {
        if (bill === "") return
        if (tip === "") return
        if (people === "") return

        const tipAmount = bill * (tip / 100)
        return (bill + tipAmount) / people
    }, [bill, people, tip])

    return (
        <div className="flex min-w-[375px] flex-col gap-6 rounded-t-3xl bg-white p-6 sm:rounded-3xl">
            <div>
                <div className="flex flex-col">
                    <label htmlFor="bill">Bill</label>
                    <div className="relative mt-1.5 h-[46px] w-full rounded">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Image src={dollar} alt=""/>
                        </div>
                        <input
                            className="h-full w-full appearance-none rounded bg-[#F3F8FB] pl-7 pr-1.5 text-right font-bold text-[--very-dark-cyan] outline-[--strong-cyan]"
                            type="number"
                            id="bill"
                            value={bill}
                            onChange={(e) => setBill(e.target.valueAsNumber)}
                        />
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    <label htmlFor="tip">Select Tip %</label>
                    <RadioGroup.Root
                        id="tip"
                        value={tip?.toString()}
                        onValueChange={(value) => {
                            setCustomTip("")
                            setTip(Number(value))
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
                            placeholder="CUSTOM"
                            className="w-full rounded bg-[#F3F8FB] py-3 text-center text-xl font-bold outline-[--strong-cyan]"
                            id="customTip"
                            value={customTip}
                            onChange={(e) => {
                                setTip("")
                                setCustomTip(e.target.valueAsNumber)
                            }}
                        />
                    </RadioGroup.Root>
                </div>
                <div className="mt-8 flex flex-col">
                    <label htmlFor="people">Number of People</label>
                    <div className="relative mt-1.5 h-[46px] w-full rounded">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Image src={person} alt=""/>
                        </div>
                        <input
                            type="number"
                            className="h-full w-full rounded bg-[#F3F8FB] pl-7 pr-1.5 text-right font-bold text-[--very-dark-cyan] outline-[--strong-cyan]"
                            id="people"
                            min={1}
                            value={people}
                            onChange={(e) => setPeople(e.target.valueAsNumber)}
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
                    <div className="text-2xl text-[--strong-cyan]">${(tipPerPerson ?? 0).toFixed(2)}</div>
                </div>
                <div className="mt-4 flex flex-row items-end justify-between">
                    <div>
                        <div className="text-sm text-white">Total</div>
                        <div className="text-xs text-[--light-grayish-cyan]">/ person</div>
                    </div>
                    <div className="text-2xl text-[--strong-cyan]">${(totalPerPerson ?? 0).toFixed(2)}</div>
                </div>
                <button
                    className="mt-6 w-full rounded bg-[--strong-cyan] px-3 py-1.5 text-lg font-bold uppercase text-[--very-dark-cyan]">
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Card
