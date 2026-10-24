import { Button } from "@/components/ui/button";
import { ArrowForward } from "@/components/ui/icons";
import Image from "next/image";
import Link from "next/link";

/**
 * A big two-line heading across the top, with a small underlined label
 * opposite it; a short paragraph and button under the heading on the left; and
 * a long, low house, cut out from its background, standing large on the
 * right and running off the page's right edge.
 *
 * The picture is a transparent PNG cutout, so there is no frame or panel — it
 * sits straight on the page and a drop shadow grounds it. From `lg` it is
 * placed absolutely against the section's right and bottom edges (clipped by
 * the section's `overflow-hidden`); below `lg` it follows the copy in the
 * normal flow, nudged to the right so it still bleeds a little.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 overflow-hidden pt-20 pb-6 sm:pt-28 lg:pb-0"
    >
      <div className="relative mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:min-h-[34rem] lg:px-12">
        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          {/* First in the markup so it reads as an eyebrow on phones; from
              `md` it moves to the far side of the heading. */}
          <p className="text-xs tracking-[0.14em] text-warm uppercase underline decoration-warm/40 underline-offset-4 md:order-last md:mt-3">
            Who is Rawasi
          </p>

          <h2
            id="about-heading"
            className="text-[clamp(2rem,4.4vw,4.25rem)] leading-[1.08]"
          >
            <span className="block">Built by contractors,</span>{" "}
            <span className="block font-light italic">made for partnership</span>
          </h2>
        </div>

        <div className="relative z-10 mt-8 flex max-w-sm flex-col items-start gap-6 lg:mt-14">
          <p className="font-text text-base leading-7 text-pretty text-muted-foreground">
            We are ALSY Group and HMA Group, a team of general contractors based in
            Montreal since 2015. More than a decade of combined experience has built
            strong, trusted relationships with our clients. From that foundation came
            Rawasi: a sustainable, win-win partnership with investors.
          </p>

          <Button
            asChild
            variant="outline"
            className="h-auto rounded-full py-2 pr-2 pl-5 text-xs tracking-wide"
          >
            <Link href="/#approach">
              Our approach
              <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                <ArrowForward className="size-4" aria-hidden="true" />
              </span>
            </Link>
          </Button>
        </div>

        <div className="pointer-events-none relative mt-8 -mr-5 sm:-mr-8 lg:absolute lg:right-[-9%] lg:bottom-8 lg:mt-0 lg:mr-0 lg:w-[min(58%,64rem)] xl:w-[min(68%,64rem)]">
          <Image
            src="/images/AboutSectionMainPicture.webp"
            alt="Modern single-storey house with a stone wall, timber cladding and a glass living room"
            width={1944}
            height={809}
            sizes="(min-width: 1280px) 68vw, (min-width: 1024px) 58vw, 100vw"
            className="h-auto w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
