"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type MenuItem = {
  id: number;
  name: string;
  category: string;
  price: number; // base price
  image: string;
  totalPrice?: number; // user-adjustable
};

const menuItems: MenuItem[] = [
  { id: 1, name: "Beef Ribs", category: "Beef", price: 120, image: "/images/beef-ribs.jpg" },
  { id: 2, name: "T-Bone Steak", category: "Beef", price: 140, image: "/images/tbone.jpg" },
  { id: 3, name: "Chicken Wings", category: "Chicken", price: 80, image: "/images/chicken-wings.jpg" },
  { id: 4, name: "Whole Chicken", category: "Chicken", price: 110, image: "/images/chicken.jpg" },
  { id: 5, name: "Mutton Chops", category: "Mutton", price: 150, image: "/images/mutton.jpg" },
  { id: 6, name: "Boerewors", category: "Wors", price: 100, image: "/images/boerewors.jpg" },
  { id: 7, name: "Combo Platter", category: "Specials", price: 220, image: "/images/platter.jpg" },
  { id: 8, name: "Pork Spare Ribs", category: "Pork", price: 130, image: "/images/pork-ribs.jpg" },
  { id: 9, name: "Lamb Kebabs", category: "Lamb", price: 140, image: "/images/lamb-kebabs.jpg" },
];

const categories = ["All", "Beef", "Chicken", "Mutton", "Wors", "Pork", "Lamb", "Specials"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const filteredMenu =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  // Add item to cart if not present
  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, { ...item, totalPrice: item.price }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Increment or decrement totalPrice by 1
  const updateTotalPrice = (id: number, value: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, totalPrice: value } : item
      )
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.totalPrice ?? 0), 0);

  const handleWhatsApp = () => {
    if (cart.length === 0) return alert("Your cart is empty!");
    setShowUserModal(true);
  };

  const sendWhatsAppOrder = () => {
    const orderText = cart
      .map((item) => `${item.name} = R${(item.totalPrice ?? 0).toFixed(2)}`)
      .join("%0A");
    const total = `Total: R${totalPrice.toFixed(2)}`;
    const userDetails = [
      userName ? `Name: ${userName}` : "",
      userPhone ? `Phone: ${userPhone}` : "",
      userAddress ? `Address: ${userAddress}` : "",
    ]
      .filter(Boolean)
      .join("%0A");

    const whatsappURL = `https://wa.me/27627102645?text=Hello!%20I%20would%20like%20to%20order:%0A${orderText}%0A${total}${userDetails ? "%0A" + userDetails : ""}`;
    window.open(whatsappURL, "_blank");
    setShowUserModal(false);
  };

  return (
    <>
      <Navbar />

      <section className="bg-black text-white min-h-screen py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-wide">
              Our <span className="text-orange-500">Menu</span>
            </h1>
            <p className="mt-3 text-gray-400">
              Flame-grilled goodness • Fresh • Made with vibe
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition
                  ${activeCategory === cat
                    ? "bg-orange-500 text-white"
                    : "bg-neutral-200 text-gray-800 hover:bg-neutral-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredMenu.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-black">{item.name}</h3>
                  <span className="text-xl font-bold text-orange-400">R{item.price} / kg</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-4 w-full bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="fixed bottom-6 right-6 bg-white text-black p-4 rounded-xl shadow-xl z-50
                            w-96 max-w-[95vw] sm:max-w-sm">
              <h4 className="text-xl font-bold mb-2">Your Order</h4>
              <ul className="max-h-60 overflow-y-auto">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span>{item.name}</span>

                      {/* Price Adjuster (+1/-1) */}
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <button
                          onClick={() =>
                            updateTotalPrice(item.id, (item.totalPrice ?? item.price) - 1)
                          }
                          className="px-2 bg-gray-200 hover:bg-gray-300"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          step={1}
                          min={0}
                          value={(item.totalPrice ?? item.price).toFixed(2)}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            if (!isNaN(val)) updateTotalPrice(item.id, val);
                          }}
                          className="w-20 text-center text-black px-2 py-1"
                        />
                        <button
                          onClick={() =>
                            updateTotalPrice(item.id, (item.totalPrice ?? item.price) + 1)
                          }
                          className="px-2 bg-gray-200 hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 font-bold px-2"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-2 font-bold">
                <span>Total</span>
                <span>R{totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={handleWhatsApp}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold text-white"
              >
                Order via WhatsApp
              </button>
            </div>
          )}

          {/* User Details Modal */}
          {showUserModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
              <div className="bg-white text-black p-6 rounded-2xl w-96">
                <h4 className="text-xl font-bold mb-4">Your Details (Optional)</h4>
                <input
                  type="text"
                  placeholder="Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full mb-3 px-4 py-2 rounded-lg border"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className="w-full mb-3 px-4 py-2 rounded-lg border"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                  className="w-full mb-3 px-4 py-2 rounded-lg border"
                />
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => setShowUserModal(false)}
                    className="px-4 py-2 bg-gray-300 rounded-lg"
                  >
                    Skip
                  </button>
                  <button
                    onClick={sendWhatsAppOrder}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg"
                  >
                    Send Order
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}
