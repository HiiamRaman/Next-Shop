import React from 'react'
import { Product } from '@/types/products.types'
import Image from 'next/image';
 type productCardProps  = {
  product:Product
 }


function ProductCard({ product }: productCardProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
  <img
    src={product.thumbnail}
    alt={product.title}
    className="w-80 rounded-lg"
  />

  <h1 className="text-3xl font-bold mt-4">
    {product.title}
  </h1>

  <p className="text-yellow-500">
    ⭐ {product.rating}
  </p>

  <p className="text-2xl font-semibold mt-2">
    ${product.price}
  </p>

  <p className="mt-4 text-gray-600">
    {product.description}
  </p>

  <button className="mt-6 bg-black text-white px-5 py-2 rounded">
    Add To Cart
  </button>
</div>
  );
}

export default ProductCard
