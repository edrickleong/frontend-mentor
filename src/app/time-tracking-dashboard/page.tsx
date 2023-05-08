import { rubik } from "@/app/styles/fonts"

export default function Page() {
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center bg-[--very-dark-blue] px-6 pt-20 ${rubik.className}`}
      style={
        {
          "--blue": "hsl(246, 80%, 60%)",
          "--light-orange": "hsl(15, 100%, 70%)",
          "--soft-blue": "hsl(195, 74%, 62%)",
          "--light-red": "hsl(348, 100%, 68%)",
          "--lime-green": "hsl(145, 58%, 55%)",
          "--violet": "hsl(264, 64%, 52%)",
          "--soft-orange": "hsl(43, 84%, 65%)",
          "--very-dark-blue": "hsl(226, 43%, 10%)",
          "--dark-blue": "hsl(235, 46%, 20%)",
          "--desaturated-blue": "hsl(235, 45%, 61%)",
          "--pale-blue": "hsl(236, 100%, 87%)",
        } as React.CSSProperties
      }
    >
      <div className="max-w-[375px] w-full flex flex-col gap-4">
        <div className="w-full rounded-xl bg-[--dark-blue] text-white">
          <div className="flex flex-row gap-4 rounded-xl bg-[--blue] p-8">
            <div>Image</div>
            <div>
              <div className="text-sm text-[--pale-blue]">Report for</div>
              <div className="text-lg">Jeremy Robson</div>
            </div>
          </div>
          <div className="flex flex-row justify-between p-8">
            <div>Daily</div>
            <div>Weekly</div>
            <div>Monthly</div>
          </div>
        </div>
        <div className="w-full rounded-xl bg-white pt-8">
          <div className="flex text-white bg-[--dark-blue] rounded-xl flex-row justify-between p-8">
            <div>
              <div className="text-lg font-medium">Work</div>
              <div className="text-3xl font-light">32hrs</div>
            </div>
            <div className="flex flex-col gap-2 items-end justify-between">
              <div>...</div>
              <div className="text-sm text-[--pale-blue]">Last Week - 36 hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
