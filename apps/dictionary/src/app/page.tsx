import logo from "#/logo.svg"
import Image from "next/image"
import { wordsSchema } from "@/types/words"
import * as React from "react"
import { ToggleThemeButton } from "@/components/toggle-theme-button"
import { BodyM, BodyS, HeadingS } from "@/components/ui/typography"
import { Content } from "@/components/content"
import { SearchInput } from "@/components/search-input"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getWordDefinition(word: string) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word ?? "keyboard"}`
  )

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const body = await response.json()
  const wordsDefinition = wordsSchema.parse(body)
  return wordsDefinition[0]
}

export default async function Page({ searchParams }: Props) {
  if (Array.isArray(searchParams)) {
    throw new Error("Invalid search params")
  }
  const word = searchParams["word"] as string
  const wordDefinition = await getWordDefinition(word ?? "keyboard")

  return (
    <div className="flex flex-col items-center px-6 py-6 md:px-10 md:pt-14">
      <header className="flex w-full max-w-[737px] flex-row items-center justify-between">
        <Image src={logo} className="h-8 w-auto" alt={""} />
        <div className="divide-border flex flex-row items-center divide-x">
          <BodyS className="mr-4 font-bold">Sans Serif</BodyS>
          <ToggleThemeButton />
        </div>
      </header>
      <main className="mt-6 w-full max-w-[737px] md:mt-[52px]">
        <SearchInput word={word} />
        {!wordDefinition ? (
          <div className="mt-[132px] flex flex-col items-center text-center">
            <div className="text-[64px]">🙁</div>
            <HeadingS className="text-foreground mt-[44px]">
              No Definitions Found
            </HeadingS>
            <BodyM className="text-muted-foreground mt-6">
              Sorry pal, we {"couldn't"} find definitions for the word you were
              looking for. You can try the search again at later time or head to
              the web instead.
            </BodyM>
          </div>
        ) : (
          <Content wordDefinition={wordDefinition} />
        )}
      </main>
    </div>
  )
}
