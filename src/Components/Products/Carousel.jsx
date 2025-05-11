import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images, interval = 3000  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer); // Clean up on unmount
  }, [currentIndex, interval]);


  return (
    <div className="carousel-container">
      <div className="carousel">
        <img 
          src={images[currentIndex].url} 
          alt={images[currentIndex].title} 
          className="carousel-image" 
        />
        <div className="carousel-title">{images[currentIndex].title}</div>
        <button onClick={goToPrevious} className="carousel-button left">‹</button>
        <button onClick={goToNext} className="carousel-button right">›</button>
      </div>
    </div>
  );
};

export default Carousel;
