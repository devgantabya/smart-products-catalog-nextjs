"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function CTASection() {
  const { data: session } = useSession();

  return (
    <section className="relative py-12 md:py-16 mb-16 text-center bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        {session ? (
          <>
            Ready to <span className="text-emerald-500">Add Products?</span>
          </>
        ) : (
          <>
            Start <span className="text-emerald-500">Exploring Today</span>
          </>
        )}
      </h2>

      <p className="max-w-xl mx-auto mb-8 opacity-80">
        {session
          ? "Add your amazing products and share them with the world seamlessly with Sellvix — your modern e-commerce hub."
          : "Discover, browse, and add products seamlessly with Sellvix — your modern e-commerce hub."}
      </p>

      {session ? (
        <Link
          href="/add-product"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Add Product
        </Link>
      ) : (
        <Link
          href="/signup"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Get Started
        </Link>
      )}

      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
