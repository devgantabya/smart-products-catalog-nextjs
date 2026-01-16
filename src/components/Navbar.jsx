"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const { data: session } = useSession();
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href) =>
    `relative text-gray-700 dark:text-gray-200 font-medium transition-colors
     hover:text-emerald-500 ${
       path === href ? "text-emerald-500 font-semibold" : ""
     }`;

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md z-50 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-extrabold text-emerald-500 tracking-tight hover:scale-105 transition-transform"
        >
          SmartCatalog
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>

          {session ? (
            <>
              <Link href="/add-product" className={linkClass("/add-product")}>
                Add Product
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 shadow-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 shadow-sm"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900/95 shadow-md backdrop-blur-sm px-6 py-4 flex flex-col gap-4 animate-slide-down">
          <Link
            href="/products"
            className={linkClass("/products")}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>

          {session ? (
            <>
              <Link
                href="/add-product"
                className="text-gray-700 dark:text-gray-200 hover:text-emerald-500 transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Add Product
              </Link>
              <button
                onClick={() => {
                  signOut();
                  setMenuOpen(false);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 shadow-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 shadow-sm"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
