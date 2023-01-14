import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import Slider from "react-slick";
// import TestimonialPic1 from "./images/Image.png";

function Testimonial() {
  const hotelCards = [
    {
      description:
        ' "Awesome and seamless experience. Quick crediting, very low interest rate and user friendly. My number 1 go to reliable finance partner".',
      title: "Prince Friday Ocheni",
      imageSrc:
        "https://images.pexels.com/photos/3474629/pexels-photo-3474629.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "The world",
    },
    {
      description:
        '"Amazing App, easy to use and straight forward. Making access to funds easily ata a favourable interest rate. I have been able to do alot of stuff without breaking the bank, thanks to Aibanc."',
      title: "Deborah Ogbole",
      imageSrc:
        "https://images.pexels.com/photos/3785991/pexels-photo-3785991.jpeg",
    },
    {
      description:
        ' "The onboarding process was sleek. I did recommend for very friendly non-shark loan rates."',
      title: "Damiloju Oyekan",
      imageSrc:
        "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?",
    },
    {
      description: '"App easy to use and service offered is so apt "',

      title: "Bakare Noah",
      imageSrc:
        "https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="testimony">
      <div className="testimonials">
        <h3>What Our Users Think About Us</h3>
        <div className="horizontalLine"></div>
      </div>
      <Slider
        dots={true}
        arrows={false}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
      >
        {hotelCards.map((card, index) => (
          <div key={index}>
            <div className="test-cont">
              <p className="description">{card.description}</p>
              <img src={card.imageSrc} alt="" />
              <p className="title">{card.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
