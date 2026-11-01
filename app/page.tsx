import { HeroSection } from "./components/hero-section";
import { ExperienceSection } from "./components/experience-section";
import { ProjectsSection } from "./components/projects-section";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return (
    <>
      <main id="top" className="portfolio-page">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <SiteFooter />
    </>
  );
}
