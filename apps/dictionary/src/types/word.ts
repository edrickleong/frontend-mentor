import { z } from "zod"

export const wordSchema = z.array(
  z.object({
    word: z.string(),
    phonetic: z.string(),
    phonetics: z.array(
      z.union([
        z.object({ text: z.string(), audio: z.string() }),
        z.object({
          text: z.string(),
          audio: z.string(),
          sourceUrl: z.string(),
          license: z.object({ name: z.string(), url: z.string() }),
        }),
      ])
    ),
    meanings: z.array(
      z.object({
        partOfSpeech: z.string(),
        definitions: z.array(
          z.object({
            definition: z.string(),
            synonyms: z.array(z.string()),
            antonyms: z.array(z.string()),
            example: z.string().optional(),
          })
        ),
        synonyms: z.array(z.string()),
        antonyms: z.array(z.string()),
      })
    ),
    license: z.object({ name: z.string(), url: z.string() }),
    sourceUrls: z.array(z.string()),
  })
)
