import type { Experience } from "../data/portfolio";
import { TechnologyList } from "./technology-list";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="experience-card">
      <header className="experience-card-header">
        <div>
          <h3>{experience.role}</h3>
          <p className="experience-company">{experience.company}</p>
        </div>
        <p className="experience-period">{experience.period}</p>
      </header>
      <p className="experience-description">{experience.description}</p>
      <TechnologyList
        technologies={experience.technologies}
        label={`Technologies used in ${experience.role}`}
      />
    </article>
  );
}
