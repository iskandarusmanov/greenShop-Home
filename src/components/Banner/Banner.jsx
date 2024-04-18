import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainBanner from ".";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-[1320px] m-auto mt-[12px] text-black rounded">
      <Slider {...settings}>
        <div>
          <MainBanner />
        </div>
        <div>
          <MainBanner />
        </div>
        <div>
          <MainBanner />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
