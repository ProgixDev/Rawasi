import { CONTACT } from "@/content/contact";
import { ArrowUpward } from "@/components/ui/icons";
import Image from "next/image";
import Link from "next/link";

const EXPLORE_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#values", label: "Values" },
  { href: "/#approach", label: "Approach" },
];

// Same square-filler technique as HeroSection's notch, flipped: the notch
// hangs from the card's top edge, so the transparent quarter-circle sits in
// the bottom corner of each square instead of the top one.
const NOTCH_RADIUS = "1.5rem";
const NOTCH_FILLER_LEFT = `radial-gradient(circle at bottom left, transparent ${NOTCH_RADIUS}, var(--background) calc(${NOTCH_RADIUS} + 1px))`;
const NOTCH_FILLER_RIGHT = `radial-gradient(circle at bottom right, transparent ${NOTCH_RADIUS}, var(--background) calc(${NOTCH_RADIUS} + 1px))`;

export function Footer() {
  return (
    <footer className="px-3 pt-10 pb-3 sm:px-4 sm:pt-16 sm:pb-4">
      <div className="relative isolate overflow-hidden rounded-4xl bg-brand text-brand-foreground">
        <div className="absolute inset-x-0 top-0 z-10 flex justify-center">
          <div className="relative rounded-b-3xl bg-background px-4 pt-0 pb-3 sm:px-5">
            <span
              aria-hidden="true"
              className="absolute top-0 right-full size-6"
              style={{ background: NOTCH_FILLER_LEFT }}
            />
            <span
              aria-hidden="true"
              className="absolute top-0 left-full size-6"
              style={{ background: NOTCH_FILLER_RIGHT }}
            />
            <a
              href="#top"
              aria-label="Back to top"
              className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ArrowUpward className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-[1680px] gap-12 px-6 pt-24 sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:px-14">
          <div className="flex flex-col items-start gap-6">
            <div className="relative aspect-16/10 w-full max-w-60 overflow-hidden rounded-2xl">
              <Image
                src="/images/FooterSectionPicture.webp"
                alt=""
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
            <p className="font-display max-w-xs text-xl leading-snug font-light italic">
              Real estate and construction, anchored in trust.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <nav aria-label="Explore" className="flex flex-col gap-3">
              <h2 className="text-sm">Explore</h2>
              {EXPLORE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-brand-foreground/70 transition-colors hover:text-brand-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="order-last col-span-2 flex flex-col gap-3 sm:order-none sm:col-span-1">
              <h2 className="text-sm">Contact</h2>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-xs break-words text-brand-foreground/70 transition-colors hover:text-brand-foreground"
              >
                {CONTACT.email}
              </a>
              <p className="text-xs text-brand-foreground/70">{CONTACT.location}</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-sm">The group</h2>
              <p className="text-xs text-brand-foreground/70">ALSY Group</p>
              <p className="text-xs text-brand-foreground/70">HMA Group</p>
            </div>
          </div>
        </div>

        {/* Decorative: the name is already in the page. Pushed down so the
            card's bottom edge crops the letters, as in the reference. */}
        <p
          aria-hidden="true"
          className="font-display mt-12 -mb-[0.2em] text-center text-[19vw] sm:text-[min(23vw,26rem)] leading-[0.8] font-medium tracking-normal text-brand-foreground uppercase select-none sm:mt-16"
        >
          Rawasi
        </p>
      </div>

      <div className="flex flex-col items-center justify-between gap-2 px-3 pt-4 pb-1 text-xs text-muted-foreground sm:flex-row sm:px-6">
        <span>© {new Date().getFullYear()} Rawasi. All rights reserved.</span>
        <span>Anchored in Trust</span>
      </div>
    </footer>
  );
}
