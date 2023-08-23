import { useState } from 'react';
import './3D_floor_plan_carousel.css';

function Carousel_floor_plan({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel_floor_plan;
