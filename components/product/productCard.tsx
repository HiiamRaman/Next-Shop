// "use client";

// import React from "react";
// import { Product } from "@/types/products.types";
// import Image from "next/image";
// import Link from "next/link";
// import { useCartStore } from "@/store/cartStore";
// type productCardProps = {
//   product: Product;
// };

// function ProductCard({ product }: productCardProps) {
//   const addToCart = useCartStore((state) => state.addToCart);
//   return (
//     <>
//       <Link href={`/products/${product.id}`}>
//         <div className="max-w-4xl mx-auto p-6">
//           <Image
//             src={product.thumbnail}
//             alt={product.title}
//             width={250}
//             height={250}
//             className="w-full h-52 object-cover rounded"
//           />

//           <h1 className="text-3xl font-bold mt-4">{product.title}</h1>

//           <p className="text-yellow-500">⭐ {product.rating}</p>

//           <p className="text-2xl font-semibold mt-2">${product.price}</p>

//           <p className="mt-4 text-gray-600">{product.description}</p>
//         </div>
//       </Link>
//       <button
//         className="mt-6 bg-black text-white px-5 py-2 rounded hover:cursor-pointer"
//         onClick={() => addToCart(product)}
//       >
//         Add To Cart
//       </button>
//     </>
//   );
// }

// export default ProductCard;











"use client";

import React from "react";
import { Product } from "@/types/products.types";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

type productCardProps = {
  product: Product;
};

function ProductCard({ product }: productCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between p-5 border border-gray-100">
      {/* 1. Clickable area for product details */}
      <Link href={`/products/${product.id}`} className="block group">
        <div className="relative w-full h-52 overflow-hidden rounded-md">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-w-700px) 100vw, 300px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="mt-4">
          <h1 className="text-xl font-bold text-gray-800 line-clamp-1 group-hover:text-emerald-600 transition-colors">
            {product.title}
          </h1>
          <p className="text-yellow-500 mt-1 text-sm">⭐ {product.rating}</p>
          <p className="mt-2 text-gray-600 text-sm line-clamp-2 min-h-[40px]">
            {product.description}
          </p>
          <p className="text-2xl font-semibold mt-3 text-gray-900">${product.price}</p>
        </div>
      </Link>

      {/* 2. Decoupled Add to Cart Button (Kept safely outside of the Link) */}
      <button
        className="mt-5 w-full bg-black text-white py-2.5 rounded-md font-medium hover:bg-gray-800 transition-colors cursor-pointer"
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;