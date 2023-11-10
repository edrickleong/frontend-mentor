import { createContext, ReactNode, useContext, useState } from "react"

export type Font = "kumbh-sans" | "roboto-slab" | "space-mono"

type FontProviderProps = {
  children: ReactNode
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

export function toClassName(font: Font) {
  switch (font) {
    case "kumbh-sans":
      return "font-kumbh-sans"
    case "roboto-slab":
      return "font-roboto-slab"
    case "space-mono":
      return "font-space-mono"
  }
}
