import { createContext } from "react"

export type Font = "kumbh-sans" | "roboto-slab" | "space-mono"

export type UseFontProps = {
  font: Font
  setFont: React.Dispatch<React.SetStateAction<Font>>
}

export const FontContext = createContext<UseFontProps | undefined>(undefined)

export const toClassName = (font: Font) => {
  switch (font) {
    case "kumbh-sans":
      return "font-kumbh-sans"
    case "roboto-slab":
      return "font-roboto-slab"
    case "space-mono":
      return "font-space-mono"
  }
}
