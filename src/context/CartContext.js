'use client';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    
    openCart();
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
  return cartItems.reduce((acc, item) => {
    const priceValue = parseFloat(item.price.replace('R$', '').replace(',', '.').trim());
    return acc + (priceValue * item.quantity);
  }, 0);
};

const cartTotal = calculateTotal().toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

  return (
    <CartContext.Provider value={{ 
      isCartOpen, 
      openCart, 
      closeCart, 
      cartItems, 
      addToCart, 
      removeFromCart,
      cartTotal,
      cartItems
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);