import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Stay Connected with MH
          </h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for exclusive offers, new product announcements, and tech tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent min-w-64 w-full sm:w-auto"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from MH.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;