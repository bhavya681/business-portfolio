import React, { useState } from 'react';

const galleryImages = [
  'https://shivamenergytech.com/images/Gallery/G_1.JPG',
  'https://shivamenergytech.com/images/Gallery/G_2.JPG',
  'https://shivamenergytech.com/images/Gallery/G_3.JPG',
  'https://shivamenergytech.com/images/Gallery/G_4.JPG',
  'https://shivamenergytech.com/images/Gallery/G_5.JPG',
  'https://shivamenergytech.com/images/Gallery/G_6.JPG',
  'https://shivamenergytech.com/images/Gallery/G_7.JPG',
  'https://shivamenergytech.com/images/Gallery/G_8.JPG',
  'https://shivamenergytech.com/images/Gallery/G_26.JPG',
  'https://shivamenergytech.com/images/Gallery/G_28.JPG',
  'https://shivamenergytech.com/images/Gallery/G_27.JPG',
  'https://shivamenergytech.com/images/Gallery/G_15.JPG',
  'https://shivamenergytech.com/images/Gallery/G_22.JPG',
  'https://shivamenergytech.com/images/Gallery/G_18.JPG',
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  // Calculate total pages
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  // Get current images
  const currentImages = galleryImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto my-9 px-4">
      <div className="bg-orange-500 py-4 mb-5">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center text-white font-bold">Gallery</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 z-0">
        {currentImages.map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg cursor-pointer shadow-lg">
            <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 z-10"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="px-3 py-2 mx-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-3 py-2 mx-1 rounded ${currentPage === i + 1 ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-3 py-2 mx-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
