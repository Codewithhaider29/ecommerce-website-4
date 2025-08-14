import React from 'react';
import Container from '../ui/Container';

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About MH Store</h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              MH Store is your premier destination for premium tech accessories. Founded with a passion for combining style with functionality, we curate the finest collection of watches, earbuds, bags, and accessories for the modern lifestyle.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To provide our customers with exceptional tech accessories that enhance their daily lives while maintaining the highest standards of quality and design.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Quality Excellence</li>
              <li>Customer Satisfaction</li>
              <li>Innovation</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;