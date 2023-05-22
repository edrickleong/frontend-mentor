import { League_Spartan } from "next/font/google"
import { cn } from "@/app/utils"
import iconStar from "#/social-proof/icon-star.svg"
import imageColton from "#/social-proof/image-colton.jpg"
import imageIrene from "#/social-proof/image-irene.jpg"
import imageAnne from "#/social-proof/image-anne.jpg"
import Image, { StaticImageData } from "next/image"
import bgPatternBottomMobile from "#/social-proof/bg-pattern-bottom-mobile.svg"
import bgPatternBottomDesktop from "#/social-proof/bg-pattern-bottom-desktop.svg"
import bgPatternTopMobile from "#/social-proof/bg-pattern-top-mobile.svg"
import bgPatternTopDesktop from "#/social-proof/bg-pattern-top-desktop.svg"

const styles = {
  "--very-dark-magenta": "hsl(300, 43%, 22%)",
  "--soft-pink": "hsl(333, 80%, 67%)",
  "--dark-grayish-magenta": "hsl(303, 10%, 53%)",
  "--light-grayish-magenta": "hsl(300, 24%, 96%)",
} as React.CSSProperties

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
})

const reviews = [
  "Rated 5 Stars in Reviews",
  "Rated 5 Stars in Report Guru",
  "Rated 5 Stars in BestTech",
]

const testimonies = [
  {
    imageSrc: imageColton,
    name: "Colton Smith",
    text: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
  },
  {
    imageSrc: imageIrene,
    name: "Irene Roberts",
    text: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
  },
  {
    imageSrc: imageAnne,
    name: "Anne Wallace",
    text: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
  },
]

export default function Page() {
  return (
    <div
      style={styles}
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center px-6 py-[82px] lg:pt-[118px]",
        leagueSpartan.className
      )}
    >
      <Image  className="absolute top-0 left-0 lg:hidden" src={bgPatternTopMobile} alt={""} />
      <Image  className="absolute top-0 left-0 hidden lg:block" src={bgPatternTopDesktop} alt={""} />
      <Image  className="absolute bottom-0 right-0 lg:hidden" src={bgPatternBottomMobile} alt={""} />
      <Image  className="absolute bottom-0 right-0 hidden lg:block" src={bgPatternBottomDesktop} alt={""} />
      <div className="w-full max-w-[1110px]">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="flex max-w-[445px] flex-col">
            <div className="text-center text-[40px] font-bold leading-[32px] -tracking-[1.43px] text-[--very-dark-magenta] lg:text-left lg:text-[56px] lg:leading-[48px] lg:-tracking-[2px]">
              10,000+ of our users love our products.
            </div>
            <div className="mt-[17px] text-center text-[19px] font-medium leading-[25px] -tracking-[0.63px] text-[--dark-grayish-magenta] lg:mt-[16px] lg:text-left">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </div>
          </div>
          <div className="mt-[39px] flex w-full flex-col gap-4 lg:mt-0 lg:w-auto">
            {reviews.map((review, index, array) => {
              return (
                <RatingCard
                  key={review}
                  text={review}
                  offsetMultiplier={array.length - 1 - index}
                />
              )
            })}
          </div>
        </div>

        <div className="mt-[49px] flex flex-col gap-y-4 lg:mt-[71px] lg:flex-row lg:gap-x-[30px]">
          {testimonies.map((testimony, index) => (
            <TestimonialCard
              key={testimony.name}
              imageSrc={testimony.imageSrc}
              name={testimony.name}
              testimony={testimony.text}
              offsetMultiplier={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function RatingCard({
  text,
  offsetMultiplier,
}: {
  text: string
  offsetMultiplier: number
}) {
  const styles = {
    "--offset": `${offsetMultiplier * -47}px`,
  } as React.CSSProperties

  return (
    <div
      style={styles}
      className="flex flex-col items-center gap-x-4 rounded-lg bg-[--light-grayish-magenta] py-4 lg:translate-x-[--offset] lg:flex-row lg:gap-y-8 lg:px-8 lg:py-5"
    >
      <div className="flex flex-row gap-2">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <Image key={i} src={iconStar} alt={""} />
          ))}
      </div>
      <div className="text-[17px] font-bold text-[--very-dark-magenta]">
        {text}
      </div>
    </div>
  )
}

function TestimonialCard({
  imageSrc,
  name,
  testimony,
  offsetMultiplier,
}: {
  imageSrc: string | StaticImageData
  name: string
  testimony: string
  offsetMultiplier: number
}) {
  const styles = {
    "--offset": `${offsetMultiplier * 16}px`,
  } as React.CSSProperties

  return (
    <div
      style={styles}
      className="flex flex-col rounded-lg bg-[--very-dark-magenta] px-8 pb-[35px] pt-10 text-white lg:max-w-[350px] lg:translate-y-[--offset]"
    >
      <div className="flex flex-row gap-[23px]">
        <Image src={imageSrc} alt={""} />
        <div>
          <div className="text-[17px] font-bold">{name}</div>
          <div className="mt-1 text-[17px] text-[--soft-pink]">
            Verified Buyer
          </div>
        </div>
      </div>
      <div className="mt-[23px] text-[17px] font-medium">{testimony}</div>
    </div>
  )
}
