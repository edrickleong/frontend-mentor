"use client"

import { Word } from "@/types/words"
import {
  BodyM,
  BodyS,
  HeadingL,
  HeadingM,
  HeadingS,
} from "@/components/ui/typography"
import Image from "next/image"
import iconPlay from "#/icon-play.svg"
import * as React from "react"
import { useMemo } from "react"
import Link from "next/link"

type Props = {
  wordDefinition: Word
}

export function Content({ wordDefinition }: Props) {
  const audio = useMemo(() => {
    const audioSrc = wordDefinition.phonetics?.find(
      (it) => it.audio.length !== 0
    )?.audio
    return audioSrc ? new Audio(audioSrc) : null
  }, [wordDefinition])

  return (
    <>
      <div className="mt-6 flex flex-row justify-between md:mt-[50px]">
        <div>
          <HeadingL className="font-bold text-foreground">
            {wordDefinition.word}
          </HeadingL>
          <HeadingM className="mt-2 text-primary">
            {wordDefinition.phonetic}
          </HeadingM>
        </div>
        {audio && (
          <button onClick={() => audio.play()}>
            <Image
              src={iconPlay}
              className="md:h-18 md:w-18 h-12 w-12"
              alt={""}
            />
          </button>
        )}
      </div>
      {wordDefinition.meanings.map((meaning, index) => (
        <div className="mt-8 md:mt-10" key={index}>
          <div className="flex flex-row items-center gap-4">
            <HeadingM className="font-bold italic text-foreground">
              {meaning.partOfSpeech}
            </HeadingM>
            <div className="h-[1px] w-full bg-border"></div>
          </div>
          <div className="mt-8 flex flex-col md:mt-[38px]">
            <HeadingS className="text-muted-foreground">Meaning</HeadingS>
            <ul className="mt-4 md:mt-6">
              {meaning.definitions.map((definition, index) => (
                <li key={index} className="flex flex-row gap-5 md:gap-4">
                  <div className="h-[5px] w-[5px] shrink-0 translate-y-[10px] rounded-full bg-primary"></div>
                  <div>
                    <BodyM>{definition.definition}</BodyM>
                    {definition.example && (
                      <BodyM className="mt-3 text-muted-foreground">
                        {`"${definition.example}"`}
                      </BodyM>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {meaning.synonyms.length !== 0 && (
            <div className="mt-6 flex flex-row gap-6 md:mt-10">
              <HeadingS className="text-muted-foreground">Synonyms</HeadingS>
              <ul className="flex flex-row flex-wrap gap-2">
                {meaning.synonyms.map((synonym, index) => (
                  <li key={index}>
                    <HeadingS
                      as={Link}
                      className="font-bold text-primary hover:underline"
                      href={"#"}
                    >
                      {synonym}
                    </HeadingS>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      <div className="mt-8 h-[1px] w-full bg-border md:mt-10"></div>
      <div className="mt-6 flex flex-col gap-5 md:flex-row">
        <BodyS className="text-muted-foreground">Source</BodyS>
        <BodyS
          as={Link}
          className="text-foreground hover:underline"
          href={wordDefinition.sourceUrls[0]}
        >
          {wordDefinition.sourceUrls[0]}
        </BodyS>
      </div>
    </>
  )
}
