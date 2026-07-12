import React from "react";
import { getProductById } from "@/services/product.service";

interface ProductDetailProp {
  params: Promise<{ id: string }>;
}
async function ProductDetailsPage({ params }: ProductDetailProp) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}

export default ProductDetailsPage;
