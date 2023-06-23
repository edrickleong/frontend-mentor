import { atomWithStorage } from "jotai/utils"
import { z } from "zod"

const taskSchema = z.object({
  id: z.string(),
  text: z.string(),
  completed: z.boolean(),
})

export type Task = z.infer<typeof taskSchema>

const tasksSchema = z.array(taskSchema)

export type Tasks = z.infer<typeof tasksSchema>

export const tasksAtom = atomWithStorage<Tasks>("tasks", [], {
  getItem: (key, initialValue) => {
    const storedValue = localStorage.getItem(key)
    try {
      return tasksSchema.parse(JSON.parse(storedValue ?? ""))
    } catch {
      return initialValue
    }
  },
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  removeItem: (key) => {
    localStorage.removeItem(key)
  },
  subscribe: (key, callback, initialValue) => {
    if (
      typeof window === "undefined" ||
      typeof window.addEventListener === "undefined" ||
      typeof window.removeEventListener === "undefined"
    ) {
      return () => {}
    }
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        let newValue
        try {
          newValue = tasksSchema.parse(JSON.parse(e.newValue ?? ""))
        } catch {
          newValue = initialValue
        }
        callback(newValue)
      }
    }
    window.addEventListener("storage", listener)
    return () => window.removeEventListener("storage", listener)
  },
})
