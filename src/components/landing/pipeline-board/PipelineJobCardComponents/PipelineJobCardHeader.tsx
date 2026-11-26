

import type { ReactNode } from "react";
import { MapPin } from "lucide-react";
import {
    logoColor,
    STAGE_CONFIG,
    type Stage,
} from "@/src/lib/applications";

interface PipelineJobCardHeaderProps {
    company: string;
    location?: string | null;
    stage: Stage;
    stageControl?: ReactNode;
    stageLabel?: string;
}

export function PipelineJobCardHeader({
    company,
    location,
    stage,
    stageControl,
    stageLabel,
}: PipelineJobCardHeaderProps) {
    const config = STAGE_CONFIG[stage];

    return (
        <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
                <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white shadow-sm ${logoColor(company)}`}
                    aria-hidden="true"
                >
                    {company.charAt(0).toUpperCase()}
                </div>

                <div className="min-w-0">
                    <h3 className="truncate font-extrabold text-slate-900 transition-colors group-hover:text-pink-600">
                        {company}
                    </h3>

                    {location && (
                        <p className="flex items-center gap-1 text-xs font-medium text-slate-600">
                            <MapPin
                                className="h-3 w-3 shrink-0 text-pink-400"
                                aria-hidden="true"
                            />
                            <span className="truncate">{location}</span>
                        </p>
                    )}
                </div>
            </div>

            {stageControl ?? (
                <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-bold ${config.badge}`}
                >
                    {stageLabel}
                </span>
            )}
        </div>
    );
}
