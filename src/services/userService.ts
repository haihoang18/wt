import { headers } from "next/headers";

export async function getUserData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`,
    {
      headers: await headers(),
      cache: "no-store",
    },
  );

  if (!res.ok) return null;
  return res.json();
}
