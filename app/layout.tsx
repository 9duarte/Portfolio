import type { Metadata } from "next";
import { portfolioData } from "./data/portfolio";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
    metadataBase: new URL("https://9duarte.dev"),

    title: {
        default: "Duarte Marques | Web Developer",
        template: "%s | Duarte Marques",
    },

    description:
        "Duarte Marques — Web Developer. Desenvolvimento de aplicações web, sistemas de gestão e soluções digitais.",

    keywords: [
        "Duarte Marques",
        "Web Developer",
        "Full Stack Developer",
        "React",
        "Next.js",
        "TypeScript",
        "Portugal",
    ],

    authors: [{ name: "Duarte Marques" }],

    openGraph: {
        title: "Duarte Marques | Web Developer",
        description:
            "Explora os meus projetos, experiência e tecnologias.",
        url: "https://9duarte.dev",
        siteName: "Duarte Marques Portfolio",
        locale: "pt_PT",
        type: "website",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="pt-PT">
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
