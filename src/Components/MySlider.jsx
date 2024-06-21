import Carousel from "react-bootstrap/Carousel";
import slideOne from '../Asset/ExampleCarouselImage/SlideOne (2).jpg'
import slideTwo from "../Asset/ExampleCarouselImage/slideTwo.jpg";
import slideThree from "../Asset/ExampleCarouselImage/SlideThree.jpg";
import slideFour from "../Asset/ExampleCarouselImage/slideFour.jpg";
import './MySlider.css'
function MySlider() {
  return (
    <div className="slider">
      <Carousel data-bs-theme="dark" className="carousel text-center">
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={slideOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 style={{ color: "white", textShadow: "2px 2px 1px #06579ede" }}>
              The problem of missing children has become viral !
            </h5>
            <p style={{ color: "white" }}>
              It was necessary to find a solution to this problem
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={slideTwo}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 style={{ color: "white", textShadow: "2px 2px 1px #06579ede" }}>
              Thousands of children are displaced every year.
            </h5>
            <p style={{ color: "white" }}>So we created Finder.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={slideThree}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 style={{ color: "white", textShadow: "2px 2px 1px #06579ede" }}>
              Finder facilitates finding your lost child using AI.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={slideFour}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h5 style={{ color: "white", textShadow: "2px 2px 1px #06579ede" }}>
              All we need from you is to upload a photo of the lost child.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MySlider;
