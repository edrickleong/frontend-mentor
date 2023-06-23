"use client"
import Image from "next/image"
import bgMobileLight from "#/bg-mobile-light.jpg"
import bgDesktopLight from "#/bg-desktop-light.jpg"
import iconMoon from "#/icon-moon.svg"
import iconCross from "#/icon-cross.svg"
import iconCheck from "#/icon-check.svg"
import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { tasksAtom } from "@/app/tasks-store"
import { useImmerAtom } from "jotai-immer"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"

export default function Page() {
  const [tab, setTab] = useState<string>("all")
  const [tasks, updateTasks] = useImmerAtom(tasksAtom)

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
    <div className="flex h-screen flex-col items-center px-6 pb-[4.5rem]">
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
          className="relative rounded bg-white shadow-card"
          onSubmit={form.handleSubmit((data) => addTodo(data))}
        >
          <div className="absolute inset-y-0 left-5 my-auto h-5 w-5 rounded-full border border-[#E3E4F1]"></div>
          <input
            className="flex h-12 w-full items-center rounded pl-[52px] text-[12px]/none placeholder:text-[#9495A5] focus-visible:outline-none md:h-16 md:text-[18px]/none"
            placeholder="Create a new todo..."
            {...form.register("todo")}
          />
        </form>
        <div className="mt-4 flex h-0 grow flex-col rounded bg-white shadow-card">
          <div className="flex grow flex-col divide-y divide-[#E3E4F1] overflow-scroll ">
            {viewableTasks.map((task) => (
              <div
                className="flex h-[52px] shrink-0 items-center px-5 md:h-[64px]"
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
                      "grid h-5 w-5 place-items-center rounded-full border border-[#E3E4F1]",
                      task.completed && "bg-[#3CB3AB]"
                    )}
                  >
                    {task.completed && <Image src={iconCheck} alt={""} />}
                  </div>
                </button>
                <div
                  className={cn(
                    "mx-3 flex w-full items-center text-[12px]/none md:text-[18px]/none",
                    task.completed && "text-light-grayish-blue line-through"
                  )}
                >
                  {task.text}
                </div>
                <button
                  onClick={() =>
                    updateTasks((draft) => {
                      return draft.filter((it) => it.id !== task.id)
                    })
                  }
                >
                  <Image src={iconCross} alt="" className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between px-5 pb-5 pt-4">
            <div className="text-[12px]/none text-[#9495A5]">
              {tasksLeft} items left
            </div>
            <button
              className="text-[12px]/none text-[#9495A5]"
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
        className="mt-4 w-full sm:hidden"
      >
        <TabsList className="flex h-12 items-center justify-center gap-5 rounded bg-white text-[14px]/[1] font-bold text-[#9495A5] shadow-card">
          <TabsTrigger
            className="data-[state=active]:text-bright-blue"
            value="all"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-bright-blue"
            value="active"
          >
            Active
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-bright-blue"
            value="completed"
          >
            Completed
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="text-[0.875rem]/1.2 mt-10 text-center text-dark-grayish-blue sm:mt-12">
        Drag and drop to reorder list
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="mt-12 flex w-full max-w-[540px] items-baseline justify-between sm:mt-16">
      <div className="text-[20px]/[1] font-bold tracking-widest text-white md:text-[40px]/[1]">
        TODO
      </div>
      <Image src={iconMoon} className="h-5 w-5" alt="" />
    </header>
  )
}
