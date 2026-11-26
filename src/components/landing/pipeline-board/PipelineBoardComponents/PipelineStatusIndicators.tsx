
interface PipelineStatusIndicatorsProps {
    verbalOffers?: number;
    nextLoop?: string;
}

export function PipelineStatusIndicators({
    verbalOffers,
    nextLoop,
}: PipelineStatusIndicatorsProps) {
    if (verbalOffers === undefined && !nextLoop) {
        return null;
    }

    return (
        <div className="hidden items-center gap-3 px-3 text-xs font-medium text-slate-600 lg:flex">
            {verbalOffers !== undefined && (
                <span className="flex items-center gap-1.5">
                    <span
                        className="h-2.5 w-2.5 rounded-full bg-emerald-400"
                        aria-hidden="true"
                    />
                    <span>{verbalOffers} Verbal Offers Active</span>
                </span>
            )}

            {verbalOffers !== undefined && nextLoop && (
                <span aria-hidden="true">•</span>
            )}

            {nextLoop && (
                <span className="flex items-center gap-1.5">
                    <span
                        className="h-2.5 w-2.5 rounded-full bg-amber-400"
                        aria-hidden="true"
                    />
                    <span>Next Loop: {nextLoop}</span>
                </span>
            )}
        </div>
    );
}
