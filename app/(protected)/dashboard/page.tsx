// import { desc, eq } from "drizzle-orm";
// import { db } from "@/src/db";
// import { jobApplication } from "@/src/db/schema";
// import { requireAuth } from "@/src/lib/auth-guard";
// import { PipelineBoard } from "@/src/components/dashboard/PipelineBoard";

// export const metadata = { title: "Pipeline" };

// export default async function DashboardPage() {
//     const { user } = await requireAuth();

//     // One query, filtered by the signed-in user. Served by the (user_id, stage) index.
//     const applications = await db
//         .select()
//         .from(jobApplication)
//         .where(eq(jobApplication.userId, user.id))
//         .orderBy(desc(jobApplication.createdAt));

//     return <PipelineBoard applications={applications} />;
// }


import { desc, eq } from "drizzle-orm";
import { db } from "@/src/db";
import { jobApplication } from "@/src/db/schema";
import { requireAuth } from "@/src/lib/auth-guard";
import { PipelineBoard } from "@/src/components/dashboard/PipelineBoard";

export const metadata = { title: "Pipeline" };

export default async function DashboardPage() {
    const { user } = await requireAuth();

    const applications = await db
        .select()
        .from(jobApplication)
        .where(eq(jobApplication.userId, user.id))
        .orderBy(desc(jobApplication.createdAt));

    return <PipelineBoard applications={applications} />;
}