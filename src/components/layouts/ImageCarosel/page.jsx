import React, { useState, useEffect } from 'react';



const Carousel = ({ images }) => {


  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  

  return (
    <div className="relative w-1716 h-793 overflow-hidden">
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-1716 transition-transform transform ${
              index === activeIndex ? 'scale-100' : 'scale-80'
            } ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full bg-gray-500 hover:bg-blue-500 cursor-pointer ${
              index === activeIndex ? 'bg-blue-500' : ''
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
