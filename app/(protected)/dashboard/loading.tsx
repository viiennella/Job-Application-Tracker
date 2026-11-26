export default function DashboardLoading() {
    return (
        <div className="animate-pulse" aria-busy="true" aria-label="Loading your pipeline">
            <div className="mb-6 flex items-center justify-between">
                <div className="space-y-2">
                    <div className="h-7 w-48 rounded-lg bg-pink-100" />
                    <div className="h-4 w-64 rounded-lg bg-pink-100" />
                </div>
                <div className="h-10 w-36 rounded-2xl bg-pink-100" />
            </div>
            <div className="mb-6 h-14 rounded-2xl border-2 border-pink-100 bg-white/90" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-56 rounded-3xl border-2 border-pink-100 bg-white" />
                ))}
            </div>
        </div>
    );
}