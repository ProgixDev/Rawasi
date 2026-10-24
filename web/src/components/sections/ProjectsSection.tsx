import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  subtitle: string;
  /** An extra line under the subtitle — used by the featured project only. */
  detail?: string;
  src: string;
  alt: string;
  sizes: string;
  /** `object-position` for the photo inside its tile. */
  position?: string;
  className?: string;
}

const FEATURED: Project = {
  title: "Evergreen Vista",
  subtitle: "Saint-Bernard-de-Lacolle, QC",
  detail: "12 acres · 16 lots · 5 minutes from the U.S. border",
  src: "/images/ProjectsSectionEvergreenVista.webp",
  alt: "Aerial view of the Evergreen Vista land, outlined in red, surrounded by forest and fields",
  sizes: "(min-width: 1024px) 40vw, 100vw",
  position: "object-[30%_50%]",
  className: "col-span-2 aspect-4/3 lg:col-span-1 lg:row-span-2 lg:aspect-auto",
};

const WORK: Project[] = [
  {
    title: "Hardwood flooring",
    subtitle: "Interior renovation",
    src: "/images/ProjectsSectionHardwood.webp",
    alt: "Empty room with newly finished hardwood floor and a balcony door",
    sizes: "(min-width: 1024px) 22vw, 50vw",
    position: "object-[50%_70%]",
  },
  {
    title: "Bathroom tiling",
    subtitle: "Interior renovation",
    src: "/images/ProjectsSectionBathroom.webp",
    alt: "Bathroom with green moisture-resistant walls and marble-look floor tiles being laid",
    sizes: "(min-width: 1024px) 22vw, 50vw",
    position: "object-[50%_75%]",
  },
  {
    title: "Foundation drainage",
    subtitle: "Exterior works",
    src: "/images/ProjectsSectionFoundation.webp",
    alt: "Trench along a house foundation with a drainage pipe being installed",
    sizes: "(min-width: 1024px) 22vw, 50vw",
    position: "object-[50%_55%]",
  },
  {
    title: "Concrete steps",
    subtitle: "Exterior works",
    src: "/images/ProjectsSectionConcrete.webp",
    alt: "Wooden formwork holding poured concrete for entrance steps beside a brick column",
    sizes: "(min-width: 1024px) 22vw, 50vw",
    position: "object-[50%_50%]",
  },
];

function ProjectTile({ project }: { project: Project }) {
  const featured = project === FEATURED;

  return (
    <figure
      className={cn(
        "group relative isolate aspect-square overflow-hidden rounded-3xl text-brand-foreground lg:aspect-auto",
        project.className,
      )}
    >
      <Image
        src={project.src}
        alt={project.alt}
        fill
        sizes={project.sizes}
        className={cn(
          "-z-20 object-cover transition-transform duration-700 group-hover:scale-105",
          project.position,
        )}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-brand/85 via-brand/10 to-transparent" />

      <span
        aria-hidden="true"
        className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-surface-glass text-foreground backdrop-blur-md sm:top-4 sm:right-4"
      >
        <ArrowUpRight className="size-4" />
      </span>

      <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 sm:p-5">
        <span className={cn("text-sm font-medium", featured && "text-base sm:text-lg")}>
          {project.title}
        </span>
        <span className="font-display text-xs font-light italic text-brand-foreground/80 sm:text-sm">
          {project.subtitle}
        </span>
        {project.detail && (
          <span className="mt-1 text-xs text-brand-foreground/70">{project.detail}</span>
        )}
      </figcaption>
    </figure>
  );
}

/**
 * One large tile for the featured project beside a 2×2 grid of recent work.
 * On phones the featured tile spans the full width and the four work tiles
 * sit in a 2×2 below it.
 */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <h2
            id="projects-heading"
            className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05]"
          >
            Built with <span className="font-light italic">Purpose</span>
          </h2>

          <Button
            asChild
            variant="outline"
            className="h-auto rounded-full py-2 pr-2 pl-5 text-xs tracking-wide"
          >
            <Link href="/#contact">
              Start a project
              <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:min-h-[36rem] lg:grid-cols-[1.25fr_1fr_1fr] lg:grid-rows-2">
          <ProjectTile project={FEATURED} />
          {WORK.map((project) => (
            <ProjectTile key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
