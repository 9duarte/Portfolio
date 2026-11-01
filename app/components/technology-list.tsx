import { portfolioData, technologyIconByName } from "../data/portfolio";
import { TechIcon } from "./tech-icon";

export function TechnologyList({
  technologies,
  label,
}: {
  technologies: string[];
  label: string;
}) {
  return (
    <ul className="technology-list" aria-label={label}>
      {technologies.map((name) => {
        const technology = portfolioData.technologies.find((item) => item.name === name);
        const icon = technology?.icon ?? technologyIconByName[name];

        return (
          <li key={name}>
            {icon && <TechIcon icon={icon} />}
            <span>{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
