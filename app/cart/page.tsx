"use client";

import { useCartStore } from "@/store/cartStore";
import CartItem from "@/components/cart/CartItem";
import Link from "next/link";

function CartPage() {
  const cart = useCartStore((state) => state.cart);

  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div
      className="
      min-h-screen
      bg-slate-50
      py-12
      px-6
    "
    >
      <div
        className="
        max-w-5xl
        mx-auto
      "
      >
        {/* Header */}
        <div className="mb-10">
          <h1
            className="
            text-4xl
            font-extrabold
            text-slate-800
          "
          >
            Shopping Cart
          </h1>

          <p
            className="
            text-gray-500
            mt-2
          "
          >
            Review your items before checkout
          </p>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 && (
          <div
            className="
            bg-white
            rounded-2xl
            shadow-sm
            border
            p-10
            text-center
          "
          >
            <div className="text-5xl mb-4">🛒</div>

            <h2
              className="
              text-2xl
              font-bold
              text-slate-800
            "
            >
              Your cart is empty
            </h2>

            <p
              className="
              text-gray-500
              mt-2
            "
            >
              Add some products and come back here.
            </p>

            <Link
              href="/products"
              className="
                inline-block
                mt-6
                bg-emerald-600
                text-white
                px-6
                py-3
                rounded-full
                hover:bg-emerald-700
                transition
              "
            >
              Browse Products
            </Link>
          </div>
        )}

        {/* Cart Items */}
        {cart.length > 0 && (
          <div
            className="
            space-y-5
          "
          >
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            {/* Bottom Actions */}
            <div
              className="
              flex
              justify-between
              items-center
              bg-white
              rounded-2xl
              border
              shadow-sm
              p-6
              mt-8
            "
            >
              <p
                className="
                font-semibold
                text-slate-700
              "
              >
                {cart.length} items in cart
              </p>

              <button
                onClick={clearCart}
                className="
                  bg-red-500
                  text-white
                  px-6
                  py-3
                  rounded-full
                  font-medium
                  hover:bg-red-600
                  transition
                "
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
