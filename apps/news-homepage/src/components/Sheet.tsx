"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

interface SheetPortalProps extends SheetPrimitive.DialogPortalProps {}

const SheetPortal = ({ className, children, ...props }: SheetPortalProps) => (
  <SheetPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex justify-end">{children}</div>
  </SheetPrimitive.Portal>
)
SheetPortal.displayName = SheetPrimitive.Portal.displayName

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in fixed inset-0 z-50 bg-gray-600 bg-opacity-80 transition-all duration-100",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  DialogContentProps
>(({ className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        "animate-in slide-in-from-right fixed z-50 h-full w-3/4 scale-100 gap-4 border bg-white p-6 opacity-100 shadow-lg duration-300",
        className
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-12 w-12" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

export { Sheet, SheetTrigger, SheetClose, SheetContent }
