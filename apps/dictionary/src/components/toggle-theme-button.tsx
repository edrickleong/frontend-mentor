"use client"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"
import { MoonIcon } from "@/components/moon-icon"

export function ToggleThemeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-row pl-4">
      <Switch
        checked={!mounted ? false : theme === "dark"}
        onCheckedChange={(checked) => {
          setTheme(checked ? "dark" : "light")
        }}
        id="toggle-theme"
      />
      <label
        htmlFor="toggle-theme"
        className="ml-3 h-5 w-5 cursor-pointer text-muted-foreground dark:text-primary"
      >
        <MoonIcon />
      </label>
    </div>
  )
}
