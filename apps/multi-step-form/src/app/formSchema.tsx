import { z } from "zod"
import { step1Schema } from "@/app/step1"
import { step2Schema } from "@/app/step2"
import { step3Schema } from "@/app/step3"

const formSchema = z.object({
  step1: step1Schema.optional(),
  step2: step2Schema.optional(),
  step3: step3Schema.optional(),
})

export type FormData = z.infer<typeof formSchema>
