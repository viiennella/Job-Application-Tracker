// import { Calendar, DollarSign, ExternalLink, MapPin, Trash2 } from "lucide-react";
// import {
//     formatAdded,
//     logoColor,
//     STAGES,
//     STAGE_CONFIG,
//     type Application,
//     type Stage,
// } from "@/src/lib/applications";

// interface ApplicationCardProps {
//     application: Application;
//     onMove: (id: string, stage: Stage) => void;
//     onDelete: (id: string) => void;
// }

// export function ApplicationCard({ application: a, onMove, onDelete }: ApplicationCardProps) {
//     return (
//         <article className="group rounded-3xl border-2 border-pink-100 bg-white p-5 shadow-md shadow-pink-100/50 transition-shadow hover:border-pink-300 hover:shadow-xl">
//             {/* Header: avatar, company, stage picker */}
//             <div className="flex items-start justify-between gap-3">
//                 <div className="flex min-w-0 items-center gap-3">
//                     <div
//                         className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white shadow-sm ${logoColor(a.company)}`}
//                         aria-hidden="true"
//                     >
//                         {a.company.charAt(0).toUpperCase()}
//                     </div>
//                     <div className="min-w-0">
//                         <h3 className="truncate font-extrabold text-slate-900 transition-colors group-hover:text-pink-600">
//                             {a.company}
//                         </h3>
//                         {a.location && (
//                             <p className="flex items-center gap-1 text-xs font-medium text-slate-600">
//                                 <MapPin className="h-3 w-3 shrink-0 text-pink-400" aria-hidden="true" />
//                                 <span className="truncate">{a.location}</span>
//                             </p>
//                         )}
//                     </div>
//                 </div>

//                 {/* The stage pill is a real <select>: keyboard + mobile friendly, no extra library */}
//                 <select
//                     value={a.stage}
//                     onChange={(e) => onMove(a.id, e.target.value as Stage)}
//                     aria-label={`Change stage for ${a.company}`}
//                     className={`shrink-0 cursor-pointer rounded-full border px-2.5 py-1 text-[11px] font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 ${STAGE_CONFIG[a.stage].badge}`}
//                 >
//                     {STAGES.map((stage) => (
//                         <option key={stage} value={stage}>
//                             {STAGE_CONFIG[stage].label}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             {/* Role + salary */}
//             <div className="mt-4">
//                 <div className="text-sm font-bold text-slate-800">{a.role}</div>
//                 {a.salary && (
//                     <div className="mt-1 flex items-center gap-1 text-xs font-bold text-emerald-700">
//                         <DollarSign className="h-3.5 w-3.5" aria-hidden="true" />
//                         <span>{a.salary}</span>
//                     </div>
//                 )}
//             </div>

//             {/* Match score: only shown once a value exists */}
//             {a.matchScore !== null && (
//                 <div className="mt-4 border-t border-pink-100 pt-3">
//                     <div className="mb-2 flex items-center justify-between text-xs font-semibold">
//                         <span className="text-slate-600">ATS keyword fit</span>
//                         <span className="font-extrabold text-pink-700">{a.matchScore}% match</span>
//                     </div>
//                     <div className="h-2 w-full overflow-hidden rounded-full bg-pink-100">
//                         <div
//                             className="h-2 rounded-full bg-gradient-to-r from-pink-400 to-yellow-300"
//                             style={{ width: `${a.matchScore}%` }}
//                         />
//                     </div>
//                 </div>
//             )}

//             {/* Tags */}
//             {a.tags.length > 0 && (
//                 <div className="mt-3 flex flex-wrap gap-1.5">
//                     {a.tags.map((tag) => (
//                         <span
//                             key={tag}
//                             className="rounded-lg border border-pink-200/80 bg-pink-50 px-2 py-0.5 text-xs font-bold text-pink-800"
//                         >
//                             {tag}
//                         </span>
//                     ))}
//                 </div>
//             )}

//             {/* Next step */}
//             {a.nextStep && (
//                 <div className="mt-4 flex items-center gap-1.5 rounded-2xl border border-yellow-200 bg-yellow-50/80 p-2.5 text-xs font-medium text-amber-950">
//                     <Calendar className="h-3.5 w-3.5 shrink-0 text-amber-600" aria-hidden="true" />
//                     <span className="truncate">{a.nextStep}</span>
//                 </div>
//             )}

//             {/* Footer */}
//             <div className="mt-4 flex items-center justify-between border-t border-pink-100 pt-3 text-xs font-medium text-slate-600">
//                 <span>Added {formatAdded(a.createdAt)}</span>
//                 <div className="flex items-center gap-1">
//                     {a.jobUrl && (
//                         <a
//                             href={a.jobUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label={`Open ${a.company} job posting`}
//                             className="rounded-lg p-1.5 text-slate-600 hover:bg-pink-50 hover:text-pink-700 focus-visible:outline-2 focus-visible:outline-pink-400"
//                         >
//                             <ExternalLink className="h-4 w-4" aria-hidden="true" />
//                         </a>
//                     )}
//                     <button
//                         type="button"
//                         onClick={() => onDelete(a.id)}
//                         aria-label={`Delete ${a.company} application`}
//                         className="rounded-lg p-1.5 text-slate-600 hover:bg-rose-50 hover:text-rose-700 focus-visible:outline-2 focus-visible:outline-rose-400"
//                     >
//                         <Trash2 className="h-4 w-4" aria-hidden="true" />
//                     </button>
//                 </div>
//             </div>
//         </article>
//     );
// }



import { ExternalLink, Trash2 } from "lucide-react";

import {
    formatAdded,
    STAGES,
    STAGE_CONFIG,
    type Application,
    type Stage,
} from "@/src/lib/applications";

import { PipelineJobCardHeader } from "@/src/components/landing/pipeline-board/PipelineJobCardComponents/PipelineJobCardHeader";
import { PipelineJobCardDetails } from "@/src/components/landing/pipeline-board/PipelineJobCardComponents/PipelineJobCardDetails";
import { PipelineJobCardMatchScore } from "@/src/components/landing/pipeline-board/PipelineJobCardComponents/PipelineJobMatchScore";
import { PipelineJobCardTags } from "@/src/components/landing/pipeline-board/PipelineJobCardComponents/PipelineJobCardTags";
import { PipelineJobCardNextStep } from "@/src/components/landing/pipeline-board/PipelineJobCardComponents/PipelineJobCardNextStep";

interface ApplicationCardProps {
    application: Application;
    onMove: (id: string, stage: Stage) => void;
    onDelete: (id: string) => void;
}

export function ApplicationCard({
    application: a,
    onMove,
    onDelete,
}: ApplicationCardProps) {
    const stageSelector = (
        <select
            value={a.stage}
            onChange={(e) => onMove(a.id, e.target.value as Stage)}
            aria-label={`Change stage for ${a.company}`}
            className={`max-w-32 shrink-0 cursor-pointer rounded-full border px-2.5 py-1 text-[11px] font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 ${STAGE_CONFIG[a.stage].badge}`}
        >
            {STAGES.map((stage) => (
                <option key={stage} value={stage}>
                    {STAGE_CONFIG[stage].label}
                </option>
            ))}
        </select>
    );

    return (
        <article className="group min-w-0 rounded-3xl border-2 border-pink-100 bg-white p-5 shadow-md shadow-pink-100/50 transition-[border-color,box-shadow] hover:border-pink-300 hover:shadow-xl">
            <PipelineJobCardHeader
                company={a.company}
                location={a.location}
                stage={a.stage}
                stageControl={stageSelector}
            />

            <PipelineJobCardDetails
                role={a.role}
                salary={a.salary}
            />

            <PipelineJobCardMatchScore score={a.matchScore} />

            <PipelineJobCardTags tags={a.tags} />

            <PipelineJobCardNextStep nextStep={a.nextStep} />

            <div className="mt-4 flex items-center justify-between gap-2 border-t border-pink-100 pt-3 text-xs font-medium text-slate-600">
                <span className="min-w-0 truncate">
                    Added {formatAdded(a.createdAt)}
                </span>

                <div className="flex shrink-0 items-center gap-1">
                    {a.jobUrl && (
                        <a
                            href={a.jobUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${a.company} job posting`}
                            className="rounded-lg p-1.5 text-slate-600 hover:bg-pink-50 hover:text-pink-700 focus-visible:outline-2 focus-visible:outline-pink-400"
                        >
                            <ExternalLink
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                        </a>
                    )}

                    <button
                        type="button"
                        onClick={() => onDelete(a.id)}
                        aria-label={`Delete ${a.company} application`}
                        className="rounded-lg p-1.5 text-slate-600 hover:bg-rose-50 hover:text-rose-700 focus-visible:outline-2 focus-visible:outline-rose-400"
                    >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </article>
    );
}
