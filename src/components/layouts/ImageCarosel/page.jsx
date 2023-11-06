import React, { useState, useEffect } from "react";
import { BsDot } from "react-icons/bs";

const ImageCarousel = () => {
  const imageUrls = [
    "https://ik.imagekit.io/m1akscp5q/004.jpg?updatedAt=1698915055555",
    "https://placekitten.com/1716/793",
    "https://placekitten.com/1716/793",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleSwipe = () => {
    if (touchEndX - touchStartX > 50) {
      // Swipe right
      setActiveIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
    } else if (touchStartX - touchEndX > 50) {
      // Swipe left
      setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
    handleSwipe();
  };

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // 3 seconds

    return () => {
      clearInterval(slideshowInterval);
    };
  }, [imageUrls.length]);

  return (
    <div>
      <div
        className="w-1716 h-793 rounded-lg overflow-hidden mx-24"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            className={`w-full h-full object-cover rounded-lg ${
              index === activeIndex ? "" : "hidden"
            }`}
          />
        ))}
      </div>

      {/* navigate dot */}
      <div className="flex justify-center mt-4">
        {imageUrls.map((_, index) => (
          <BsDot
            key={index}
            className={`text-gray-400 text-5xl cursor-pointer ${
              index === activeIndex ? "text-gray-600" : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
