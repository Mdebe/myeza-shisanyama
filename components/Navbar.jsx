"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

const servicesList = ["Beef", "Chicken", "Mutton", "Boerewors"];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Myeza Shisanyama Logo"
              width={180}
              height={100}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>

            {/* Desktop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button
                className="nav-link"
                aria-expanded={desktopServicesOpen}
              >
                Menu
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-4 w-56 rounded-lg bg-neutral-900 shadow-xl overflow-hidden transition-all duration-300 ${
                  desktopServicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {servicesList.map((service) => (
                  <Link
                    key={service}
                    href="/menu"
                    className="block px-5 py-3 text-sm hover:bg-[var(--accent)] transition"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Desktop Cart */}
          <div className="hidden md:flex">
            <Link
              href="/menu"
              className="text-[var(--accent)] hover:text-orange-600 text-2xl transition"
              aria-label="View Cart"
            >
              <FaShoppingCart />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black border-t border-white/10 transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5 text-sm uppercase tracking-wide">
          <Link onClick={() => setMobileMenuOpen(false)} href="/" className="mobile-link">Home</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="/about" className="mobile-link">About</Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="mobile-link w-full flex justify-between"
            >
              Menu <span>{mobileServicesOpen ? "▲" : "▼"}</span>
            </button>

            <div
              className={`transition-all duration-300 ${
                mobileServicesOpen ? "max-h-96 mt-4" : "max-h-0 overflow-hidden"
              }`}
            >
              <ul className="ml-4 space-y-3 border-l border-[var(--accent)] pl-4">
                {servicesList.map((service) => (
                  <li key={service}>
                    <Link
                      href="/menu"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-300 hover:text-[var(--accent)] transition"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            onClick={() => setMobileMenuOpen(false)}
            href="/contact"
            className="mobile-link"
          >
            Contact
          </Link>

          {/* Mobile CTA */}
          <Link
            href="/menu"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full bg-[var(--accent)] text-center py-3 rounded-md font-semibold hover:bg-orange-600 transition"
          >
            Order Now
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          font-weight: 600;
          color: white;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .mobile-link {
          font-weight: 600;
        }
      `}</style>
    </header>
  );
}