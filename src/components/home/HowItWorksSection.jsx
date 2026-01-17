import { FiShoppingCart, FiEye, FiUserPlus } from "react-icons/fi";

const steps = [
  {
    title: "Browse Products",
    desc: "Explore a wide range of curated products easily.",
    icon: FiShoppingCart,
  },
  {
    title: "View Details",
    desc: "Check product info, reviews, and ratings before buying.",
    icon: FiEye,
  },
  {
    title: "Login & Add Products",
    desc: "Sign in to manage and add your own products seamlessly.",
    icon: FiUserPlus,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          How <span className="text-emerald-500">Sellvix Works</span>
        </h2>
        <p className="max-w-2xl mx-auto opacity-80">
          Follow these simple steps to start buying and selling products
          effortlessly.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center md:space-x-8 gap-10">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative group bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all flex-1 max-w-sm"
          >
            <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 mx-auto group-hover:scale-110 transition-transform">
              <step.icon size={28} />
            </div>

            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-white font-bold bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
              {index + 1}
            </div>

            <h3 className="text-lg font-semibold mt-6 text-center group-hover:text-emerald-500 transition">
              {step.title}
            </h3>
            <p className="text-center opacity-80 mt-2">{step.desc}</p>

            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 right-[-50%] w-1/2 h-1 bg-emerald-200 dark:bg-emerald-700 rounded-full z-0"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
