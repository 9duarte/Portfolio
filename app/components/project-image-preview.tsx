"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

export function ProjectImagePreview({
    src,
    alt,
    name,
    width,
    height,
}: {
    src: string;
    alt: string;
    name: string;
    width: number;
    height: number;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const scrollPositionRef = useRef<number | null>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const body = document.body;
        const scrollY = scrollPositionRef.current ?? window.scrollY;
        const previousBodyStyles = {
            position: body.style.position,
            top: body.style.top,
            left: body.style.left,
            right: body.style.right,
            width: body.style.width,
            overflow: body.style.overflow,
        };
        const root = document.documentElement;
        const previousScrollBehavior = root.style.scrollBehavior;

        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        body.style.left = "0";
        body.style.right = "0";
        body.style.width = "100%";
        body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        closeRef.current?.focus({ preventScroll: true });

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            body.style.position = previousBodyStyles.position;
            body.style.top = previousBodyStyles.top;
            body.style.left = previousBodyStyles.left;
            body.style.right = previousBodyStyles.right;
            body.style.width = previousBodyStyles.width;
            body.style.overflow = previousBodyStyles.overflow;

            root.style.scrollBehavior = "auto";
            window.scrollTo(0, scrollY);
            root.style.scrollBehavior = previousScrollBehavior;
            triggerRef.current?.focus({ preventScroll: true });
            scrollPositionRef.current = null;
        };
    }, [isOpen]);

    return (
        <>
            <button
                ref={triggerRef}
                className="project-visual"
                type="button"
                aria-label={`Enlarge image: ${name}`}
                onClick={() => {
                    scrollPositionRef.current = window.scrollY;
                    setIsOpen(true);
                }}
            >
                <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 850px) 100vw, 56vw" />
            </button>

            {isOpen && typeof document !== "undefined" && createPortal(
                <div
                    className="image-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Enlarged image: ${name}`}
                    onClick={(event) => {
                        if (event.target === event.currentTarget) setIsOpen(false);
                    }}
                >
                    <div className="image-lightbox-panel">
                        <button
                            ref={closeRef}
                            className="image-lightbox-close"
                            type="button"
                            aria-label="Close image"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18" /></svg>
                        </button>
                        <Image className="image-lightbox-image" src={src} alt={alt} width={width} height={height} sizes="96vw" />
                    </div>
                </div>,
                document.body,
            )}
        </>
    );
}
