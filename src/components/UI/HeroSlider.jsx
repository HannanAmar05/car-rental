import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Container } from "reactstrap";
import '../../styles/hero-slider.css'

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover : false
  };
  return (
    <Slider {...settings} className="hero-slider">
      <div className="slider-item slider-item-01">
        <Container>
          <div className="slider-content">
            <h4 className="text-light-mb-3">For Rent Rp.20000 per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>
            <button className="btn reserve-btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider-item slider-item-02">
        <Container>
          <div className="slider-content">
            <h4 className="text-light-mb-3">For Rent Rp.20000 per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>
            <button className="btn reserve-btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider-item slider-item-03">
        <Container>
          <div className="slider-content">
            <h4 className="text-light-mb-3">For Rent Rp.20000 per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>
            <button className="btn reserve-btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
