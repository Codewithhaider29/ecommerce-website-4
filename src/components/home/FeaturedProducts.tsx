import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import ProductCard from '../products/ProductCard';
import { getFeaturedProducts } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Products</h2>
            <p className="mt-2 text-gray-600">Discover our most popular tech accessories</p>
          </div>
          <a 
            href="#" 
            className="mt-4 md:mt-0 text-black font-medium flex items-center gap-1 hover:text-pink-400 transition-colors"
          >
            View All <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;