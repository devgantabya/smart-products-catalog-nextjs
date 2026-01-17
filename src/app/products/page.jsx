import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsGrid from "@/components/products/ProductsGrid";

export default async function ProductsPage({ searchParams }) {
  const category = searchParams?.category;
  const search = searchParams?.search;

  const query = new URLSearchParams();

  if (category) query.append("category", category);
  if (search) query.append("search", search);

  let products = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?${query.toString()}`,
      { cache: "no-store" },
    );

    if (!res.ok) throw new Error("Failed to fetch products");

    products = await res.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <section className="space-y-12 py-8 md:py-12">
      <ProductsHeader category={category} />
      <ProductsGrid products={products} />
    </section>
  );
}
