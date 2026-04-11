import { headers } from "next/headers";

export async function getStudentData(classId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/classes/${classId}`,
    {
      headers: await headers(),
      cache: "no-store",
    },
  );

  if (!res.ok) return null;
  return res.json();
}
