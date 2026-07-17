"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent } from "react";

function SortDropdown() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 1. Fixed 'any' type to use proper React HTML select event typing
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    router.push(`/products?${params.toString()}`);
  }

  // 2. Read current "sort" value from URL so the dropdown doesn't reset on page reload
  const currentSort = searchParams.get("sort") || "";

  return (
    <div className="relative w-full sm:w-60">
      <select
        value={currentSort}
        className="w-full appearance-none bg-white border border-gray-200 text-gray-800 rounded-xl px-4 py-3 pr-10 text-sm font-medium cursor-pointer shadow-sm hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200"
        onChange={handleChange}
      >
        <option value="">Sort By</option>
        <option value="price-low">Price: Low → High</option>
        <option value="price-high">Price: High → Low</option>
        <option value="rating">Highest Rating</option>
      </select>

      {/* 3. Custom dropdown indicator arrow (pointer-events-none lets users click through it) */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

export default SortDropdown;
