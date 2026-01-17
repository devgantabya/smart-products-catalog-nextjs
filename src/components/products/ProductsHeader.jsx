export default function ProductsHeader({ category }) {
  return (
    <header className="text-center max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
        {category ? (
          <>
            Explore <span className="text-emerald-500">{category}</span>{" "}
            Products
          </>
        ) : (
          <>
            Explore <span className="text-emerald-500">Products</span>
          </>
        )}
      </h1>
      <p className="opacity-80">
        {category
          ? `Browse our curated collection of modern, high-quality products in ${category}.`
          : "Browse our curated collection of modern, high-quality products."}
      </p>
    </header>
  );
}
