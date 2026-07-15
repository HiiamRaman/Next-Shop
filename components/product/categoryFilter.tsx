"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "Beauty",
    value: "beauty",
  },
  {
    name: "Smartphones",
    value: "smartphones",
  },
  {
    name: "Laptops",
    value: "laptops",
  },
  {
    name: "Fragrances",
    value: "fragrances",
  },
  {
    name: "Furniture",
    value: "furniture",
  },
];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  function handlCategory(value: string) {
    const params = new URLSearchParams(window.location.search);
    params.set("category", value);
    router.push(`/products?${params.toString()}`);
  }

  return (
    <div className="flex gap-3 flex-wrap mb-8">
      {categories.map((category) => {
        return (
          <button
            key={category.value}
            className={`
 rounded-full
 border
 px-5
 py-2
 text-sm
 font-medium
 transition

 ${
   activeCategory === category.value
     ? "bg-emerald-600 text-white border-emerald-600"
     : "text-slate-700 hover:bg-emerald-50"
 }
`}
            onClick={() => handlCategory(category.value)}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
