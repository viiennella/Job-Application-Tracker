

import {
    STAGES,
    STAGE_CONFIG,
    type Stage,
} from "@/src/lib/applications";

export type PipelineTab = "all" | Stage;

interface PipelineFiltersProps {
    activeTab: PipelineTab;
    onTabChange: (tab: PipelineTab) => void;
    totalCount: number;
    stageCounts: Record<Stage, number>;
}

export function PipelineFilters({
    activeTab,
    onTabChange,
    totalCount,
    stageCounts,
}: PipelineFiltersProps) {
    const tabs: { key: PipelineTab; label: string; count: number; active: string; idle: string }[] = [
        {
            key: "all",
            label: "All",
            count: totalCount,
            active: "bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 text-pink-950 border-transparent shadow-sm",
            idle: "border-transparent text-slate-700 hover:bg-pink-50",
        },
        ...STAGES.map((stage) => ({
            key: stage,
            label: STAGE_CONFIG[stage].label,
            count: stageCounts[stage],
            active: STAGE_CONFIG[stage].tabActive,
            idle: STAGE_CONFIG[stage].tabIdle,
        })),
    ];

    return (
        <div
            className="mb-6 flex flex-wrap items-center gap-1.5 rounded-2xl border-2 border-pink-200 bg-white p-2 shadow-md shadow-pink-100"
            role="group"
            aria-label="Filter applications by stage"
        >
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    type="button"
                    aria-pressed={activeTab === tab.key}
                    onClick={() => onTabChange(tab.key)}
                    className={`rounded-xl border px-3.5 py-1.5 text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 ${activeTab === tab.key ? tab.active : tab.idle
                        }`}
                >
                    {tab.label} ({tab.count})
                </button>
            ))}
        </div>
    );
}

