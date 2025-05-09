import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h1 className="text-3xl font-bold text-center text-gray-800">404 - Not Found</h1>
            <p className="text-lg text-gray-600 mt-4 text-center">The page you are looking for could not be found.</p>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:bg-blue-600">Go to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
