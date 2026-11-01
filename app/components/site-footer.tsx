import { portfolioData } from "../data/portfolio";
import { SocialIcon } from "./social-icon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="footer-copyright">{portfolioData.footerCopyright}</p>
      <nav className="footer-socials" aria-label="Contactos e redes sociais">
        {portfolioData.contactLinks.map((contact) => (
          <a
            key={contact.label}
            href={contact.url}
            aria-label={contact.label}
            title={contact.label}
            target={contact.icon === "email" ? undefined : "_blank"}
            rel={contact.icon === "email" ? undefined : "noreferrer"}
          >
            <SocialIcon icon={contact.icon} />
          </a>
        ))}
      </nav>
    </footer>
  );
}
