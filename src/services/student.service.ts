import { query } from "@/src/lib/db";

export async function getStudentData(classId: string, uid: string) {
  try {
    // const result = await query(
    //   `SELECT s.id, s.first_name, s.last_name, c.classname
    //    FROM students s
    //    JOIN classes c ON s.class_id = c.id
    //    WHERE s.class_id = $1 AND c.firebase_uid = $2`,
    //   [classId, uid],
    // );
    const result = await query(
      "SELECT id, first_name, last_name FROM students WHERE class_id = $1",
      [classId],
    );

    return result.rows;
  } catch (error) {
    console.error("Fetch student data error:", error);
    return null;
  }
}
