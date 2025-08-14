import React from 'react';
import Container from '../ui/Container';

const categories = [
  {
    id: 'watches',
    name: 'Watches',
    image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
    description: 'Elegant timepieces for every occasion'
  },
  {
    id: 'earbuds',
    name: 'Earbuds',
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
    description: 'Crystal clear sound, anywhere you go'
  },
  {
    id: 'bags',
    name: 'Bags',
    image: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg',
    description: 'Stylish and functional carriers'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg',
    description: 'Essential add-ons for your tech'
  }
];

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-16 bg-pink-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Shop By Category</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Browse our curated collection of premium tech accessories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a 
              key={category.id}
              href={`#${category.id}`} 
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-semibold text-xl mb-1">{category.name}</h3>
                <p className="text-sm text-white/80">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;