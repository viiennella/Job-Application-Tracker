

import { Calendar } from "lucide-react";

interface PipelineJobCardNextStepProps {
    nextStep?: string | null;
}

export function PipelineJobCardNextStep({ nextStep }: PipelineJobCardNextStepProps) {
    if (!nextStep) return null;

    return (
        <div className="mt-4 flex min-w-0 items-center gap-1.5 rounded-2xl border border-yellow-200 bg-yellow-50/80 p-2.5 text-xs font-medium text-amber-950">
            <Calendar
                className="h-3.5 w-3.5 shrink-0 text-amber-600"
                aria-hidden="true"
            />
            <span className="break-words">{nextStep}</span>
        </div>
    );
}
