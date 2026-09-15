"use client";

import { useState } from "react";

import {
    TextRepetition,
    type TextRepetitionVariant
} from "@/components/ui/text-repetition";

const Page = () => {
    const [variant, setVariant] = useState<TextRepetitionVariant>("spread");

    return (
        <main className="min-h-[250vh] flex flex-col items-center justify-center overflow-x-clip bg-background text-foreground">
            <TextRepetition text="VantaUI" variant={variant} size="md" />
        </main>
    );
};

export default Page;
