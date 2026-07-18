import { getProducts } from "@/services/product.service";
import ProductCard from "../product/productCard";

async function FeaturedProducts() {
  const products = await getProducts();

  // Fix sorting logic: sort by rating descending
  const featuredProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (    
    <section className=" px-6 py-12 md:py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100 rounded-xl shadow-sm">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight relative inline-block">
          Featured Products
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-emerald-200 rounded-full"></span>
        </h2>
        <p className="mt-3 text-gray-600 text-sm">
          Handpicked items with top ratings
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg rounded-xl"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
