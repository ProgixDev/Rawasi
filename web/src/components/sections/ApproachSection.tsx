import { cn } from "@/lib/utils";
import Image from "next/image";

// The four mission statements from the company profile, in its own words.
const COMMITMENTS = [
  {
    label: "Opportunity",
    text: "To identify and invest in undervalued real estate opportunities with strong growth potential.",
  },
  {
    label: "Returns",
    text: "To maximize returns through strategic property acquisition, management, and development.",
  },
  {
    label: "Relationships",
    text: "To build long-term relationships with investors and partners through transparency, integrity, and professionalism.",
  },
  {
    label: "Responsibility",
    text: "To promote responsible and sustainable development that benefits both investors and local communities.",
  },
];

/**
 * A dark photo card with the mission as four frosted cards. From `lg` the
 * cards sit in two columns and the right column is dropped lower, so the
 * block reads as staggered instead of a plain grid. The text sits on a photo
 * that is dark-scrimmed in both themes, so it uses the on-brand colours.
 */
export function ApproachSection() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="scroll-mt-24 px-3 py-10 sm:px-4 sm:py-16"
    >
      <div className="relative isolate overflow-hidden rounded-4xl text-brand-foreground">
        <Image
          src="/images/ApproachSectionBackground.webp"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[20%_50%]"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand/90 via-brand/70 to-brand/40" />

        <div className="mx-auto grid w-full max-w-[1680px] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-12 lg:pb-36">
          <div className="flex flex-col items-start gap-4">
            <p className="text-xs tracking-[0.14em] text-brand-foreground/70 uppercase">
              Our approach
            </p>
            <h2
              id="approach-heading"
              className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05]"
            >
              <span className="block">Our mission,</span>{" "}
              <span className="block font-light italic">in four parts</span>
            </h2>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {COMMITMENTS.map((commitment, index) => (
              <li
                key={commitment.label}
                className={cn(
                  "flex flex-col justify-between gap-8 rounded-3xl border border-brand-foreground/15 bg-brand/35 p-6 backdrop-blur-xl",
                  index % 2 === 1 && "lg:translate-y-12",
                )}
              >
                <p className="font-display text-lg leading-snug font-light italic text-pretty sm:text-xl">
                  {commitment.text}
                </p>
                <p className="flex items-center gap-3 text-xs tracking-wide text-brand-foreground/70">
                  <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px w-6 bg-brand-foreground/40" aria-hidden="true" />
                  <span className="uppercase">{commitment.label}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
