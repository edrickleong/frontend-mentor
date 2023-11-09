"use client"
import iconSettings from "#/icon-settings.svg"
import Image from "next/image"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import {
  completeTimer,
  longBreakState,
  pomodoroState,
  shortBreakState,
  toggle,
} from "@/app/timer-store"
import useInterval from "@/app/use-interval"
import useUpdate from "@/app/use-update"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"
import { Font, useFontContext } from "@/app/font-provider"
import { CSSProperties, useState } from "react"
import { SettingsDialog } from "@/app/components/settings-dialog"
import { useProxy } from "valtio/utils"
import { Color, useColorContext } from "@/app/color-provider"

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  minute: "numeric",
  second: "numeric",
  hour12: false,
})

function toClassName(font: Font) {
  switch (font) {
    case "kumbh-sans":
      return "font-kumbh-sans"
    case "roboto-slab":
      return "font-roboto-slab"
    case "space-mono":
      return "font-space-mono"
  }
}

function toColorStyle(color: Color) {
  switch (color) {
    case "light-red":
      return "#F87070"
    case "cyan":
      return "#70F3F8"
    case "purple":
      return "#D881F8"
  }
}

type Tabs = "pomodoro" | "short-break" | "long-break"

export default function Home() {
  const [tab, setTab] = useState<Tabs>("pomodoro")
  const { font } = useFontContext()
  const { color } = useColorContext()

  return (
    <body
      className={toClassName(font)}
      style={
        {
          "--accent": toColorStyle(color),
        } as CSSProperties
      }
    >
      <div
        className={cn("flex min-h-screen flex-col items-center bg-[#1E213F]")}
      >
        <header className="mt-8 text-2xl font-bold text-[#D7E0FF]">
          pomodoro
        </header>
        <main className="mt-11 flex flex-col items-center">
          <Tabs
            className="w-full"
            value={tab}
            onValueChange={(value) => setTab(value as Tabs)}
          >
            <TabsList className="grid h-16 w-full grid-cols-3 justify-between rounded-[26px] bg-[#161932] p-2">
              <TabsTrigger
                value="pomodoro"
                className="grid place-items-center text-xs font-bold text-[#D7E0FF] data-[state=active]:rounded-[26px] data-[state=active]:bg-[--accent] data-[state=active]:text-[#1E213F]"
              >
                pomodoro
              </TabsTrigger>
              <TabsTrigger
                value="short-break"
                className="grid place-items-center text-xs font-bold text-[#D7E0FF] data-[state=active]:rounded-[26px] data-[state=active]:bg-[--accent] data-[state=active]:text-[#1E213F]"
              >
                short break
              </TabsTrigger>
              <TabsTrigger
                value="long-break"
                className="grid place-items-center text-xs font-bold text-[#D7E0FF] data-[state=active]:rounded-[26px] data-[state=active]:bg-[--accent] data-[state=active]:text-[#1E213F]"
              >
                long break
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Timer type={tab} />
          <Dialog>
            <DialogTrigger>
              <Image src={iconSettings} alt="" className="mt-20" />
            </DialogTrigger>
            <SettingsDialog />
          </Dialog>
        </main>
      </div>
    </body>
  )
}

function Timer({ type }: { type: "pomodoro" | "short-break" | "long-break" }) {
  const { font } = useFontContext()
  const pomodoroStore = useProxy(pomodoroState)
  const shortBreakStore = useProxy(shortBreakState)
  const longBreakStore = useProxy(longBreakState)

  const update = useUpdate()

  function getTimerStore() {
    switch (type) {
      case "pomodoro":
        return pomodoroStore
      case "short-break":
        return shortBreakStore
      case "long-break":
        return longBreakStore
    }
  }

  const timerStore = getTimerStore()

  useInterval(() => {
    if (timerStore.state.type !== "running") return
    if (timerStore.state.endTime.getTime() < Date.now()) {
      completeTimer(timerStore)
    }

    update()
  }, 100)

  const calculateTimeRemaining = () => {
    switch (timerStore.state.type) {
      case "idle":
        return timerStore.time
      case "running":
        const remainingTime = timerStore.state.endTime.getTime() - Date.now()
        return Math.max(0, remainingTime)
      case "paused":
        return timerStore.state.timeRemaining
      case "finished":
        return 0
    }
  }

  const getButtonText = () => {
    switch (timerStore.state.type) {
      case "idle":
        return "Start"
      case "running":
        return "Pause"
      case "paused":
        return "Resume"
      case "finished":
        return "Start"
    }
  }

  return (
    <button
      className="mt-12 flex h-[300px] w-[300px] items-center justify-center rounded-full bg-[#161932]"
      onClick={() => toggle(timerStore)}
    >
      <div className="flex h-[268px] w-[268px] items-center justify-center rounded-full bg-[#161932]">
        <div className="relative grid h-[248px] w-[248px] place-items-center rounded-full border-8 border-[--accent]">
          <div
            className={cn(
              "text-[80px] text-[#D7E0FF]",
              font !== "space-mono" ? "font-bold" : "-tracking-[4px]",
            )}
          >
            {timeFormatter.format(new Date(calculateTimeRemaining()))}
          </div>
          <div className="absolute -mr-[13px] mt-32 text-sm font-bold uppercase tracking-[13px] text-[#D7E0FF]">
            {getButtonText()}
          </div>
        </div>
      </div>
    </button>
  )
}
