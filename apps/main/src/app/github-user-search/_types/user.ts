import { z } from "zod"

export const userSchema = z.object({
  name: z.string().nullable(),
  login: z.string(),
  avatar_url: z.string(),
  created_at: z.string(),
  bio: z.string().nullable(),
  public_repos: z.number(),
  followers: z.number(),
  following: z.number(),
  location: z.string().nullable(),
  blog: z.string().nullable(),
  twitter_username: z.string().nullable(),
  company: z.string().nullable(),
})

export type User = z.infer<typeof userSchema>
