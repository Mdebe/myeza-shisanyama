"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white h-[60vh] flex items-center justify-center">
        <Image
          src="/images/hero-1.jpg"
          alt="Shisanyama Hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            About <span className="text-orange-500">Myeza Shisanyama</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Flame-grilled meat, served fresh every day with passion and vibe.
          </p>
        </div>
      </section>

      {/* Story / About Us */}
      <section className="bg-gray-50 py-24 px-6 text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/about-us.jpg"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-3xl object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-[var(--primary)]">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              Myeza Shisanyama started as a small local spot, bringing the community together over flame-grilled meats.
              We pride ourselves in serving high-quality beef, chicken, mutton, and boerewors every day.
            </p>
            <p className="text-gray-700">
              Our mission is simple: deliver delicious, fresh, and flavorful meals in a welcoming and vibrant atmosphere.
              Whether you're here for a quick meal or a celebration, we ensure every bite is memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-orange-500">
            Why Choose Us
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We are passionate about quality, freshness, and providing a great experience for every customer.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
            <p className="text-gray-300">Only the best meat, locally sourced and freshly prepared daily.</p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Flame-Grilled Perfection</h3>
            <p className="text-gray-300">Expertly grilled to lock in flavor and tenderness every time.</p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Vibrant Atmosphere</h3>
            <p className="text-gray-300">A welcoming and lively space to enjoy your meal with family and friends.</p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Fast Service</h3>
            <p className="text-gray-300">Quick, efficient service without compromising on taste or quality.</p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--primary)]">Meet Our Team</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Passionate chefs and staff dedicated to bringing you the best Shisanyama experience.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {["Chef Sizwe", "Chef Thabo", "Manager Nomsa", "Staff Lerato"].map((name, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <Image
                src={`/images/team-${i + 1}.jpg`}
                alt={name}
                width={200}
                height={200}
                className="mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-bold text-lg">{name}</h4>
              <p className="text-gray-600 mt-1">Expert in making your meals unforgettable</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-500 text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Taste the Best?</h2>
        <p className="mb-8 text-lg">Order your favorite Shisanyama dishes online or visit us today!</p>
        <a
          href="/menu"
          className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition"
        >
          View Menu & Order Now
        </a>
      </section>

      <Footer />
    </>
  );
}
