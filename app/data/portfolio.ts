export type Technology = {
  name: string;
  icon: "react" | "typescript" | "next" | "php" | "node" | "mysql" | "git" | "tailwind" | "docker";
  size: "small" | "medium" | "large";
  scale: string;
  left: string;
  top: string;
  rotation: string;
};

export type PortfolioProject = {
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
};

export const portfolioData = {
  pageTitle: "Duarte Marques — Portfólio",
  pageDescription: "Aplicações web, sistemas de gestão e produtos digitais feitos por Duarte Marques.",
  greeting: "OLÁ, SOU",
  name: "Duarte Marques",
  description: [
    "Desenvolvo aplicações web e sistemas de gestão com foco em soluções práticas e bem estruturadas.",
    "Gosto de transformar ideias em produtos reais e de aprender constantemente.",
  ],
  projectsLinkLabel: "Ver projetos",
  projectLinkLabel: "Ver projeto",
  projectsTitle: "PROJETOS",
  allProjectsLabel: "VER TODOS",
  technologies: [
    { name: "React", icon: "react", size: "large", scale: "1.03", left: "54%", top: "9%", rotation: "0deg" },
    { name: "Next.js", icon: "next", size: "medium", scale: ".97", left: "75%", top: "16%", rotation: "-2deg" },
    { name: "TypeScript", icon: "typescript", size: "medium", scale: "1.04", left: "19%", top: "21%", rotation: "-6deg" },
    { name: "PHP", icon: "php", size: "medium", scale: ".91", left: "53%", top: "34%", rotation: "0deg" },
    { name: "MySQL", icon: "mysql", size: "medium", scale: "1.02", left: "77%", top: "43%", rotation: "7deg" },
    { name: "Node.js", icon: "node", size: "medium", scale: ".96", left: "12%", top: "48%", rotation: "-2deg" },
    { name: "Git", icon: "git", size: "small", scale: ".87", left: "61%", top: "57%", rotation: "-2deg" },
    { name: "Tailwind CSS", icon: "tailwind", size: "large", scale: "1.05", left: "27%", top: "68%", rotation: "-3deg" },
    { name: "Docker", icon: "docker", size: "medium", scale: ".94", left: "74%", top: "71%", rotation: "4deg" },
  ] satisfies Technology[],
  projects: [
    {
      number: "01",
      name: "OneMarket",
      category: "ERP / Gestão de Projetos",
      description:
        "Aplicação web para gestão de projetos, orçamentos, planos de trabalho e stock. Desenvolvida para centralizar e simplificar processos, com foco na usabilidade e organização da informação.",
      image: "/project-onemarket.svg",
      imageAlt: "Pré-visualização do dashboard OneMarket com projetos, orçamentos, tarefas e stock",
      technologies: ["Next.js", "React", "Tailwind CSS", "MySQL"],
    },
  ] satisfies PortfolioProject[],
};
