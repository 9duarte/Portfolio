"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ProjectImagePreview({
    src,
    alt,
    name,
}: {
    src: string;
    alt: string;
    name: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen && !dialog.open) dialog.showModal();
        if (!isOpen && dialog.open) dialog.close();
    }, [isOpen]);

    return (
        <>
            <button
                className="project-visual"
                type="button"
                aria-label={`Enlarge image: ${name}`}
                onClick={() => setIsOpen(true)}
            >
                <Image src={src} alt={alt} width={1280} height={720} sizes="(max-width: 850px) 100vw, 56vw" />
            </button>

            <dialog
                ref={dialogRef}
                className="image-lightbox"
                aria-label={`Enlarged image: ${name}`}
                onClose={() => setIsOpen(false)}
                onClick={(event) => {
                    if (event.target === event.currentTarget) setIsOpen(false);
                }}
            >
                <button className="image-lightbox-close" type="button" aria-label="Close image" onClick={() => setIsOpen(false)}>
                    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18" /></svg>
                </button>
                <Image className="image-lightbox-image" src={src} alt={alt} width={1280} height={720} sizes="96vw" />
            </dialog>
        </>
    );
}
