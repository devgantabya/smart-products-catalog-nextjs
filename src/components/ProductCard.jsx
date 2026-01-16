import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product._id}`}>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="opacity-70 mb-4 line-clamp-2">{product.description}</p>
        <span className="text-emerald-500 font-semibold">${product.price}</span>
      </div>
    </Link>
  );
}
