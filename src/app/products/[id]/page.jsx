"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/products/${id}`);
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
    return <p className="text-center py-20">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-center py-20">Product not found</p>;
  }

  return (
    <section className="max-w-4xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-10 items-start">
      {/* Product Image */}
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-2xl shadow-lg object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-2xl">
          <span className="text-gray-400">No Image</span>
        </div>
      )}

      {/* Product Details */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-gray-700 dark:text-gray-300">
          {product.description}
        </p>
        <span className="text-3xl font-semibold text-emerald-500">
          ${product.price}
        </span>

        <button className="bg-emerald-500 text-white py-3 px-6 rounded-xl hover:scale-105 transition transform">
          Add to Cart
        </button>
      </div>
    </section>
  );
}
