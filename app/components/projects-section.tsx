import { portfolioData } from "../data/portfolio";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
    const firstProject = portfolioData.projects[0];

    return (
        <section className="projects-section" id="projetos" aria-labelledby="projects-title">
            <div className="projects-heading">
                <div className="projects-heading-label">
                    <h2 id="projects-title">{portfolioData.projectsTitle}</h2>
                    <span className="heading-rule" />
                </div>
                {firstProject && (
                    <a className="all-projects-link" href={`#project-${firstProject.number}`}>
                        {portfolioData.allProjectsLabel}
                        <span aria-hidden="true">→</span>
                    </a>
                )}
            </div>
            <div className="projects-list">
                {portfolioData.projects.map((project) => <ProjectCard key={project.number} project={project} />)}
            </div>
        </section>
    );
}
