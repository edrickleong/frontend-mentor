"use client"
import { useTheme } from "next-themes"
import { MoonIcon } from "@/components/MoonIcon"
import { SunIcon } from "@/components/SunIcon"

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      className="text-foreground flex flex-row items-center gap-4 text-[13px] font-bold uppercase hover:text-[#222731] dark:hover:text-[#90A4D4]"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark")
      }}
    >
      {theme === "light" ? (
        <>
          Dark
          <MoonIcon />
        </>
      ) : (
        <>
          Light
          <SunIcon />
        </>
      )}
    </button>
  )
}
