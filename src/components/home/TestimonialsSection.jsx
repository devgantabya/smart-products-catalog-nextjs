import Image from "next/image";
import { HiOutlineAnnotation } from "react-icons/hi";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Entrepreneur",
    avatar: "/testimonials/alice.jpg",
    quote:
      "Sellvix has one of the cleanest and smoothest shopping experiences I've used.",
  },
  {
    name: "Mark Thompson",
    role: "Tech Enthusiast",
    avatar: "/testimonials/mark.jpg",
    quote:
      "The platform is fast, responsive, and secure. Adding products is super easy.",
  },
  {
    name: "Sophia Lee",
    role: "Fashion Blogger",
    avatar: "/testimonials/sophia.jpg",
    quote:
      "I love the modern UI and smooth experience. Sellvix makes browsing a joy!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/40 rounded-3xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          What Users <span className="text-emerald-500">Say</span>
        </h2>
        <p className="max-w-2xl mx-auto opacity-80">
          Hear from our happy Sellvix users.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <HiOutlineAnnotation className="absolute top-6 left-6 text-emerald-200 text-3xl" />

            <p className="italic opacity-80 mb-6 mt-4">{t.quote}</p>

            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  {t.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
