"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CartIcon() {
  const cart = useCartStore((state) => state.cart);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link
      href="/cart"
      className="relative rounded-full p-2 transition hover:bg-emerald-50"
    >
      🛒

      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">
          {cartCount}
        </span>
      )}
    </Link>
  );
}