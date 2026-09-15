import { AppDownloadButton } from "@/components/ui/app-download-button"
import Link from "next/link"

const Page = () => {
    return (
        <div className="flex h-screen w-full items-center justify-center gap-3 bg-background">
            <Link href="https://apps.apple.com">
                <AppDownloadButton store="app-store" />
            </Link>
            <Link href="https://play.google.com">
                <AppDownloadButton store="google-play" />
            </Link>
        </div>
    )
}

export default Page
