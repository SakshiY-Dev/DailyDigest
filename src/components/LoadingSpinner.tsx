import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-t-teal-500 rounded-full animate-spin animate-reverse"></div>
      </div>
      <span className="ml-4 text-lg text-gray-600 font-medium">Loading news...</span>
    </div>
  );
};

export default LoadingSpinner;