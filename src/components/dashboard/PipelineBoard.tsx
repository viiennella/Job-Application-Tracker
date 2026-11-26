"use client";

import { useMemo, useOptimistic, useState, useTransition } from "react";
import {
    STAGES,
    STAGE_CONFIG,
    type ActionResult,
    type Application,
    type Stage,
} from "@/src/lib/applications";
import { deleteApplication, moveApplication } from "@/src/lib/actions";
import { AddApplicationDialog } from "./AddApplicationDialog";
import { ApplicationCard } from "./ApplicationCard";

type OptimisticAction =
    | { type: "move"; id: string; stage: Stage }
    | { type: "delete"; id: string };

type Tab = "all" | Stage;

export function PipelineBoard({ applications }: { applications: Application[] }) {
    const [activeTab, setActiveTab] = useState<Tab>("all");
    const [error, setError] = useState<string | null>(null);
    const [, startTransition] = useTransition();

    // `items` equals `applications`, plus any change that is still being saved.
    // The UI updates instantly; if the server call fails, React snaps back by itself.
    const [items, applyOptimistic] = useOptimistic(
        applications,
        (state, action: OptimisticAction) =>
            action.type === "delete"
                ? state.filter((a) => a.id !== action.id)
                : state.map((a) => (a.id === action.id ? { ...a, stage: action.stage } : a)),
    );

    // One pass over the list instead of four separate .filter() calls.
    const grouped = useMemo(() => {
        const result: Record<Stage, Application[]> = {
            wishlist: [],
            applied: [],
            interviewing: [],
            offer: [],
        };
        for (const a of items) result[a.stage].push(a);
        return result;
    }, [items]);

    function run(action: OptimisticAction, request: () => Promise<ActionResult>) {
        setError(null);
        startTransition(async () => {
            applyOptimistic(action);
            const result = await request();
            if (!result.ok) setError(result.error);
        });
    }

    const handleMove = (id: string, stage: Stage) =>
        run({ type: "move", id, stage }, () => moveApplication(id, stage));

    const handleDelete = (id: string) => {
        if (!window.confirm("Delete this application? This can't be undone.")) return;
        run({ type: "delete", id }, () => deleteApplication(id));
    };

    const tabs: { key: Tab; label: string; count: number; active: string; idle: string }[] = [
        {
            key: "all",
            label: "All",
            count: items.length,
            active: "bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 text-pink-950 border-transparent shadow-sm",
            idle: "border-transparent text-slate-700 hover:bg-pink-50",
        },
        ...STAGES.map((stage) => ({
            key: stage as Tab,
            label: STAGE_CONFIG[stage].label,
            count: grouped[stage].length,
            active: STAGE_CONFIG[stage].tabActive,
            idle: STAGE_CONFIG[stage].tabIdle,
        })),
    ];

    const renderCard = (a: Application) => (
        <ApplicationCard key={a.id} application={a} onMove={handleMove} onDelete={handleDelete} />
    );

    return (
        <div>
            {/* Page header */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Your pipeline</h1>
                    <p className="text-sm font-medium text-slate-600">
                        {items.length === 0
                            ? "Add your first application to get started."
                            : `${items.length} ${items.length === 1 ? "opportunity" : "opportunities"} tracked`}
                    </p>
                </div>
                <AddApplicationDialog />
            </div>

            {/* Filter tabs */}
            <div
                className="mb-6 flex flex-wrap items-center gap-1.5 rounded-2xl border-2 border-pink-200 bg-white p-2 shadow-md shadow-pink-100"
                role="group"
                aria-label="Filter by stage"
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        type="button"
                        aria-pressed={activeTab === tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`rounded-xl border px-3.5 py-1.5 text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 ${activeTab === tab.key ? tab.active : tab.idle
                            }`}
                    >
                        {tab.label} ({tab.count})
                    </button>
                ))}
            </div>

            {error && (
                <p role="alert" className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-800">
                    {error}
                </p>
            )}

            {/* Content */}
            {items.length === 0 ? (
                <div className="rounded-3xl border-2 border-dashed border-pink-200 bg-white/80 px-6 py-16 text-center">
                    <h2 className="text-lg font-extrabold text-slate-900">No applications yet</h2>
                    <p className="mx-auto mt-1 max-w-sm text-sm font-medium text-slate-600">
                        Save a role you are interested in, or one you have already applied to, and it will show up here.
                    </p>
                </div>
            ) : activeTab === "all" ? (
                // Kanban columns on large screens, stacked sections on small ones
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {STAGES.map((stage) => (
                        <section key={stage} aria-label={STAGE_CONFIG[stage].label} className="space-y-3">
                            <h2 className="flex items-center gap-2 px-1 text-sm font-extrabold text-slate-900">
                                <span className={`h-2.5 w-2.5 rounded-full ${STAGE_CONFIG[stage].dot}`} aria-hidden="true" />
                                {STAGE_CONFIG[stage].label}
                                <span className="font-bold text-slate-600">{grouped[stage].length}</span>
                            </h2>
                            {grouped[stage].length === 0 ? (
                                <p className="rounded-2xl border-2 border-dashed border-pink-200 px-3 py-6 text-center text-xs font-medium text-slate-600">
                                    Nothing here yet
                                </p>
                            ) : (
                                grouped[stage].map(renderCard)
                            )}
                        </section>
                    ))}
                </div>
            ) : grouped[activeTab].length === 0 ? (
                <p className="rounded-3xl border-2 border-dashed border-pink-200 bg-white/80 px-6 py-12 text-center text-sm font-medium text-slate-600">
                    No applications in {STAGE_CONFIG[activeTab].label.toLowerCase()} yet.
                </p>
            ) : (
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{grouped[activeTab].map(renderCard)}</div>
            )}
        </div>
    );
}