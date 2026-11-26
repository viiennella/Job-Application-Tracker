
import type { KeyboardEvent } from "react";

import type { JobCard } from "../types";

import { PipelineJobCardHeader } from "./PipelineJobCardComponents/PipelineJobCardHeader";
import { PipelineJobCardDetails } from "./PipelineJobCardComponents/PipelineJobCardDetails";
import { PipelineJobCardMatchScore } from "./PipelineJobCardComponents/PipelineJobMatchScore";
import { PipelineJobCardTags } from "./PipelineJobCardComponents/PipelineJobCardTags";
import { PipelineJobCardNextStep } from "./PipelineJobCardComponents/PipelineJobCardNextStep";
import { STAGE_CONFIG, STAGES } from "@/src/lib/applications";

export interface PipelineJobCardProps {
  job: JobCard;
  onClick?: (job: JobCard) => void;
}

export function PipelineJobCard({
  job,
  onClick,
}: PipelineJobCardProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!onClick) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(job);
    }
  }

  return (
    <article
      onClick={onClick ? () => onClick(job) : undefined}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
      aria-label={
        onClick ? `${job.role} at ${job.company}` : undefined
      }
      className="group relative rounded-3xl border-2 border-pink-100 bg-white p-5 shadow-md shadow-pink-100/50 transition-all duration-300 hover:border-pink-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2"
    >
      <PipelineJobCardHeader company={job.company} location={job.location} stage={job.stage} stageLabel={job.stageLabel} />

      <PipelineJobCardDetails role={job.role} salary={job.salary} />

      <PipelineJobCardMatchScore score={job.matchScore} />

      <PipelineJobCardTags tags={job.tags} />

      <PipelineJobCardNextStep
        nextStep={job.nextStep}
      />
    </article>
  );
}
