import Image from "next/image"
import logo from "#/logo.svg"
import iconMenu from "#/icon-menu.svg"
import imageWeb3Mobile from "#/image-web-3-mobile.jpg"
import imageRetroPCs from "#/image-retro-pcs.jpg"
import imageTopLaptops from "#/image-top-laptops.jpg"
import imageGamingGrowth from "#/image-gaming-growth.jpg"

export default function Home() {
  return (
    <>
      <header className="flex flex-row justify-between px-4 py-4">
        <Image src={logo} alt={""} className="h-5 w-auto" />
        <Image src={iconMenu} alt={""} className="h-5 w-auto" />
      </header>
      <main className="px-4">
        <Image src={imageWeb3Mobile} alt={""} />
        <div className="mt-4 text-4xl font-bold">
          The Bright Future of Web 3.0?
        </div>
        <div className="text-dark-grayish-blue mt-2">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </div>
        <button className="bg-soft-red hover:bg-soft-red/90 mt-3 px-6 py-3 text-sm font-medium uppercase tracking-widest text-white">
          Read More
        </button>
        <div className="bg-very-dark-blue mt-16 px-4 py-6 ">
          <div className="text-soft-orange text-3xl font-bold">New</div>
          <div className="divide-grayish-blue flex flex-col gap-4 divide-y">
            {newArticles.map((it) => (
              <div key={it.title} className="py-4">
                <div className="text-xl font-bold text-white">{it.title}</div>
                <div className="text-grayish-blue mt-2 text-sm">
                  {it.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-6">
          {rankedArticles.map((it) => (
            <div
              key={it.index}
              className="flex w-full flex-row items-center gap-8"
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
                <div className="text-lg font-bold text-black">{it.title}</div>
                <div className="text-dark-grayish-blue text-sm">
                  {it.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
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
