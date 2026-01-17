"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <p className="text-lg opacity-70 mb-6">Oops! Page not found.</p>
      <Link
        href="/"
        className="bg-emerald-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
