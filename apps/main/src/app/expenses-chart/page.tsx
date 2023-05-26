import { DM_Sans } from "next/font/google"
import Image from "next/image"
import logo from "#/expenses-chart/logo.svg"
import data from "./data.json"

const dmSans = DM_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
})

export default function Page() {
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-[--cream] px-4 ${dmSans.className}`}
      style={
        {
          "--soft-red": "hsl(10, 79%, 65%)",
          "--soft-red-80": "hsla(10, 79%, 65%, 80%)",
          "--cyan": "hsl(186, 34%, 60%)",
          "--cyan-80": "hsla(186, 34%, 60%, 80%)",
          "--dark-brown": "hsl(25, 47%, 15%)",
          "--medium-brown": "hsl(28, 10%, 53%)",
          "--cream": "hsl(27, 66%, 92%)",
          "--very-pale-orange": "hsl(33, 100%, 98%)",
        } as React.CSSProperties
      }
    >
      <div className="flex w-full max-w-[540px] flex-row items-center justify-between rounded-lg bg-[--soft-red] p-4 text-[--very-pale-orange]">
        <div>
          <div>My balance</div>
          <div className="text-xl font-bold ">$921.48</div>
        </div>
        <Image src={logo} alt={""} />
      </div>
      <div className="flex w-full max-w-[540px] flex-col gap-4 rounded-md bg-[--very-pale-orange] p-4">
        <div className="text-xl font-bold text-[--dark-brown]">
          Spending - Last 7 days
        </div>
        <div className="mt-8 flex w-full flex-row items-end justify-between gap-3">
          {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => {
            const today = "wed"
            const amount = data.find((it) => it.day === day)?.amount ?? 0
            return (
              <div className="w-full text-center text-gray-400" key={day}>
                <div
                  className={`rounded ${day === today ? "bg-[--cyan] hover:bg-[--cyan-80]" : "bg-[--soft-red] hover:bg-[--soft-red-80]"}`}
                  style={{ height: amount * 4 }}
                ></div>
                <div>{day}</div>
              </div>
            )
          })}
        </div>
        <div className="h-[1px] w-full bg-gray-100"></div>
        <div className="flex flex-row items-end justify-between">
          <div>
            <div className="text-[--medium-brown]">Total this month</div>
            <div className="text-xl font-bold text-[--dark-brown]">$478.33</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="font-bold text-[--dark-brown]">+2.4%</div>
            <div className="text-gray-400">from last month</div>
          </div>
        </div>
      </div>
    </div>
  )
}
