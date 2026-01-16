export default async function ProductDetails({ params }) {
  const res = await fetch(`http://localhost:5000/products/${params.id}`);
  const product = await res.json();

  return (
    <section className="max-w-4xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="opacity-80 mb-6">{product.description}</p>
      <span className="text-2xl font-semibold text-emerald-500">
        ${product.price}
      </span>
    </section>
  );
}
