import React from 'react';

const ShippingInfo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-pink-500">Shipping Information</h1>

      <p className="text-gray-700 mb-4">
        At <strong>MH Store</strong>, we aim to deliver your favorite tech accessories quickly, safely, and affordably across Pakistan.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">1. Delivery Coverage</h2>
      <p className="text-gray-700 mb-4">
        We currently deliver to all major cities and regions within Pakistan via reliable local courier services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">2. Delivery Time</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li><strong>Standard Delivery:</strong> 3–5 business days</li>
        <li><strong>Remote Areas:</strong> 5–7 business days</li>
        <li>Orders are processed within 24 hours after confirmation.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">3. Shipping Charges</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Flat rate: <strong>Rs. 200</strong> per order.</li>
        <li>Free shipping on orders above <strong>Rs. 3,000</strong>.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">4. Order Tracking</h2>
      <p className="text-gray-700 mb-4">
        Once your order is shipped, we will send you a tracking number via email or WhatsApp so you can track your package.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">5. Return & Exchange Policy</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Returns accepted within 7 days of delivery for damaged or incorrect items.</li>
        <li>Item must be unused, in original packaging, with tags intact.</li>
        <li>Customer bears return shipping unless the mistake is on our end.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">6. Delays & Issues</h2>
      <p className="text-gray-700 mb-4">
        Delivery delays may occur due to weather, public holidays, or courier issues. We’ll keep you informed via email or phone.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">7. Contact Us</h2>
      <p className="text-gray-700">
        If you have questions about your order or shipping, contact us:
      </p>
      <p className="text-gray-700 mt-2">
        📧 <a href="mailto:info@mahumtech.com" className="text-pink-500 hover:underline">info@mahumtech.com</a><br />
        📞 <a href="tel:+12345678900" className="text-pink-500 hover:underline">+1 (234) 567-8900</a>
      </p>
    </div>
  );
};

export default ShippingInfo;
