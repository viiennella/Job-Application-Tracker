

interface PipelineJobCardMatchScoreProps {
    score: number | null;
}

export function PipelineJobCardMatchScore({ score }: PipelineJobCardMatchScoreProps) {
    if (score === null) return null;

    const safeScore = Math.min(100, Math.max(0, score));

    return (
        <div className="mt-4 border-t border-pink-100 pt-3">
            <div className="mb-2 flex items-center justify-between gap-2 text-xs font-semibold">
                <span className="text-slate-600">ATS keyword fit</span>
                <span className="font-extrabold text-pink-700">
                    {safeScore}% match
                </span>
            </div>

            <div
                className="h-2 w-full overflow-hidden rounded-full bg-pink-100"
                role="progressbar"
                aria-label="ATS keyword match"
                aria-valuenow={safeScore}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    className="h-full rounded-full bg-gradient-to-r from-pink-400 to-yellow-300"
                    style={{ width: `${safeScore}%` }}
                />
            </div>
        </div>
    );
}
