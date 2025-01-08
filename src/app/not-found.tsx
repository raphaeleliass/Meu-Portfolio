import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6">
      <span className="size-10">🤖</span>
      <h2 className="font-Poppins text-xl font-semibold">Page not found</h2>
      <p>
        This page isn&apos;t found! Please reload page or go back to{" "}
        <Link
          className="text-cyan-600 hover:underline hover:underline-offset-2"
          href={"/"}
        >
          home
        </Link>
        .
      </p>
    </div>
  );
}
