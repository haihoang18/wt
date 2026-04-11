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
      "SELECT full_name, email, created_at FROM users WHERE firebase_uid = $1",
      [decoded.uid],
    );

    const user = result.rows[0];

    if (!user) {
      return NextResponse.json(
        { error: "Người dùng không tồn tại" },
        { status: 404 },
      );
    }

    return NextResponse.json(user);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
