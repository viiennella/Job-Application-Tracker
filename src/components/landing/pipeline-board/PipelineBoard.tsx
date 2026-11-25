/**
 * @file PipelineBoard.tsx
 * @description Interactive Pipeline Kanban board showcase with filter tabs,
 * stage counts, and browser extension quick-capture callout.
 * Bright pastel pink & buttery yellow accents.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { JobCard, PipelineStage } from "../types";
import { DEFAULT_MOCK_JOBS } from "../data";
import { PipelineJobCard } from "./PipelineJobCard";

export interface PipelineBoardProps {
  /** Optional custom list of jobs */
  jobs?: JobCard[];
  /** Extension download link */
  extensionHref?: string;
}

export function PipelineBoard({
  jobs = DEFAULT_MOCK_JOBS,
  extensionHref = "/sign-up",
}: PipelineBoardProps) {
  const [activeTab, setActiveTab] = useState<"all" | PipelineStage>("all");

  const filteredJobs =
    activeTab === "all" ? jobs : jobs.filter((job) => job.stage === activeTab);

  // Compute live stage counts
  const stageCounts = {
    wishlist: jobs.filter((j) => j.stage === "wishlist").length,
    applied: jobs.filter((j) => j.stage === "applied").length,
    interviewing: jobs.filter((j) => j.stage === "interviewing").length,
    offer: jobs.filter((j) => j.stage === "offer").length,
  };

  return (
    <section id="pipeline" className="px-4 sm:px-6 py-12 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-100 border border-pink-200 px-3 py-1 rounded-full">
          Interactive Workspace Preview
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
          Your Entire Pipeline, Visually Mastered
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mt-2">
          Filter by status, view active interview dates, check ATS match scores, and track compensation targets.
        </p>
      </div>

      {/* Filter Tabs Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-white/90 p-2 rounded-2xl border-2 border-pink-200 shadow-md shadow-pink-100">
        <div className="flex flex-wrap items-center gap-1.5" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "all"}
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "all"
                ? "bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 text-pink-950 shadow-sm"
                : "text-slate-700 hover:bg-pink-50"
            }`}
          >
            All Opportunities ({jobs.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "wishlist"}
            onClick={() => setActiveTab("wishlist")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "wishlist"
                ? "bg-amber-200 text-amber-950 border border-amber-300 shadow-sm"
                : "text-slate-700 hover:bg-amber-50"
            }`}
          >
            Wishlist ({stageCounts.wishlist})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "applied"}
            onClick={() => setActiveTab("applied")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "applied"
                ? "bg-sky-200 text-sky-950 border border-sky-300 shadow-sm"
                : "text-slate-700 hover:bg-sky-50"
            }`}
          >
            Applied ({stageCounts.applied})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "interviewing"}
            onClick={() => setActiveTab("interviewing")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "interviewing"
                ? "bg-purple-200 text-purple-950 border border-purple-300 shadow-sm"
                : "text-slate-700 hover:bg-purple-50"
            }`}
          >
            Interviewing ({stageCounts.interviewing})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "offer"}
            onClick={() => setActiveTab("offer")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "offer"
                ? "bg-emerald-200 text-emerald-950 border border-emerald-300 shadow-sm"
                : "text-slate-700 hover:bg-emerald-50"
            }`}
          >
            Offers ({stageCounts.offer})
          </button>
        </div>

        {/* Live Status Indicators */}
        <div className="hidden lg:flex items-center gap-3 text-xs text-slate-600 px-3 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
            <span>2 Verbal Offers Active</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
            <span>Next Loop: Tomorrow 2pm</span>
          </span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredJobs.map((job) => (
          <PipelineJobCard key={job.id} job={job} />
        ))}
      </div>

      {/* 1-Click Extension Action Banner with Pastel Sunset Gradient */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border-2 border-pink-200 bg-gradient-to-r from-pink-100 via-yellow-100 to-rose-100 p-6 shadow-lg shadow-pink-100">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-white shadow-xs text-pink-600 flex items-center justify-center shrink-0">
            <Plus className="h-6 w-6 stroke-[2.5]" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base">
              Add Any Role in 1 Click via Chrome Extension
            </h3>
            <p className="text-xs text-slate-700 font-medium">
              Save postings from LinkedIn, Indeed, Greenhouse, and Ashby without copy-pasting.
            </p>
          </div>
        </div>
        <Link
          href={extensionHref}
          className="rounded-2xl bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 text-pink-950 font-extrabold px-5 py-2.5 text-xs shadow-md shadow-pink-200 hover:from-pink-500 hover:to-yellow-400 transition-all shrink-0"
        >
          Get Extension (Free)
        </Link>
      </div>
    </section>
  );
}
