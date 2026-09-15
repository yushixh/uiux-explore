"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface GradientButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    gradientRotation?: number;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
    (
        { className, children, gradientRotation = 120, style, ...props },
        ref,
    ) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex group z-1 cursor-pointer items-center justify-center gap-2.5 font-mono",
                    "rounded-full text-sm leading-[1.6] tracking-[0.01em]",
                    "whitespace-nowrap uppercase transition-all outline-none select-none",
                    "disabled:pointer-events-none",

                    "[&_svg]:pointer-events-none [&_svg]:mb-px [&_svg]:size-4 [&_svg]:shrink-0",

                    "relative border-0 bg-transparent gradient-button-hover",

                    "before:absolute before:inset-0 before:-z-10 before:rounded-full",
                    "before:transition-all before:p-px",
                    "before:bg-[conic-gradient(from_var(--gradient-rotation),#3b82f6,#10b981,#f59e0b,#ef4444,#8b5cf6,#3b82f6)]",

                    "after:absolute after:inset-px after:transition-all after:-z-10",
                    "after:rounded-full after:content-['']",

                    "active:after:inset-[2px] active:before:p-[2px]",

                    "text-neutral-800 dark:text-neutral-100",

                    "after:bg-neutral-100 dark:after:bg-neutral-900",
                    "active:after:bg-neutral-100 dark:active:after:bg-neutral-900",
                    "hover:after:bg-neutral-200 dark:hover:after:bg-neutral-800",

                    "focus-visible:ring-1 focus-visible:ring-offset-3",
                    "focus-visible:ring-[#979797] dark:focus-visible:ring-neutral-300",
                    "focus-visible:ring-offset-background",

                    "disabled:opacity-50",

                    "h-10 px-5 py-2",

                    className
                )}
                style={
                    {
                        "--gradient-rotation": `${gradientRotation}deg`,
                        ...style,
                    } as React.CSSProperties
                }
                {...props}
            >
                {children}
            </button>
        );
    }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };
