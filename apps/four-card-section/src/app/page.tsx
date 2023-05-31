import Image from "next/image"
import iconSupervisor from "#/icon-supervisor.svg"
import iconTeamBuilder from "#/icon-team-builder.svg"
import iconKarma from "#/icon-karma.svg"
import iconCalculator from "#/icon-calculator.svg"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-10 py-[84px]">
      <div className="max-w-[540px] lg:text-center">
        <div className="text-[24px] font-extralight text-very-dark-blue lg:text-[36px]">
          Reliable, efficient delivery
        </div>
        <div className="text-[24px] font-semibold text-very-dark-blue lg:text-[36px]">
          Powered by Technology
        </div>
        <div className="mt-2 text-[15px] leading-[25px] text-very-dark-blue text-opacity-50">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </div>
      </div>
      <div className="mt-[76px] grid items-center gap-6 lg:grid-cols-3 lg:gap-[30px]">
        <div className="flex w-full flex-col rounded-lg border-t-[3px] border-t-cyan p-7 shadow-[0_15px_30px_rgba(131,166,210,0.5)] lg:max-w-[350px]">
          <div className="text-[20px] font-semibold leading-[30px] text-very-dark-blue">
            Supervisor
          </div>
          <div className="text-[13px] leading-[23px] text-very-dark-blue text-opacity-50">
            Monitors activity to identify project roadblocks
          </div>
          <Image className="mt-8 self-end" src={iconSupervisor} alt={""} />
        </div>
        <div className="flex w-full flex-col gap-6 lg:gap-[30px]">
          <div className="flex w-full flex-col rounded-lg border-t-[3px] border-t-red p-7 shadow-[0_15px_30px_rgba(131,166,210,0.5)] lg:max-w-[350px]">
            <div className="text-[20px] font-semibold leading-[30px] text-very-dark-blue">
              Team Builder
            </div>
            <div className="text-[13px] leading-[23px] text-very-dark-blue text-opacity-50">
              Scans our talent network to create the optimal team for your
              project
            </div>
            <Image className="mt-8 self-end" src={iconTeamBuilder} alt={""} />
          </div>
          <div className="flex w-full flex-col rounded-lg border-t-[3px] border-t-orange p-7 shadow-[0_15px_30px_rgba(131,166,210,0.5)] lg:max-w-[350px]">
            <div className="text-[20px] font-semibold leading-[30px] text-very-dark-blue">
              Karma
            </div>
            <div className="text-[13px] leading-[23px] text-very-dark-blue text-opacity-50">
              Regularly evaluates our talent to ensure quality
            </div>
            <Image className="mt-8 self-end" src={iconKarma} alt={""} />
          </div>
        </div>
        <div className="flex w-full flex-col rounded-lg border-t-[3px] border-t-blue p-7 shadow-[0_15px_30px_rgba(131,166,210,0.5)] lg:max-w-[350px]">
          <div className="text-[20px] font-semibold leading-[30px] text-very-dark-blue">
            Calculator
          </div>
          <div className="text-[13px] leading-[23px] text-very-dark-blue text-opacity-50">
            Uses data from past projects to provide better delivery estimates
          </div>
          <Image className="mt-8 self-end" src={iconCalculator} alt={""} />
        </div>
      </div>
    </main>
  )
}
