import React, { createContext, useContext, useEffect, useReducer } from "react";

// Bump the version when product ids change so old carts don't point at the wrong items.
const STORAGE_KEY = "topnotch-cart-v2";

const CartContext = createContext(null);

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, qty } = action;
      const existing = state.find((item) => item.id === product.id);
      if (existing) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, qty: Math.min(item.qty + qty, item.countInStock) }
            : item
        );
      }
      return [
        ...state,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          countInStock: product.countInStock,
          qty: Math.min(qty, product.countInStock),
        },
      ];
    }
    case "UPDATE_QTY":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, qty: Math.max(1, Math.min(action.qty, item.countInStock)) }
          : item
      );
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage can be unavailable (private mode); the cart still works in memory.
    }
  }, [items]);

  const value = {
    items,
    count: items.reduce((sum, item) => sum + item.qty, 0),
    addItem: (product, qty = 1) => dispatch({ type: "ADD", product, qty }),
    updateQty: (id, qty) => dispatch({ type: "UPDATE_QTY", id, qty }),
    removeItem: (id) => dispatch({ type: "REMOVE", id }),
    clearCart: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside a CartProvider");
  return context;
}
