import type { Technology } from "../data/portfolio";

export function TechIcon({ icon }: { icon: Technology["icon"] }) {
    const shared = {
        "aria-hidden": true as const,
        className: `tech-icon tech-icon--${icon}`,
        fill: "none",
        viewBox: "0 0 32 32",
    };

    switch (icon) {
        case "react":
            return <svg {...shared}><circle cx="16" cy="16" r="2.4" fill="currentColor" /><ellipse cx="16" cy="16" rx="13" ry="5" stroke="currentColor" strokeWidth="1.7" /><ellipse cx="16" cy="16" rx="13" ry="5" stroke="currentColor" strokeWidth="1.7" transform="rotate(60 16 16)" /><ellipse cx="16" cy="16" rx="13" ry="5" stroke="currentColor" strokeWidth="1.7" transform="rotate(120 16 16)" /></svg>;
        case "typescript":
            return <svg {...shared}><rect x="3" y="3" width="26" height="26" rx="4" fill="currentColor" /><path d="M8 12h10M13 12v11m6-2c1 1.5 2.2 2.1 4 2.1 1.8 0 3-.9 3-2.2 0-3.4-6.6-1.3-6.6-5.4 0-1.6 1.3-2.8 3.5-2.8 1.5 0 2.6.4 3.6 1.5" stroke="#07101C" strokeWidth="2" strokeLinecap="round" /></svg>;
        case "next":
            return <svg {...shared}><circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.8" /><path d="M11 22V10l10 12V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
        case "php":
            return <svg {...shared}><ellipse cx="16" cy="16" rx="14" ry="9" fill="currentColor" /><path d="M8 20l2-9h4c2 0 2.8 1 2.4 2.8l-.5 2.2c-.3 1.5-1.3 2.3-2.9 2.3h-2.5l-.4 1.7H8Zm4.2-3.5h1.5c.6 0 .9-.3 1-.9l.4-1.8c.1-.6-.1-.9-.7-.9h-1.5l-.7 3.6Zm5.3 3.5 2-9h2l-.6 2.6h2.2c1.8 0 2.5.8 2.1 2.5l-.8 3.9h-2l.8-3.7c.1-.5 0-.7-.5-.7h-2.2l-.9 4.4h-2.1Z" fill="#101A2B" /></svg>;
        case "node":
            return <svg {...shared}><path d="m16 2 12 7v14l-12 7L4 23V9l12-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><text x="8" y="20" fill="currentColor" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="700">JS</text></svg>;
        case "mysql":
            return <svg {...shared}><path d="M4 21c5.5 1.3 10.6-.1 13.4-4.1 1.1-1.6 1.9-3.4 2.8-5.2 1.3 2.6 3.2 4 6.2 4.4-2.6-1.9-3.7-4.4-3.8-7.5-.1-2.7-1.4-4.4-3.9-5.2 1 1.3 1.2 2.5.7 3.8-1.1-1.6-2.6-2.4-4.7-2.5 1.4 1.2 2 2.6 1.9 4.3-.2 5.5-4.8 9.4-12.6 12Z" fill="currentColor" /><circle cx="22.2" cy="9.4" r=".7" fill="#081016" /></svg>;
        case "git":
            return <svg {...shared}><path d="M14 2.8a2.8 2.8 0 0 1 4 0l11.2 11.2a2.8 2.8 0 0 1 0 4L18 29.2a2.8 2.8 0 0 1-4 0L2.8 18a2.8 2.8 0 0 1 0-4L14 2.8Z" fill="currentColor" /><path d="m11 11 10 10m-5-15v8a3 3 0 0 1-3 3h-2" stroke="#15100F" strokeWidth="2" strokeLinecap="round" /><circle cx="16" cy="8" r="1.5" fill="#15100F" /><circle cx="11" cy="17" r="1.5" fill="#15100F" /></svg>;
        case "tailwind":
            return <svg {...shared}><path d="M16 7c-4.3 0-7 2.1-8.1 6.3 1.6-2.1 3.5-2.8 5.6-2.1 1.2.4 2.1 1.5 3.1 2.5 1.6 1.6 3.3 2.7 6.6 2.7 4.3 0 7-2.1 8.1-6.3-1.6 2.1-3.5 2.8-5.6 2.1-1.2-.4-2.1-1.5-3.1-2.5C21 8.1 19.3 7 16 7ZM8 17c-4.3 0-7 2.1-8.1 6.3 1.6-2.1 3.5-2.8 5.6-2.1 1.2.4 2.1 1.5 3.1 2.5 1.6 1.6 3.3 2.7 6.6 2.7 4.3 0 7-2.1 8.1-6.3-1.6 2.1-3.5 2.8-5.6 2.1-1.2-.4-2.1-1.5-3.1-2.5C13 18.1 11.3 17 8 17Z" fill="currentColor" transform="translate(3 0) scale(.82)" /></svg>;
        case "docker":
            return <svg {...shared}><path d="M3 18h25c-.7 5-4.1 8-10 8H11c-4.4 0-7.1-2.7-8-8Z" fill="currentColor" /><path d="M8 14h4v4H8zm5 0h4v4h-4zm5 0h4v4h-4zm-5-5h4v4h-4zm5 0h4v4h-4zm-5-5h4v4h-4z" fill="currentColor" /><path d="M25 14c2-1 3.5-1.1 5-.4-.4 1.7-1.5 2.8-3.7 3.1" fill="currentColor" /></svg>;
    }
}
