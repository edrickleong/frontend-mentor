import { cn } from "@/lib/utils"
import Image from "next/image"
import iconSedans from "#/icon-sedans.svg"
import iconSuvs from "#/icon-suvs.svg"
import iconLuxury from "#/icon-luxury.svg"

const styles = {
  "--bright-orange": "hsl(31, 77%, 52%)",
  "--dark-cyan": "hsl(184, 100%, 22%)",
  "--very-dark-cyan": "hsl(179, 100%, 13%)",
  "--transparent-white": "hsla(0, 0%, 100%, 0.75)",
  "--very-light-gray": "hsl(0, 0%, 95%)",
} as React.CSSProperties

const sections = [
  {
    icon: iconSedans,
    title: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    primaryColor: "--bright-orange",
  },
  {
    icon: iconSuvs,
    title: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    primaryColor: "--dark-cyan",
  },
  {
    icon: iconLuxury,
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    primaryColor: "--very-dark-cyan",
  },
]

export default function Page() {
  return (
    <div
      style={styles}
      className={cn(
        "flex min-h-screen w-full flex-col bg-[--very-light-gray] px-6 py-[88px]",
      )}
    >
      <div className="flex flex-col overflow-hidden rounded-lg md:flex-row">
        {sections.map((it) => (
          <div
            key={it.title}
            style={
              { "--primary": `var(${it.primaryColor})` } as React.CSSProperties
            }
            className="bg-[--primary] p-12"
          >
            <Image src={it.icon} alt={""} />
            <div
              className={cn(
                "font-heading mt-[35px] text-[40px] font-bold uppercase text-[--very-light-gray]",
              )}
            >
              {it.title}
            </div>
            <div className="mt-[25px] text-[15px] leading-[25px] text-[--transparent-white]">
              {it.description}
            </div>
            <button className="mt-[25px] h-[48px] rounded-[25px] bg-[--very-light-gray] px-8 text-[15px] leading-[25px] text-[--primary] hover:border-2 hover:border-white hover:bg-[--primary] hover:text-white md:mt-[83px]">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
