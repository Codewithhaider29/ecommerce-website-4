import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../../data/products';
import { reviews as allReviews } from '../../data/reviews';
import { Star, ChevronLeft, ShoppingCart, ZoomIn } from 'lucide-react';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

const reviewVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const loadMoreVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.3 } },
  exit: { opacity: 0 },
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] ?? '');
  const [visibleReviews, setVisibleReviews] = useState(5);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const reviewsToShow = allReviews.slice(0, visibleReviews);
  const hasMoreReviews = visibleReviews < allReviews.length;

  const handleLoadMore = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 5);
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Product not found</h2>
          <Link to="/" className="text-pink-600 hover:underline flex items-center justify-center">
            <ChevronLeft className="mr-1" size={16} />
            Back to shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${quantity} × ${product.name} (${selectedColor}) added to cart!`);
  };

  const handleQuantityChange = (value: number) => {
    if (value > 0 && value <= 10) setQuantity(value);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Link to="/products" className="inline-flex items-center text-pink-600 hover:text-pink-700">
            <ChevronLeft className="mr-1" size={18} />
            Back to Products
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8 flex flex-col lg:flex-row">
          {/* Image with Zoom Effect */}
          <div 
            className="w-full lg:w-1/2 p-6 relative overflow-hidden"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
            ref={imageRef}
          >
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-[400px] object-contain rounded-lg transition-transform duration-300 ${
                isZoomed ? 'scale-150' : 'scale-100'
              }`}
              style={{
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
              }}
            />
            {isZoomed && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <ZoomIn className="text-gray-400" size={24} />
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 p-6 flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < 4 ? "currentColor" : "none"}
                    className={i < 4 ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">(24 reviews)</span>
            </div>

            <p className="text-2xl text-pink-600 font-semibold mb-4">${product.price}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Color options */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color ? 'border-pink-500' : 'border-gray-200'
                      }`}
                      style={{
                        backgroundColor:
                          color.toLowerCase() === 'rose gold' ? '#e0bfb8' : color.toLowerCase(),
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <span className="text-sm text-gray-500">Category: </span>
              <span className="text-sm font-medium text-blue-600 capitalize">{product.category}</span>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mt-auto pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={quantity}
                    onChange={(e) => handleQuantityChange(Number(e.target.value))}
                    className="w-12 text-center border-x border-gray-300 py-1"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section with Framer Motion */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Customer Reviews</h3>
            <motion.ul layout className="space-y-6">
              <AnimatePresence>
                {reviewsToShow.map((review) => (
                  <motion.li
                    key={review.id}
                    className="pb-4 border-b border-gray-100 last:border-0"
                    variants={reviewVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    layout
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-medium text-gray-900">{review.user}</span>
                        <div className="flex items-center mt-1">
                          <div className="flex text-yellow-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                fill={i < review.rating ? "currentColor" : "none"}
                                className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
            {hasMoreReviews && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={loadMoreVariants}
                className="mt-6 text-center"
              >
                <button
                  onClick={handleLoadMore}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md"
                >
                  Load More Reviews
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;