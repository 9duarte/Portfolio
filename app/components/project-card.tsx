import Image from "next/image";
import { portfolioData, type PortfolioProject } from "../data/portfolio";
import { TechIcon } from "./tech-icon";

export function ProjectCard({ project }: { project: PortfolioProject }) {
    return (
        <article className="project-feature" id={`project-${project.number}`}>
            <div className="project-visual">
                <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1160}
                    height={760}
                    sizes="(max-width: 850px) 100vw, 56vw"
                />
            </div>
            <div className="project-information">
                <div className="project-number"><span>{project.number}</span><i /></div>
                <h3>{project.name}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-technologies" aria-label={`Tecnologias usadas em ${project.name}`}>
                    {project.technologies.map((name) => {
                        const technology = portfolioData.technologies.find((item) => item.name === name);
                        if (!technology) return <li key={name}>{name}</li>;

                        return (
                            <li key={name}>
                                <TechIcon icon={technology.icon} />
                                <span>{name}</span>
                            </li>
                        );
                    })}
                </ul>
                <span className="project-link">{portfolioData.projectLinkLabel} <span aria-hidden="true">↗</span></span>
            </div>
        </article>
    );
}
