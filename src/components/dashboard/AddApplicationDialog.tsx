"use client";

import { useRef, useState, useTransition, type FormEvent } from "react";
import { Plus, X } from "lucide-react";
import { STAGES, STAGE_CONFIG } from "@/src/lib/applications";
import { createApplication } from "@/src/lib/actions";

const inputClass =
    "w-full rounded-xl border-2 border-pink-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200";
const labelClass = "mb-1 block text-xs font-bold text-slate-800";

export function AddApplicationDialog() {
    // Native <dialog>: focus trapping, Escape to close and a backdrop for free.
    const dialogRef = useRef<HTMLDialogElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [error, setError] = useState<string | null>(null);
    const [pending, startTransition] = useTransition();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setError(null);

        startTransition(async () => {
            const result = await createApplication(formData);
            if (!result.ok) {
                setError(result.error); // keep what the user typed
                return;
            }
            formRef.current?.reset();
            dialogRef.current?.close();
        });
    }

    return (
        <>
            <button
                type="button"
                onClick={() => dialogRef.current?.showModal()}
                className="inline-flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 px-4 py-2.5 text-xs font-extrabold text-pink-950 shadow-md shadow-pink-200 hover:from-pink-500 hover:to-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
            >
                <Plus className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
                Add application
            </button>

            <dialog
                ref={dialogRef}
                onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
                className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-3xl border-2 border-pink-200 bg-white p-0 shadow-2xl shadow-pink-200/60 backdrop:bg-pink-950/30"
            >
                <div className="max-h-[85dvh] overflow-y-auto p-6">
                    <div className="mb-4 flex items-start justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-extrabold text-slate-900">Add application</h2>
                            <p className="text-xs font-medium text-slate-600">Company and role are required. Everything else is optional.</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => dialogRef.current?.close()}
                            aria-label="Close"
                            className="rounded-lg p-1.5 text-slate-600 hover:bg-pink-50 focus-visible:outline-2 focus-visible:outline-pink-400"
                        >
                            <X className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div>
                                <label htmlFor="company" className={labelClass}>Company</label>
                                <input id="company" name="company" required maxLength={100} autoFocus className={inputClass} placeholder="Acme Inc." />
                            </div>
                            <div>
                                <label htmlFor="role" className={labelClass}>Role</label>
                                <input id="role" name="role" required maxLength={120} className={inputClass} placeholder="Frontend Engineer" />
                            </div>
                            <div>
                                <label htmlFor="location" className={labelClass}>Location</label>
                                <input id="location" name="location" maxLength={100} className={inputClass} placeholder="Remote" />
                            </div>
                            <div>
                                <label htmlFor="salary" className={labelClass}>Salary</label>
                                <input id="salary" name="salary" maxLength={60} className={inputClass} placeholder="$90k - $110k" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="stage" className={labelClass}>Stage</label>
                            <select id="stage" name="stage" defaultValue="wishlist" className={inputClass}>
                                {STAGES.map((stage) => (
                                    <option key={stage} value={stage}>{STAGE_CONFIG[stage].label}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="tags" className={labelClass}>Skills (comma separated)</label>
                            <input id="tags" name="tags" className={inputClass} placeholder="React, TypeScript, Remote" />
                        </div>

                        <div>
                            <label htmlFor="nextStep" className={labelClass}>Next step</label>
                            <input id="nextStep" name="nextStep" maxLength={140} className={inputClass} placeholder="Phone screen Tue 2pm" />
                        </div>

                        <div>
                            <label htmlFor="jobUrl" className={labelClass}>Job posting link</label>
                            <input id="jobUrl" name="jobUrl" type="url" className={inputClass} placeholder="https://..." />
                        </div>

                        {error && (
                            <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-800">
                                {error}
                            </p>
                        )}

                        <div className="flex justify-end gap-2 pt-2">
                            <button
                                type="button"
                                onClick={() => dialogRef.current?.close()}
                                className="rounded-xl border-2 border-pink-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 hover:bg-pink-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={pending}
                                className="rounded-xl bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 px-5 py-2 text-xs font-extrabold text-pink-950 shadow-md shadow-pink-200 disabled:opacity-60"
                            >
                                {pending ? "Saving..." : "Save application"}
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}