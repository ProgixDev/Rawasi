import { Button } from "@/components/ui/button";
import { ArrowForward } from "@/components/ui/icons";
import Image from "next/image";

const STATS = [
  { value: "2015", label: "Building since" },
  { value: "16", label: "Lots planned at Evergreen Vista" },
];

// The bottom-centre cut-out is page-coloured and sits on the card's bottom
// edge. These two squares round the inside corners where it meets the
// photo: a quarter-circle of transparency (the photo shows through) in the
// corner of each square, page colour everywhere else.
const NOTCH_RADIUS = "1.5rem";
const NOTCH_FILLER_LEFT = `radial-gradient(circle at top left, transparent ${NOTCH_RADIUS}, var(--background) calc(${NOTCH_RADIUS} + 1px))`;
const NOTCH_FILLER_RIGHT = `radial-gradient(circle at top right, transparent ${NOTCH_RADIUS}, var(--background) calc(${NOTCH_RADIUS} + 1px))`;

/**
 * A rounded photo card inset from the page edge, headline top-left, stats
 * bottom-right and the call to action in a notch at the bottom. Text sits on
 * the photo, which is dark-scrimmed in both themes, so it uses the
 * on-brand colour instead of the page foreground.
 */
export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <div className="relative isolate flex min-h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-4xl text-brand-foreground sm:min-h-[calc(100svh-2rem)]">
        <Image
          src="/images/HeroSectionBackground.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[45%_60%]"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-brand/75 via-brand/20 to-brand/60" />

        <div className="mx-auto flex w-full max-w-[1680px] flex-1 flex-col gap-10 px-5 pt-28 pb-28 sm:px-8 sm:pt-36 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <h1 id="hero-heading" className="text-balance">
              <span className="block text-[clamp(1.75rem,4.5vw,4rem)] leading-tight font-light italic">
                Building value,
              </span>{" "}
              <span className="block text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] font-medium uppercase">
                Anchored in Trust
              </span>
            </h1>

            <p className="max-w-72 text-xs leading-relaxed text-pretty text-brand-foreground/80 lg:mt-3">
              Real estate and construction in Montreal. A partner for investors
              and communities who want long-term value, built with integrity.
            </p>
          </div>

          {/* Stacked and centred. The term comes first in the markup (it names
              the figure) and `flex-col-reverse` puts the number on top.
              From `md` the stack is pinned to the card's bottom-right corner
              with the same gap below as to the right (the gaps are the
              page's side padding); below that it stays in flow, above the
              notch, because the notch would sit under it. */}
          <dl className="mt-auto grid auto-rows-fr justify-end gap-3 md:absolute md:right-8 md:bottom-8 md:mt-0 lg:right-12 lg:bottom-12">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex w-44 flex-col-reverse items-center justify-center gap-2 rounded-2xl bg-surface-glass px-5 py-5 text-center text-foreground backdrop-blur-md"
              >
                <dt className="max-w-32 text-xs text-muted-foreground">{stat.label}</dt>
                <dd className="font-display text-4xl leading-none">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <div className="relative rounded-t-3xl bg-background px-4 pt-4 pb-3 sm:px-5 sm:pt-5">
            <span
              aria-hidden="true"
              className="absolute right-full bottom-0 size-6"
              style={{ background: NOTCH_FILLER_LEFT }}
            />
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-full size-6"
              style={{ background: NOTCH_FILLER_RIGHT }}
            />
            <Button
              asChild
              size="lg"
              className="h-auto rounded-full py-2 pr-2 pl-5 text-xs tracking-wide"
            >
              <a href="#projects">
                Discover Evergreen Vista
                <span className="grid size-8 place-items-center rounded-full bg-foreground text-background">
                  <ArrowForward className="size-4" aria-hidden="true" />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
