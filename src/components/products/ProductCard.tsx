import React, { useState } from 'react';
import { ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../../types';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-pink-300 transition-colors"
            aria-label="Quick view"
          >
            <Eye size={18} />
          </button>
          <button 
            className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-pink-300 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
        
        {product.featured && (
          <span className="absolute top-2 left-2 bg-pink-300 text-black text-xs font-medium px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1 group-hover:text-pink-400 transition-colors">
          <a href="#">{product.name}</a>
        </h3>
        <p className="text-sm text-gray-600 mb-2">{product.description.slice(0, 60)}...</p>
        
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <Button size="sm">
            Add to Cart
          </Button>
        </div>
        
        {product.colors && (
          <div className="mt-2 flex items-center gap-1">
            <span className="text-xs text-gray-500">Colors:</span>
            <div className="flex gap-1">
              {product.colors.map((color) => (
                <span key={color} className="text-xs text-gray-600">{color}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;