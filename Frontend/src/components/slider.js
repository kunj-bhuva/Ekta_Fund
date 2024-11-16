import Carousel from 'react-bootstrap/Carousel';
import './slider.css';

// Assuming you have a file named data.js exporting an array of image paths like:
// export default ['/images/slidebar/p1.png', '/images/slidebar/p2.png', '/images/slidebar/p3.png'];
import imagePaths from './sliderphoto.js';

function DynamicCarousel() {
  return (
    <div className="carousel-wrapper">
      <Carousel className="carousel">
        {
          imagePaths.map((imagePath, index) => (
          <Carousel.Item key={index} interval={3000}>
            <img className="d-block w-100" src={imagePath} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  );
}

export default DynamicCarousel;
