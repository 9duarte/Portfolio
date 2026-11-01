import { portfolioData } from "../data/portfolio";
import { TechnologyCloud } from "./technology-cloud";

export function HeroSection() {
    return (
        <section className="hero-section" aria-labelledby="intro-title">
            <div className="hero-copy">
                <h1 id="intro-title">{portfolioData.name}</h1>
                <div className="hero-description">
                    {portfolioData.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
            </div>
            <TechnologyCloud />
        </section>
    );
}
