import { portfolioData } from "../data/portfolio";
import { ExperienceCard } from "./experience-card";

export function ExperienceSection() {
    return (
        <section className="experience-section" id="experience" aria-labelledby="experience-title">
            <div className="projects-heading experience-heading">
                <h2 id="experience-title">{portfolioData.experienceTitle}</h2>
                <span className="heading-rule" />
            </div>
            <div className="experience-list">
                {portfolioData.experiences.length > 0 ? (
                    portfolioData.experiences.map((experience) => <ExperienceCard key={experience.slug} experience={experience} />)
                ) : (
                    <p className="experience-placeholder">{portfolioData.experiencePlaceholder}</p>
                )}
            </div>
        </section>
    );
}
