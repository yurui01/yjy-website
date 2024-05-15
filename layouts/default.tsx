import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen bg-background bg-radial pt-16 w-full overflow-x-hidden overflow-y-auto">
            <Head />
            <Navbar />
            <div className="-mt-16 min-w-full  flex-grow">
                <main className="container mx-auto max-w-7xl px-6 flex-grow">
                    {children}
                </main>
            </div>
            <div className="relative w-full flex items-center justify-center py-3">
                <Link
                    className="flex items-center gap-1 text-current text-xs sm:text-sm"
                    href="陕ICP备2024036542号-1"
                >
                    <span className="text-default-600">
                        ©2024 壹加云（广州）网络科技有限公司
                    </span>
                    <p className="text-primary">陕ICP备2024036542号-1</p>
                </Link>
            </div>
        </div>
    );
}
