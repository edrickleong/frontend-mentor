import { createContext, useContext, useState } from "react"

export type Font = "kumbh-sans" | "roboto-slab" | "space-mono"

type FontProviderProps = {
  children: React.ReactNode
  defaultFont?: Font
}

type FontProviderState = {
  font: Font
  setFont: (theme: Font) => void
}

const FontProviderContext = createContext<FontProviderState | undefined>(
  undefined,
)

export function FontProvider({
  children,
  defaultFont = "kumbh-sans",
  ...props
}: FontProviderProps) {
  const [font, setFont] = useState<Font>(defaultFont)
  const value = {
    font: font,
    setFont: (theme: Font) => {
      setFont(theme)
    },
  }

  return (
    <FontProviderContext.Provider {...props} value={value}>
      {children}
    </FontProviderContext.Provider>
  )
}

export const useFontContext = () => {
  const context = useContext(FontProviderContext)

  if (context === undefined)
    throw new Error("useFont must be used within a FontProvider")

  return context
}
