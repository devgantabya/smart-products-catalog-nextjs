"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        if (!res.ok) throw new Error("Failed to fetch categories");

        const products = await res.json();
        const uniqueCategories = [...new Set(products.map((p) => p.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  if (categories.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900/40 rounded-3xl px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
        Shop by <span className="text-emerald-500">Category</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/products?category=${encodeURIComponent(category)}`}
            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 ${
              category.toLowerCase() === activeCategory?.toLowerCase()
                ? "bg-emerald-500 text-white shadow-md"
                : "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 hover:shadow-md hover:scale-105"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}
