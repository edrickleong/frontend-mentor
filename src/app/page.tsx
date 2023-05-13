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
import Image from "next/image"
import Link from "next/link"

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
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Frontend Mentor projects</h1>
      <div className="mt-8 flex flex-row flex-wrap">
        {projects.map((project) => (
          <Link
            className="m-4 flex flex-col items-center justify-center"
            key={project.title}
            href={project.link}
          >
            <Image src={project.preview} alt={project.title} className="w-96" />
            <h2 className="text-2xl font-bold">{project.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  )
}
