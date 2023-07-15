"use client"
import iconSettings from "#/icon-settings.svg"
import Image from "next/image"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog"
import { completeTimer, toggle, useTimerStore } from "@/app/timer-store"
import useInterval from "@/app/use-interval"
import useUpdate from "@/app/use-update"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  minute: "numeric",
  second: "numeric",
  hour12: false,
})

export default function Home() {
  const store = useTimerStore()
  const update = useUpdate()

  useInterval(() => {
    if (store.state.type !== "running") return
    if (store.state.endTime.getTime() < Date.now()) {
      completeTimer()
    }

    update()
  }, 100)

  const getLiveTimeRemaining = () => {
    switch (store.state.type) {
      case "idle":
        return store.time
      case "running":
        return Math.max(0, store.state.endTime.getTime() - Date.now())
      case "paused":
        return store.state.timeRemaining
      case "finished":
        return 0
    }
  }

  const toggleActionText = () => {
    switch (store.state.type) {
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
    <div className="flex min-h-screen flex-col items-center bg-[#1E213F]">
      <header className="mt-8 text-2xl font-bold text-[#D7E0FF]">
        pomodoro
      </header>
      <main className="mt-11 flex flex-col items-center">
        <Tabs className="w-full" defaultValue="pomodoro">
          <TabsList className="grid h-16 w-full grid-cols-3 justify-between rounded-[26px] bg-[#161932] p-2">
            <TabsTrigger
              value="pomodoro"
              className="grid place-items-center text-xs font-bold text-[#D7E0FF] data-[state=active]:rounded-[26px] data-[state=active]:bg-[#F87070] data-[state=active]:text-[#1E213F]"
            >
              pomodoro
            </TabsTrigger>
            <TabsTrigger
              value="short-break"
              className="grid place-items-center text-xs font-bold text-[#D7E0FF] data-[state=active]:rounded-[26px] data-[state=active]:bg-[#F87070] data-[state=active]:text-[#1E213F]"
            >
              short break
            </TabsTrigger>
            <TabsTrigger
              value="long-break"
              className="grid place-items-center text-xs font-bold text-[#D7E0FF] data-[state=active]:rounded-[26px] data-[state=active]:bg-[#F87070] data-[state=active]:text-[#1E213F]"
            >
              long break
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <button
          className="mt-12 flex h-[300px] w-[300px] items-center justify-center rounded-full bg-[#161932]"
          onClick={() => toggle()}
        >
          <div className="flex h-[268px] w-[268px] items-center justify-center rounded-full bg-[#161932]">
            <div className="relative grid h-[248px] w-[248px] place-items-center rounded-full border-8 border-[#F87070]">
              <div className="text-[80px] font-bold text-[#D7E0FF]">
                {timeFormatter.format(new Date(getLiveTimeRemaining()))}
              </div>
              <div className="absolute -mr-[13px] mt-32 text-sm font-bold uppercase tracking-[13px] text-[#D7E0FF]">
                {toggleActionText()}
              </div>
            </div>
          </div>
        </button>
        <Dialog>
          <DialogTrigger>
            <Image src={iconSettings} alt="" className="mt-20" />
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay className="fixed inset-0 bg-black/50" />
            <DialogContent className="fixed inset-0 mx-6 my-12 flex flex-col rounded-2xl bg-white p-6 lg:px-10 lg:py-8">
              <DialogTitle className="text-xl font-bold text-[#161932] lg:text-[28px]">
                Settings
              </DialogTitle>
              <div className="mt-8 h-[1px] w-full bg-[#E3E1E1] lg:mt-7" />
              <div className="mt-6 self-center text-[11px] font-bold uppercase tracking-[4.2px] text-[#161932] lg:mt-7">
                Time (Minutes)
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-[#1E213F]/40">
                    pomodoro
                  </div>
                  <input
                    className="h-10 w-[140px] rounded-[10px] bg-[#EFF1FA] pl-4 text-sm font-bold text-[#1E213F]"
                    defaultValue="25"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-[#1E213F]/40">
                    short break
                  </div>
                  <input
                    className="h-10 w-[140px] rounded-[10px] bg-[#EFF1FA] pl-4 text-sm font-bold text-[#1E213F]"
                    defaultValue="5"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-[#1E213F]/40">
                    long break
                  </div>
                  <input
                    className="h-10 w-[140px] rounded-[10px] bg-[#EFF1FA] pl-4 text-sm font-bold text-[#1E213F]"
                    defaultValue="15"
                  />
                </div>
              </div>
              <div className="mt-6 h-[1px] w-full bg-[#E3E1E1]" />
              <div className="mt-6 self-center text-[11px] font-bold uppercase uppercase tracking-[4.2px] text-[#161932]">
                Font
              </div>
              <DialogClose />
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </main>
    </div>
  )
}
