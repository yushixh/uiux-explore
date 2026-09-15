"use client";

import { cva, type VariantProps } from "class-variance-authority";
import gsap from "gsap";
import { useLayoutEffect, useMemo, useRef } from "react";

import { cn } from "@/lib/utils";

export const TEXT_REPETITION_VARIANTS = [
    "spread",
    "outline",
    "fade",
    "scatter",
    "trail",
] as const;

export type TextRepetitionVariant = (typeof TEXT_REPETITION_VARIANTS)[number];
export type TextRepetitionSize = "sm" | "md" | "lg" | "xl";
export type TextRepetitionAlign = "left" | "center" | "right";

const textRepetitionVariants = cva(
    "relative m-0 grid w-max max-w-full cursor-default font-black uppercase select-none",
    {
        variants: {
            variant: {
                spread: "",
                outline: "",
                fade: "",
                scatter: "font-serif font-normal lowercase",
                trail: "",
            },
            size: {
                sm: "text-[13vw]",
                md: "text-[16vw]",
                lg: "text-[24vw]",
                xl: "text-[26vw]",
            },
            align: {
                left: "mr-auto",
                center: "mx-auto",
                right: "ml-auto",
            },
        },
        defaultVariants: {
            variant: "spread",
            size: "lg",
            align: "center",
        },
    },
);

export interface TextRepetitionProps
    extends VariantProps<typeof textRepetitionVariants> {
    text: string;
    variant?: TextRepetitionVariant;
    /** Override the number of stacked copies for the active variant. */
    layers?: number;
    className?: string;
}

type VariantMotion = {
    totalWords: number;
    tyIncrement: number;
    delayIncrement: number;
    txIncrement?: number;
    opacityIncrement?: number;
    ease: string;
};

const VARIANT_MOTION: Record<TextRepetitionVariant, VariantMotion> = {
    spread: {
        totalWords: 9,
        tyIncrement: 12,
        delayIncrement: 0.1,
        ease: "power1",
    },
    outline: {
        totalWords: 9,
        tyIncrement: 14,
        delayIncrement: 0.08,
        ease: "none",
    },
    fade: {
        totalWords: 9,
        tyIncrement: 14,
        delayIncrement: 0.08,
        ease: "none",
    },
    scatter: {
        totalWords: 7,
        tyIncrement: 40,
        delayIncrement: 0.05,
        ease: "sine.inOut",
    },
    trail: {
        totalWords: 8,
        tyIncrement: 16,
        delayIncrement: 0.01,
        txIncrement: 2,
        opacityIncrement: 0.15,
        ease: "none",
    },
};

type Layer = {
    ty: number;
    tx: number;
    delay: number;
    opacity: number;
    isMain: boolean;
};

function buildLayers(
    variant: TextRepetitionVariant,
    totalWords: number,
): Layer[] {
    const motion = VARIANT_MOTION[variant];
    const layers: Layer[] = [];

    if (variant === "trail") {
        const txIncrement = motion.txIncrement ?? 2;
        const opacityIncrement = motion.opacityIncrement ?? 0.15;

        for (let i = 0; i < totalWords; i += 1) {
            const isMain = i === totalWords - 1;
            layers.push({
                tx: isMain ? 0 : -1 * (totalWords - i) * txIncrement,
                ty: isMain ? 0 : -1 * (totalWords - i) * motion.tyIncrement,
                opacity: isMain ? 1 : Math.min(i * opacityIncrement, 1),
                delay: isMain ? 0 : (totalWords - i) * motion.delayIncrement,
                isMain,
            });
        }

        return layers;
    }

    const halfWordsCount = Math.floor(totalWords / 2);

    for (let i = 0; i < totalWords; i += 1) {
        const isMain = i === totalWords - 1;
        let ty = 0;
        let delay = 0;

        if (!isMain) {
            if (i < halfWordsCount) {
                ty = halfWordsCount * motion.tyIncrement - motion.tyIncrement * i;
                delay =
                    motion.delayIncrement * (halfWordsCount - i) -
                    motion.delayIncrement;
            } else {
                ty =
                    -1 *
                    (halfWordsCount * motion.tyIncrement -
                        (i - halfWordsCount) * motion.tyIncrement);
                delay =
                    motion.delayIncrement *
                        (halfWordsCount - (i - halfWordsCount)) -
                    motion.delayIncrement;
            }
        }

        layers.push({ ty, tx: 0, opacity: 1, delay, isMain });
    }

    return layers;
}

function contentHeight(el: HTMLElement): number {
    const computedStyle = getComputedStyle(el);
    return (
        el.clientHeight -
        parseFloat(computedStyle.paddingTop) -
        parseFloat(computedStyle.paddingBottom)
    );
}

function datasetNumber(target: object, key: string): number {
    if (!(target instanceof HTMLElement)) {
        return 0;
    }

    return Number(target.dataset[key] ?? 0);
}

function createScrollTimeline(
    variant: TextRepetitionVariant,
    words: HTMLElement[],
    ease: string,
): gsap.core.Timeline {
    const timeline = gsap.timeline({ paused: true });
    const delay = (_: number, target: object) => datasetNumber(target, "delay");

    if (variant === "spread") {
        timeline.to(words, {
            duration: 1,
            ease,
            yPercent: (_, target) => datasetNumber(target, "ty"),
            delay,
        });
        return timeline;
    }

    if (variant === "outline") {
        timeline
            .to(
                words,
                {
                    duration: 1,
                    ease,
                    yPercent: (_, target) => datasetNumber(target, "ty"),
                    delay,
                },
                0,
            )
            .to(words, {
                duration: 1,
                ease,
                yPercent: 0,
                delay,
            });
        return timeline;
    }

    if (variant === "fade") {
        timeline
            .to(
                words,
                {
                    duration: 1,
                    ease,
                    startAt: { opacity: 0 },
                    opacity: 1,
                    yPercent: (_, target) => datasetNumber(target, "ty"),
                    delay,
                },
                0,
            )
            .to(words, {
                duration: 1,
                ease,
                opacity: 0,
                yPercent: 0,
                delay,
            });
        return timeline;
    }

    if (variant === "scatter") {
        timeline.to(words, {
            duration: 1,
            ease,
            yPercent: (_, target) => datasetNumber(target, "ty"),
            xPercent: (_, target) => datasetNumber(target, "ty") * 0.1,
            opacity: 0,
            delay,
        });
        return timeline;
    }

    timeline.to(words, {
        duration: 1,
        ease,
        yPercent: (_, target) => -1 * datasetNumber(target, "ty"),
        xPercent: (_, target) => -1 * datasetNumber(target, "tx"),
        startAt: { opacity: 0 },
        opacity: (_, target) => datasetNumber(target, "opacity"),
        delay,
    });

    return timeline;
}

function TextRepetition({
    text,
    variant = "spread",
    size = "lg",
    align = "center",
    layers: layersProp,
    className,
}: TextRepetitionProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const motion = VARIANT_MOTION[variant];
    const totalWords = layersProp ?? motion.totalWords;
    const layers = useMemo(
        () => buildLayers(variant, totalWords),
        [variant, totalWords],
    );
    const usesOpaqueCopies = variant === "spread" || variant === "outline";
    const usesMetricPadding = variant === "spread" || variant === "outline";

    useLayoutEffect(() => {
        const el = rootRef.current;
        if (!el) {
            return;
        }

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (reducedMotion) {
            return;
        }

        const copies = Array.from(el.querySelectorAll<HTMLElement>("span")).slice(
            0,
            -1,
        );
        if (copies.length === 0) {
            return;
        }

        const setBoundaries = () => {
            const travelFactor =
                variant === "trail"
                    ? totalWords
                    : Math.floor(totalWords / 2);
            const paddingBottomMarginTop =
                contentHeight(el) * travelFactor * (motion.tyIncrement / 100);

            gsap.set(
                el,
                variant === "trail"
                    ? { paddingBottom: paddingBottomMarginTop }
                    : {
                          marginTop: paddingBottomMarginTop,
                          paddingBottom: paddingBottomMarginTop,
                      },
            );
        };

        setBoundaries();

        const scrollTimeline = createScrollTimeline(
            variant,
            copies,
            motion.ease,
        );

        let isLoaded = false;

        const progressTween = () => {
            const elTop = el.getBoundingClientRect().top + window.scrollY;
            const scrollPosition = window.scrollY + window.innerHeight;
            const elPosition = scrollPosition - elTop;
            const durationDistance = window.innerHeight + el.offsetHeight;
            scrollTimeline.progress(elPosition / durationDistance);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry) {
                    return;
                }

                if (entry.intersectionRatio > 0) {
                    isLoaded = true;
                    gsap.ticker.add(progressTween);
                    return;
                }

                if (isLoaded) {
                    gsap.ticker.remove(progressTween);
                    return;
                }

                isLoaded = true;
                gsap.ticker.add(progressTween, true);
            },
            { root: null, rootMargin: "0px 0px", threshold: 0 },
        );

        observer.observe(el);
        window.addEventListener("resize", setBoundaries);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", setBoundaries);
            gsap.ticker.remove(progressTween);
            scrollTimeline.kill();
            gsap.set(el, { clearProps: "marginTop,paddingBottom" });
            gsap.set(copies, { clearProps: "transform,opacity" });
        };
    }, [motion.ease, motion.tyIncrement, text, totalWords, variant]);

    return (
        <div
            ref={rootRef}
            aria-label={text}
            className={cn(textRepetitionVariants({ variant, size, align }), className)}
        >
            {layers.map((layer, index) => {
                const isOutlined =
                    variant === "outline" || (variant === "fade" && !layer.isMain);

                return (
                    <span
                        key={`${text}-${index}`}
                        aria-hidden
                        data-ty={layer.ty}
                        data-tx={layer.tx}
                        data-delay={layer.delay}
                        data-opacity={layer.opacity}
                        style={
                            usesOpaqueCopies
                                ? {
                                      backgroundColor:
                                          "var(--text-rep-bg, var(--background))",
                                  }
                                : undefined
                        }
                        className={cn(
                            "col-start-1 row-start-1 leading-[0.745] will-change-transform",
                            usesMetricPadding && "pb-[0.059em]",
                            isOutlined &&
                                "[-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_currentColor]",
                        )}
                    >
                        {text}
                    </span>
                );
            })}
        </div>
    );
}

export { TextRepetition, textRepetitionVariants };
