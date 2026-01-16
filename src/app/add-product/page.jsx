"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "New Product",
          price: 99,
          description: "Modern product",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to add product");
      }

      toast.success("Product added successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-xl mx-auto py-20">
      <h1 className="text-3xl font-semibold mb-8">Add Product</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-4"
      >
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-500 text-white py-3 rounded-xl transition
                     hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Saving..." : "Save Product"}
        </button>
      </form>
    </section>
  );
}
