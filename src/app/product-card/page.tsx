import React from "react"
import { Fraunces, Montserrat } from "next/font/google"
import Image from "next/image"
import productImage from "#/product-card/image-product-mobile.jpg"
import productImageDesktop from "#/product-card/image-product-desktop.jpg"
import iconCart from "#/product-card/icon-cart.svg"

const montserrat = Montserrat({
  subsets: ["latin-ext"],
})

const fraunces = Fraunces({
  subsets: ["latin-ext"],
})

export default function Page() {
  return (
    <div
      className={`flex min-h-screen w-full items-center justify-center bg-[--cream] px-5 ${montserrat.className}`}
      style={
        {
          // Primary
          "--dark-cyan": "hsl(158, 36%, 37%)",
          "--dark-cyan-90": "hsla(158, 36%, 37%, 90%)",
          "--cream": "hsl(30, 38%, 92%)",
          // Neutral
          "--very-dark-blue": "hsl(212, 21%, 14%)",
          "--dark-grayish-blue": "hsl(228, 12%, 48%)",
        } as React.CSSProperties
      }
    >
      <div className="flex max-w-[600px] flex-col rounded-md bg-white sm:flex-row">
        {/*https://github.com/vercel/next.js/discussions/21379*/}
        <Image className="sm:hidden" src={productImage} alt={""} />
        <Image className="hidden sm:block" src={productImageDesktop} alt={""} />
        <div className="sm:h p-6">
          <div className="uppercase">Perfume</div>
          <div className={`${fraunces.className} text-4xl font-bold`}>
            Gabrielle Essence Eau De Parfum
          </div>
          <div className="mt-4">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>

          <div className="mt-6 flex flex-row items-center gap-2">
            <div
              className={`text-4xl font-bold text-[--dark-cyan] ${fraunces.className}`}
            >
              $149.99
            </div>
            <div className="text-[--dark-grayish-blue] line-through">
              $169.99
            </div>
          </div>

          <button className="mt-4 flex w-full flex-row items-center justify-center gap-2 rounded bg-[--dark-cyan] px-3 py-3 text-white hover:bg-[--dark-cyan-90]">
            <Image src={iconCart} alt={""} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
