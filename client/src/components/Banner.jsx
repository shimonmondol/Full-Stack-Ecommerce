import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          padding: "0px",
          position: "absolute",
          bottom: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "black",
          background: "white",
          border: "1px black solid",
        }}
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                padding: "0px",
                position: "absolute",
                bottom: "10px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={{
                width: "20px",
                height: "20px",
                color: "black",
                background: "white",
                border: "1px black solid",
                fontSize: "12px",
              }}
            >
              {i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <section className="pt-20">
      <div className="container">
        <Slider {...settings}>
          <img
            src="https://img.lazcdn.com/us/domino/c3c7bbaf-3200-40ad-a9ab-385eb4ff0205_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt=""
          />
          <img
            src="https://img.lazcdn.com/us/domino/40ee073d-c508-4213-b01b-ab500903a06c_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt=""
          />
          <img
            src="https://img.lazcdn.com/us/domino/4467f2f7-fc43-45c4-97cc-5feb02157bce_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt=""
          />
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
