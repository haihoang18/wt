import { query } from "@/src/lib/db";

export async function getUserData(uid: string) {
  try {
    const { rows } = await query(
      "SELECT full_name, email, created_at FROM users WHERE firebase_uid = $1",
      [uid],
    );

    return rows[0] || null;
  } catch (error) {
    console.error("Error in getUserData service:", error);
    return null;
  }
}
