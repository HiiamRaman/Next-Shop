export default function Newsletter() {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Stay Updated
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Subscribe for the latest products, exclusive offers, and shopping inspiration.
        </p>

        {/* Form */}
        <form className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-white/20 bg-white px-6 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-400 transition duration-300"
          />
          <button
            type="submit"
            className="rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-emerald-700 focus:ring-2 focus:ring-white"
          >
            Subscribe
          </button>
        </form>

        {/* Trust Note */}
        <p className="mt-6 text-sm text-slate-400">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}



