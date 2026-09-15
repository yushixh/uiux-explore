import { GradientButton } from "@/components/ui/gradient-button"
import Link from "next/link"

const Page = () => {
    return (
        <div className=" w-full h-screen bg-background flex flex-col items-center justify-center">
            <Link href="https://www.vantaui.com/sign-up">
                <GradientButton>Create new account</GradientButton>
            </Link>
        </div>
    )
}

export default Page
