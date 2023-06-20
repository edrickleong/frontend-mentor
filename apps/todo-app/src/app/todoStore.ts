import { useMemo, useSyncExternalStore } from "react"
import { z } from "zod"

function subscribe(onStoreChange: () => void) {
  const listener = (event: StorageEvent) => {
    if (event.key === "todos") {
      onStoreChange()
    }
  }
  window.addEventListener("storage", listener)
  return () => window.removeEventListener("storage", listener)
}

function getSnapshot() {
  return window.localStorage.getItem("todos")
}

function getServerSnapshot() {
  return ""
}

const todosSchema = z.array(z.string())

export function useTodos(): string[] {
  const item = useSyncExternalStore<string | null>(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )
  return useMemo(() => {
    const parsed = item ? JSON.parse(item) : []
    const result = todosSchema.safeParse(parsed)
    if (!result.success) return []
    return result.data
  }, [item])
}

export function addTodo(todo: string) {
  const item = window.localStorage.getItem("todos")
  const todos = item ? JSON.parse(item) : []
  todos.push(todo)
  window.localStorage.setItem("todos", JSON.stringify(todos))
}
