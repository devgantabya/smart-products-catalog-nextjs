"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
        );
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center py-20 opacity-70">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-center py-20">Product not found</p>;
  }

  return (
    <section className="max-w-6xl mx-auto py-8 md:py-16 px-4 space-y-10">
      {/* Back Navigation */}
      <button
        onClick={() => router.back()}
        className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition"
      >
        ← Back to products
      </button>

      {/* Product Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              No Image
            </div>
          )}
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              {product.name}
            </h1>
            <p className="text-sm uppercase tracking-wide text-emerald-500 font-semibold">
              {product.category}
            </p>
          </div>

          {/* Static Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm opacity-80">
            <span>⭐ 4.6 Rating</span>
            <span>📦 In Stock</span>
            <span>🚚 Free Delivery</span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-emerald-500">
              ${product.price}
            </span>
            <span className="text-sm opacity-60">Inclusive of all taxes</span>
          </div>

          {/* Trust Badges */}
          <div className="flex gap-4 text-sm opacity-70 pt-4">
            <span>✔ Secure Checkout</span>
            <span>✔ Quality Assured</span>
          </div>
        </div>
      </div>
    </section>
  );
}
