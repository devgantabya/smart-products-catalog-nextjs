"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductsToolbar from "./ProductsToolbar";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 6;

export default function ProductsGrid({ products }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <div className="space-y-10">
      <ProductsToolbar search={search} setSearch={setSearch} />

      {paginatedProducts.length === 0 ? (
        <p className="text-center opacity-70 py-20">No products found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </div>
  );
}
