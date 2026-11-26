"use client";

import { useState } from "react";

import type { JobCard, PipelineStage } from "../types";
import { DEFAULT_MOCK_JOBS } from "../data";

import type { PipelineTab } from "./PipelineBoardComponents/PipelineFilters";

import { PipelineBoardHeader } from "./PipelineBoardComponents/PipelineBoardHeader";
import { PipelineFilters } from "./PipelineBoardComponents/PipelineFilters";
import { PipelineStatusIndicators } from "./PipelineBoardComponents/PipelineStatusIndicators";
import { PipelineJobGrid } from "./PipelineBoardComponents/PipelineJobGrid";
import { PipelineExtensionBanner } from "./PipelineBoardComponents/PipelineExtensionBanner";

export interface LandingPipelineBoardProps {
    /** Optional custom list of jobs */
    jobs?: JobCard[];

    /** Extension download link */
    extensionHref?: string;

    /** Optional pipeline summary information */
    statusSummary?: {
        verbalOffers?: number;
        nextLoop?: string;
    };
}

export function LandingPipelineBoard({
    jobs = DEFAULT_MOCK_JOBS,
    extensionHref = "/sign-up",
    statusSummary,
}: LandingPipelineBoardProps) {
    const [activeTab, setActiveTab] = useState<PipelineTab>("all");

    // Calculate stage counts in a single pass.
    const stageCounts = jobs.reduce<Record<PipelineStage, number>>(
        (counts, job) => {
            counts[job.stage] += 1;
            return counts;
        },
        {
            wishlist: 0,
            applied: 0,
            interviewing: 0,
            offer: 0,
        },
    );

    // Filter jobs based on the selected stage.
    const filteredJobs =
        activeTab === "all"
            ? jobs
            : jobs.filter((job) => job.stage === activeTab);

    return (
        <section
            id="pipeline"
            className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6"
        >
            <PipelineBoardHeader count={jobs.length} />

            {/* Filter Bar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-pink-200 bg-white/90 p-2 shadow-md shadow-pink-100">
                <PipelineFilters
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    totalCount={jobs.length}
                    stageCounts={stageCounts}
                />

                <PipelineStatusIndicators
                    verbalOffers={statusSummary?.verbalOffers}
                    nextLoop={statusSummary?.nextLoop}
                />
            </div>

            {/* Job Cards */}
            <PipelineJobGrid jobs={filteredJobs} />

            {/* Extension Banner */}
            <PipelineExtensionBanner extensionHref={extensionHref} />
        </section>
    );
}

