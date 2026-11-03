# Duarte Marques — Portfolio

Personal portfolio of Duarte Marques, built to showcase projects, professional experience, and technologies used to develop web applications and digital solutions.

🌐 **Visit the website:** [9duarte.dev](https://9duarte.dev)

## Features

- Introduction section with professional description and contact links.
- Visual technology cloud.
- Project gallery with descriptions, images, technologies, and external links.
- Professional experience section.
- Responsive layout for desktop and mobile devices.
- Configured SEO metadata, Open Graph, sitemap, and robots settings.
- Analytics powered by Vercel Analytics.

## Technologies

- [Next.js](https://nextjs.org/) 16 with App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Lucide React](https://lucide.dev/) and [Simple Icons](https://simpleicons.org/)
- [Vercel Analytics](https://vercel.com/analytics)

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- npm, included with Node.js

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/9duarte/Portfolio.git
   cd Portfolio
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server. |
| `npm run build` | Creates a production build. |
| `npm run start` | Starts the application in production mode. |
| `npm run lint` | Runs ESLint. |

## Customization

The portfolio's main content is centralized in [`app/data/portfolio.ts`](./app/data/portfolio.ts). You can update the following in this file:

- name, description, and titles;
- contact links;
- displayed technologies;
- projects, images, descriptions, and links;
- professional experience.

Project images should be placed in the [`public/`](./public/) folder and referenced from the root, for example: `/image-name.png`.

Global page settings, such as the title, description, language, and Open Graph metadata, are defined in [`app/layout.tsx`](./app/layout.tsx).

## Project structure

```text
app/
├── components/       # Components for the portfolio sections
├── data/              # Project, technology, and experience content
├── globals.css        # Global styles and visual theme
├── layout.tsx         # Layout, metadata, and Analytics
├── page.tsx           # Main page
├── robots.ts          # robots.txt configuration
└── sitemap.ts         # Sitemap configuration
public/                # Project images and other public assets
```

## Deploy

The project can be deployed directly to [Vercel](https://vercel.com/):

1. Import the repository into Vercel.
2. Keep the build command as `npm run build`.
3. Deploy the project.

To run a production build manually:

```bash
npm run build
npm run start
```

## Contact

- [Email](mailto:duarte09luciano@gmail.com)
- [GitHub](https://github.com/9duarte)
- [LinkedIn](https://www.linkedin.com/in/9duarte/)
