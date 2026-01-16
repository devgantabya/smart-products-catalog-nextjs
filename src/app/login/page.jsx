"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({
        email: "admin@example.com",
        password: "123456",
      }),
    });

    if (res.ok) router.push("/products");
  };

  return (
    <section className="flex justify-center items-center py-20">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-6">Login</h1>
        <button className="w-full bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-600 transition">
          Login
        </button>
      </form>
    </section>
  );
}
