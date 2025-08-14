import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../ui/Logo';
import Container from '../ui/Container';
import { useCart } from '../../context/CartContext';
import  CartItem  from '../../context/CartContext'; // Import CartItem type

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart, cartCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCartIconClick = () => {
    navigate('/cart');
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <nav className="flex flex-col items-center justify-center">
          <div className="w-full flex justify-between items-center">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <Link to="/" className={`transition-transform duration-300 ${isScrolled ? 'scale-75' : 'scale-100'}`}>
                <Logo />
              </Link>
            </div>

            {/* Header icons */}
            <div className="flex items-center gap-4">
              <button className="text-black hover:text-pink-400">
                <Search className="h-5 w-5" />
              </button>
              <button
                className="relative text-black hover:text-pink-400"
                onClick={handleCartIconClick}
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-pink-300 text-xs flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8 mt-4">
            <Link to="/" className="text-sm font-medium hover:text-pink-400 transition-colors">
              Home
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-pink-400 transition-colors">
              Categories
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-pink-400 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
      )}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white p-6 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end mb-4">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-col gap-y-4">
          <Link to="/" className="text-sm font-medium hover:text-pink-400 transition-colors">
            Home
          </Link>
          <Link to="/categories" className="text-sm font-medium hover:text-pink-400 transition-colors">
            Categories
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-pink-400 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;