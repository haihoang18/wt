import admin from "@/src/lib/firebase-admin";
import { query } from "@/src/lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;

    if (!token) {
      return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    }

    const decoded = await admin.auth().verifyIdToken(token);

    const result = await query(
      "SELECT id, classname FROM classes WHERE firebase_uid = $1 ORDER BY classname ASC",
      [decoded.uid],
    );

    const classes = result.rows;

    return NextResponse.json(classes);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
