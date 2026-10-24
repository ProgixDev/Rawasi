import { Button } from "@/components/ui/button";
import { ArrowForward } from "@/components/ui/icons";
import Image from "next/image";
import Link from "next/link";

/**
 * Text on the left, a photo on the right. From `lg` the photo is pinned to
 * the page's right edge (square on that side) instead of sitting inside the
 * content column, so it bleeds off the screen like the reference; below
 * `lg` it is an ordinary rounded image under the copy. It is inset from the
 * section's top and bottom so it never touches the hero card above it.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 lg:min-h-[50rem]"
    >
      <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-10 px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-6 lg:w-[42%] lg:py-12">
          <p className="text-xs tracking-[0.14em] text-warm uppercase">Who is Rawasi</p>

          <h2
            id="about-heading"
            className="text-[clamp(1.9rem,3.7vw,3.4rem)] leading-[1.1]"
          >
            <span className="block">Built by contractors,</span>{" "}
            <span className="block font-light italic">made for partnership</span>
          </h2>

          <p className="font-text max-w-md text-base leading-7 text-pretty text-muted-foreground">
            We are ALSY Group and HMA Group, a team of general contractors based in
            Montreal since 2015. More than a decade of combined experience has built
            strong, trusted relationships with our clients. From that foundation came
            Rawasi: a sustainable, win-win partnership with investors.
          </p>

          <Button
            asChild
            variant="outline"
            className="mt-2 h-auto rounded-full py-2 pr-2 pl-5 text-xs tracking-wide"
          >
            <Link href="/#approach">
              Our approach
              <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                <ArrowForward className="size-4" aria-hidden="true" />
              </span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative mx-5 mt-10 aspect-4/3 overflow-hidden rounded-3xl sm:mx-8 lg:absolute lg:inset-y-24 lg:right-0 lg:mx-0 lg:mt-0 lg:aspect-auto lg:w-[52%] lg:rounded-l-4xl lg:rounded-r-none">
        <Image
          src="/images/AboutSectionMainPicture.webp"
          alt="Evening view of a brick house with arched French doors and a lit front walk"
          fill
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-cover object-[68%_50%]"
        />
      </div>
    </section>
  );
}
