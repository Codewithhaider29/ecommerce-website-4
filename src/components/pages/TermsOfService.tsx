import 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-pink-500">Terms of Service</h1>

      <p className="text-gray-700 mb-4">
        Welcome to <strong>MH Store</strong>. By accessing or using our website, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">1. Use of Our Site</h2>
      <p className="text-gray-700 mb-4">
        You agree to use the site for lawful purposes only and in a manner that does not infringe the rights of others or restrict their use of the website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">2. Products and Orders</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>All products are subject to availability.</li>
        <li>We reserve the right to limit or cancel orders at our discretion.</li>
        <li>Prices and product descriptions may change without notice.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">3. Payment</h2>
      <p className="text-gray-700 mb-4">
        We accept payments through local bank apps (JazzCash, Easypaisa, NayaPay, SadaPay) and Cash on Delivery (COD). You agree to provide accurate billing information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">4. Shipping & Delivery</h2>
      <p className="text-gray-700 mb-4">
        Delivery times are estimates and not guaranteed. MH Store is not responsible for delays due to courier or customs processes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">5. Returns & Refunds</h2>
      <p className="text-gray-700 mb-4">
        Please refer to our Shipping Info page for full details on returns and refunds. Products must be returned unused and in original packaging.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">6. Intellectual Property</h2>
      <p className="text-gray-700 mb-4">
        All content on this website is the property of MH Store or its content suppliers and is protected by copyright laws.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">7. Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        MH Store is not liable for any indirect, incidental, or consequential damages arising from your use of the site or products.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">8. Changes to Terms</h2>
      <p className="text-gray-700 mb-4">
        We reserve the right to update these Terms of Service at any time. Continued use of the website constitutes acceptance of the new terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">9. Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about these Terms, feel free to contact us at:
      </p>
      <p className="text-gray-700 mt-2">
        📧 <a href="mailto:info@mahumtech.com" className="text-pink-500 hover:underline">info@mahumtech.com</a>
      </p>
    </div>
  );
};

export default TermsOfService;
