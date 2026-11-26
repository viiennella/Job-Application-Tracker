
// "use client";

// import { useState } from "react";

// import type { JobCard, PipelineStage } from "../types";
// import { DEFAULT_MOCK_JOBS } from "../data";

// import type { PipelineTab } from "./PipelineBoardComponents/PipelineFilters";

// import { PipelineBoardHeader } from "./PipelineBoardComponents/PipelineBoardHeader";
// import { PipelineFilters } from "./PipelineBoardComponents/PipelineFilters";
// import { PipelineStatusIndicators } from "./PipelineBoardComponents/PipelineStatusIndicators";
// import { PipelineJobGrid } from "./PipelineBoardComponents/PipelineJobGrid";
// import { PipelineExtensionBanner } from "./PipelineBoardComponents/PipelineExtensionBanner";

// export interface PipelineBoardProps {
//   /** Optional custom list of jobs */
//   jobs?: JobCard[];

//   /** Extension download link */
//   extensionHref?: string;

//   /** Optional pipeline summary information */
//   statusSummary?: {
//     verbalOffers?: number;
//     nextLoop?: string;
//   };
// }

// export function PipelineBoard({
//   jobs = DEFAULT_MOCK_JOBS,
//   extensionHref = "/sign-up",
//   statusSummary,
// }: PipelineBoardProps) {
//   const [activeTab, setActiveTab] = useState<PipelineTab>("all");

//   // Calculate stage counts in a single pass.
//   const stageCounts = jobs.reduce<Record<PipelineStage, number>>(
//     (counts, job) => {
//       counts[job.stage] += 1;
//       return counts;
//     },
//     {
//       wishlist: 0,
//       applied: 0,
//       interviewing: 0,
//       offer: 0,
//     },
//   );

//   // Filter jobs based on the selected stage.
//   const filteredJobs =
//     activeTab === "all"
//       ? jobs
//       : jobs.filter((job) => job.stage === activeTab);

//   return (
//     <section
//       id="pipeline"
//       className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6"
//     >
//       <PipelineBoardHeader />

//       {/* Filter Bar */}
//       <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-pink-200 bg-white/90 p-2 shadow-md shadow-pink-100">
//         <PipelineFilters
//           activeTab={activeTab}
//           onTabChange={setActiveTab}
//           totalCount={jobs.length}
//           stageCounts={stageCounts}
//         />

//         <PipelineStatusIndicators
//           verbalOffers={statusSummary?.verbalOffers}
//           nextLoop={statusSummary?.nextLoop}
//         />
//       </div>

//       {/* Job Cards */}
//       <PipelineJobGrid jobs={filteredJobs} />

//       {/* Extension Banner */}
//       <PipelineExtensionBanner extensionHref={extensionHref} />
//     </section>
//   );
// }


"use client";

import { useMemo, useOptimistic, useState, useTransition } from "react";

import {
  STAGES,
  STAGE_CONFIG,
  type ActionResult,
  type Application,
  type Stage,
} from "@/src/lib/applications";

import {
  deleteApplication,
  moveApplication,
} from "@/src/lib/actions";

import { ApplicationCard } from "@/src/components/dashboard/ApplicationCard";
import { PipelineBoardHeader } from "@/src/components/landing/pipeline-board/PipelineBoardComponents/PipelineBoardHeader";
import {
  PipelineFilters,
  type PipelineTab,
} from "@/src/components/landing/pipeline-board/PipelineBoardComponents/PipelineFilters";

type OptimisticAction =
  | { type: "move"; id: string; stage: Stage }
  | { type: "delete"; id: string };

interface PipelineBoardProps {
  applications: Application[];
}

export function PipelineBoard({ applications }: PipelineBoardProps) {
  const [activeTab, setActiveTab] = useState<PipelineTab>("all");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const [items, applyOptimistic] = useOptimistic(
    applications,
    (state, action: OptimisticAction) =>
      action.type === "delete"
        ? state.filter((a) => a.id !== action.id)
        : state.map((a) =>
          a.id === action.id
            ? { ...a, stage: action.stage }
            : a
        )
  );

  // Group all applications in one pass.
  const grouped = useMemo(() => {
    const result: Record<Stage, Application[]> = {
      wishlist: [],
      applied: [],
      interviewing: [],
      offer: [],
    };

    for (const application of items) {
      result[application.stage].push(application);
    }

    return result;
  }, [items]);

  const stageCounts = useMemo(() => {
    return {
      wishlist: grouped.wishlist.length,
      applied: grouped.applied.length,
      interviewing: grouped.interviewing.length,
      offer: grouped.offer.length,
    };
  }, [grouped]);

  function run(
    action: OptimisticAction,
    request: () => Promise<ActionResult>
  ) {
    setError(null);

    startTransition(async () => {
      applyOptimistic(action);

      try {
        const result = await request();

        if (!result.ok) {
          setError(result.error);
        }
      } catch {
        setError("Something went wrong. Please try again.");
      }
    });
  }

  function handleMove(id: string, stage: Stage) {
    run(
      { type: "move", id, stage },
      () => moveApplication(id, stage)
    );
  }

  function handleDelete(id: string) {
    if (!window.confirm("Delete this application? This can't be undone.")) {
      return;
    }

    run(
      { type: "delete", id },
      () => deleteApplication(id)
    );
  }

  function renderCard(application: Application) {
    return (
      <ApplicationCard
        key={application.id}
        application={application}
        onMove={handleMove}
        onDelete={handleDelete}
      />
    );
  }

  return (
    <div className="min-w-0">
      <PipelineBoardHeader count={items.length} />

      <PipelineFilters
        activeTab={activeTab}
        onTabChange={setActiveTab}
        totalCount={items.length}
        stageCounts={stageCounts}
      />

      {error && (
        <p
          role="alert"
          className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-800"
        >
          {error}
        </p>
      )}

      {isPending && (
        <p className="sr-only" role="status" aria-live="polite">
          Saving application changes...
        </p>
      )}

      {items.length === 0 ? (
        <div className="rounded-3xl border-2 border-dashed border-pink-200 bg-white/80 px-6 py-16 text-center">
          <h2 className="text-lg font-extrabold text-slate-900">
            No applications yet
          </h2>

          <p className="mx-auto mt-1 max-w-sm text-sm font-medium text-slate-600">
            Save a role you are interested in, or one you have
            already applied to, and it will show up here.
          </p>
        </div>
      ) : activeTab === "all" ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {STAGES.map((stage) => (
            <section
              key={stage}
              aria-label={STAGE_CONFIG[stage].label}
              className="min-w-0 space-y-3"
            >
              <h2 className="flex items-center gap-2 px-1 text-sm font-extrabold text-slate-900">
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${STAGE_CONFIG[stage].dot}`}
                  aria-hidden="true"
                />

                {STAGE_CONFIG[stage].label}

                <span className="font-bold text-slate-600">
                  {grouped[stage].length}
                </span>
              </h2>

              {grouped[stage].length === 0 ? (
                <p className="rounded-2xl border-2 border-dashed border-pink-200 px-3 py-6 text-center text-xs font-medium text-slate-600">
                  Nothing here yet
                </p>
              ) : (
                <div className="space-y-3">
                  {grouped[stage].map(renderCard)}
                </div>
              )}
            </section>
          ))}
        </div>
      ) : grouped[activeTab].length === 0 ? (
        <p className="rounded-3xl border-2 border-dashed border-pink-200 bg-white/80 px-6 py-12 text-center text-sm font-medium text-slate-600">
          No applications in{" "}
          {STAGE_CONFIG[activeTab].label.toLowerCase()} yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {grouped[activeTab].map(renderCard)}
        </div>
      )}
    </div>
  );
}
