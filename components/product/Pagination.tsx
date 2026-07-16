import React from "react";
import Link from "next/link";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  searchParams: {
    search?: string;
    category?: string;
    sort?: string;
  };
}

function Pagination({
  currentPage,
  totalPages,
  searchParams,
}: PaginationProps) {
  function createPageUrl(page:Number) {
    const params = new URLSearchParams();
    if (searchParams.search) {
      params.set("search", searchParams.search);
    }
    if (searchParams.category) {
      params.set("category", searchParams.category);
    }
    if (searchParams.sort) {
      params.set("sort", searchParams.sort);
    }
    params.set("page", page.toString());

    return `/products?${params.toString()}`;
  }
  return (
    <div className="flex justify-center items-center gap-3 mt-10">
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index+1
        return (
          <Link
            key={pageNumber}
            href={createPageUrl(pageNumber)}
            className={`
    w-10
    h-10
    rounded-full
    flex
    items-center
    justify-center
    border
    transition
    ${
      currentPage === index + 1
        ? "bg-emerald-600 text-white border-emerald-600"
        : "hover:bg-emerald-100"
    }
  `}
          >
            {index + 1}
          </Link>
        );
      })}
    </div>
  );
}

export default Pagination;
