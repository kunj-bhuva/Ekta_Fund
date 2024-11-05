import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/slidebar/p1.png';
import slide2 from '../images/slidebar/p2.png';
import slide3 from '../images/slidebar/p3.png';
import './slider.css';

function IndividualIntervalsExample() {
  return (
    <div className="carousel-wrapper">
      <Carousel className="carousel">
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
