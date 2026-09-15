"use client";

import { motion } from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";

interface InverseScaleButtonProps
    extends Omit<
        React.ComponentPropsWithoutRef<typeof motion.button>,
        "children"
    > {
    children?: React.ReactNode;
}

const InverseScaleButton = React.forwardRef<
    HTMLButtonElement,
    InverseScaleButtonProps
>(({ children = "Send Inquiry", className, ...props }, ref) => {
    return (
        <motion.button
            ref={ref}
            className={cn(
                "relative cursor-pointer overflow-hidden rounded-full border bg-transparent px-4 py-2 font-medium text-sm text-foreground",
                className,
            )}
            initial="initial"
            whileHover="hovered"
            whileTap={{ scale: 0.975 }}
            variants={{
                hovered: { scale: 1.05 },
            }}
            {...props}
        >
            <motion.span
                className="absolute inset-0 block origin-center rounded-full bg-primary"
                variants={{
                    initial: { scale: 0 },
                    hovered: { scale: 1 },
                }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            />
            <span className="relative z-10 block overflow-hidden">
                <motion.span
                    className="block"
                    variants={{
                        initial: { color: "#000000" },
                        hovered: { color: "#ffffff" },
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {children}
                </motion.span>
            </span>
        </motion.button>
    );
});

InverseScaleButton.displayName = "InverseScaleButton";

export { InverseScaleButton };
