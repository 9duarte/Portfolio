import { portfolioData } from "../data/portfolio";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
    return (
        <section className="projects-section" id="projects" aria-labelledby="projects-title">
            <div className="projects-heading">
                <h2 id="projects-title">{portfolioData.projectsTitle}</h2>
                <span className="heading-rule" />
            </div>
            <div className="projects-list">
                {portfolioData.projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
        </section>
    );
}
