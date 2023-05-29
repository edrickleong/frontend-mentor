import logo from "#/logo.svg"
import iconPlay from "#/icon-play.svg"
import Image from "next/image"
import { wordSchema } from "@/types/word"
import { classed } from "@tw-classed/react"
import * as React from "react"
import { Input } from "@/components/ui/input"
import { ToggleThemeButton } from "@/components/ToggleThemeButton"
import { redirect } from "next/navigation"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({ searchParams }: Props) {
  if (Array.isArray(searchParams)) {
    throw new Error("Invalid search params")
  }
  const word = searchParams["word"] as string

  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word ?? "keyboard"}`
  )

  if (!response.ok) {
    return null
  }

  const data = await response.json()
  const wordsDefinition = wordSchema.parse(data)
  const wordDefinition = wordsDefinition[0]

  return (
    <div className="px-6 py-6">
      <header className="flex flex-row items-center justify-between">
        <Image src={logo} className="h-8 w-auto" alt={""} />
        <div className="divide-border flex flex-row items-center divide-x">
          <BodyS className="mr-4 font-bold">Sans Serif</BodyS>
          <ToggleThemeButton />
        </div>
      </header>
      <main className="w-full">
        <form
          action={async (formData: FormData) => {
            "use server"
            const newWord = formData.get("word") as string
            redirect("/?word=" + newWord)
          }}
        >
          <Input
            className="mt-6"
            placeholder="Search word"
            defaultValue={word}
            name="word"
          />
        </form>
        <div className="mt-6 flex flex-row justify-between">
          <div>
            <HeadingL className="text-foreground font-bold">
              {wordDefinition.word}
            </HeadingL>
            <HeadingM className="text-primary mt-2">
              {wordDefinition.phonetic}
            </HeadingM>
          </div>
          <button>
            <Image src={iconPlay} className="h-12 w-12" alt={""} />
          </button>
        </div>
        {wordDefinition.meanings.map((meaning, index) => (
          //  TODO: Change to use different index?
          <div className="mt-8" key={index}>
            <div className="mt-4 flex flex-row items-center gap-4">
              <HeadingM className="text-foreground font-bold italic">
                {meaning.partOfSpeech}
              </HeadingM>
              <div className="bg-border h-[1px] w-full"></div>
            </div>
            <div className="mt-8 flex flex-col">
              <HeadingS className="text-muted-foreground">Meaning</HeadingS>
              <ul className="mt-4">
                {meaning.definitions.map((definition, index) => (
                  <li key={index} className="flex flex-row gap-5">
                    <div className="bg-primary h-[5px] w-[5px] shrink-0 translate-y-[10px] rounded-full"></div>
                    <div>
                      <BodyM>{definition.definition}</BodyM>
                      {definition.example && (
                        <BodyM className="text-muted-foreground mt-3">
                          {`"${definition.example}"`}
                        </BodyM>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {meaning.synonyms.length !== 0 && (
              <div className="mt-6 flex flex-row gap-6">
                <HeadingS className="text-muted-foreground">Synonyms</HeadingS>
                <ul className="flex flex-row gap-2">
                  {meaning.synonyms.map((synonym, index) => (
                    <li key={index}>
                      <HeadingS className="text-primary font-bold">
                        {synonym}
                      </HeadingS>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <div className="bg-border mt-8 h-[1px] w-full"></div>
        <div className="mt-6 flex flex-col gap-2">
          <BodyS className="text-muted-foreground">Source</BodyS>
          <BodyS className="text-foreground">
            {wordDefinition.sourceUrls[0]}
          </BodyS>
        </div>
      </main>
    </div>
  )
}

const HeadingL = classed.div(
  "text-[32px] leading-[1.2] lg:text-[64px] lg:leading-[77px]"
)
const HeadingM = classed.div(
  "text-[18px] leading-[24px] lg:text-[24px] lg:leading-[29px]"
)
const HeadingS = classed.div("text-[16px] lg:text-[20px] lg:leading-[24px]")
const BodyM = classed.div(
  "text-[15px] leading-[24px] lg:text-[18px] lg:leading-[24px]"
)
const BodyS = classed.div("text-[14px] leading-[17px]")
