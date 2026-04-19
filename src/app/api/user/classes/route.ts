import { verifyAuth } from "@/src/lib/auth";
import { getClassesData } from "@/src/services/classes.service";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const user = await verifyAuth(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = await getClassesData(user.uid);
  return NextResponse.json(data);
}
