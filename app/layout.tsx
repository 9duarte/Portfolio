import type { Metadata } from "next";
import { portfolioData } from "./data/portfolio";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
    title: portfolioData.pageTitle,
    description: portfolioData.pageDescription,
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
