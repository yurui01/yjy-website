import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
    return (
        <DefaultLayout>
            <section className="relative flex flex-col h-full items-center justify-start gap-4 pt-16">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>关于我们</h1>
                </div>
                <div className="w-full items">
                    
                </div>
            </section>
        </DefaultLayout>
    );
}
