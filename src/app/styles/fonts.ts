import { Hanken_Grotesk, Outfit, Overpass, Poppins } from "next/font/google"

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
