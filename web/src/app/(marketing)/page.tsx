import { AboutSection } from "@/components/sections/AboutSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ValuesSection } from "@/components/sections/ValuesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ValuesSection />
      <ApproachSection />
    </>
  );
}
