
// export function PipelineBoardHeader() {
//     return (
//         <div className="mb-8 text-center">
//             <span className="rounded-full border border-pink-200 bg-pink-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-pink-600">
//                 Interactive Workspace Preview
//             </span>

//             <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
//                 Your Entire Pipeline, Visually Mastered
//             </h2>

//             <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
//                 Filter by status, view active interview dates, check ATS match
//                 scores, and track compensation targets.
//             </p>
//         </div>
//     );
// }


import { AddApplicationDialog } from "@/src/components/dashboard/AddApplicationDialog";

interface PipelineBoardHeaderProps {
    count: number;
}

export function PipelineBoardHeader({ count }: PipelineBoardHeaderProps) {
    return (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    Your pipeline
                </h1>

                <p className="text-sm font-medium text-slate-600">
                    {count === 0
                        ? "Add your first application to get started."
                        : `${count} ${count === 1 ? "opportunity" : "opportunities"} tracked`}
                </p>
            </div>

            <AddApplicationDialog />
        </div>
    );
}
