export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 rounded-lg border text-sm font-medium
                   disabled:opacity-40 hover:bg-emerald-50
                   dark:hover:bg-emerald-900/20 transition"
      >
        Prev
      </button>

      <span className="text-sm font-medium">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 rounded-lg border text-sm font-medium
                   disabled:opacity-40 hover:bg-emerald-50
                   dark:hover:bg-emerald-900/20 transition"
      >
        Next
      </button>
    </div>
  );
}
