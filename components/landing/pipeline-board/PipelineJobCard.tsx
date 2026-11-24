/**
 * @file PipelineJobCard.tsx
 * @description Reusable job opportunity card with bright pastel status tags, match score, and next step pills.
 */

import React from "react";
import { MapPin, DollarSign, Calendar } from "lucide-react";
import { JobCard } from "../types";

export interface PipelineJobCardProps {
  /** Job opportunity data */
  job: JobCard;
  /** Optional click callback */
  onClick?: (job: JobCard) => void;
}

export function PipelineJobCard({ job, onClick }: PipelineJobCardProps) {
  // Determine badge styling with bright pastel palettes
  const stageBadgeClasses = (() => {
    switch (job.stage) {
      case "offer":
        return "bg-emerald-100 text-emerald-900 border-emerald-300";
      case "interviewing":
        return "bg-purple-100 text-purple-900 border-purple-300";
      case "applied":
        return "bg-sky-100 text-sky-900 border-sky-300";
      case "wishlist":
      default:
        return "bg-amber-100 text-amber-900 border-amber-300";
    }
  })();

  return (
    <article
      onClick={() => onClick?.(job)}
      className="group relative rounded-3xl border-2 border-pink-100 bg-white p-5 shadow-md shadow-pink-100/50 hover:shadow-xl hover:border-pink-300 transition-all duration-300"
    >
      {/* Header: Company Avatar & Stage Pill */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`h-11 w-11 rounded-2xl ${job.logoBg} flex items-center justify-center text-white font-black text-lg shadow-sm`}
            aria-hidden="true"
          >
            {job.logoLetter}
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors">
              {job.company}
            </h3>
            <p className="text-xs text-slate-500 flex items-center gap-1 font-medium">
              <MapPin className="h-3 w-3 shrink-0 text-pink-400" />
              <span>{job.location}</span>
            </p>
          </div>
        </div>

        {/* Stage Pill */}
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-bold border shadow-2xs ${stageBadgeClasses}`}
        >
          {job.stageLabel}
        </span>
      </div>

      {/* Role Title & Compensation Indicator */}
      <div className="mt-4">
        <div className="font-bold text-slate-800 text-sm">
          {job.role}
        </div>
        <div className="text-xs font-bold text-emerald-600 mt-1 flex items-center gap-1">
          <DollarSign className="h-3.5 w-3.5 text-emerald-500" />
          <span>{job.salary}</span>
        </div>
      </div>

      {/* Match Score & Progress Bar */}
      <div className="mt-4 pt-3 border-t border-pink-100">
        <div className="flex items-center justify-between text-xs mb-2 font-semibold">
          <span className="text-slate-500">ATS Keyword Fit</span>
          <span className="font-extrabold text-pink-600">
            {job.matchScore}% Match
          </span>
        </div>
        <div className="w-full bg-pink-100 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-pink-400 to-yellow-300 h-2 rounded-full transition-all duration-500"
            style={{ width: `${job.matchScore}%` }}
          />
        </div>
      </div>

      {/* Technology / Skill Chips */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg bg-pink-50 border border-pink-200/80 px-2 py-0.5 text-[10px] font-bold text-pink-800"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Next Step / Action Pill */}
      {job.nextStep && (
        <div className="mt-4 rounded-2xl bg-yellow-50/80 p-2.5 text-xs text-amber-950 font-medium flex items-center justify-between border border-yellow-200">
          <span className="flex items-center gap-1.5 truncate">
            <Calendar className="h-3.5 w-3.5 text-amber-500 shrink-0" />
            <span className="truncate">{job.nextStep}</span>
          </span>
          <span className="text-[10px] text-amber-700/80 font-bold ml-2 shrink-0">{job.appliedDate}</span>
        </div>
      )}
    </article>
  );
}
