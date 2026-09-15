"use client";

import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useCallback, useEffect, useRef, useState, type ComponentProps } from "react";
import { flushSync } from "react-dom";

import { cn } from "@/lib/utils";

import { Switch } from "./switch";

gsap.registerPlugin(MorphSVGPlugin);

const SWITCH_PATHS = {
    default:
        "M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z",
    hover: "M20 9C20 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 20 5.02944 20 9Z",
    click1: "M36 9C36 15.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 36 2.02944 36 9Z",
    click2: "M35.9954 9C35.9954 13.9706 31.9659 18 26.9954 18C22.0248 18 23.9954 12.9706 23.9954 9C23.9954 5.02944 22.0248 0 26.9954 0C31.9659 0 35.9954 4.02944 35.9954 9Z",
    click3: "M36 9C36 13.9706 31.9706 18 27 18C22.0294 18 18 13.9706 18 9C18 4.02944 22.0294 0 27 0C31.9706 0 36 4.02944 36 9Z",
} as const;

type MorphingSwitchProps = ComponentProps<typeof Switch>;
type SwitchCheckedChangeHandler = NonNullable<MorphingSwitchProps["onCheckedChange"]>;
type SwitchChangeEventDetails = Parameters<SwitchCheckedChangeHandler>[1];

function MorphingSwitch({
    className,
    checked: checkedProp,
    defaultChecked,
    onCheckedChange,
    disabled,
    ...props
}: MorphingSwitchProps) {
    const [checked, setChecked] = useState(
        checkedProp ?? defaultChecked ?? false,
    );
    const [isAnimating, setIsAnimating] = useState(false);
    const pathRef = useRef<SVGPathElement>(null);
    const isAnimatingRef = useRef(false);

    useEffect(() => {
        if (checkedProp !== undefined && !isAnimatingRef.current) {
            setChecked(checkedProp);
        }
    }, [checkedProp]);

    const updateChecked = useCallback(
        (nextChecked: boolean, eventDetails: SwitchChangeEventDetails) => {
            onCheckedChange?.(nextChecked, eventDetails);
        },
        [onCheckedChange],
    );

    const runToggleAnimation = useCallback(
        (nextChecked: boolean, eventDetails: SwitchChangeEventDetails) => {
            const path = pathRef.current;
            if (!path || isAnimatingRef.current || disabled) {
                return;
            }

            isAnimatingRef.current = true;
            setIsAnimating(true);
            gsap.killTweensOf(path);

            gsap.to(path, {
                overwrite: true,
                keyframes: [
                    {
                        morphSVG: SWITCH_PATHS.click1,
                        duration: 0.15,
                    },
                    {
                        morphSVG: SWITCH_PATHS.click2,
                        duration: 0.15,
                    },
                    {
                        morphSVG: SWITCH_PATHS.click3,
                        duration: 0.5,
                        ease: "elastic.out(1, 0.8)",
                        onComplete: () => {
                            flushSync(() => {
                                setChecked(nextChecked);
                                setIsAnimating(false);
                                isAnimatingRef.current = false;
                            });
                            gsap.set(path, {
                                morphSVG: SWITCH_PATHS.default,
                            });
                            updateChecked(nextChecked, eventDetails);
                        },
                    },
                ],
            });
        },
        [disabled, updateChecked],
    );

    const handleMouseEnter = () => {
        if (isAnimatingRef.current || disabled || !pathRef.current) {
            return;
        }

        gsap.to(pathRef.current, {
            overwrite: true,
            morphSVG: SWITCH_PATHS.hover,
            duration: 0.15,
        });
    };

    const handleMouseLeave = () => {
        if (isAnimatingRef.current || disabled || !pathRef.current) {
            return;
        }

        gsap.to(pathRef.current, {
            overwrite: true,
            morphSVG: SWITCH_PATHS.default,
            duration: 0.15,
        });
    };

    return (
        <div
            className={cn(
                "relative inline-flex h-[22px] w-10 items-center",
                className,
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Switch
                checked={checked}
                disabled={disabled}
                onCheckedChange={(nextChecked, eventDetails) => {
                    if (nextChecked === checked) {
                        return;
                    }

                    runToggleAnimation(nextChecked, eventDetails);
                }}
                className={cn(
                    "data-[size=default]:h-[22px]! data-[size=default]:w-10! data-[size=sm]:h-[18px]! data-[size=sm]:w-8!",
                    "rounded-[11px] border-0 shadow-none transition-colors duration-300 after:hidden",
                    isAnimating &&
                        !checked &&
                        "data-unchecked:bg-primary",
                    isAnimating &&
                        checked &&
                        "data-checked:bg-input dark:data-checked:bg-input/80",
                    "**:data-[slot=switch-thumb]:opacity-0",
                )}
                {...props}
            />
            <svg
                aria-hidden
                viewBox="0 0 36 18"
                className={cn(
                    "pointer-events-none absolute top-1/2 left-[2px] block h-[18px] w-9 -translate-y-1/2 fill-background transition-transform duration-0 dark:fill-foreground",
                    "filter-[drop-shadow(0_0.5px_0.5px_color-mix(in_oklab,var(--foreground)_10%,transparent))]",
                    checked && "dark:fill-primary-foreground",
                    checked && "-scale-x-100",
                )}
            >
                <path ref={pathRef} d={SWITCH_PATHS.default} />
            </svg>
        </div>
    );
}

export { MorphingSwitch, type MorphingSwitchProps };
