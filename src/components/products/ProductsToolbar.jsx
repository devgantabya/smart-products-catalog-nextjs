export default function ProductsToolbar({ search, setSearch }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700
                   bg-white dark:bg-gray-900
                   focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
      />
    </div>
  );
}
