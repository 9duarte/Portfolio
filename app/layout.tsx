import type { Metadata } from "next";
import { portfolioData } from "./data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: portfolioData.pageTitle,
  description: portfolioData.pageDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
