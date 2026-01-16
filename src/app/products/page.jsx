import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  let products = [];

  try {
    const res = await fetch("http://localhost:5000/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    products = await res.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <header className="mb-10">
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="mt-2 opacity-70">
          Browse our curated collection of modern products.
        </p>
      </header>

      {products.length === 0 ? (
        <p className="text-center opacity-70 py-20">
          No products available at the moment.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
