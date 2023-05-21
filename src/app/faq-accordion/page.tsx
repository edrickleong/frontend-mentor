"use client"
import { cn } from "@/app/utils"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import * as React from "react"
import { Kumbh_Sans } from "next/font/google"
import Image from "next/image"
import illustrationWomanOnlineMobile from "#/faq-accordion/illustration-woman-online-mobile.svg"
import illustrationWomanOnlineDesktop from "#/faq-accordion/illustration-woman-online-desktop.svg"
import illustrationBoxDesktop from "#/faq-accordion/illustration-box-desktop.svg"
import bgPatternMobile from "#/faq-accordion/bg-pattern-mobile.svg"
import bgPatternDesktop from "#/faq-accordion/bg-pattern-desktop.svg"
import chevronIconDown from "#/faq-accordion/icon-arrow-down.svg"

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
})

const styles = {
  // Primary
  "--very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
  "--soft-red": "hsl(14, 88%, 65%)",
  // Gradient
  "--soft-violet": "hsl(273, 75%, 66%)",
  "--soft-blue": "hsl(240, 73%, 65%)",
  // Neutral
  "--very-dark-grayish-blue": "hsl(237, 12%, 33%)",
  "--dark-grayish-blue": "hsl(240, 6%, 50%)",
  "--light-grayish-blue": "hsl(240, 5%, 91%)",
} as React.CSSProperties

export default function Page() {
  return (
    <div
      style={styles}
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[--soft-violet] to-[--soft-blue] px-6",
        kumbhSans.className
      )}
    >
      <div className="relative isolate mt-[108px] flex w-full max-w-[920px] flex-col items-end items-center rounded-3xl bg-white px-6 pb-12 pt-[132px] lg:flex-row lg:pb-[83px] lg:pl-[475px] lg:pr-[95px] lg:pt-[63px]">
        <Image
          className="absolute top-0 -translate-y-[108px] lg:hidden"
          src={illustrationWomanOnlineMobile}
          alt={""}
        />
        <Image
          className="absolute top-0 lg:hidden"
          src={bgPatternMobile}
          alt={""}
        />
        <div className="absolute inset-0 -z-10 hidden overflow-hidden lg:block">
          <div className="relative h-full w-full">
            <Image
              className="absolute bottom-0 left-0 -translate-x-[530px] translate-y-[141px]"
              src={bgPatternDesktop}
              alt={""}
            />
          </div>
        </div>
        <div className="absolute left-0 hidden overflow-hidden lg:block">
          <Image
            className="-translate-x-[84px]"
            src={illustrationWomanOnlineDesktop}
            alt={""}
          />
        </div>
        <Image
          className="absolute left-0 hidden -translate-x-[96px] translate-y-[50px] lg:block"
          src={illustrationBoxDesktop}
          alt={""}
        />{" "}
        <div className="w-full lg:ml-auto">
          <div className="text-[32px] font-bold">FAQ</div>
          <Accordion
            className="mt-3 w-full"
            type="single"
            defaultValue="item-1"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How many team members can I invite?
              </AccordionTrigger>
              <AccordionContent>
                You can invite up to 2 additional users on the Free plan. There
                is no limit on team members for the Premium plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What is the maximum file upload size?
              </AccordionTrigger>
              <AccordionContent>
                No more than 2GB. All files in your account must fit your
                allotted storage space.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I reset my password?</AccordionTrigger>
              <AccordionContent>
                Click “Forgot password” from the login page or “Change password”
                from your profile page. A reset link will be emailed to you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I cancel my subscription?</AccordionTrigger>
              <AccordionContent>
                Yes! Send us a message and we’ll process your request no
                questions asked.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Do you provide additional support?
              </AccordionTrigger>
              <AccordionContent>
                Chat and email support is available 24/7. Phone lines are open
                during normal business hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-[18px] text-left text-[13px] text-[--very-dark-grayish-blue] hover:text-[--soft-red] data-[state=open]:font-bold [&[data-state=open]>img]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <Image
        src={chevronIconDown}
        className="transition-transform duration-200"
        alt={""}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-xs leading-[18px] text-[--dark-grayish-blue] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName
