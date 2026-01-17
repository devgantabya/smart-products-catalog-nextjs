"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function HeroSection() {
  const { data: session } = useSession(); // get user session

  return (
    <section className="relative py-16 md:py-28 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl" />

      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
        Discover <span className="text-emerald-500">Modern Products</span>
      </h1>

      <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-10 px-2">
        Browse high-quality products with a fast, clean, and modern shopping
        experience on Sellvix.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href={"/products"}
          className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
        >
          Browse Products
        </Link>

        {session ? (
          <Link
            href={"/add-product"}
            className="border border-emerald-500 text-emerald-500 px-6 py-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition"
          >
            Add Product
          </Link>
        ) : (
          <Link
            href={"/signup"}
            className="border border-emerald-500 text-emerald-500 px-6 py-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition"
          >
            Get Started
          </Link>
        )}
      </div>
    </section>
  );
}
