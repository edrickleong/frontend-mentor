import Image from "next/image"
import illustrationThankYou from "#/interactive-rating/illustration-thank-you.svg"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ searchParams }: Props) {
  const rating = searchParams["rating"]
  const displayedRating = typeof rating === "string" ? rating : "?"

  return (
    <div className="flex w-[327px] flex-col items-center rounded-xl bg-[#1f2630] p-6">
      <div className="pt-2">
        <Image src={illustrationThankYou} height={98} alt="Thank you" />
        <div className="mt-6 rounded-full bg-[--dark-blue] px-2 py-1 text-sm text-[--orange]">
          You selected {displayedRating} out of 5
        </div>
      </div>
      <div className="mb-4 mt-7 flex flex-col items-center">
        <p className="text-xl text-white">Thank you!</p>
        <p className="mt-4 text-center text-sm text-[--light-grey]">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}
