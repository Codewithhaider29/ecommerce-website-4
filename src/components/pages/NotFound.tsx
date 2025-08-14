import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Container from '../ui/Container';

const NotFound: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center">
      <Container>
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-xl shadow-sm">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            <ChevronLeft className="mr-1" size={16} />
            Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;