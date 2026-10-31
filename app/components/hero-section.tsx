import { portfolioData } from "../data/portfolio";
import { TechnologyCloud } from "./technology-cloud";

export function HeroSection() {
    return (
        <section className="hero-section" aria-labelledby="intro-title">
            <div className="hero-copy">
                <div className="hero-kicker"><span>{portfolioData.greeting}</span><i /></div>
                <h1 id="intro-title">{portfolioData.name}</h1>
                <div className="hero-description">
                    {portfolioData.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <a className="hero-cta" href="#projetos">
                    {portfolioData.projectsLinkLabel}
                    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
                </a>
            </div>
            <TechnologyCloud />
        </section>
    );
}
