"use client"
import Image from "next/image"
import bgMobileLight from "#/bg-mobile-light.jpg"
import bgDesktopLight from "#/bg-desktop-light.jpg"
import iconMoon from "#/icon-moon.svg"
import iconSun from "#/icon-sun.svg"
import iconCheck from "#/icon-check.svg"
import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { tasksAtom } from "@/app/tasks-store"
import { useImmerAtom } from "jotai-immer"
import { cn } from "@/lib/utils"
import { useRef, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { useTheme } from "next-themes"
import { CrossIcon } from "@/lib/icon/cross"
import { flushSync } from "react-dom"

export default function Page() {
  const [tab, setTab] = useState<string>("all")
  const [tasks, updateTasks] = useImmerAtom(tasksAtom)
  const ref = useRef<HTMLDivElement>(null)

  const form = useForm({
    resolver: zodResolver(
      z.object({
        todo: z.string().nonempty(),
      })
    ),
  })

  const tasksLeft = tasks.filter((it) => !it.completed).length

  const viewableTasks = tasks.filter((it) => {
    if (tab === "all") return true
    if (tab === "active") return !it.completed
    if (tab === "completed") return it.completed
    return true
  })

  function addTodo(data: FieldValues) {
    updateTasks((draft) => {
      draft.push({
        id: Date.now().toString(),
        text: data.todo,
        completed: false,
      })
    })
    form.reset()
  }

  return (
    <div className="flex h-[100svh] flex-col items-center px-6 pb-[4.5rem]">
      <Image
        className="absolute -z-10 w-full sm:hidden"
        src={bgMobileLight}
        alt=""
      />
      <Image
        className="absolute -z-10 hidden w-full sm:block"
        src={bgDesktopLight}
        alt=""
      />
      <Header />
      <main className="mt-10 flex h-0 w-full max-w-[540px] grow flex-col">
        <form
          className="relative z-10 rounded shadow-card"
          onSubmit={form.handleSubmit((data) => {
            flushSync(() => addTodo(data))
            ref.current?.scrollTo({
              top: ref.current?.scrollHeight,
              behavior: "smooth",
            })
          })}
        >
          <div className="absolute inset-y-0 left-4 my-auto h-5 w-5 rounded-full border border-divider sm:h-6 sm:w-6"></div>
          <input
            className="flex h-12 w-full items-center rounded bg-card pl-[48px] text-[12px]/none text-card-foreground placeholder:text-placeholder focus-visible:outline-none sm:h-16 sm:pl-[52px] sm:text-[18px]/none"
            placeholder="Create a new todo..."
            {...form.register("todo")}
          />
        </form>
        <div className="z-10 mt-4 flex h-0 grow flex-col rounded bg-card shadow-card">
          <div
            ref={ref}
            className="flex grow flex-col divide-y divide-divider overflow-y-scroll "
          >
            {viewableTasks.map((task) => (
              <div
                className="flex h-[52px] shrink-0 items-center px-4 sm:h-[64px]"
                key={task.id}
              >
                <button
                  onClick={() => {
                    updateTasks((draft) => {
                      const draftTask = draft.find((it) => it.id === task.id)
                      if (!draftTask) return
                      draftTask.completed = !draftTask.completed
                    })
                  }}
                >
                  <div
                    className={cn(
                      "grid h-5 w-5 place-items-center rounded-full border border-transparent bg-origin-border sm:h-6 sm:w-6",
                      task.completed
                        ? "bg-check hover:border-divider"
                        : "border-divider bg-check-border [background-clip:padding-box,border-box]  hover:border-transparent"
                    )}
                  >
                    {task.completed && <Image src={iconCheck} alt={""} />}
                  </div>
                </button>
                <div
                  className={cn(
                    "mx-3 flex w-full items-center text-[12px]/none text-card-foreground sm:text-[18px]/none",
                    task.completed && "text-completed line-through"
                  )}
                >
                  {task.text}
                </div>
                <button
                  className="grid h-6 w-6 place-items-center"
                  onClick={() =>
                    updateTasks((draft) => {
                      return draft.filter((it) => it.id !== task.id)
                    })
                  }
                >
                  <CrossIcon className="h-3 w-3 text-muted-foreground hover:text-card-foreground" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between whitespace-nowrap px-5 pb-5 pt-4">
            <div className="text-[12px]/none text-muted-foreground">
              {tasksLeft} items left
            </div>
            <Tabs
              value={tab}
              onValueChange={setTab}
              className="hidden w-full sm:block"
            >
              <TabsList className="flex items-center justify-center gap-5 rounded bg-card text-[14px]/[1] font-bold text-muted-foreground">
                <TabsTrigger
                  className="hover:text-card-foreground data-[state=active]:text-primary"
                  value="all"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  className="hover:text-card-foreground data-[state=active]:text-primary"
                  value="active"
                >
                  Active
                </TabsTrigger>
                <TabsTrigger
                  className="hover:text-card-foreground data-[state=active]:text-primary"
                  value="completed"
                >
                  Completed
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <button
              className="text-[12px]/none text-muted-foreground hover:text-card-foreground"
              onClick={() => {
                updateTasks((draft) => {
                  return draft.filter((it) => !it.completed)
                })
              }}
            >
              Clear Completed
            </button>
          </div>
        </div>
      </main>
      <Tabs
        value={tab}
        onValueChange={setTab}
        className="z-10 mt-4 w-full max-w-[540px] bg-card shadow-card sm:hidden"
      >
        <TabsList className="flex h-12 items-center justify-center gap-5 rounded  text-[14px]/[1] font-bold text-muted-foreground ">
          <TabsTrigger className="data-[state=active]:text-primary" value="all">
            All
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-primary"
            value="active"
          >
            Active
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-primary"
            value="completed"
          >
            Completed
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="text-[0.875rem]/1.2 mt-10 text-center text-muted-foreground sm:mt-12">
        Drag and drop to reorder list
      </div>
    </div>
  )
}

function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="mt-12 flex w-full max-w-[540px] items-baseline justify-between sm:mt-16">
      <div className="text-[20px]/[1] font-bold tracking-widest text-white sm:text-[40px]/[1]">
        TODO
      </div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "light" ? (
          <Image src={iconMoon} className="h-5 w-5" alt="" />
        ) : (
          <Image src={iconSun} className="h-5 w-5" alt="" />
        )}
      </button>
    </header>
  )
}
