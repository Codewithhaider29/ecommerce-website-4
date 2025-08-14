import React from 'react';

interface LoadingSpinnerProps {
  fullPage?: boolean; // Optional prop to determine spinner style
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ fullPage }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        fullPage ? "spinner-full-page" : ""
      }`}
    >
      <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;