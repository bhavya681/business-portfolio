// src/components/Slider.js
import React from 'react';

const slides = [
  { background: 'https://shivamenergytech.com/images/Project_1.JPG', text: 'Project 1' },
  { background: 'https://shivamenergytech.com/images/Project_2.JPG', text: 'Project 2' },
  { background: 'https://shivamenergytech.com/images/Project_3.JPG', text: 'Project 3' },
];

const Slider = () => {
  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="slide h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.background})` }}
        >
          <div className="container mx-auto h-full flex items-center justify-center">
            <h2 className="text-white text-4xl">{slide.text}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
