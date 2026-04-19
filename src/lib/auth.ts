import admin from "@/src/lib/firebase-admin";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function verifyAuth(req?: NextRequest) {
  try {
    let token: string | undefined;

    const authHeader = req?.headers.get("authorization");
    console.log("🔍 Auth header:", authHeader);

    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.split("Bearer ")[1];
    }

    if (!token) {
      const cookieStore = await cookies();
      token = cookieStore.get("session")?.value;
    }

    if (!token) return null;

    const decoded = await admin.auth().verifyIdToken(token);
    return decoded;
  } catch (err) {
    console.error("Verify Auth Error:", err);
    return null;
  }
}
