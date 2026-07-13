import React from "react";
import { getProducts } from "@/services/product.service";
import ProductCard from "@/components/product/productCard";

interface ProductsPageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { search } = await searchParams;
  console.log("search", search);
  const products = await getProducts();
  const filteredProducts = search
    ? products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    : products;

if(filteredProducts.length===0){
  return(
    <div className="mt-20 text-center ">
      <h2 className="text-2xl font-bold"> NO PRODUCTS FOUND </h2>
      <p className="mt-2 text-gray-500">Try a different search term.</p>
    </div>
  )
}


  return (
    <div>
      <h1 className="text-3xl font-bold">
       
        {search ? `Results for ${search}` : "All Products"}
      </h1>
      <p className="mt-2 text-gray-500"> {filteredProducts.length} Products found</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {filteredProducts.map((product) => {
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
