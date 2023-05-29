import logo from "#/logo.svg"
import iconPlay from "#/icon-play.svg"
import Image from "next/image"
import { wordSchema } from "@/types/word"
import { classed } from "@tw-classed/react"
import { Switch } from "@/components/Switch"
import * as React from "react"
import { Input } from "@/components/Input"

export default async function Page() {
  const response = await fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/keyboard"
  )

  if (!response.ok) {
    return null
  }

  const data = await response.json()
  const words = wordSchema.parse(data)
  const word = words[0]

  return (
    <div className="px-6 py-6">
      <header className="flex flex-row items-center justify-between">
        <Image src={logo} className="h-8 w-auto" alt={""} />
        <div className="flex flex-row items-center divide-x divide-[#E9E9E9]">
          <BodyS className="mr-4 font-bold">Sans Serif</BodyS>
          <div className="w-[1px] bg-[#E9E9E9]"></div>
          <div className="flex flex-row pl-4">
            <Switch className="" />
            <div className="ml-3">Moon</div>
          </div>
        </div>
      </header>
      <main className="w-full">
        <Input className="mt-6" placeholder="Search word" />
        <div className="mt-6 flex flex-row justify-between">
          <div>
            <HeadingL className="font-bold">{word.word}</HeadingL>
            <HeadingM className="text-purple mt-2">{word.phonetic}</HeadingM>
          </div>
          <button>
            <Image src={iconPlay} className="h-12 w-12" alt={""} />
          </button>
        </div>
        {word.meanings.map((meaning, index) => (
          //  TODO: Change to use different index?
          <div className="mt-8" key={index}>
            <div className="mt-4 flex flex-row items-center gap-4">
              <HeadingM className="text-darker-gray font-bold italic">
                {meaning.partOfSpeech}
              </HeadingM>
              <div className="h-[1px] w-full bg-[#E9E9E9]"></div>
            </div>
            <div className="mt-8 flex flex-col">
              <HeadingS className="text-[#757575]">Meaning</HeadingS>
              <ul className="mt-4">
                {meaning.definitions.map((definition, index) => (
                  <li key={index} className="flex flex-row gap-5">
                    <div className="bg-purple h-[5px] w-[5px] shrink-0 translate-y-[10px] rounded-full"></div>
                    <div>
                      <BodyM>{definition.definition}</BodyM>
                      {definition.example && (
                        <BodyM className="mt-3 text-[#757575]">
                          "{definition.example}"
                        </BodyM>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {meaning.synonyms.length !== 0 && (
              <div className="mt-6 flex flex-row gap-6">
                <HeadingS className="text-[#757575]">Synonyms</HeadingS>
                <ul>
                  {meaning.synonyms.map((synonym, index) => (
                    <li key={index}>
                      <HeadingS className="text-purple font-bold">
                        {synonym}
                      </HeadingS>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <div className="mt-8 h-[1px] w-full bg-[#E9E9E9]"></div>
        <div className="mt-6 flex flex-col gap-2">
          <BodyS>Source</BodyS>
          <BodyS>{word.sourceUrls[0]}</BodyS>
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
