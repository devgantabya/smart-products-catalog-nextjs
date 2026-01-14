export default function HomePage() {
  return (
    <>
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Modern Products
        </h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Browse high-quality products with a smooth and elegant experience.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 py-16">
        {["Fast", "Secure", "Responsive"].map((item) => (
          <div
            key={item}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="opacity-80">
              Built with modern technologies for best performance.
            </p>
          </div>
        ))}
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-semibold mb-8">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {["Electronics", "Fashion", "Accessories"].map((cat) => (
            <span
              key={cat}
              className="px-6 py-3 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
        <p className="max-w-3xl opacity-80">
          Browse products → View details → Login to add new products.
        </p>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
        <p className="opacity-80">Top curated items for you.</p>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="italic opacity-80">
          “Clean UI and super smooth experience!”
        </p>
      </section>

      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold mb-6">Start Exploring Today</h2>
      </section>
    </>
  );
}
