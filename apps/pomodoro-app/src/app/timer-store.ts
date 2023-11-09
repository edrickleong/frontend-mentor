import { proxy } from "valtio"
import { z } from "zod"

const timerRunningState = z.discriminatedUnion("type", [
  z.object({ type: z.literal("idle") }),
  z.object({ type: z.literal("running"), endTime: z.date() }),
  z.object({
    type: z.literal("paused"),
    timeRemaining: z.number(),
  }),
  z.object({ type: z.literal("finished") }),
])

type TimerRunningState = z.infer<typeof timerRunningState>

type TimerState = {
  time: number
  state: TimerRunningState
}

export const pomodoroState = proxy({
  state: { type: "idle" },
  time: 25 * 60 * 1000,
} as TimerState)

export const shortBreakState = proxy({
  state: { type: "idle" },
  time: 5 * 60 * 1000,
} as TimerState)

export const longBreakState = proxy({
  state: { type: "idle" },
  time: 15 * 60 * 1000,
} as TimerState)

export const completeTimer = (timer: TimerState) => {
  timer.state = { type: "finished" }
}

export const toggle = (timer: TimerState) => {
  switch (timer.state.type) {
    case "idle":
      timer.state = {
        type: "running",
        endTime: new Date(Date.now() + timer.time),
      }
      break
    case "running":
      timer.state = {
        type: "paused",
        timeRemaining: timer.state.endTime.getTime() - Date.now(),
      }
      break
    case "paused":
      timer.state = {
        type: "running",
        endTime: new Date(Date.now() + timer.state.timeRemaining),
      }
      break
    case "finished":
      timer.state = {
        type: "running",
        endTime: new Date(Date.now() + timer.time),
      }
      break
    default:
      throw new Error("Not implemented")
  }
}
