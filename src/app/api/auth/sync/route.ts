import { NextResponse } from "next/server";
import admin from "@/src/lib/firebase-admin"; //
import { query } from "@/src/lib/db"; //
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split("Bearer ")[1];

    if (!token) {
      return NextResponse.json({ error: "No token" }, { status: 401 });
    }

    const decoded = await admin.auth().verifyIdToken(token);
    const { uid } = decoded;

    const { rows } = await query(
      "SELECT * FROM users WHERE firebase_uid = $1",
      [uid],
    );

    if (rows.length == 0) {
      return NextResponse.json(
        { error: "User not found in system" },
        { status: 403 },
      );
    }

    const cookieStore = await cookies();
    cookieStore.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600,
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Auth sync error:", err);
    return NextResponse.json({ error: "Auth failed" }, { status: 401 });
  }
}
