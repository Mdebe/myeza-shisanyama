"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRouter } from "next/navigation"; // Next.js router

const menuItems = [
  { name: ["Beef", "Ribs"], desc: "Fresh beef ribs, perfect for grilling or braai.", img: "/images/beef-ribs.jpg", price: 120 },
  { name: ["Chicken", "Wings"], desc: "Juicy chicken wings, marinated for ultimate flavor.", img: "/images/chicken-wings.jpg", price: 80 },
  { name: ["Boerewors"], desc: "Traditional South African boerewors, ideal for your shisa nyama.", img: "/images/boerewors.jpg", price: 100 },
  { name: ["Mutton", "Chops"], desc: "Tender mutton chops, perfectly seasoned for grilling.", img: "/images/mutton.jpg", price: 150 },
  { name: ["Pork", "Spare Ribs"], desc: "Succulent pork ribs with smoky marinade.", img: "/images/pork-ribs.jpg", price: 130 },
  { name: ["Lamb", "Kebabs"], desc: "Flavorful lamb kebabs, grilled to perfection.", img: "/images/lamb-kebabs.jpg", price: 140 },
];

function MenuCard({ item }) { // remove TypeScript type
  const router = useRouter();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  function addToCart() {
    const params = new URLSearchParams({
      name: item.name.join(" "),
      price: item.price.toString(),
      totalPrice: item.price.toString(),
    }).toString();
    router.push(`/menu?${params}`);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col"
    >
      <div className="relative h-64 w-full">
        <Image src={item.img} alt={item.name.join(" ")} fill className="object-cover" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-2xl font-bold mb-2 text-center">
          <span className="text-[var(--primary)]">{item.name[0]}</span>{" "}
          {item.name[1] && <span className="text-[var(--accent)]">{item.name[1]}</span>}
        </h4>
        <p className="text-gray-600 text-center mb-3">{item.desc}</p>
        <p className="text-[var(--accent)] font-bold text-xl text-center mb-4">
          R{item.price} / kg
        </p>

        <button
          onClick={addToCart}
          className="bg-[var(--accent)] hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md shadow transition"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-bold">
          Our <span className="text-[var(--primary)]">Menu</span>
        </h2>
        <p className="text-gray-600 text-lg mt-3">
          Choose your favorite meats
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {menuItems.map((item) => (
          <MenuCard key={item.name.join(" ")} item={item} />
        ))}
      </div>
    </section>
  );
}
