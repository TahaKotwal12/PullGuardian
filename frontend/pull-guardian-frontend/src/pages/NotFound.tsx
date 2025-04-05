import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col items-center justify-center py-12">
      <div className="text-center">
        <h1 className="mt-4 text-4xl font-bold text-gray-900 tracking-tight">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">Page not found</h2>
        <p className="mt-2 text-base text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
        <div className="mt-6">
          <Link
            to="/dashboard"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Go back to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
