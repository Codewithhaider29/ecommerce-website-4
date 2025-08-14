import 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-pink-500">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        At <strong>MH Store</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or make a purchase.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">1. Information We Collect</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Personal identification information (name, email address, phone number, address)</li>
        <li>Order information (products purchased, payment method)</li>
        <li>Technical data (IP address, browser type, and device info)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>To process and fulfill your orders</li>
        <li>To communicate order updates or customer support</li>
        <li>To improve website performance and customer experience</li>
        <li>To send newsletters or marketing emails (with your consent)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">3. Data Security</h2>
      <p className="text-gray-700 mb-4">
        We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">4. Sharing Your Information</h2>
      <p className="text-gray-700 mb-4">
        We do not sell or rent your personal data to third parties. We may share your information with service providers strictly for order processing or delivery purposes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">5. Your Rights</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>You can request access or correction of your personal data</li>
        <li>You may unsubscribe from marketing emails at any time</li>
        <li>You can request deletion of your account and data</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">6. Changes to This Policy</h2>
      <p className="text-gray-700 mb-4">
        MH Store reserves the right to update this Privacy Policy at any time. We will notify users via email or a notice on our website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">7. Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about this Privacy Policy, please contact us at:
      </p>
      <p className="text-gray-700 mt-2">
        📧 <a href="mailto:info@mahumtech.com" className="text-pink-500 hover:underline">info@mahumtech.com</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
