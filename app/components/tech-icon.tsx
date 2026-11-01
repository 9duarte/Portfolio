import type { TechnologyIcon } from "../data/portfolio";
import { siNestjs } from "simple-icons";

export function TechIcon({ icon }: { icon: TechnologyIcon }) {
    const shared = {
        "aria-hidden": true as const,
        className: `tech-icon tech-icon--${icon}`,
        fill: "none",
        viewBox: "0 0 32 32",
    };

    switch (icon) {
        case "react":
            return <svg {...shared}><circle cx="16" cy="16" r="2.4" fill="currentColor" /><ellipse cx="16" cy="16" rx="13" ry="5" stroke="currentColor" strokeWidth="1.7" /><ellipse cx="16" cy="16" rx="13" ry="5" stroke="currentColor" strokeWidth="1.7" transform="rotate(60 16 16)" /><ellipse cx="16" cy="16" rx="13" ry="5" stroke="currentColor" strokeWidth="1.7" transform="rotate(120 16 16)" /></svg>;
        case "next":
            return <svg {...shared}><circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.8" /><path d="M11 22V10l10 12V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
        case "typescript":
            return <svg {...shared}><rect x="3" y="3" width="26" height="26" rx="4" fill="currentColor" /><path d="M8 12h10M13 12v11m6-2c1 1.5 2.2 2.1 4 2.1 1.8 0 3-.9 3-2.2 0-3.4-6.6-1.3-6.6-5.4 0-1.6 1.3-2.8 3.5-2.8 1.5 0 2.6.4 3.6 1.5" stroke="#07101C" strokeWidth="2" strokeLinecap="round" /></svg>;
        case "javascript":
            return <svg {...shared}><rect x="3" y="3" width="26" height="26" rx="4" fill="currentColor" /><text x="7" y="23" fill="#111820" fontFamily="Arial,sans-serif" fontSize="15" fontWeight="700">JS</text></svg>;
        case "php":
            return <svg {...shared}><ellipse cx="16" cy="16" rx="14" ry="9" fill="currentColor" /><path d="M8 20l2-9h4c2 0 2.8 1 2.4 2.8l-.5 2.2c-.3 1.5-1.3 2.3-2.9 2.3h-2.5l-.4 1.7H8Zm4.2-3.5h1.5c.6 0 .9-.3 1-.9l.4-1.8c.1-.6-.1-.9-.7-.9h-1.5l-.7 3.6Zm5.3 3.5 2-9h2l-.6 2.6h2.2c1.8 0 2.5.8 2.1 2.5l-.8 3.9h-2l.8-3.7c.1-.5 0-.7-.5-.7h-2.2l-.9 4.4h-2.1Z" fill="#101A2B" /></svg>;
        case "node":
            return <svg {...shared}><path d="m16 2 12 7v14l-12 7L4 23V9l12-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><text x="8" y="20" fill="currentColor" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="700">JS</text></svg>;
        case "mysql":
            return <svg {...shared}><circle cx="23.5" cy="8.5" r="3.2" fill="#f29111" /><path d="M4 22c5.7 1.1 10.8-.4 13.6-4.4 1.2-1.7 1.9-3.5 2.8-5.3 1.3 2.6 3.4 4 6.2 4.5-2.7-2-3.7-4.6-3.8-7.6-2.2.7-3.2 2.4-3.8 4.3-1.1-1.7-2.7-2.6-4.7-2.7 1.4 1.3 2 2.7 1.8 4.5C15.5 19.8 10.9 21.3 4 22Z" fill="#00758f" /><path d="M5 25c5 1.4 10.5 1.1 15.4-1.1" stroke="#00758f" strokeWidth="1.5" strokeLinecap="round" /><circle cx="21.4" cy="9.7" r=".7" fill="#fff" /></svg>;
        case "csharp":
            return <svg {...shared}><path d="M16 2.5 28 9.3v13.4l-12 6.8-12-6.8V9.3L16 2.5Z" fill="currentColor" /><text x="5.7" y="20.3" fill="white" fontFamily="Arial,sans-serif" fontSize="12" fontWeight="700">C#</text></svg>;
        case "mongodb":
            return <svg {...shared}><path d="M16 2.5c-.7 3.8-5.8 7.2-6.5 13-.5 4.5 2 8.3 6.5 10.1 4.5-1.8 7-5.6 6.5-10.1-.7-5.8-5.8-9.2-6.5-13Z" fill="currentColor" /><path d="M16 7v21" stroke="#102017" strokeWidth="1.5" strokeLinecap="round" /><path d="M12.8 17.4 16 21l3.2-3.6" stroke="#102017" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
        case "git":
            return <svg {...shared}><path d="M14 2.8a2.8 2.8 0 0 1 4 0l11.2 11.2a2.8 2.8 0 0 1 0 4L18 29.2a2.8 2.8 0 0 1-4 0L2.8 18a2.8 2.8 0 0 1 0-4L14 2.8Z" fill="currentColor" /><path d="m11 11 10 10m-5-15v8a3 3 0 0 1-3 3h-2" stroke="#15100F" strokeWidth="2" strokeLinecap="round" /><circle cx="16" cy="8" r="1.5" fill="#15100F" /><circle cx="11" cy="17" r="1.5" fill="#15100F" /></svg>;
        case "html":
            return <svg {...shared}><path d="m5 3 2 23 9 3 9-3 2-23H5Z" fill="currentColor" /><path d="M11 10h10l-.4 3.2h-6l.3 2.3h5.5l-.7 6.5-3.7 1.2-3.7-1.2-.3-3h3l.1 1 1 .3 1-.3.2-1.7h-5.4L10 10Z" fill="#151820" /></svg>;
        case "css":
            return <svg {...shared}><path d="m5 3 2 23 9 3 9-3 2-23H5Z" fill="currentColor" /><path d="M10 9h12l-.4 3.2h-8.1l.2 2.1h7.7l-.8 7.1-4.6 1.6-4.6-1.6-.3-3.2h3l.1 1.1 1.8.6 1.8-.6.2-2h-7.6L10 9Z" fill="#101923" /></svg>;
        case "bootstrap":
            return <svg {...shared}><rect x="3" y="3" width="26" height="26" rx="6" fill="currentColor" /><text x="8" y="23" fill="white" fontFamily="Arial,sans-serif" fontSize="21" fontWeight="700">B</text></svg>;
        case "pwa":
            return <svg {...shared}><rect x="6" y="3" width="20" height="26" rx="3" stroke="currentColor" strokeWidth="2" /><path d="M10 8h12M10 12h8m-6 7 2.5 2.5L21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="16" cy="25" r="1" fill="currentColor" /></svg>;
        case "express":
            return <svg {...shared}><path d="M5 8h22M6 8c0 10 3 15 10 15s10-5 10-15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><text x="8" y="19" fill="currentColor" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="700">ex</text></svg>;
        case "nestjs":
            return <svg {...shared} viewBox="0 0 24 24"><path d={siNestjs.path} fill="currentColor" /></svg>;
        case "github":
            return <svg {...shared}><path d="M16 3.2a12.8 12.8 0 0 0-4.1 24.9c.7.1 1-.3 1-.7v-2.7c-4.2.9-5.1-2-5.1-2-.7-1.8-1.7-2.3-1.7-2.3-1.4-1 .1-1 .1-1 1.5.1 2.3 1.6 2.3 1.6 1.3 2.3 3.4 1.6 4.3 1.2.1-1 .5-1.6 1-2-3.4-.4-7-1.7-7-7.5 0-1.6.6-2.9 1.6-3.9-.2-.4-.7-2 .2-4 0 0 1.3-.4 4.1 1.6a14 14 0 0 1 7.5 0c2.8-2 4.1-1.6 4.1-1.6.9 2 .3 3.6.2 4 1 .9 1.6 2.3 1.6 3.9 0 5.8-3.5 7.1-7 7.5.5.4 1 1.2 1 2.4v3.5c0 .4.3.8 1 .7A12.8 12.8 0 0 0 16 3.2Z" fill="currentColor" /></svg>;
        case "prettier":
            return <svg {...shared}><path d="M7 4h18M7 8h13M7 12h18M7 16h13M7 20h18M7 24h13" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /><path d="M4 4h0M4 12h0M4 20h0" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" /></svg>;
        case "npm":
            return <svg {...shared}><path d="M3 7h26v18H16v3h-5v-3H3V7Z" fill="currentColor" /><path d="M7 11v10h4V14h2v7h4V11h4v10h4V11H7Z" fill="#101820" /></svg>;
        case "vercel":
            return <svg {...shared}><path d="M16 4 29 27H3L16 4Z" fill="currentColor" /></svg>;
        case "tailwind":
            return <svg {...shared}><path d="M4 16c2.2-5.3 5.2-7.9 9-7.9 5.7 0 5.2 5.2 8.1 5.2 1.9 0 3.2-1.1 4-3.3-2.2 5.3-5.2 7.9-9 7.9-5.7 0-5.2-5.2-8.1-5.2-1.9 0-3.2 1.1-4 3.3Z" fill="currentColor" /><path d="M4 25c2.2-5.3 5.2-7.9 9-7.9 5.7 0 5.2 5.2 8.1 5.2 1.9 0 3.2-1.1 4-3.3-2.2 5.3-5.2 7.9-9 7.9-5.7 0-5.2-5.2-8.1-5.2-1.9 0-3.2 1.1-4 3.3Z" fill="currentColor" /></svg>;
        case "angular":
            return <svg {...shared}><path d="m16 3 11 4-1.7 15L16 29 6.7 22 5 7l11-4Z" fill="currentColor" /><path d="m16 7-6 13h3l1.2-3h3.6l1.2 3h3L16 7Zm0 4 1.1 3h-2.2l1.1-3Z" fill="#18151b" /></svg>;
        case "java":
            return <svg {...shared}><path d="M13 5c4 3-2 4 1 7 2 2 5 1 4-2 3 3 1 7-3 7-4 0-6-3-4-6 1-2 4-3 2-6Z" fill="currentColor" /><path d="M7 22c3 2 12 2 18 0-1 4-15 5-18 0Zm3-3c3 1 7 1 12 0-1 3-10 4-12 0Z" fill="currentColor" /></svg>;
        case "kotlin":
            return <svg {...shared}><path d="M4 4h24L4 28V4Z" fill="#7f52ff" /><path d="M4 28 16.7 15.3 28 28H4Z" fill="#e44857" /><path d="M4 28 16.7 15.3 22 20.6 14.6 28H4Z" fill="#f88909" /><path d="m10 22 6.2-6.2L22 22h-3.6l-2.2-2.2-2.7 2.7L10 22Z" fill="#fff" /></svg>;
        case "swift":
            return <svg {...shared}><path d="M25 7c-1.3 3.3-3.2 5.9-5.8 7.9-2.7-1.7-5.9-4.1-9.6-7.5 2.1 3.1 4.5 5.8 7.1 8-3.3 1.3-6.9 1-10.7-.7 3.2 3.7 7.1 5.6 11.6 5.6 2.8 0 5.2-.8 7.2-2.3.6.7 1.1 1.5 1.5 2.4-1.8 2.7-4.8 4.1-8.9 4.1-4.6 0-8.7-1.7-12.4-5.1 3.1 4.8 7.4 7.2 12.9 7.2 6.6 0 11.1-3.6 11.1-10.1 0-3.4-1.3-6.6-4-9.5Z" fill="currentColor" /></svg>;
        case "xampp":
            return <svg {...shared}><rect x="2" y="2" width="28" height="28" rx="5" fill="#ff751f" /><path d="M9.3 13.2c-1.6-1.5-1.8-3.8-.5-5.5 1.5-2 4.4-2.2 6.2-.4l1 1 1-1c1.8-1.8 4.7-1.6 6.2.4 1.3 1.7 1.1 4-.5 5.5l-2.2 2.1 2.2 2.1c1.6 1.5 1.8 3.8.5 5.5-1.5 2-4.4 2.2-6.2.4l-1-1-1 1c-1.8 1.8-4.7 1.6-6.2-.4-1.3-1.7-1.1-4 .5-5.5l2.2-2.1-2.2-2.1Z" fill="#fff" /><path d="M11.5 10.1c1.1 1.1 2.2 2.1 4.5 4.2-2.3 2.1-3.4 3.1-4.5 4.2" stroke="#ff751f" strokeWidth="3.8" strokeLinecap="round" /><path d="M20.5 10.1c-1.1 1.1-2.2 2.1-4.5 4.2 2.3 2.1 3.4 3.1 4.5 4.2" stroke="#ff751f" strokeWidth="3.8" strokeLinecap="round" /></svg>;
        case "dotnet-maui":
            return <svg {...shared}><path d="m5 22 11-18 11 18H5Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" /><path d="m10 19 6-10 6 10h-5l-1-2-1 2h-5Z" fill="currentColor" /></svg>;
        case "dotnet":
            return <svg {...shared}><path d="M4 9h17M4 15h12M4 21h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /><circle cx="24" cy="21" r="3" fill="currentColor" /><circle cx="27" cy="8" r="2" fill="currentColor" /></svg>;
    }
}
