import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

const CategoriesPage: React.FC = () => {
  const [priceFilter, setPriceFilter] = useState<number>(250);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [expandedFilters, setExpandedFilters] = useState(true);

  // Get unique categories from products
  const allCategories = ['all', ...new Set(products.map(product => product.category))];

  // Count products per category
  const categoryCounts = allCategories.reduce((acc, category) => {
    acc[category] =
      category === 'all'
        ? products.length
        : products.filter(p => p.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  // Filtered products
  const filteredProducts = products.filter(product => {
    return (
      product.price <= priceFilter &&
      (categoryFilter === 'all' || product.category === categoryFilter)
    );
  });

  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4 bg-pink-50 min-h-screen">
      {/* Sidebar Filter */}
      <aside className="w-full lg:w-64">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-4">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="text-pink-500" />
            <h2 className="text-lg font-semibold text-black">Filters</h2>
            <button
              className="ml-auto text-black"
              onClick={() => setExpandedFilters(!expandedFilters)}
            >
              {expandedFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          {expandedFilters && (
            <>
              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="font-medium text-sm mb-2 text-black">Price Range</h3>
                <div className="flex justify-between text-xs mb-1 text-black">
                  <span>$0</span>
                  <span>${priceFilter}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="250"
                  step="10"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(Number(e.target.value))}
                  className="w-full accent-pink-500"
                />
                <p className="text-xs text-gray-600 mt-1">
                  Max: <span className="font-medium text-pink-600">${priceFilter}</span>
                </p>
              </div>

              {/* Categories Filter */}
              <div>
                <h3 className="font-medium text-sm mb-3 text-black">Categories</h3>
                <ul className="space-y-2">
                  {allCategories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => setCategoryFilter(category)}
                        className={`flex items-center justify-between text-sm w-full text-left ${
                          categoryFilter === category
                            ? 'text-pink-500'
                            : 'text-black hover:text-pink-500'
                        }`}
                      >
                        <span className="capitalize">{category}</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-black">
                          {categoryCounts[category]}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </aside>

      {/* Main Product Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <h3 className="text-lg font-semibold text-black">{product.name}</h3>
              <p className="text-black">${product.price}</p>
              <span className="text-sm text-pink-500 capitalize">{product.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
