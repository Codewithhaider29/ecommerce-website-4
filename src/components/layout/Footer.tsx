import React from 'react';
import { Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Social */}
          <div>
            <Logo variant="white" />
            <p className="mt-4 text-gray-300 text-sm">
              MH Store creates premium tech accessories that blend style with functionality for the modern lifestyle.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-300 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#watches" className="text-gray-300 hover:text-pink-300 transition-colors">Watches</a></li>
              <li><a href="#earbuds" className="text-gray-300 hover:text-pink-300 transition-colors">Earbuds</a></li>
              <li><a href="#bags" className="text-gray-300 hover:text-pink-300 transition-colors">Bags</a></li>
              <li><a href="#accessories" className="text-gray-300 hover:text-pink-300 transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-pink-300 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-pink-300 transition-colors">Careers</Link></li>
              <li><a href="#blog" className="text-gray-300 hover:text-pink-300 transition-colors">Blog</a></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-pink-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-pink-300" />
                <a href="mailto:info@mahumtech.com" className="text-gray-300 hover:text-pink-300 transition-colors">
                  info@mahumtech.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-pink-300" />
                <a href="tel:+12345678900" className="text-gray-300 hover:text-pink-300 transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm w-full focus:outline-none focus:ring-1 focus:ring-pink-300"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MH (Ma Hum Tech). All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-pink-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-pink-300 transition-colors">Terms of Service</Link>
            <Link to="/shipping-info" className="hover:text-pink-300 transition-colors">Shipping Info</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
