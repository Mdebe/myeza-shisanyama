"use client";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
          Contact <span className="text-[#f97316]">KwaMyeza Shisanyama</span>
        </h3>
        <p className="text-gray-600 mt-3 text-lg mb-12">
          Pull through for flame-grilled meats, good vibes, and fresh car wash services.
          Call, WhatsApp, or visit us today.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Contact Details */}
          <div className="space-y-6 text-left">

            {/* Address */}
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <FaMapMarkerAlt className="text-[#f97316] w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-700 leading-relaxed">
                  Nkoninga Rd<br />
                  Birdswood<br />
                  Richards Bay, 3900<br />
                  South Africa
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nkoninga+Rd+Birdswood+Richards+Bay+3900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f97316] font-semibold hover:underline mt-2 inline-block"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <FaPhoneAlt className="text-[#f97316] w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-700">078 ** ** **</p>
                <p className="text-gray-700">073 ***** **</p>
              </div>
            </div>

             

            

          </div>

          {/* Right: Google Map */}
          <div className="w-full h-96 rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435.5844182152677!2d32.09848103305553!3d-28.739241942967922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1efa25007da21449%3A0xf6b60cb085e5627b!2sKwaMyeza%20Shisanyama%20%26%20Carwash!5e1!3m2!1sen!2sza!4v1770374373582!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KwaMyeza Shisanyama & Carwash Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
