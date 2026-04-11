import admin from "@/src/lib/firebase-admin";
import { query } from "@/src/lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;

    if (!token) {
      return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    }

    const decoded = await admin.auth().verifyIdToken(token);

    const classResult = await query(
      "SELECT id, classname FROM classes WHERE id = $1",
      [id],
    );

    const classes = classResult.rows;
    const studentsResult = await query(
      "SELECT id, first_name, last_name FROM students WHERE class_id = $1",
      [id],
    );

    return NextResponse.json({
      classname: classResult.rows[0].classname,
      students: studentsResult.rows,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
