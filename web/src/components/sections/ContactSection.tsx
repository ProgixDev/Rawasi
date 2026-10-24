import { Button } from "@/components/ui/button";
import { CONTACT } from "@/content/contact";
import { ArrowForward } from "@/components/ui/icons";

// Facts about the Evergreen Vista land, from the company profile.
const STATS = [
  { value: "12", label: "Acres of residential land" },
  { value: "16", label: "Lots planned" },
  { value: "5 min", label: "From the U.S. border" },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1680px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
        <div className="flex flex-col items-start gap-5 lg:max-w-xl">
          <p className="text-xs tracking-[0.14em] text-warm uppercase">Start your journey</p>
          <h2
            id="contact-heading"
            className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05]"
          >
            <span className="block">Let&rsquo;s build your</span>{" "}
            <span className="block font-light italic">next chapter</span>
          </h2>
          <p className="font-text max-w-md text-base leading-7 text-pretty text-muted-foreground">
            Whether you want to invest alongside us or you are planning a build or a
            renovation, tell us about it. We will walk you through the opportunity and
            how we work.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-3 h-auto rounded-full py-2 pr-2 pl-6 text-xs tracking-wide"
          >
            <a href={`mailto:${CONTACT.email}`}>
              Contact us
              <span className="grid size-8 place-items-center rounded-full bg-foreground text-background">
                <ArrowForward className="size-4" aria-hidden="true" />
              </span>
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            {CONTACT.email} · {CONTACT.location}
          </p>
        </div>

        <dl className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1 lg:gap-10 lg:justify-self-end lg:pr-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-t border-border pt-5 lg:min-w-72">
              <dd className="font-display text-5xl leading-none font-light italic sm:text-6xl">
                {stat.value}
              </dd>
              <dt className="mt-3 text-xs tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
