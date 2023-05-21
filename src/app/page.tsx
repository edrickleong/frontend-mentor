import qrCode from "#/qr-code/desktop-preview.jpg"
import rating from "#/interactive-rating/desktop-preview.jpg"
import results from "#/results-summary/desktop-preview.jpg"
import age from "#/age-calculator/desktop-preview.jpg"
import tip from "#/tip-calculator/desktop-preview.jpg"
import expenses from "#/expenses-chart/desktop-preview.jpg"
import time from "#/time-tracking-dashboard/desktop-preview.jpg"
import profile from "#/profile-card/desktop-preview.jpg"
import product from "#/product-card/desktop-preview.jpg"
import huddlePreview from "#/huddle-landing-page/desktop-preview.jpg"
import nftPreview from "#/nft-preview/desktop-preview.jpg"
import orderSummary from "#/order-summary/desktop-preview.jpg"
import statsPreview from "#/stats-preview/desktop-preview.jpg"
import threeColumnPreview from "#/three-column-preview/desktop-preview.jpg"
import Image from "next/image"
import Link from "next/link"
import { DM_Sans } from "next/font/google"
import { cn } from "@/app/utils"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
})

const projects = [
  {
    title: "QR code component",
    preview: qrCode,
    link: "/qr-code",
  },
  {
    title: "Interactive rating component",
    preview: rating,
    link: "/interactive-rating",
  },
  {
    title: "Results summary component",
    preview: results,
    link: "/results-summary",
  },
  {
    title: "Age calculator app",
    preview: age,
    link: "/age-calculator",
  },
  {
    title: "Tip calculator app",
    preview: tip,
    link: "/tip-calculator",
  },
  {
    title: "Expenses chart component",
    preview: expenses,
    link: "/expenses-chart",
  },
  {
    title: "Time tracking dashboard",
    preview: time,
    link: "/time-tracking-dashboard",
  },
  {
    title: "Profile card component",
    preview: profile,
    link: "/profile-card",
  },
  {
    title: "Product preview card component",
    preview: product,
    link: "/product-card",
  },
  {
    title: "Huddle landing page with a single introductory section",
    preview: huddlePreview,
    link: "/huddle-landing-page",
  },
  {
    title: "NFT preview card component",
    preview: nftPreview,
    link: "/nft-preview",
  },
  {
    title: "Order summary component",
    preview: orderSummary,
    link: "/order-summary",
  },
  {
    title: "Stats preview card component",
    preview: statsPreview,
    link: "/stats-preview",
  },
  {
    title: "Three column preview card component",
    preview: threeColumnPreview,
    link: "/three-column-preview",
  },
]

export default function Home() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-between p-6 lg:p-24",
        dmSans.className
      )}
    >
      <h1 className="text-center text-4xl font-medium sm:text-6xl">
        Frontend Mentor Projects
      </h1>
      <div className="mt-2 text-lg">By Edrick Leong</div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-6 shadow"
            key={project.title}
            href={project.link}
          >
            <Image src={project.preview} alt={project.title} />
            <h2 className="text-medium mt-4 text-center">{project.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  )
}
