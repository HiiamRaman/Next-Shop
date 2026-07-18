import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Decorative dot-grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-10 hidden h-64 w-64 opacity-20 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0f766e 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-16">
        {/* Hero Content */}
        <div className="max-w-xl">
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            <span className="h-px w-6 bg-emerald-600" />
            Premium Shopping Experience
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Discover products{" "}
            <span className="relative text-emerald-600">
              made for modern life
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 w-full text-emerald-400"
              >
                <path
                  d="M2 9C40 2 160 2 198 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Shop carefully selected products with premium quality, modern
            design, and a seamless shopping experience.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              aria-label="Shop products"
              className="rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Shop Now
            </Link>
            <Link
              href="/products"
              aria-label="Explore products"
              className="rounded-full border border-slate-200 px-8 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Explore
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
            {["Free shipping", "Secure checkout", "30-day returns"].map(
              (item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto flex max-w-md justify-center lg:max-w-none">
          {/* Organic blob backdrop */}
          <svg
            aria-hidden
            viewBox="0 0 500 500"
            className="absolute -z-10 h-[115%] w-[115%] text-emerald-50"
          >
            <path
              fill="currentColor"
              d="M420,300Q400,400,300,430Q200,460,120,390Q40,320,60,220Q80,120,180,80Q280,40,370,110Q460,180,420,300Z"
            />
          </svg>

          {/* Tilted frame */}
          <div
            aria-hidden
            className="absolute inset-6 -rotate-3 rounded-[2rem] border border-emerald-100 bg-emerald-50/40 sm:inset-10"
          />

          {/* Image card */}
          <div className="relative z-10 w-full overflow-hidden rounded-[2rem] border border-white bg-white shadow-xl shadow-slate-900/10 transition duration-500 hover:-rotate-1 hover:shadow-emerald-900/20">
            <Image
              src="/Image/hero.jpg"
              alt="Premium shopping product"
              width={600}
              height={600}
              priority
              quality={85}
              sizes="(max-width:768px) 100vw, 50vw"
              className="h-auto w-full object-cover transition duration-500 hover:scale-[1.03]"
            />
          </div>

          {/* Floating trust badge */}
          <div className="absolute -bottom-5 left-4 z-20 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/90 px-4 py-3 shadow-md shadow-slate-900/10 backdrop-blur-sm sm:left-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-900">
                Quality guaranteed
              </p>
              <p className="text-xs text-slate-500">
                Hand-checked before shipping
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
