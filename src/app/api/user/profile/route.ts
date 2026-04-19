import { verifyAuth } from "@/src/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { getUserData } from "@/src/services/user.service";

export async function GET(req: NextRequest) {
  try {
    const user = await verifyAuth(req);
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await getUserData(user.uid);
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
