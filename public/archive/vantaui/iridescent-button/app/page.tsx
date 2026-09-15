"use client"

import { IridescentButton } from "@/components/ui/iridescent-button";
import Link from "next/link";

const Page = () => {
    return (
        <main className="grid grid-cols-1 min-h-screen place-items-center bg-background">

            <div className="flex gap-2">
                <IridescentButton onClick={
                    () => {
                        //  Add logic here
                    }}
                    shortcut="Esc">
                    Cancel
                </IridescentButton>

                <Link target="_blank" rel="noopener noreferrer" href="https://vantaui.com">
                    <IridescentButton>
                        Join VantaUI
                    </IridescentButton>
                </Link>
            </div>

        </main>
    );
};

export default Page;
