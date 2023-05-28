import Image from "next/image"
import logo from "#/logo.svg"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/Sheet"
import iconMenu from "#/icon-menu.svg"

export function Header() {
  return (
    <header className="flex w-full flex-row justify-between py-4 lg:py-8">
      <Image src={logo} alt={""} className="h-5 w-auto" />
      <div className="flex flex-row gap-8">
        <Link className="hover:text-soft-orange" href="#">
          Home
        </Link>
        <Link className="hover:text-soft-orange" href="#">
          New
        </Link>
        <Link className="hover:text-soft-orange" href="#">
          Popular
        </Link>
        <Link className="hover:text-soft-orange" href="#">
          Trending
        </Link>
        <Link className="hover:text-soft-orange" href="#">
          Category
        </Link>
      </div>
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <button>
            <Image src={iconMenu} alt={""} className="h-5 w-auto" />
          </button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex h-full flex-col justify-center gap-4 text-lg">
            <Link href="#">Home</Link>
            <Link href="#">New</Link>
            <Link href="#">Popular</Link>
            <Link href="#">Trending</Link>
            <Link href="#">Category</Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
