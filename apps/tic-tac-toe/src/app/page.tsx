import Image from "next/image"
import logo from "#/logo.svg"
import { OIcon, XIcon } from "@/app/_components/icons"

export default function Home() {
  return (
    <main className="bg-dark-navy flex min-h-screen flex-col items-center px-6">
      <Image className="mt-32" src={logo} alt="Logo" />
      <section className="bg-semi-dark-navy mt-8 flex w-full flex-col items-center rounded-2xl px-6 pb-8 pt-6 shadow-[0_-8px_0_0px_#10212A_inset]">
        <h2 className=" text-silver text-center font-bold uppercase leading-5 tracking-wider">
          {"Pick Player 1's Mark"}
        </h2>
        <div className="mt-6 grid w-full grid-cols-2 items-center rounded-xl bg-gray-800 p-2">
          <div className="grid place-items-center">
            <XIcon className="text-silver h-8 w-8" />
          </div>
          <div className="bg-silver grid h-[54px] place-items-center rounded-lg">
            <OIcon className="text-dark-navy h-8 w-8" />
          </div>
        </div>

        <p className="text-silver mt-4 text-center text-sm uppercase tracking-wider opacity-50">
          Remember: X goes first
        </p>
      </section>
      <button className="bg-light-yellow text-dark-navy mt-8 w-full rounded-2xl pb-6 pt-4 text-center text-base font-bold uppercase tracking-wider shadow-[0_-8px_0_0_#CC8B13_inset]">
        New game (vs CPU)
      </button>
      <button className="bg-light-blue text-dark-navy mt-4 w-full rounded-2xl pb-6 pt-4 text-center text-base font-bold uppercase tracking-wider shadow-[0_-8px_0_0_#118C87_inset]">
        New game (vs player)
      </button>
    </main>
  )
}
