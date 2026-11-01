import type { ContactLink } from "../data/portfolio";

export function SocialIcon({ icon }: { icon: ContactLink["icon"] }) {
    if (icon === "github") {
        return (
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.04c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.15 1.73 1.15 1 1.72 2.62 1.22 3.26.94.1-.73.39-1.22.71-1.5-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.27-2.59 5.21-5.07 5.49.4.35.76 1.02.76 2.06V22c0 .3.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
        );
    }

    if (icon === "linkedin") {
        return (
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM8.3 18H5.5V9h2.8v9ZM6.9 7.8a1.62 1.62 0 1 1 0-3.24 1.62 1.62 0 0 1 0 3.24ZM19 18h-2.8v-4.38c0-1.05-.02-2.4-1.47-2.4-1.48 0-1.7 1.15-1.7 2.33V18h-2.8V9h2.69v1.23h.04a2.95 2.95 0 0 1 2.65-1.46C18.45 8.77 19 10.6 19 12.98V18Z" />
            </svg>
        );
    }

    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
            <path d="m3.5 6 8.5 7 8.5-7" />
        </svg>
    );
}
