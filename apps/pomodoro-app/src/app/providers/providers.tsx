"use client"

import { FontProvider } from "@/app/providers/font-provider"
import { ColorProvider } from "@/app/providers/color-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FontProvider>
      <ColorProvider>{children}</ColorProvider>
    </FontProvider>
  )
}
