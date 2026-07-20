import React from "react";

function Loading() {
  return (
    <section className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            NovaShop
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            Loading your shopping experience...
          </p>
        </div>

        {/* Skeleton Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              {/* Image Skeleton */}
              <div className="h-56 w-full animate-pulse rounded-2xl bg-slate-200" />

              {/* Text Skeleton */}
              <div className="mt-5 space-y-3">
                {/* Title */}
                <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />
                {/* Description */}
                <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                {/* Price */}
                <div className="h-5 w-1/3 animate-pulse rounded bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Loading;
