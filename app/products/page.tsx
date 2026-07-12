import React from "react";
import { getProducts } from "@/services/product.service";
import ProductCard from "@/components/product/productCard";
async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <h1 className="text-3xl font-bold"> All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {products.map((product) => {
          return (
            <div key={product.id}>

                <ProductCard   product = {product} />


            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
