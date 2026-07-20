export default function Features() {
  const features = [
    {
      title: "Free Shipping",
      description: "Enjoy fast and reliable delivery on all orders.",
      icon: "🚚",
    },
    {
      title: "Secure Payment",
      description:
        "Your transactions are protected with secure payment systems.",
      icon: "🔒",
    },
    {
      title: "Easy Returns",
      description: "Return products easily within our return period.",
      icon: "↩️",
    },
    {
      title: "24/7 Support",
      description: "Our team is always ready to help you.",
      icon: "💬",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Why choose us
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Built for a better shopping experience
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Everything you need for a simple, secure, and enjoyable shopping
            journey.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 ">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-2xl transition  hover:shadow-emerald-500/30 group  "
            >
              {/* Icon */}
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-3xl mb-6 group-hover:bg-emerald-600
                  group-hover:text-white"
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
