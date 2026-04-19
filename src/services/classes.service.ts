import { query } from "@/src/lib/db";

export async function getClassesData(uid: string) {
  try {
    const result = await query(
      "SELECT id, classname FROM classes WHERE firebase_uid = $1 ORDER BY classname ASC",
      [uid],
    );

    const classes = result.rows;

    return classes;
  } catch (error) {
    console.error("Fetch classes data error:", error);
    return null;
  }
}
