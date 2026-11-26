
import type { JobCard } from "../../types";
import { PipelineJobCard } from "../PipelineJobCard";

interface PipelineJobGridProps {
    jobs: JobCard[];
}

export function PipelineJobGrid({ jobs }: PipelineJobGridProps) {
    if (jobs.length === 0) {
        return (
            <div className="rounded-3xl border-2 border-dashed border-pink-200 bg-pink-50/40 px-6 py-12 text-center">
                <h3 className="font-bold text-slate-800">
                    No opportunities here yet
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                    Applications matching this stage will appear here.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
                <PipelineJobCard key={job.id} job={job} />
            ))}
        </div>
    );
}
