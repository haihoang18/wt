import { verifyAuth } from "@/src/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { getStudentData } from "@/src/services/student.service";

export async function GET(
  req: NextRequest,
  { params }: { params: { classId: string } },
) {
  try {
    const { classId } = await params;
    const user = await verifyAuth();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const students = await getStudentData(classId, user.uid);

    if (!students || students.length === 0) {
      return NextResponse.json(
        { message: "Không có dữ liệu" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      classname: students[0].classname,
      students: students.map((s) => ({
        id: s.id,
        first_name: s.first_name,
        last_name: s.last_name,
      })),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
