import { useContext } from 'react';
import { CartContext } from './CartContext';

export const useCart = () => {
  // Accessing the context
  const context = useContext(CartContext);

  // Throw an error if the context is not provided (useCart must be used within a CartProvider)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  // Returning the context value (cart, addToCart, removeFromCart, updateQuantity, clearCart)
  return context;
};
