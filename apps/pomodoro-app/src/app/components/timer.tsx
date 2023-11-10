import { useFontContext } from "@/app/providers/font-provider"
import { useProxy } from "valtio/utils"
import {
  completeTimer,
  longBreakState,
  pomodoroState,
  shortBreakState,
  toggle,
} from "@/app/timer-store"
import useUpdate from "@/app/hooks/use-update"
import useInterval from "@/app/hooks/use-interval"
import { cn } from "@/lib/utils"

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  minute: "numeric",
  second: "numeric",
  hour12: false,
})

export function Timer({
  type,
}: {
  type: "pomodoro" | "short-break" | "long-break"
}) {
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
      className="bg-outer-ring shadow-outer-ring mt-12 flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-full"
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
