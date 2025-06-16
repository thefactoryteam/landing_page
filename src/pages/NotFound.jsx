import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-500 mb-6">
        Sorry, the page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
