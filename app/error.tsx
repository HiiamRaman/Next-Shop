"use client";

function Error({ reset }: { reset: () => void }) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 ">
      <div
        className="
          max-w-md
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-10
          text-center
          shadow-xl
          shadow-emerald-200
        "
      >
        {/* Icon */}
        <div
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-red-100
            text-3xl
          "
        >
          ⚠️
        </div>

        <h1
          className="
            mt-6
            text-3xl
            font-bold
            tracking-tight
            text-slate-900
          "
        >
          Something went wrong
        </h1>

        <p
          className="
            mt-3
            leading-relaxed
            text-slate-500
          "
        >
          We couldn't load this page. Please try again.
        </p>

        <button
          onClick={reset}
          className="
            mt-8
            rounded-full
            bg-emerald-600
            px-8
            py-3
            font-semibold
            text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-105
            hover:bg-emerald-700
          "
        >
          Try Again
        </button>
      </div>
    </section>
  );
}

export default Error;












