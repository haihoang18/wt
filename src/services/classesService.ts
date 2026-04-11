import { headers } from "next/headers";

export async function getClassesData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/classes`, {
    headers: await headers(),
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}
