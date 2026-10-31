import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";

export default function Home() {
  return (
    <main className="portfolio-page">
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
