"use client"
import { usePathname, useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import iconSearch from "#/icon-search.svg"

export function SearchInput({ word }: { word: string }) {
  const pathname = usePathname()
  const { push } = useRouter()

  return (
    <form
      className="relative"
      action={async (formData: FormData) => {
        const word = formData.get("word")
        await push(pathname + (word ? `?word=${word}` : ""))
      }}
    >
      <Input placeholder="Search word" defaultValue={word} name="word" />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
        <Image src={iconSearch} className="h-4 w-4" alt="" />
      </div>
    </form>
  )
}
