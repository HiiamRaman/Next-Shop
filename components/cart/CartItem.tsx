"use client";

import Image from "next/image";
import { CartItem as CartItemType } from "@/types/cart.types";
import { useCartStore } from "@/store/cartStore";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const itemTotalLinePrice = item.price * item.quantity;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 hover:border-black hover:shadow-sm hover:shadow-emerald-50/40 transition-all duration-300 group">
      {/* Left Container: Image & Details */}
      <div className="flex items-center gap-4 sm:gap-5">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-50 border border-gray-100 rounded-xl overflow-hidden">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="96px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="space-y-1">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight line-clamp-1">
            {item.title}
          </h2>
          {/* Subtle Color Accent 1: Emerald Single Price */}
          <p className="text-sm font-semibold text-emerald-600">
            ${item.price}{" "}
            <span className="text-xs font-normal text-gray-400">each</span>
          </p>

          {/* Mobile subtotal text */}
          <p className="text-xs font-medium text-gray-400 sm:hidden pt-1">
            Total:{" "}
            <span className="text-sm font-bold text-emerald-600">
              ${itemTotalLinePrice}
            </span>
          </p>
        </div>
      </div>

      {/* Right Container: Actions & Total */}
      <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-50">
        {/* Modern Gray Quantity Counter with subtle hover text shift */}
        <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="w-8 h-8 flex items-center justify-center rounded-lg font-bold text-gray-400 hover:text-gray-900 hover:bg-white transition cursor-pointer select-none"
          >
            —
          </button>

          <span className="font-semibold text-sm text-gray-800 w-8 text-center select-none">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="w-8 h-8 flex items-center justify-center rounded-lg font-bold text-gray-400 hover:text-emerald-600 hover:bg-white transition cursor-pointer select-none"
          >
            +
          </button>
        </div>

        {/* Subtle Color Accent 2: Elegant Desktop Subtotal Line */}
        <div className="hidden sm:block text-right min-w-[70px]">
          <p className="text-sm font-extrabold text-emerald-600">
            ${itemTotalLinePrice}
          </p>
        </div>

        {/* Trash button: turns soft red on hover */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 cursor-pointer"
          aria-label="Remove item from cart"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
