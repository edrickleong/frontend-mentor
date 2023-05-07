import {
  Hanken_Grotesk,
  Outfit,
  Overpass,
  Poppins,
  Space_Mono,
} from "next/font/google"

export const outfit = Outfit({
  subsets: ["latin-ext"],
})

export const overpass = Overpass({
  subsets: ["latin-ext"],
})

export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin-ext"],
})

export const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const spaceMono = Space_Mono({
  subsets: ["latin-ext"],
  weight: ["400", "700"]
})
