"use client"

import { FontProvider } from "@/app/providers/font-provider"
import { ColorProvider } from "@/app/providers/color-provider"
import { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <FontProvider>
      <ColorProvider>{children}</ColorProvider>
    </FontProvider>
  )
}
