import { LogoCloud } from "@/blocks/logo-cloud";

export default function LogoCloudPage() {
    return (
        <main className="bg-background">
            <LogoCloud
                link={{
                    label: "Companies using VantaUI",
                    href: "https://www.vantaui.com",
                }}
            />
        </main>
    );
}
