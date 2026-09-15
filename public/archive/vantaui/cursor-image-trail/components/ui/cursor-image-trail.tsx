"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface TrailMedia {
    src: string;
    videoSrc?: string;
}

const DEFAULT_IMAGES: TrailMedia[] = [
    { src: "https://framerusercontent.com/images/3Wul3zB87cbFlm05OhXiZaxxXg.jpg?width=720&height=660" },
    { src: "https://framerusercontent.com/images/vr4TXGHUM5WvKKKpdSi7NKoU.jpg?width=720&height=600" },
    { src: "https://framerusercontent.com/images/OiLWEMPHjsMaE1LpfCX7OYHI.jpg?width=720&height=800" },
    { src: "https://framerusercontent.com/images/3RGrfrckophlAobhfZlqf1MDPd0.jpg?width=720&height=720" },
    { src: "https://framerusercontent.com/images/hZ3ztUHQQ9Tn50mg184gLvKcy4E.jpg?width=720&height=1020" },
    { src: "https://framerusercontent.com/images/Tkq5qQlGiu0yhgjP3SrSQz7eog.jpg?width=720&height=840" },
    { src: "https://framerusercontent.com/images/8VfS5zuMmDchIpaCf767I8rX7Y.jpg?width=480&height=1040" },
    { src: "https://framerusercontent.com/images/KCk7nP2M4mP1QclNxHPIrT1FvcA.jpg?width=480&height=1040" },
    { src: "https://framerusercontent.com/images/6SXUv7jMAEkw8PabtmC6TXNIiM.jpg?width=480&height=1040" },
    { src: "https://framerusercontent.com/images/PruQlxKuftAZHgOh7hJT3jaUbs.jpg?width=720&height=660" },
    {
        src: "https://framerusercontent.com/images/d4YjsL7yalSYZREJ1IdNPmw.jpg?width=720&height=840",
        videoSrc: "https://framerusercontent.com/assets/vkTXRpatm4bojSpTLqmk0YWz8.mp4",
    },
    { src: "https://framerusercontent.com/images/W1Q88PlQfYXaGug9EBkmai9By4.jpg?width=720&height=960" },
    {
        src: "https://framerusercontent.com/images/uS0nUv30GToaflDaraI9qVUIwU.png?width=1068&height=1080",
        videoSrc: "https://framerusercontent.com/assets/zpb9hZndtQsAQpA0FWIclU2ZHfw.mp4",
    },
    { src: "https://framerusercontent.com/images/gmhdX4XPuJvQqId9jDmFHb7cFE.jpg?width=720&height=780" },
    {
        src: "https://framerusercontent.com/images/4pTVxnxo0Bvii8xP7hCmmozqx7s.jpg?width=720&height=840",
        videoSrc: "https://framerusercontent.com/assets/m8Z1Zg8JHiuWfp5GqAGZylPuYCQ.mp4",
    },
    { src: "https://framerusercontent.com/images/Hp4KG1pwKb6cl66bNB9b2pYWQ3Y.jpg?width=480&height=987" },
    {
        src: "https://framerusercontent.com/images/c8yQcxKjBlCZWoqWoRoBRvjcKo.jpg?width=400&height=864",
        videoSrc: "https://framerusercontent.com/assets/QfJEiLDoHB5b7C3TtRfG3xFqCog.mp4",
    },
    { src: "https://framerusercontent.com/images/cx71XZYYWfIozOc1rn55Bw.jpg?width=480&height=1039" },
    { src: "https://framerusercontent.com/images/pzsEcmp12GBybVJMMHJIQiRfEAQ.jpg?width=480&height=1040" },
    { src: "https://framerusercontent.com/images/HnQI4uTAjbgziEmMMInd3R6o9c.jpg?width=720&height=600" },
    { src: "https://framerusercontent.com/images/iR48olgey2UZQ9FFhsWFne27Ag.jpg?width=720&height=900" },
    { src: "https://framerusercontent.com/images/JUWRJbfPWXb05lTNw0q4p1jewc.jpg?width=720&height=540" },
    { src: "https://framerusercontent.com/images/0DoFvQInPiH34TWUk6DzVA9JQ.jpg?width=720&height=852" },
    { src: "https://framerusercontent.com/images/irsyTM7kM1DWjcg6fJkQQ1O04s.jpg?width=720&height=578" },
    { src: "https://framerusercontent.com/images/0DqWFfs9zfVYPO7PZd8O8bsRtE.jpg?width=720&height=1290" },
    { src: "https://framerusercontent.com/images/07eSDIMcoh8sIIeP3LRZ0LKH9Ek.jpg?width=720&height=1080" },
    { src: "https://framerusercontent.com/images/iB2sti3JTa52BB06KGSFSXQq4cI.jpg?width=720&height=900" },
    { src: "https://framerusercontent.com/images/0EFFqlzBjEuDJK5Iy3xbQEed4rY.jpg?width=720&height=540" },
];

type ImageStatus = "active" | "inactive";

interface TrailImage extends TrailMedia {
    status: ImageStatus;
    x: number;
    y: number;
    zIndex: number;
}

export interface CursorImageTrailProps {
    images?: TrailMedia[];
    trailLength?: number;
    distanceThreshold?: number;
    className?: string;
    imageClassName?: string;
}

function createInitialTrail(images: TrailMedia[]): TrailImage[] {
    return images.map((image) => ({
        ...image,
        status: "inactive",
        x: 0,
        y: 0,
        zIndex: 0,
    }));
}

function getImageDimensions(src: string) {
    try {
        const url = new URL(src);
        const width = Number(url.searchParams.get("width"));
        const height = Number(url.searchParams.get("height"));

        if (width > 0 && height > 0) {
            return { width, height };
        }
    } catch {
        // Fall through to default dimensions.
    }

    return { width: 720, height: 720 };
}

const CursorImageTrail = ({
    images = DEFAULT_IMAGES,
    trailLength = 5,
    distanceThreshold,
    className,
    imageClassName,
}: CursorImageTrailProps) => {
    const [trailImages, setTrailImages] = useState<TrailImage[]>(() =>
        createInitialTrail(images),
    );

    const globalIndexRef = useRef(0);
    const lastRef = useRef({ x: 0, y: 0 });
    const imagesRef = useRef(images);

    useEffect(() => {
        imagesRef.current = images;
        setTrailImages(createInitialTrail(images));
        globalIndexRef.current = 0;
        lastRef.current = { x: 0, y: 0 };
    }, [images]);

    const handleMove = useCallback(
        (clientX: number, clientY: number) => {
            const distance = Math.hypot(
                clientX - lastRef.current.x,
                clientY - lastRef.current.y,
            );
            const threshold =
                distanceThreshold ?? window.innerWidth / 20;

            if (distance <= threshold) return;

            const count = imagesRef.current.length;
            const idx = globalIndexRef.current;
            const leadIndex = idx % count;
            const tailIndex = (idx - trailLength) % count;

            setTrailImages((prev) => {
                const next = [...prev];
                next[leadIndex] = {
                    ...next[leadIndex],
                    status: "active",
                    x: clientX,
                    y: clientY,
                    zIndex: idx,
                };

                if (tailIndex >= 0) {
                    next[tailIndex] = {
                        ...next[tailIndex],
                        status: "inactive",
                    };
                }

                return next;
            });

            lastRef.current = { x: clientX, y: clientY };
            globalIndexRef.current = idx + 1;
        },
        [distanceThreshold, trailLength],
    );

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            handleMove(e.clientX, e.clientY);
        };

        const onTouchMove = (e: TouchEvent) => {
            if (e.touches[0]) {
                handleMove(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
        };
    }, [handleMove]);

    return (
        <div
            className={cn(
                "pointer-events-none fixed inset-0 overflow-hidden",
                className,
            )}
            aria-hidden
        >
            {trailImages.map((image, index) => {
                const mediaStyle = {
                    left: image.x,
                    top: image.y,
                    zIndex: image.zIndex,
                };

                if (image.videoSrc) {
                    return (
                        <video
                            key={`${image.src}-${index}`}
                            src={image.videoSrc}
                            poster={image.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            data-index={index}
                            data-status={image.status}
                            className={cn(
                                "absolute w-[24vmin] -translate-x-1/2 -translate-y-1/2",
                                image.status === "inactive" && "hidden",
                                imageClassName,
                            )}
                            style={mediaStyle}
                        />
                    );
                }

                const { width, height } = getImageDimensions(image.src);

                return (
                    <Image
                        key={`${image.src}-${index}`}
                        src={image.src}
                        alt=""
                        width={width}
                        height={height}
                        loading="eager"
                        data-index={index}
                        data-status={image.status}
                        className={cn(
                            "absolute h-auto w-[24vmin] -translate-x-1/2 -translate-y-1/2",
                            image.status === "inactive" && "hidden",
                            imageClassName,
                        )}
                        style={mediaStyle}
                    />
                );
            })}
        </div>
    );
};

export { CursorImageTrail, DEFAULT_IMAGES };
