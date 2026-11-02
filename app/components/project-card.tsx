import { portfolioData, type PortfolioProject } from "../data/portfolio";
import { ExternalLink } from "lucide-react";
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
                    width={project.imageWidth ?? 1920}
                    height={project.imageHeight ?? 1080}
                />
            )}
            <div className="project-information">
                <h3>{project.name}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <TechnologyList
                    technologies={project.technologies}
                    label={`Technologies used in ${project.name}`}
                />
                {project.url && (
                    <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                        {portfolioData.projectLinkLabel}
                        <ExternalLink className="project-link-icon" aria-hidden="true" size={15} strokeWidth={2} />
                    </a>
                )}
            </div>
        </article>
    );
}
