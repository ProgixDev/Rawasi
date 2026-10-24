import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

// Anchors into the home page's own sections — they also work from any other
// page, because the hrefs start at "/".
const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#values", label: "Values" },
  { href: "/#approach", label: "Approach" },
  { href: "/#contact", label: "Contact" },
];

/**
 * A pill that floats over the top of every page, on the glass surface of the
 * current mode. The logo comes in two versions — grey and black text for
 * light mode, white text for dark mode — and both are rendered; CSS shows the
 * one that matches, so the right logo is there on first paint with no
 * mounted-state flicker.
 */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 sm:top-5 sm:px-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full bg-surface-glass py-1.5 pr-2 pl-4 shadow-lg shadow-brand/10 backdrop-blur-md">
        <Link href="/" aria-label="Rawasi, home" className="flex shrink-0 items-center">
          <Image
            src="/Logo.png"
            alt="Rawasi — Real estate & Construction"
            width={256}
            height={99}
            priority
            className="h-10 w-auto sm:h-12 dark:hidden"
          />
          <Image
            src="/Logo-dark.png"
            alt="Rawasi — Real estate & Construction"
            width={256}
            height={99}
            priority
            className="hidden h-10 w-auto sm:h-12 dark:block"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle className="size-10 rounded-full text-muted-foreground hover:text-foreground" />

          <Button
            asChild
            size="sm"
            className="ml-1 hidden h-9 rounded-full px-5 text-xs md:inline-flex"
          >
            <Link href="/#contact">Contact us</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className="size-10 rounded-full md:hidden"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-4/5 sm:max-w-xs">
              <SheetHeader>
                <SheetTitle className="font-display text-xl">Rawasi</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-4 h-11 rounded-full">
                    <Link href="/#contact">Contact us</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
