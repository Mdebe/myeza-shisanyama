"use client";

import { createContext, useContext, useState } from "react";

// Create Cart Context
const CartContext = createContext();

// Cart Provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Check if item already exists
    const existing = cart.find((i) => i.name.join(" ") === item.name.join(" "));
    if (existing) {
      setCart(
        cart.map((i) =>
          i.name.join(" ") === item.name.join(" ")
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i.name.join(" ") !== item.name.join(" ")));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart
export function useCart() {
  return useContext(CartContext);
}
