const categories = ["Electronics", "Fashion", "Accessories", "Lifestyle"];

export default function CategoriesSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900/40 rounded-3xl px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
        Shop by <span className="text-emerald-500">Category</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {categories.map((cat) => (
          <span
            key={cat}
            className="
              cursor-pointer
              px-6 sm:px-8 py-2 sm:py-3
              rounded-full
              bg-emerald-100 dark:bg-emerald-900/40
              text-emerald-600 dark:text-emerald-300
              font-medium
              shadow-sm hover:shadow-md
              hover:scale-105
              transition-all duration-300
              relative overflow-hidden
            "
          >
            {cat}
            <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></span>
          </span>
        ))}
      </div>
    </section>
  );
}
