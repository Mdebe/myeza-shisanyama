"use client";

import Image from "next/image";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div className="flex flex-col gap-4">
          <Image
            src="/logo.png"
            alt="KwaMyeza Shisanyama Logo"
            width={260}
            height={120}
            className="object-contain"
          />

           

          <div className="flex gap-4 mt-2">
            <a
              href="https://wa.me/27814493274"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c70207] transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>

            <a
              href="https://web.facebook.com/profile.php?id=61584983372884"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c70207] transition-colors"
            >
              <FaFacebookF size={24} />
            </a>

            <a
              href="https://www.tiktok.com/@kwamyezashisacarwash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c70207] transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl md:text-2xl font-bold mb-4">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3 text-gray-300 text-base md:text-lg">
            <li><a href="#home" className="hover:text-[#c70207]">Home</a></li>
            <li><a href="#about" className="hover:text-[#c70207]">About</a></li>
            <li><a href="#deals" className="hover:text-[#c70207]">Menu & Deals</a></li>
            <li><a href="#contact" className="hover:text-[#c70207]">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl md:text-2xl font-bold mb-4">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-2 text-gray-300 text-base md:text-lg leading-relaxed">
            <li>📍 Nkoninga Rd, Birdswood</li>
            <li>Richards Bay, 3900</li>
            <li>📞 078 449 3274 | 073 437 4589</li>
            <li>💬 WhatsApp available</li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h4 className="text-xl md:text-2xl font-bold mb-4">
            Find Us
          </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435.5844182152677!2d32.09848103305553!3d-28.739241942967922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1efa25007da21449%3A0xf6b60cb085e5627b!2sKwaMyeza%20Shisanyama%20%26%20Carwash!5e1!3m2!1sen!2sza!4v1770374373582!5m2!1sen!2sza"
            className="w-full h-48 md:h-56 rounded-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm md:text-base space-y-1">
        <p>
          &copy; {new Date().getFullYear()} KwaMyeza Shisanyama & Carwash. All rights reserved.
        </p>
        <p>
          Built by{" "}
          <span className="text-[#c70207] font-semibold">Mdebe</span>
        </p>
      </div>
    </footer>
  );
}
