"use client";

import { Product } from "@/types/products.types";
import { useCartStore } from "@/store/cartStore";
interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      onClick={() => addToCart(product)}
      className="
       w-full sm:w-auto min-w-[200px] bg-black hover:bg-gray-900 text-white font-medium py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-center
      "
    >
      Add To Cart
    </button>
  );
}
