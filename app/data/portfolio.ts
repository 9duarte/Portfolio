export type TechnologyIcon =
    | "react"
    | "typescript"
    | "javascript"
    | "php"
    | "node"
    | "mysql"
    | "csharp"
    | "mongodb"
    | "git"
    | "next"
    | "html"
    | "css"
    | "bootstrap"
    | "pwa"
    | "express"
    | "dotnet-maui"
    | "dotnet"
    | "github"
    | "prettier"
    | "npm"
    | "vercel"
    | "tailwind"
    | "angular"
    | "java"
    | "kotlin"
    | "swift"
    | "xampp"
    | "nestjs";

export type Technology = {
    name: string;
    icon: TechnologyIcon;
    size: "small" | "medium" | "large";
    scale: string;
    left: string;
    top: string;
};

export type PortfolioProject = {
    slug: string;
    name: string;
    category: string;
    description: string;
    image?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    url?: string;
    technologies: string[];
};

export type ContactLink = {
    label: string;
    url: string;
    icon: "email" | "github" | "linkedin";
};

export type Experience = {
    slug: string;
    role: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
};

export const technologyIconByName: Record<string, TechnologyIcon> = {
    React: "react",
    "Next.js": "next",
    TypeScript: "typescript",
    JavaScript: "javascript",
    PHP: "php",
    "Node.js": "node",
    MySQL: "mysql",
    "C#": "csharp",
    MongoDB: "mongodb",
    Git: "git",
    HTML: "html",
    CSS: "css",
    Bootstrap: "bootstrap",
    PWA: "pwa",
    Express: "express",
    ".NET MAUI": "dotnet-maui",
    ".NET": "dotnet",
    GitHub: "github",
    Prettier: "prettier",
    npm: "npm",
    Vercel: "vercel",
    "Tailwind CSS": "tailwind",
    Angular: "angular",
    Java: "java",
    Kotlin: "kotlin",
    Swift: "swift",
    XAMPP: "xampp",
    "NestJS": "nestjs",
};

export const portfolioData = {
    pageTitle: "Duarte Marques — Portfolio",
    pageDescription:
        "Software developer in Portugal. Web applications, management systems, and digital products.",

    name: "Duarte Marques",

    description: [
        "I'm a Software Developer passionate about building web applications and digital solutions that solve real-world problems. I've worked on projects for businesses and individuals, developing solutions that are actively used in real-world environments.",
        "I enjoy exploring new technologies, understanding how things work under the hood, and turning ideas into meaningful products. I'm always looking to challenge myself, learn something new, and become a better developer."
    ],

    projectLinkLabel: "View project",
    projectsTitle: "PROJECTS",

    experienceTitle: "EXPERIENCE",
    experiencePlaceholder:
        "Practical experience in web development through real-world projects and professional internships.",

    footerCopyright:
        "© 2026 DUARTE MARQUES. ALL RIGHTS RESERVED.",

    contactLinks: [
        {
            label: "Email",
            url: "mailto:duarte09luciano@gmail.com",
            icon: "email"
        },
        {
            label: "GitHub",
            url: "https://github.com/9duarte",
            icon: "github"
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/9duarte/",
            icon: "linkedin"
        }
    ] satisfies ContactLink[],

    technologies: [
        {
            name: "React",
            icon: "react",
            size: "large",
            scale: "1.03",
            left: "54%",
            top: "9%"
        },
        {
            name: "TypeScript",
            icon: "typescript",
            size: "medium",
            scale: ".97",
            left: "78%",
            top: "17%"
        },
        {
            name: "JavaScript",
            icon: "javascript",
            size: "medium",
            scale: "1.04",
            left: "20%",
            top: "23%"
        },
        {
            name: "PHP",
            icon: "php",
            size: "small",
            scale: ".91",
            left: "52%",
            top: "37%"
        },
        {
            name: "MySQL",
            icon: "mysql",
            size: "medium",
            scale: "1.02",
            left: "81%",
            top: "45%"
        },
        {
            name: "Node.js",
            icon: "node",
            size: "medium",
            scale: ".96",
            left: "12%",
            top: "51%"
        },
        {
            name: "MongoDB",
            icon: "mongodb",
            size: "medium",
            scale: "1.05",
            left: "29%",
            top: "72%"
        },
        {
            name: "Git",
            icon: "git",
            size: "small",
            scale: ".94",
            left: "78%",
            top: "77%"
        },
        {
            name: "HTML",
            icon: "html",
            size: "small",
            scale: ".96",
            left: "3%",
            top: "8%"
        },
        {
            name: "CSS",
            icon: "css",
            size: "small",
            scale: ".94",
            left: "31%",
            top: "4%"
        },
        {
            name: "Next.js",
            icon: "next",
            size: "medium",
            scale: ".96",
            left: "61%",
            top: "29%"
        },
        {
            name: "Tailwind CSS",
            icon: "tailwind",
            size: "small",
            scale: ".93",
            left: "20%",
            top: "40%"
        },
        {
            name: "Express",
            icon: "express",
            size: "small",
            scale: ".92",
            left: "43%",
            top: "52%"
        },
        {
            name: "NestJS",
            icon: "nestjs",
            size: "small",
            scale: ".92",
            left: "30%",
            top: "58%"
        },
        {
            name: "GitHub",
            icon: "github",
            size: "small",
            scale: ".95",
            left: "68%",
            top: "60%"
        },
        {
            name: "Prettier",
            icon: "prettier",
            size: "small",
            scale: ".91",
            left: "4%",
            top: "78%"
        },
        {
            name: "npm",
            icon: "npm",
            size: "small",
            scale: ".94",
            left: "47%",
            top: "82%"
        },
        {
            name: "Vercel",
            icon: "vercel",
            size: "small",
            scale: ".92",
            left: "86%",
            top: "31%"
        },
        {
            name: "Angular",
            icon: "angular",
            size: "small",
            scale: ".9",
            left: "35%",
            top: "88%"
        },
        {
            name: "Java",
            icon: "java",
            size: "small",
            scale: ".9",
            left: "11%",
            top: "33%"
        },
        {
            name: "Kotlin",
            icon: "kotlin",
            size: "small",
            scale: ".9",
            left: "87%",
            top: "70%"
        },
        {
            name: "Swift",
            icon: "swift",
            size: "small",
            scale: ".9",
            left: "62%",
            top: "87%"
        },
        {
            name: "XAMPP",
            icon: "xampp",
            size: "small",
            scale: ".9",
            left: "1%",
            top: "60%"
        }
    ] satisfies Technology[],

    projects: [
        {
            slug: "4x1",
            name: "4x1",
            category: "Web Application / Education Management",
            description:
                "A web-based management system developed for a study center, designed to centralize student and teacher management, schedules, attendance tracking, receipts, and payments. Includes automated PDF generation and notification workflows to simplify daily administrative tasks.",
            image: "/4x1.png",
            imageAlt:
                "4x1",
            technologies: [
                "PHP",
                "JavaScript",
                "MySQL",
                "Bootstrap",
            ]
        },
        {
            slug: "matilde-margalho",
            name: "Matilde Margalho",
            category: "Website / Full-Stack Development",
            description:
                "Developed the official website for a professional violinist, featuring a custom content management dashboard for managing website content. Focused on responsive design, performance optimization, and SEO to deliver a modern online presence.",
            image: "/MatildeMargalho.png",
            imageAlt:
                "Matilde Margalho",
            url: "https://matildemargalho.com",
            technologies: [
                "Next.js",
                "React",
                "Node.js",
                "Express",
                "JavaScript",
                "CSS"
            ]
        },
        {
            slug: "duarte-marques-portfolio",
            name: "Portfolio",
            category: "Website / Personal Portfolio",
            description:
                "A personal portfolio website designed to showcase my projects, experience, and technical skills through a modern, responsive, and interactive interface.",
            image: "/Portfolio.png",
            imageAlt:
                "Portfolio",
            technologies: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS"
            ],
            url: "https://9duarte.dev",
        },
        {
            slug: "lumassali",
            name: "Lumassali",
            category: "Digital Menu / Information System",
            description:
                "A digital display system developed for a bakery and pastry shop, designed to showcase product prices and provide useful information to customers. Combines a digital price list with real-time public transport updates, bringing different types of information together in a single, easy-to-use display.",
            image: "/Lumassali.png",
            imageAlt:
                "Lumassali",
            imageWidth: 1088,
            imageHeight: 2120,
            technologies: [
                "PHP",
                "JavaScript",
                "HTML",
                "CSS",
                "MySQL"
            ]
        },
        {
            slug: "onemarket",
            name: "OneMarket",
            category: "ERP / Business Management",
            description:
                "A business management platform developed as part of my Professional Aptitude Project (PAP), designed to centralize project management, budgets, work plans, and inventory. Provides an integrated solution to simplify business operations and improve workflow organization.",
            image: "/OneMarket.png",
            imageAlt:
                "OneMarket",
            technologies: [
                "PHP",
                "JavaScript",
                "HTML",
                "CSS",
                "MySQL"
            ]
        },

    ] satisfies PortfolioProject[],

    experiences: [
        {
            slug: "free-lancer",
            role: "Freelance Web Developer",
            company: "Self-employed",
            period: "Apr 2025 — Present",
            description: "Developing websites and web applications for individual clients, working across frontend and backend development, including responsive interfaces, database integration, API development, and deployment.",
            technologies: [
                "React",
                "Next.js",
                "MySQL",
                "Node.js",
                "Express",
                "PHP",
            ]
        },
        {
            slug: "domoweb-2025",
            role: "Web Development Intern",
            company: "Domoweb",
            period: "Jun 2025",
            description:
                "Developed a PHP-based backoffice for a news website, enabling administrators to create and manage news articles and content.",
            technologies: [
                "PHP",
                "MySQL"
            ]
        },
        {
            slug: "itcl",
            role: "Software Engineer Intern",
            company: "ITCL Technology Centre",
            period: "Apr 2025 — May 2025",
            description:
                "Developed and improved software solutions for smart mobility and bicycle-sharing systems, focusing on user interfaces, application functionality, and bug fixing as part of an international development team during an Erasmus+ internship in Spain.",
            technologies: [
                "C#",
                ".NET MAUI",
                "JavaScript"
            ]
        },
        {
            slug: "domoweb-2024",
            role: "Software Engineer Intern",
            company: "Domoweb",
            period: "Mar 2024",
            description:
                "Developed a C# application for IT operations, creating tools to assist technicians with computer diagnostics, maintenance, and management, improving workflow efficiency.",
            technologies: [
                "C#",
                ".NET"
            ]
        }
    ] satisfies Experience[],
};
