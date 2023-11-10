"use client"
import iconSettings from "#/icon-settings.svg"
import Image from "next/image"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"
import { toClassName, useFontContext } from "@/app/providers/font-provider"
import { CSSProperties, useState } from "react"
import { SettingsDialog } from "@/app/components/settings-dialog"
import { toColorStyle, useColorContext } from "@/app/providers/color-provider"
import { Timer } from "@/app/components/timer"

type Tabs = "pomodoro" | "short-break" | "long-break"

export default function Home() {
  const [tab, setTab] = useState<Tabs>("pomodoro")
  const { font } = useFontContext()
  const { color } = useColorContext()

  const styles = {
    "--accent": toColorStyle(color),
  } as CSSProperties

  return (
    <body className={toClassName(font)} style={styles}>
      <div
        className={cn("flex min-h-screen flex-col items-center bg-[#1E213F]")}
      >
        <header className="mt-8 text-2xl font-bold text-[#D7E0FF]">
          pomodoro
        </header>
        <main className="z-0 mt-11 flex flex-col items-center">
          <Tabs
            className="z-10 w-full"
            value={tab}
            onValueChange={(value) => setTab(value as Tabs)}
          >
            <TabsList className="grid h-16 w-full grid-cols-3 justify-between rounded-[26px] bg-[#161932] p-2">
              <TabsTrigger
                value="pomodoro"
                className="grid place-items-center text-xs font-bold text-[#D7E0FF] text-opacity-40 hover:text-opacity-100 data-[state=active]:rounded-[26px] data-[state=active]:bg-[--accent] data-[state=active]:text-[#1E213F] data-[state=active]:text-opacity-100"
              >
                pomodoro
              </TabsTrigger>
              <TabsTrigger
                value="short-break"
                className="grid place-items-center text-xs font-bold text-[#D7E0FF] text-opacity-40 hover:text-opacity-100 data-[state=active]:rounded-[26px] data-[state=active]:bg-[--accent] data-[state=active]:text-[#1E213F] data-[state=active]:text-opacity-100"
              >
                short break
              </TabsTrigger>
              <TabsTrigger
                value="long-break"
                className="grid place-items-center text-xs font-bold text-[#D7E0FF] text-opacity-40 hover:text-opacity-100 data-[state=active]:rounded-[26px] data-[state=active]:bg-[--accent] data-[state=active]:text-[#1E213F] data-[state=active]:text-opacity-100"
              >
                long break
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Timer type={tab} />
          <Dialog>
            <DialogTrigger className="mt-20">
              <Image
                src={iconSettings}
                alt=""
                className="opacity-50 hover:opacity-100"
              />
            </DialogTrigger>
            <SettingsDialog />
          </Dialog>
        </main>
      </div>
    </body>
  )
}
