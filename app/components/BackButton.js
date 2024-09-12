
"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-blue-500 mt-4"
    >
      Back to Products
    </button>
  );
}
