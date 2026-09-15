"use client";

import * as React from "react";
import { useCallback, useRef } from "react";

import { cn } from "@/lib/utils";

export interface IridescentButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    shortcut?: string;
}

function getCursorOffset(element: HTMLElement, clientX: number, clientY: number) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    return {
        x: clientX - centerX,
        y: centerY - clientY,
    };
}

const IridescentButton = React.forwardRef<HTMLButtonElement, IridescentButtonProps>(
    ({ children, shortcut, className, onPointerMove, onPointerLeave, ...props }, ref) => {
        const buttonRef = useRef<HTMLButtonElement>(null);

        const setRef = useCallback(
            (node: HTMLButtonElement | null) => {
                buttonRef.current = node;

                if (typeof ref === "function") {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
            },
            [ref],
        );

        const handlePointerMove = (
            event: React.PointerEvent<HTMLButtonElement>,
        ) => {
            const button = buttonRef.current;
            if (button) {
                const { x, y } = getCursorOffset(
                    button,
                    event.clientX,
                    event.clientY,
                );
                button.style.setProperty("--coord-x", String(x));
                button.style.setProperty("--coord-y", String(y));
            }

            onPointerMove?.(event);
        };

        const handlePointerLeave = (
            event: React.PointerEvent<HTMLButtonElement>,
        ) => {
            const button = buttonRef.current;
            if (button) {
                button.style.setProperty("--coord-x", "0");
                button.style.setProperty("--coord-y", "0");
            }

            onPointerLeave?.(event);
        };

        return (
            <button
                ref={setRef}
                type="button"
                className={cn(
                    "iridescent-button",
                    !shortcut && "iridescent-button--solo",
                    className,
                )}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                {...props}
            >
                <span className="iridescent-button-inner tracking-tight font-medium">
                    <span className="iridescent-button-label">{children}</span>
                    {shortcut ? (
                        <span className="iridescent-button-shortcut">
                            {shortcut}
                        </span>
                    ) : null}
                </span>
            </button>
        );
    },
);

IridescentButton.displayName = "IridescentButton";

export { IridescentButton };
