"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "./CartContext";

const featuredDeals = [
  { name: ["Beef", "Ribs"], desc: "Fresh beef ribs, perfect for grilling or braai.", img: "/images/beef-ribs.jpg", price: 120 },
  { name: ["Chicken", "Wings"], desc: "Juicy chicken wings, marinated for ultimate flavor.", img: "/images/chicken-wings.jpg", price: 80 },
  { name: ["Boerewors"], desc: "Traditional South African boerewors, ideal for shisa nyama.", img: "/images/boerewors.jpg", price: 100 },
  { name: ["Mutton", "Chops"], desc: "Tender mutton chops, perfectly seasoned for grilling.", img: "/images/mutton.jpg", price: 150 },
  { name: ["Pork", "Spare Ribs"], desc: "Succulent pork ribs with smoky marinade.", img: "/images/pork-ribs.jpg", price: 130 },
  { name: ["Lamb", "Kebabs"], desc: "Flavorful lamb kebabs, grilled to perfection.", img: "/images/lamb-kebabs.jpg", price: 140 },
];

export default function FeaturedDeals() {
  const scrollRef = useRef(null); // <--- NO type annotation
  const { addToCart } = useCart();
  const router = useRouter();

  const items = [...featuredDeals, ...featuredDeals];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 1;
    let requestId;

    const scrollLoop = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
      requestId = requestAnimationFrame(scrollLoop);
    };

    scrollLoop();
    return () => cancelAnimationFrame(requestId);
  }, []);

  const handleAddToCart = (item) => {
    addToCart({ ...item, qty: 1, weight: 1, totalPrice: item.price });
    router.push("/menu");
  };

  return (
    <section id="deals" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-5xl font-bold text-[var(--primary)]">
          Featured <span className="text-[var(--accent)]">Deals</span>
        </h2>
        <p className="text-gray-600 text-lg mt-3">
          Don’t miss our daily specials and hot offers!
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={scrollRef} className="flex overflow-x-hidden gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-3xl shadow-lg p-4 flex-shrink-0 hover:scale-105 transition-transform"
            >
              <div className="relative h-40 w-full rounded-xl overflow-hidden">
                <Image src={item.img} alt={item.name.join(" ")} fill className="object-cover" />
              </div>

              <h4 className="text-xl font-bold mt-3">
                <span className="text-[var(--primary)]">{item.name[0]}</span>{" "}
                {item.name[1] && <span className="text-[var(--accent)]">{item.name[1]}</span>}
              </h4>

              <p className="text-gray-600 mt-1">{item.desc}</p>
              <p className="text-[var(--accent)] font-bold text-lg mt-2">
                R{item.price} / kg
              </p>

              <button
                onClick={() => handleAddToCart(item)}
                className="mt-4 w-full bg-[var(--accent)] hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
