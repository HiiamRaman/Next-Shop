import Link from "next/link";
import { getProducts } from "@/services/product.service";
import ProductCard from "../product/productCard";

export default async function FeaturedProducts() {
  const products = await getProducts();

  const featuredProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section
      className="
        bg-slate-50
        py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >
        {/* Header */}
        <div
          className="
            mb-14
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="max-w-2xl">
            <p
              className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-emerald-600
              "
            >
              Our Collection
            </p>

            <h2
              className="
                text-4xl
                font-bold
                tracking-tight
                text-slate-900
                md:text-5xl
              "
            >
              Featured Products
            </h2>

            <p
              className="
                mt-4
                text-lg
                leading-relaxed
                text-slate-500
              "
            >
              Discover our highest-rated products carefully selected for
              exceptional quality and everyday performance.
            </p>
          </div>

          <Link
            href="/products"
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-emerald-600
              transition
              hover:text-emerald-700
            "
          >
            View All
            <span>→</span>
          </Link>
        </div>

        {/* Products Grid */}
        <div
          className="
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
