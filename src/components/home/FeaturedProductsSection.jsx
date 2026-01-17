import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Wireless Headphones",
    price: "$99",
    image: "/products/headphones.jpg",
  },
  {
    name: "Smart Watch",
    price: "$149",
    image: "/products/smartwatch.webp",
  },
  {
    name: "Leather Bag",
    price: "$120",
    image: "/products/bag.jpg",
  },
  {
    name: "Sneakers",
    price: "$89",
    image: "/products/sneakers.jpg",
  },
];

export default function FeaturedProductsSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
          Featured <span className="text-emerald-500">Products</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 opacity-80">
          Top curated items for you.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.name}
            href="/products"
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden
                       hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="font-semibold mb-1 group-hover:text-emerald-500 transition">
                {product.name}
              </h3>
              <p className="text-emerald-500 font-medium">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
