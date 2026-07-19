interface Testimonial {
  name: string;
  role: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Wilson",
    role: "Product Designer",
    message:
      "The quality and shopping experience exceeded my expectations.",
  },
  {
    name: "Michael Lee",
    role: "Developer",
    message: "Fast delivery and amazing customer support.",
  },
  {
    name: "Emma Davis",
    role: "Entrepreneur",
    message: "The products feel premium and carefully selected.",
  },
];

function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Customer Reviews
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl relative inline-block">
            Loved by our customers
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-emerald-200 rounded-full"></span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Real experiences from people who enjoy our products and service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/20"
            >
              {/* Decorative Quote */}
              <div className="mb-5 text-5xl font-serif text-emerald-600 opacity-70 group-hover:opacity-100 transition">
                “
              </div>

              {/* Message */}
              <p className="leading-relaxed text-slate-600">{item.message}</p>

              {/* Author */}
              <div className="mt-8">
                <h3 className="font-bold text-slate-900">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.role}</p>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-emerald-100 opacity-0 blur-3xl transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
