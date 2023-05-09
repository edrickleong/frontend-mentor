"use client"
import { rubik } from "@/app/styles/fonts"
import jeremy from "#/time-tracking-dashboard/image-jeremy.png"
import Image from "next/image"
import data from "./data.json"
import React from "react"
import * as Tabs from "@radix-ui/react-tabs"

export default function Page() {
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center bg-[--very-dark-blue] px-6 py-20 ${rubik.className}`}
      style={
        {
          "--blue": "hsl(246, 80%, 60%)",
          "--light-orange": "hsl(15, 100%, 70%)",
          "--soft-blue": "hsl(195, 74%, 62%)",
          "--light-red": "hsl(348, 100%, 68%)",
          "--lime-green": "hsl(145, 58%, 55%)",
          "--violet": "hsl(264, 64%, 52%)",
          "--soft-orange": "hsl(43, 84%, 65%)",
          "--very-dark-blue": "hsl(226, 43%, 10%)",
          "--dark-blue": "hsl(235, 46%, 20%)",
          "--desaturated-blue": "hsl(235, 45%, 61%)",
          "--pale-blue": "hsl(236, 100%, 87%)",
        } as React.CSSProperties
      }
    >
      <Tabs.Root
        className="flex w-full max-w-[375px] flex-col gap-6"
        defaultValue="weekly"
      >
        <div className="w-full rounded-xl bg-[--dark-blue] text-white">
          <div className="flex flex-row items-center gap-4 rounded-xl bg-[--blue] p-8">
            <div className="h-16 w-16 rounded-full border-4 border-white">
              <Image src={jeremy} alt={"Profile picture"} />
            </div>
            <div>
              <div className="text-sm text-[--pale-blue]">Report for</div>
              <div className="text-2xl">Jeremy Robson</div>
            </div>
          </div>
          <Tabs.List className="flex flex-row justify-between text-xl p-8">
            <Tabs.Trigger
              value="daily"
              className="data-[state=active]:text-white text-[--desaturated-blue]"
            >
              Daily
            </Tabs.Trigger>
            <Tabs.Trigger
              value="weekly"
              className="data-[state=active]:text-white text-[--desaturated-blue]"
            >
              Weekly
            </Tabs.Trigger>
            <Tabs.Trigger
              value="monthly"
              className="data-[state=active]:text-white text-[--desaturated-blue]"
            >
              Monthly
            </Tabs.Trigger>
          </Tabs.List>
        </div>
        <div>
          {["daily", "weekly", "monthly"].map((timeframe) => (
            <Tabs.Content
              value={timeframe}
              key={timeframe}
              className="flex flex-col gap-6"
            >
              {data.map((it) => (
                <div
                  key={it.title}
                  className={`w-full rounded-xl ${background(it.title)} pt-8 overflow`}
                >
                  <div className="flex flex-row justify-between rounded-xl bg-[--dark-blue] p-8 text-white">
                    <div>
                      <div className="text-lg font-medium">{it.title}</div>
                      <div className="text-3xl font-light">
                        {timeframe === "daily"
                          ? it.timeframes.daily.current
                          : timeframe === "weekly"
                          ? it.timeframes.weekly.current
                          : it.timeframes.monthly.current}
                        hrs
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-end gap-2">
                      <div className="text-sm text-[--pale-blue]">
                        {`${
                          timeframe === "daily"
                            ? `Last Week - ${it.timeframes.weekly.previous} hours`
                            : timeframe === "weekly"
                            ? `Yesterday - ${it.timeframes.daily.previous} hours`
                            : `Last Month - ${it.timeframes.monthly.previous} hours`
                        }`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  )
}

function background(it: string) {
  switch (it) {
    case "Work":
      return "bg-[--light-red]"
    case "Play":
      return "bg-[--soft-blue]"
    case "Study":
      return "bg-[--light-red]"
    case "Exercise":
      return "bg-[--lime-green]"
    case "Social":
      return "bg-[--violet]"
    case "Self Care":
      return "bg-[--soft-orange]"
  }
}
