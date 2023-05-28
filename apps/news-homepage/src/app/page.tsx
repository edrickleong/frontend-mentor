import Image from "next/image"
import imageWeb3Mobile from "#/image-web-3-mobile.jpg"
import imageRetroPCs from "#/image-retro-pcs.jpg"
import imageTopLaptops from "#/image-top-laptops.jpg"
import imageGamingGrowth from "#/image-gaming-growth.jpg"
import Link from "next/link"
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <div className="w-full px-4 pb-6 lg:max-w-screen-lg lg:px-8">
      <Header />
      <main>
        <div className="grid gap-16 lg:grid-cols-3 lg:gap-8">
          <div className="col-span-2 flex flex-col">
            <Image
              src={imageWeb3Mobile}
              className="h-80 w-full object-cover"
              alt={""}
            />
            <div className="mt-6 grid lg:grid-cols-2 lg:gap-8">
              <div className="mt-4 text-4xl font-bold lg:text-5xl">
                The Bright Future of Web 3.0?
              </div>
              <div>
                <div className="text-dark-grayish-blue mt-2">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </div>
                <button className="bg-soft-red hover:bg-soft-red/90 mt-3 px-6 py-3 text-sm font-medium uppercase tracking-widest text-white">
                  Open
                </button>
              </div>
            </div>
          </div>
          <div className="bg-very-dark-blue px-6 py-6">
            <div className="text-soft-orange text-3xl font-bold">New</div>
            <div className="divide-dark-grayish-blue flex flex-col gap-4 divide-y">
              {newArticles.map((it) => (
                <Link href="#" key={it.title} className="group py-4">
                  <div className="group-hover:text-soft-orange text-xl font-bold text-white">
                    {it.title}
                  </div>
                  <div className="text-grayish-blue mt-2 text-sm">
                    {it.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {rankedArticles.map((it) => (
            <Link
              href="#"
              key={it.index}
              className="group flex w-full flex-row items-center gap-8"
            >
              <Image
                src={it.image}
                alt={""}
                className="h-36 w-40 object-cover"
              />
              <div className="flex flex-col gap-2">
                <div className="text-grayish-blue text-3xl font-bold">
                  {it.index}
                </div>
                <div className="group-hover:text-soft-orange text-lg font-bold text-black">
                  {it.title}
                </div>
                <div className="text-dark-grayish-blue text-sm">
                  {it.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

const newArticles = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on - demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
]

const rankedArticles = [
  {
    index: "01",
    image: imageRetroPCs,
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    index: "02",
    image: imageTopLaptops,
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
  },
  {
    index: "03",
    image: imageGamingGrowth,
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
  },
]
