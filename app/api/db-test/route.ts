import { db } from "@/src/db";
import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await db.execute(sql`SELECT NOW() AS current_time`);

        return NextResponse.json({
            success: true,
            message: "Database connected successfully",
            data: result.rows,
        });
    } catch (error) {
        console.error("Database connection error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Database connection failed",
            },
            { status: 500 }
        );
    }
}