import { Button } from "@/components/ui/button";
import { ArrowRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// The five core values from the company profile, in its own words.
const VALUES = [
  {
    name: "Integrity",
    text: "Operating with honesty and accountability in every transaction.",
  },
  {
    name: "Excellence",
    text: "Delivering high-quality services and maximizing investment performance.",
  },
  {
    name: "Innovation",
    text: "Using data, technology, and market insight to stay ahead of trends.",
  },
  {
    name: "Partnership",
    text: "Building strong, lasting relationships with investors.",
  },
  {
    name: "Sustainability",
    text: "Investing responsibly to ensure long-term growth and community well-being.",
  },
];

/**
 * The accordion is plain `<details>`: no JavaScript, keyboard and screen
 * reader support for free, and the shared `name` makes opening one close the
 * others. `group-open:` styles the open state.
 */
export function ValuesSection() {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <p className="text-xs tracking-[0.14em] text-warm uppercase">Why Rawasi</p>
        <h2
          id="values-heading"
          className="mt-4 text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05]"
        >
          <span className="block">Why partners</span>{" "}
          <span className="block font-light italic">choose Rawasi</span>
        </h2>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <figure className="flex flex-col gap-4">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl lg:aspect-5/4">
              <Image
                src="/images/ValuesSectionVision.webp"
                alt="Hands sketching a building plan on paper with a black marker"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 rounded-full bg-surface-glass px-4 py-2 text-xs tracking-wide text-foreground backdrop-blur-md">
                Our vision
              </span>
            </div>
            <figcaption className="font-text max-w-xl text-sm leading-6 text-pretty text-muted-foreground">
              To become a trusted and innovative real estate investment partner that
              creates long-term value by building wealth for investors, enhancing
              communities, and shaping the future of sustainable property development.
            </figcaption>
          </figure>

          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between gap-5 rounded-3xl bg-secondary p-5 sm:p-6">
              <div className="flex flex-col items-start gap-4">
                <p className="font-display text-xl leading-snug sm:text-2xl">
                  Experience our first development
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto rounded-full py-2 pr-2 pl-5 text-xs tracking-wide"
                >
                  <Link href="/#projects">
                    Explore Evergreen Vista
                    <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </Link>
                </Button>
              </div>
              <div className="relative hidden aspect-4/3 w-36 shrink-0 overflow-hidden rounded-2xl sm:block lg:w-44">
                <Image
                  src="/images/ProjectsSectionEvergreenVista.webp"
                  alt=""
                  fill
                  sizes="176px"
                  className="object-cover object-[30%_50%]"
                />
              </div>
            </div>

            <ul className="border-b border-border">
              {VALUES.map((value, index) => (
                <li key={value.name}>
                  <details name="values" className="group border-t border-border">
                    <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
                      <span className="w-7 text-xs text-muted-foreground tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-base">{value.name}</span>
                      <Plus
                        className="size-4 text-muted-foreground group-open:hidden"
                        aria-hidden="true"
                      />
                      <Minus
                        className="hidden size-4 text-primary-strong group-open:block"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="font-text max-w-md pr-8 pb-5 pl-11 text-sm leading-6 text-muted-foreground">
                      {value.text}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
