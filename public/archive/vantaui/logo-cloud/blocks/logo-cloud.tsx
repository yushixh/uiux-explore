"use client";

import { Marquee } from "@/components/ui/marquee";
import { logoClouds as defaultLogos } from "@/constants";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export interface LogoCloudItem {
    name: string;
    image: string;
}

export const DEFAULT_LOGO_CLOUD_ITEMS: LogoCloudItem[] = defaultLogos;

export const DEFAULT_LOGO_CLOUD_LINK_LABEL = "Companies using VantaUI";

export const DEFAULT_LOGO_CLOUD_LINK_HREF = "https://www.vantaui.com";

export const DEFAULT_LOGO_CLOUD_IMAGE_CLASSNAME =
    "object-contain invert dark:invert-0";

export interface LogoCloudLink {
    label: string;
    href: string;
}

export interface LogoCloudProps {
    logos?: LogoCloudItem[];
    isTransparent?: boolean;
    className?: string;
    link?: Partial<LogoCloudLink>;
    linkHref?: string;
    linkLabel?: string;
    showLink?: boolean;
    logoClassName?: string;
    overlayClassName?: string;
    linkClassName?: string;
    gridClassName?: string;
    animationDelayStep?: number;
}

export function LogoCloud({
    logos = DEFAULT_LOGO_CLOUD_ITEMS,
    isTransparent = false,
    className,
    link,
    linkHref,
    linkLabel,
    showLink = true,
    logoClassName = DEFAULT_LOGO_CLOUD_IMAGE_CLASSNAME,
    overlayClassName,
    linkClassName,
    gridClassName,
    animationDelayStep = 0.1,
}: LogoCloudProps) {
    const resolvedLink: LogoCloudLink = {
        label:
            link?.label ??
            linkLabel ??
            DEFAULT_LOGO_CLOUD_LINK_LABEL,
        href:
            link?.href ?? linkHref ?? DEFAULT_LOGO_CLOUD_LINK_HREF,
    };

    const linkContent = (
        <span
            className={cn(
                "flex items-center gap-1 text-sm text-foreground hover:text-foreground/70",
                linkClassName
            )}
        >
            <p>{resolvedLink.label}</p>
            <ChevronRight className="size-4" />
        </span>
    );

    return (
        <section
            className={cn(
                "relative z-20 flex h-screen w-full flex-col items-center justify-center bg-background py-8 xl:pl-10",
                className
            )}
        >
            <div className="container mx-auto hidden w-full md:block">
                <div
                    className={cn(
                        "group relative mx-auto grid w-full max-w-4xl gap-y-7 px-12 py-6 md:grid-cols-4",
                        gridClassName
                    )}
                >
                    <div
                        className={cn(
                            "absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100",
                            isTransparent
                                ? "bg-transparent backdrop-blur-sm"
                                : "bg-background/60 backdrop-blur-sm",
                            overlayClassName
                        )}
                    >
                        {showLink ? (
                            <Link href={resolvedLink.href}>
                                <span className="flex translate-y-4 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                                    {linkContent}
                                </span>
                            </Link>
                        ) : null}
                    </div>
                    {logos.map((logo, index) => (
                        <motion.div
                            key={`${logo.name}-${index}`}
                            className="relative h-10 w-[172px]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * animationDelayStep,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Image
                                fill
                                src={logo.image}
                                alt={logo.name}
                                sizes="180px"
                                loading="eager"
                                className={logoClassName}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="relative w-full md:hidden">
                <div className="absolute top-0 bottom-0 left-0 z-1 w-[20%] bg-linear-to-r from-background to-transparent" />
                <div className="absolute top-0 right-0 bottom-0 z-1 w-[20%] bg-linear-to-l from-background to-transparent" />
                <div className="w-full px-8">
                    {showLink ? (
                        <Link href={resolvedLink.href} className="relative z-20">
                            {linkContent}
                        </Link>
                    ) : null}
                </div>
                <Marquee className="mt-4 [--gap:-0rem]">
                    <div className="flex items-center gap-0">
                        {logos.map((logo, index) => (
                            <div
                                key={`${logo.name}-mobile-${index}`}
                                className="relative h-9 w-[120px]"
                            >
                                <Image
                                    fill
                                    src={logo.image}
                                    alt={logo.name}
                                    sizes="148px"
                                    loading="eager"
                                    className={logoClassName}
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
