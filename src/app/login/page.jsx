"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 🔹 Attempt NextAuth login (mock credentials provider)
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res.error) {
      toast.error("Invalid credentials!");
    } else {
      toast.success("Logged in successfully!");
      router.push("/add-product");
    }
  };

  return (
    <section className="max-w-md mx-auto py-20">
      <h1 className="text-3xl font-semibold mb-8">Login</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-500 text-white py-3 rounded-xl transition
                     hover:scale-105 disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-4 text-center opacity-70">
        Use <strong>admin@example.com</strong> / <strong>123456</strong> for
        mock login
      </p>
    </section>
  );
}
