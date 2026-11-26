

import { DollarSign } from "lucide-react";

interface PipelineJobCardDetailsProps {
    role: string;
    salary?: string | null;
}

export function PipelineJobCardDetails({ role, salary }: PipelineJobCardDetailsProps) {
    return (
        <div className="mt-4 min-w-0">
            <div className="break-words text-sm font-bold text-slate-800">
                {role}
            </div>

            {salary && (
                <div className="mt-1 flex items-center gap-1 text-xs font-bold text-emerald-700">
                    <DollarSign className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{salary}</span>
                </div>
            )}
        </div>
    );
}
