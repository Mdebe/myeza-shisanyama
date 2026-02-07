"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "Hot & Fresh",
    subtitle: "Shisanyama",
    description: "Flame-grilled meat, cooked fresh while you wait",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Quality Meat",
    subtitle: "Every Day",
    description: "Beef, chicken, mutton & boerewors done right",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Order Online",
    subtitle: "Pickup or Delivery",
    description: "Fast, easy ordering straight from your phone",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`${slide.title} ${slide.subtitle}`}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/65" />
        </div>
      ))}

      {/* Centered Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-center px-6">
        <div className="text-white max-w-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {slides[current].title}
            <br />
            <span className="text-[var(--accent)]">{slides[current].subtitle}</span>
          </h1>

          <p className="mt-5 text-lg text-gray-200">{slides[current].description}</p>

          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            {/* Order Now button links to /menu */}
            <Link
              href="/menu"
              className="bg-[var(--accent)] hover:brightness-90 px-8 py-3 rounded-md font-semibold uppercase tracking-wide transition shadow"
            >
              Order Now
            </Link>

            {/* View Menu button links to /menu */}
            <Link
              href="/menu"
              className="border border-white/40 hover:border-[var(--accent)] px-8 py-3 rounded-md font-semibold uppercase tracking-wide transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition ${
              i === current ? "bg-[var(--accent)]" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Accent Bar */}
      <div className="absolute bottom-0 w-full h-8 bg-[var(--accent)]" />
    </section>
  );
}
