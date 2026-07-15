import React from "react";
import { getProducts } from "@/services/product.service";
import ProductCard from "@/components/product/productCard";
import CategoryFilter from "@/components/product/categoryFilter";
import { filterProducts } from "@/utils/productFilter";
import {sortProducts} from "@/utils/productSort";
interface ProductsPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    sort?:string
  }>;
}

async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { search, category,sort } = await searchParams;

  const products = await getProducts();
  const filteredProducts = filterProducts(
  products,
  {
    search,
    category
  }
);
const sortedProducts = sortProducts(filteredProducts,{sort})

  if (filteredProducts.length === 0) {
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
      <p className="mt-2 text-gray-500">
        {" "}
        {sortedProducts.length} Products found
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {sortedProducts.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
