import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const SingleSlider = (props) => {
  const { img, desc, name } = props.slider;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* <Slider {...settings}>
        <div>
          <img src={img} alt={name} />
          <p>{desc}</p>
          <h2>{name}</h2>
        </div>
      </Slider> */}
    </>
  );
};

export default SingleSlider;
