import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Import Toaster for notifications
import ScrollToTop from './components/layout/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/spinner';
import { CartProvider } from './context/CartContext';  // Import CartProvider

// Home Page Components (eager loaded for better initial load)
import Hero from './components/home/Hero';
import FeaturedProducts from './components/home/FeaturedProducts';
import Categories from './components/home/Categories';
import ProductsSection from './components/home/ProductsSection';
import BlogSection from './components/home/BlogSection';
import Newsletter from './components/home/Newsletter';

// Lazy loaded pages with proper naming convention
const AboutUs = lazy(() => import('./components/pages/AboutUs'));
const Careers = lazy(() => import('./components/pages/Careers'));
const Contact = lazy(() => import('./components/pages/Contact'));
const PrivacyPolicy = lazy(() => import('./components/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/pages/TermsOfService'));
const ShippingInfo = lazy(() => import('./components/pages/ShippingInfo'));
const CategoriesPage = lazy(() => import('./components/pages/Categories'));
const ProductDetail = lazy(() => import('./components/pages/ProductDetail'));
const CartPage = lazy(() => import('./components/cart/CartPage'));  // Lazy-loaded Cart page
const NotFound = lazy(() => import('./components/pages/NotFound')); // Added 404 page

// Grouped product routes for better organization
const productRoutes: { path: string; title: string; category: 'watches' | 'earbuds' | 'bags' | 'accessories' }[] = [
  { path: 'watches', title: 'Premium Watches', category: 'watches' },
  { path: 'earbuds', title: 'Wireless Earbuds', category: 'earbuds' },
  { path: 'bags', title: 'Stylish Bags', category: 'bags' },
  { path: 'accessories', title: 'Essential Accessories', category: 'accessories' }
];

const Home: React.FC = () => (
  <>
    <Hero />
    <FeaturedProducts />
    <Categories />
    {productRoutes.map((route) => (
      <ProductsSection 
        key={route.path}
        title={route.title}
        category={route.category}
        id={route.path}
      />
    ))}
    <BlogSection />
    <Newsletter />
  </>
);

const App: React.FC = () => {
  return (
    <CartProvider>  {/* Wrap your app with CartProvider */}
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner fullPage />}>
              <Routes>
                {/* Home Route */}
                <Route path="/" element={<Home />} />
                
                {/* Product Routes */}
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                
                {/* Category-specific routes */}
                {productRoutes.map((route) => (
                  <Route 
                    key={route.path}
                    path={`/categories/${route.path}`}
                    element={
                      <ProductsSection 
                        title={route.title}
                        category={route.category}
                        id={route.path}
                      />
                    }
                  />
                ))}
                
                {/* Information Pages */}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Policy Pages */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/shipping-info" element={<ShippingInfo />} />
                
                {/* Cart Page */}
                <Route path="/cart" element={<CartPage />} />  {/* Cart Page Route */}
                
                {/* 404 Catch-all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
        {/* Add Toaster at the root of your app */}
        <Toaster position="top-right" />
      </Router>
    </CartProvider>
  );
};

export default App;
