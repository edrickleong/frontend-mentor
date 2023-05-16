"use server"
import { redirect } from "next/navigation"

export async function addItem(formData: FormData) {
  const rating = formData.get("rating")
  redirect(`/interactive-rating/completed?rating=${rating}`)
}
