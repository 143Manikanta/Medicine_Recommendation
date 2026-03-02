import { useState,useEffect } from "react";
import sliderData from "./Images/sliderData";
import "./ImageCarousel.css";

function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(autoPlay);
  }, [current]);

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={prevSlide}>❮</button>

      <div className="slide fade-animation" key={current}>

          <div className="image-wrapper">
           <img src={sliderData[current].image} alt={sliderData[current].title} />
          </div>

          <div className="info">
            <h2>{sliderData[current].title}</h2>
            <p>{sliderData[current].description}</p>
          </div>
        </div>

      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default ImageCarousel;