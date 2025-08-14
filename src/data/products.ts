import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'MH Classic Watch',
    price: 199.99,
    category: 'watches',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
    featured: true,
    description: 'The MH Classic Watch combines elegance with precision. Perfect for any occasion.',
    colors: ['Black', 'Silver', 'Rose Gold']
  },
  {
    id: '2',
    name: 'MH Pro Earbuds',
    price: 149.99,
    category: 'earbuds',
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
    featured: true,
    description: 'Experience crystal clear sound with the MH Pro Earbuds. Active noise cancellation included.',
    colors: ['White', 'Black', 'Pink']
  },
  {
    id: '3',
    name: 'MH Everyday Tote',
    price: 89.99,
    category: 'bags',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    featured: false,
    description: 'Stylish and practical, the MH Everyday Tote is perfect for work, shopping, or casual outings.',
    colors: ['Tan', 'Black', 'Navy']
  },
  {
    id: '4',
    name: 'MH SmartWatch Pro',
    price: 249.99,
    category: 'watches',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    featured: true,
    description: 'Track your fitness, receive notifications, and more with the MH SmartWatch Pro.',
    colors: ['Black', 'Silver']
  },
  {
    id: '5',
    name: 'MH Wireless Earbuds',
    price: 129.99,
    category: 'earbuds',
    image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg',
    featured: false,
    description: 'Enjoy your music without the hassle of wires with the MH Wireless Earbuds.',
    colors: ['White', 'Black']
  },
  {
    id: '6',
    name: 'MH Leather Messenger',
    price: 119.99,
    category: 'bags',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
    featured: false,
    description: 'The MH Leather Messenger combines style with functionality. Perfect for the modern professional.',
    colors: ['Brown', 'Black']
  },
  {
    id: '7',
    name: 'MH Phone Stand',
    price: 29.99,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg',
    featured: false,
    description: 'Keep your phone at the perfect angle with the MH Phone Stand.',
    colors: ['Black', 'White', 'Pink']
  },
  {
    id: '8',
    name: 'MH Charging Dock',
    price: 49.99,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg',
    featured: true,
    description: 'Charge multiple devices at once with the sleek MH Charging Dock.',
    colors: ['Black', 'White']
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};