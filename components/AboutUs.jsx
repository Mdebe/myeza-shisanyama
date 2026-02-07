"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Left Video */}
        <motion.div
          className="md:w-1/2 relative h-[380px] w-full rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <video
            src="/videos/about-us.mp4" // replace with your video path
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
           

          <h3 className="text-4xl md:text-5xl font-bold text-[#010a33]">
            About <span className="text-[var(--accent)]">Myeza Shisanyama</span>
          </h3>

  <p className="mt-6 text-lg leading-relaxed text-gray-700">
  <span className="flame-glow">Good music</span>
  <span className="mx-2">•</span>
  <span className="flame-glow delay-1">Good vibes</span>
  <span className="mx-2">•</span>
  <span className="flame-glow delay-2">Flame-grilled meats</span>
  <span className="ml-2">for every taste.</span>
</p>


          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Located at Madlanzini, Richards Bay, we’re open today. Pull through and enjoy freshly grilled beef, chicken, mutton, and boerewors while soaking in the atmosphere.
          </p>

          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our mission is to provide an unforgettable shisanyama experience — quality meats, friendly service, and community vibes.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
