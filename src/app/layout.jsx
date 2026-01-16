import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Smart Product Catalog",
  description: "Browse modern products with a clean and fast experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-800 antialiased dark:bg-gray-900 dark:text-gray-100 font-inter">
        {/* Only client components inside Providers */}
        <Providers>
          <Navbar />

          <main
            role="main"
            className="min-h-screen max-w-7xl mx-auto px-4 pt-24"
          >
            {children}
          </main>

          <Footer />

          <Toaster
            position="top-right"
            toastOptions={{
              style: { background: "#1f2937", color: "#fff" },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
