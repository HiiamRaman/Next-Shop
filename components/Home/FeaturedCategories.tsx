import { getProducts } from "@/services/product.service";

async function FeaturedCategories() {
  const products = await getProducts();

  const uniqueCategories = [...new Set(products.map((item) => item.category))];

  return (
    <section
      className="
        bg-white
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
            mb-12
            max-w-2xl
          "
        >
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
            Collections
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
            Shop by Category
          </h2>

          <p
            className="
              mt-4
              text-lg
              text-slate-500
            "
          >
            Explore our popular collections and discover products selected for
            every lifestyle.
          </p>
        </div>

        {/* Categories */}
        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {uniqueCategories.map((category) => (
            <div
              key={category}
              className="
                group
                cursor-pointer
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-8
                transition
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-2xl
                hover:shadow-emerald-500/30
              "
            >
              <div
                className="
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-emerald-100
                  text-2xl
                  text-emerald-600
                  transition
                  group-hover:bg-emerald-600
                  group-hover:text-white
                "
              >
                ✨
              </div>

              <h3
                className="
                  text-xl
                  font-bold
                  capitalize
                  text-slate-900
                "
              >
                {category}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-500
                "
              >
                Explore collection →
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;
