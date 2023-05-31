import React from "react"
import { useFormContext } from "react-hook-form"
import { cn } from "@/lib/utils"

interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  name: string
}

export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  FormMessageProps
>(({ className, children, name, ...props }, ref) => {
  const {
    formState: { errors },
  } = useFormContext()
  const error = errors[name]
  const body = error ? String(error?.message) : children

  if (!body) return null

  return (
    <p ref={ref} className={cn("text-sm text-red", className)} {...props}>
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"
