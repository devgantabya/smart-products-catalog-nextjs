import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  const hasImage = product.image && product.image.trim() !== "";

  return (
    <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden h-full">
      {/* Image */}
      <div className="relative w-full h-56 bg-gray-100 dark:bg-gray-700">
        {hasImage ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-300">No Image</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-sm opacity-80 mb-4 line-clamp-3">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-emerald-500 font-bold text-lg">
            ${product.price}
          </span>

          <Link
            href={`/products/${product._id}`}
            className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition"
          >
            View →
          </Link>
        </div>
      </div>
    </div>
  );
}
