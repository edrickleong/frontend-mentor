"use client"
import logo from "#/logo.svg"
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
    <body
      className={cn("select-none bg-[#1E213F]", toClassName(font))}
      style={styles}
    >
      <div
        className={cn(
          "flex min-h-[100dvh] flex-col items-center py-8 md:py-20 lg:py-12",
        )}
      >
        <header>
          <Image
            src={logo}
            alt=""
            className="pointer-events-none"
            priority={true}
          />
        </header>
        <main className="z-0 mt-11 flex flex-1 flex-col items-center">
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
          <div className="mt-12">
            <Timer type={tab} />
          </div>
          <Dialog>
            <DialogTrigger className="mt-auto opacity-50 hover:opacity-100">
              <Image
                src={iconSettings}
                alt=""
                className="pointer-events-none"
                priority={true}
              />
            </DialogTrigger>
            <SettingsDialog />
          </Dialog>
        </main>
      </div>
    </body>
  )
}
