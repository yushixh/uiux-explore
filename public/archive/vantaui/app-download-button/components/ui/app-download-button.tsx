"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface AppDownloadButtonProps
    extends ComponentPropsWithoutRef<typeof motion.button> {
    store: "app-store" | "google-play";
    className?: string;
}

export const AppDownloadButton = ({
    store,
    className,
    ...props
}: AppDownloadButtonProps) => {
    const isAppStore = store === "app-store";

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "group relative cursor-pointer overflow-hidden rounded-lg border border-border/50 bg-secondary",
                className,
            )}
            {...props}
        >
            <div className="relative flex h-full w-full items-center gap-2 py-2 pl-3 pr-6">
                <div className="relative size-8">
                    <Image
                        fill
                        src={
                            isAppStore
                                ? "/assets/apple.svg"
                                : "/assets/google-play.svg"
                        }
                        alt={isAppStore ? "App Store" : "Google Play Store"}
                        className="object-contain"
                    />
                </div>

                <div className="flex flex-col items-start justify-center -space-y-0.5">
                    <span className="text-[9px] font-medium uppercase leading-tight tracking-tight text-muted-foreground">
                        {isAppStore ? "Download on the" : "Get it on"}
                    </span>
                    <span className="text-base font-medium leading-tight text-foreground">
                        {isAppStore ? "App Store" : "Google Play"}
                    </span>
                </div>
            </div>
        </motion.button>
    );
};
