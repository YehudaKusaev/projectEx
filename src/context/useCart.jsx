import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  

  const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(savedCartItems);

// Эффект для сохранения данных в localStorage
useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map(item => 
        item.id === existingItem.id ? { ...item, count: item.count + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      // Добавляем новый товар в корзину
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const increaseItemCount = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, count: item.count + 1 } : item
    ));
  };

  const decreaseItemCount = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, count: item.count - 1 } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseItemCount, decreaseItemCount }}>
      {children}
    </CartContext.Provider>
  );
}
