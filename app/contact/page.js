"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white h-[50vh] flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center">
          Contact <span className="text-[#f97316]">Us</span>
        </h1>
      </section>

      {/* Contact Info & Form */}
      <section className="bg-gray-50 text-black py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-700">
              We’d love to hear from you! Whether you have a question, want to place an order, or just say hi.
            </p>
            <div className="space-y-3">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+27627102645" className="text-[#f97316]">+27 62 710 2645</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@myeza.co.za" className="text-[#f97316]">info@myeza.co.za</a>
              </p>
              <p>
                <strong>Address:</strong> 123 Shisanyama Street, Richards Bay, South Africa
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]"
            />
            <button
              type="submit"
              className="w-full bg-[#f97316] text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}
