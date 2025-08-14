import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="text-pink-400" />
                  <span>info@mhstore.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-pink-400" />
                  <span>+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-pink-400" />
                  <span>123 Tech Street, Digital City, 12345</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form Section */}
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
