import { portfolioData } from "../data/portfolio";
import { TechIcon } from "./tech-icon";

export function TechnologyCloud() {
  return (
    <div className="technology-cloud" role="list" aria-label="Tecnologias e ferramentas">
      <span className="cloud-cross cloud-cross--one" aria-hidden="true" />
      <span className="cloud-cross cloud-cross--two" aria-hidden="true" />
      <span className="cloud-cross cloud-cross--three" aria-hidden="true" />
      {portfolioData.technologies.map((technology) => (
        <div
          className={`technology-chip technology-chip--${technology.size}`}
          key={technology.name}
          role="listitem"
          style={{
            left: technology.left,
            top: technology.top,
            scale: technology.scale,
          }}
        >
          <TechIcon icon={technology.icon} />
          <span>{technology.name}</span>
        </div>
      ))}
    </div>
  );
}
