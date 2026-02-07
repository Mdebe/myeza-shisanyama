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
        <div className="grid grid-cols-3 items-center py-3">
          {/* Mobile: Logo on left */}
          <Link href="/" className="flex md:justify-center">
            <Image
              src="/logo.png"
              alt="Myeza Shisanyama Logo"
              width={200}
              height={120}
              className="h-24 w-auto object-contain cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center gap-10 text-sm uppercase tracking-widest">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>

            {/* Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <Link href="/menu" className="nav-link">
                Menu
              </Link>
              {desktopServicesOpen && (
                <ul className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 rounded-lg bg-neutral-900 shadow-xl overflow-hidden">
                  {servicesList.map((service) => (
                    <li key={service}>
                      <Link
                        href="/menu"
                        className="block px-5 py-3 text-sm hover:bg-[var(--accent)] transition"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Desktop Cart Icon */}
          <div className="hidden md:flex justify-end">
            <Link
              href="/menu"
              className="text-[var(--accent)] hover:text-orange-600 text-2xl"
              aria-label="View Cart"
            >
              <FaShoppingCart />
            </Link>
          </div>

          {/* Mobile Hamburger on right */}
          <button
            className="md:hidden flex justify-end"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-5 text-sm uppercase tracking-wide">
            <Link onClick={() => setMobileMenuOpen(false)} href="/" className="mobile-link">Home</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/about" className="mobile-link">About</Link>

            {/* Mobile Menu Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="mobile-link w-full flex justify-between"
              >
                Menu <span>▼</span>
              </button>

              {mobileServicesOpen && (
                <ul className="mt-4 ml-4 space-y-3 border-l border-[var(--accent)] pl-4">
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
              )}
            </div>

            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/contact"
              className="mobile-link"
            >
              Contact
            </Link>

            {/* Full-width Mobile Order Button */}
            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full bg-[var(--accent)] text-center py-3 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}

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
