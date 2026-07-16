"use client";
import { useSearchParams, useRouter } from "next/navigation";

function SortDropdown() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleChange(e: any) {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    router.push(`/products?${params.toString()}`);
  }

  return (
    <div>
      <select className="border rounded-lg px-4 py-2  " onChange={handleChange}>
        <option value="">Sort By</option>
        <option value="price-low"> Price: Low → High</option>
        <option value="price-high">Price: High → Low</option>
        <option value="rating"> Highest Rating</option>
      </select>
    </div>
  );
}

export default SortDropdown;
