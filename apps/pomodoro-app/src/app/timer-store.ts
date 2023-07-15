import { proxy, useSnapshot } from "valtio"
import { z } from "zod"

const defaultTime = 5 * 1000

const timerState = z.discriminatedUnion("type", [
  z.object({ type: z.literal("idle") }),
  z.object({ type: z.literal("running"), endTime: z.date() }),
  z.object({
    type: z.literal("paused"),
    timeRemaining: z.number(),
  }),
  z.object({ type: z.literal("finished") }),
])

type TimerState = z.infer<typeof timerState>

const store = proxy({
  state: { type: "idle" } as TimerState,
  time: defaultTime,
})

export const useTimerStore = () => useSnapshot(store)

export const completeTimer = () => {
  store.state = { type: "finished" }
}

export const toggle = () => {
  switch (store.state.type) {
    case "idle":
      store.state = {
        type: "running",
        endTime: new Date(Date.now() + store.time),
      }
      break
    case "running":
      store.state = {
        type: "paused",
        timeRemaining: store.state.endTime.getTime() - Date.now(),
      }
      break
    case "paused":
      store.state = {
        type: "running",
        endTime: new Date(Date.now() + store.state.timeRemaining),
      }
      break
    case "finished":
      store.state = {
        type: "running",
        endTime: new Date(Date.now() + defaultTime),
      }
      break
    default:
      throw new Error("Not implemented")
  }
}
