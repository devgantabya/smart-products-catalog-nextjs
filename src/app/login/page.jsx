"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/products");
    }
  }, [status, router]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (res.error) throw new Error("Invalid credentials");

      toast.success("Logged in successfully!");
      router.push("/products");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || status === "authenticated") {
    return <p className="text-center py-20">Loading...</p>;
  }

  return (
    <section className="max-w-md mx-auto py-20">
      <h1 className="text-3xl font-semibold mb-8 text-center text-emerald-500">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-4"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-500 text-white py-3 rounded-xl hover:scale-105 transition-transform disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center opacity-70">
          Don't have an account?{" "}
          <a href="/signup" className="text-emerald-500 hover:underline">
            Sign Up
          </a>
        </p>
      </form>

      {/* Mock login info */}
      <p className="mt-4 text-center text-sm opacity-50">
        Use <strong>admin@example.com</strong> / <strong>123456</strong> for
        mock login
      </p>
    </section>
  );
}
