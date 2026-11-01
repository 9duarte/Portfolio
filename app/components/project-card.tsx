import { portfolioData, type PortfolioProject } from "../data/portfolio";
import { ProjectImagePreview } from "./project-image-preview";
import { TechnologyList } from "./technology-list";

export function ProjectCard({ project }: { project: PortfolioProject }) {
    return (
        <article className={`project-feature${project.image ? "" : " project-feature--no-image"}`} id={`project-${project.slug}`}>
            {project.image && (
                <ProjectImagePreview
                    src={project.image}
                    alt={project.imageAlt ?? project.name}
                    name={project.name}
                />
            )}
            <div className="project-information">
                <h3>{project.name}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <TechnologyList
                    technologies={project.technologies}
                    label={`Tecnologias usadas em ${project.name}`}
                />
                {project.url && (
                    <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                        {portfolioData.projectLinkLabel} <span aria-hidden="true">↗</span>
                    </a>
                )}
            </div>
        </article>
    );
}
