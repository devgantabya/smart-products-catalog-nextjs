"use client";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copy */}
        <p className="text-sm md:text-base opacity-80">
          © {new Date().getFullYear()} Smart Product Catalog. All rights
          reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-6"></div>
    </footer>
  );
}
