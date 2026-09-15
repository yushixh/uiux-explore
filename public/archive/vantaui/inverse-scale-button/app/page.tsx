import { InverseScaleButton } from "@/components/ui/inverse-scale-button";
import Link from "next/link";

const Page = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-background">
            <Link href="https://www.vantaui.com">
                <InverseScaleButton>Send Inquiry</InverseScaleButton>
            </Link>
        </div>
    );
};

export default Page;
