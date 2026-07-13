"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSearch() {
    const query = search.trim();
    if (!query) return;
    router.push(`/products?search=${encodeURIComponent(query)}`);
  }

  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}

        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="w-full rounded-full border border-gray-300 px-5 py-2 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 transition"
      />
    </div>
  );
}
