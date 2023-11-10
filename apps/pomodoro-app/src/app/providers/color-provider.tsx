import { createContext, ReactNode, useContext, useState } from "react"

export type Color = "light-red" | "cyan" | "purple"

type FontProviderProps = {
  children: ReactNode
  defaultColor?: Color
}

type ColorProviderState = {
  color: Color
  setColor: (theme: Color) => void
}

const ColorProviderContext = createContext<ColorProviderState | undefined>(
  undefined,
)

export function ColorProvider({
  children,
  defaultColor = "light-red",
  ...props
}: FontProviderProps) {
  const [color, setColor] = useState<Color>(defaultColor)
  const value = {
    color: color,
    setColor: (theme: Color) => {
      setColor(theme)
    },
  } satisfies ColorProviderState

  return (
    <ColorProviderContext.Provider {...props} value={value}>
      {children}
    </ColorProviderContext.Provider>
  )
}

export const useColorContext = () => {
  const context = useContext(ColorProviderContext)

  if (context === undefined)
    throw new Error("useFont must be used within a FontProvider")

  return context
}

export function toColorStyle(color: Color) {
  switch (color) {
    case "light-red":
      return "#F87070"
    case "cyan":
      return "#70F3F8"
    case "purple":
      return "#D881F8"
  }
}
