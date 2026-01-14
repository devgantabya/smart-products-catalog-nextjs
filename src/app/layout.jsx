import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Smart Product Catalog",
  description: "Browse modern products with a clean and fast experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 font-inter">
        <Navbar />
        <main className="min-h-screen max-w-7xl mx-auto px-4 pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
