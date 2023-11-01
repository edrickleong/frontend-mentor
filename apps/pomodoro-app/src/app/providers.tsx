"use client"

import { useState } from "react"
import { Font, FontContext } from "@/app/font-context"

export function Providers({ children }: { children: React.ReactNode }) {
  const [font, setFont] = useState<Font>("kumbh-sans")

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  )
}
