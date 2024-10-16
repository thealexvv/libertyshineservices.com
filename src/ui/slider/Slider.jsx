import React from 'react';
import Slider from 'react-slick';
import { slides } from './slides';

function Arrow(props) {
  return <div className="bg-transparent w-0 h-0" />;
}

function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <ul
          style={{
            // marginTop: '90px',
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
          }}
          className="flex justify-center gap-3"
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          width: '11px',
          height: '11px',
          color: '#fff',
          border: '1px solid #fff',
          borderRadius: '50%',
        }}
      ></div>
    ),
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div className="mb-14 md:mb-22" key={slide.id}>
            <p className="font-semibold text-xl md:text-3xl mb-7">
              {slide.upperText}
            </p>
            <h1 className="font-extrabold text-3xl md:text-5xl">
              {slide.title}
            </h1>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MySlider;
