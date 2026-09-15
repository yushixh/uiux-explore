"use client";

import { useState } from "react";

import { MorphingSwitch } from "@/components/ui/morphing-switch";

const Page = () => {
    const [checked, setChecked] = useState(false);

    return (
        <main className="grid min-h-screen place-items-center bg-background">
            <MorphingSwitch checked={checked} onCheckedChange={setChecked} />
        </main>
    );
};

export default Page;
