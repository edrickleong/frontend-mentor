"use client"
import Image from "next/image"
import bgMobileLight from "#/bg-mobile-light.jpg"
import iconMoon from "#/icon-moon.svg"
import iconCross from "#/icon-cross.svg"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { addTodo, useTodos } from "@/app/todoStore"

export default function Page() {
  const todos = useTodos()

  const form = useForm({
    resolver: zodResolver(
      z.object({
        todo: z.string().nonempty(),
      })
    ),
  })

  return (
    <div>
      <Image className="absolute -z-10 w-full" src={bgMobileLight} alt="" />
      <header className="flex items-baseline justify-between px-6 pt-12">
        <div className="text-[20px]/[1] font-bold tracking-widest text-white">
          TODO
        </div>
        <Image src={iconMoon} className="h-5 w-5" alt="" />
      </header>
      <main className="mt-10 px-6">
        <form
          onSubmit={form.handleSubmit((it) => {
            addTodo(it.todo)
            form.reset()
          })}
        >
          <div className="relative mt-12 rounded bg-white shadow-xl">
            <div className="absolute inset-y-0 left-5 my-auto h-5 w-5 rounded-full border border-[#E3E4F1]"></div>
            <input
              className="flex h-12 w-full items-center rounded pl-[52px] text-[12px]/none placeholder:text-[#9495A5] focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-600"
              placeholder="Create a new todo..."
              {...form.register("todo")}
            />
          </div>
        </form>
        <div className="mt-2.5 flex flex-col divide-y divide-[#E3E4F1] overflow-hidden rounded bg-white shadow-xl">
          {todos.map((todo) => (
            <div className="relative" key={todo}>
              <div className="absolute inset-y-0 left-5 my-auto h-5 w-5 rounded-full border border-[#E3E4F1]"></div>
              <div className="flex h-[52px] w-full items-center pl-[52px] pr-11 text-[12px]/none">
                {todo}
              </div>
              <Image
                src={iconCross}
                alt=""
                className="absolute inset-y-0 right-5 z-10 my-auto h-3 w-3"
              />
            </div>
          ))}
          <div className="flex items-center justify-between px-5 pb-5 pt-4">
            <div className="text-[12px]/none text-[#9495A5]">5 items left</div>
            <button className="text-[12px]/none text-[#9495A5]">
              Clear Completed
            </button>
          </div>
        </div>
        <div className="mt-4 flex h-12 items-center justify-center gap-5 rounded bg-white text-[14px]/[1] font-bold text-[#9495A5]">
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
      </main>
    </div>
  )
}
