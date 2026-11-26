
import Link from "next/link";
import { Plus } from "lucide-react";

interface PipelineExtensionBannerProps {
    extensionHref?: string;
}

export function PipelineExtensionBanner({
    extensionHref = "/sign-up",
}: PipelineExtensionBannerProps) {
    return (
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border-2 border-pink-200 bg-gradient-to-r from-pink-100 via-yellow-100 to-rose-100 p-6 shadow-lg shadow-pink-100 sm:flex-row">
            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-pink-600 shadow-xs">
                    <Plus className="h-6 w-6 stroke-[2.5]" />
                </div>

                <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                        Add Any Role in 1 Click via Chrome Extension
                    </h3>

                    <p className="text-xs font-medium text-slate-700">
                        Save postings from LinkedIn, Indeed, Greenhouse, and Ashby
                        without copy-pasting.
                    </p>
                </div>
            </div>

            <Link
                href={extensionHref}
                className="shrink-0 rounded-2xl bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 px-5 py-2.5 text-xs font-extrabold text-pink-950 shadow-md shadow-pink-200 transition-all hover:from-pink-500 hover:to-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
            >
                Get Extension (Free)
            </Link>
        </div>
    );
}
