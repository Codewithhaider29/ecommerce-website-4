import React, { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Calculate total price and items count
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0 && quantity <= 10) {
      updateQuantity(id, quantity);
    }
  };

  const handleRemove = (id: string) => {
    removeFromCart(id);
    toast.success('Item removed from cart');
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared');
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      clearCart();
      toast.success('Order placed successfully!');
    }, 2000);
  };

  useEffect(() => {
    document.title = `Cart (${getTotalItems()}) | MH Store`;
  }, [cart]);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/categories"
            className="flex items-center text-pink-600 hover:text-pink-700"
          >
            <ArrowLeft className="mr-1" size={18} />
            Continue Shopping
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <ShoppingCart className="mr-2" size={24} />
            Your Cart ({getTotalItems()})
          </h1>
        </div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl shadow-sm p-8 text-center"
          >
            {isCheckingOut ? (
              <>
                <div className="flex justify-center mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Check className="text-green-500" size={48} />
                  </motion.div>
                </div>
                <h2 className="text-xl font-semibold mb-2">Order Confirmed!</h2>
                <p className="text-gray-600 mb-4">
                  Thank you for your purchase. Your order has been placed successfully.
                </p>
                <Link
                  to="/categories"
                  className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
                >
                  Continue Shopping
                </Link>
              </>
            ) : (
              <>
                <ShoppingCart className="mx-auto text-gray-300" size={48} />
                <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-gray-600 mb-4">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Link
                  to="/categories"
                  className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
                >
                  Start Shopping
                </Link>
              </>
            )}
          </motion.div>
        ) : (
          <>
            <motion.div
              layout
              className="bg-white rounded-xl shadow-sm overflow-hidden mb-6"
            >
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between p-4 border-b border-gray-100"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-20 w-20 object-contain rounded-lg"
                      />
                      <div>
                        <h2 className="font-medium text-gray-900">{item.title}</h2>
                        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                        {item.color && (
                          <div className="flex items-center mt-1">
                            <span
                              className="w-4 h-4 rounded-full border border-gray-200 mr-2"
                              style={{ backgroundColor: item.color.toLowerCase() }}
                            />
                            <span className="text-xs text-gray-500 capitalize">
                              {item.color}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-2 py-1 text-center w-8">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          disabled={item.quantity >= 10}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={handleClearCart}
                  className="text-sm text-red-600 hover:text-red-700 flex items-center"
                >
                  <X size={16} className="mr-1" />
                  Clear Cart
                </button>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Total ({getTotalItems()} items)</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${getTotalPrice().toFixed(2)}
                  </p>
                </div>
              </div>

              {isCheckingOut && (
                <div className="text-center text-sm text-gray-500 mb-4">
                  Processing your order...
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className={`w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors ${
                  isCheckingOut ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <ShoppingCart className="mr-2" size={18} />
                {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
    