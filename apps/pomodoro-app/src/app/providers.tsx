"use client"

import { FontProvider } from "@/app/font-provider"
import { ColorProvider } from "@/app/color-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FontProvider>
      <ColorProvider>{children}</ColorProvider>
    </FontProvider>
  )
}
