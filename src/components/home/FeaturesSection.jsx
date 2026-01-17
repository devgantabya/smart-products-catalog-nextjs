import { FiZap, FiShield, FiSmartphone } from "react-icons/fi";

const features = [
  {
    title: "Fast",
    desc: "Optimized performance and lightning-fast navigation.",
    icon: FiZap,
  },
  {
    title: "Secure",
    desc: "Authentication, protected routes, and safe data handling.",
    icon: FiShield,
  },
  {
    title: "Responsive",
    desc: "Flawless experience across mobile, tablet, and desktop.",
    icon: FiSmartphone,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Why Choose <span className="text-emerald-500">Sellvix</span>
        </h2>
        <p className="max-w-2xl mx-auto opacity-80">
          Built with modern technologies to deliver speed, security, and
          reliability.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-transparent
                       shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300"
          >
            <div
              className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl
                            bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400
                            group-hover:scale-110 transition"
            >
              <Icon size={26} />
            </div>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-500 transition">
              {title}
            </h3>
            <p className="opacity-80 leading-relaxed">{desc}</p>

            <span className="absolute inset-x-0 bottom-0 h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
