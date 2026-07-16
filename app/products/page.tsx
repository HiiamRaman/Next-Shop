import React from "react";
import { getProducts } from "@/services/product.service";
import ProductCard from "@/components/product/productCard";
import CategoryFilter from "@/components/product/categoryFilter";
import { filterProducts } from "@/utils/productFilter";
import { sortProducts } from "@/utils/productSort";
import { paginateProducts } from "@/utils/productPagination";
import SortDropdown from "@/components/product/SortDropdown";
import Pagination from "@/components/product/Pagination";
interface ProductsPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    sort?: string;
    page?: string;
  }>;
}

async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { search, category, sort, page } = await searchParams;

  const products = await getProducts();
  const filteredProducts = filterProducts(products, {
    search,
    category,
  });
  const sortedProducts = sortProducts(filteredProducts, { sort });
  const paginatedProducts = paginateProducts(sortedProducts, {
    page,
    limit: "8",
  });


  const currentPage = Number(page)||1;
  const totalPages = Math.ceil(
  filteredProducts.length / 8
);

  if (paginatedProducts.length === 0) {
    return (
      <div className="mt-20 text-center ">
        <h2 className="text-2xl font-bold"> NO PRODUCTS FOUND </h2>
        <p className="mt-2 text-gray-500">Try a different search term.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">
        {search ? `Results for ${search}` : "All Products"}
      </h1>
      <CategoryFilter />
      <SortDropdown />
      
      <p className="mt-2 text-gray-500">
        {" "}
        {paginatedProducts.length} Products found
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {paginatedProducts.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} searchParams={{
    search,
    category,
    sort,
  }}/>
    </div>
  );
}

export default ProductsPage;
