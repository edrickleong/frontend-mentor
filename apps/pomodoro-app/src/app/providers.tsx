"use client"

import { FontProvider } from "@/app/font-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return <FontProvider>{children}</FontProvider>
}
