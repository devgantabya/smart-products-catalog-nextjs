"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const path = usePathname();

  const linkClass = (href) =>
    `transition ${
      path === href ? "text-emerald-500" : "hover:text-emerald-400"
    }`;

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="text-xl font-bold text-emerald-500">
          SmartCatalog
        </Link>
        <div className="flex gap-6 font-medium">
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>
          {session ? (
            <>
              <Link href="/add-product">Add Product</Link>
              <button onClick={() => signOut()}>Logout</button>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
