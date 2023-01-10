import React from "react";
import "./Testimonals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonals = () => {
  const hotelCards = [
    {
      description:
        ' "I recently downloaded your fintech app and have been using it to manage my finances. I am impressed with the user-friendly interface and the variety of features it offers".',
      title: "Alwan Oluwaseyi",
    },
    {
      description:
        '"The user interface is easy to navigate and the features are exactly what I was looking for. I appreciate the ability to track my spending and set my budget goals. Keep up the grat work"',
      title: "Mrs Chisom",
    },
    {
      description:
        ' "I had a great experience with your customer service team. They were very helpful and resolved my issue quickly. I will definitely continue to use your company product"',
      title: "Mr Samuel",
    },
    {
      description:
        '"I recently applied for a  loan through your application and had a great experience. The application process was quick and easy and I was approved within a few hours "',

      title: "Shakiru Muraina",
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
              {/* <img src={TestimonialPic1} alt="" /> */}
              <p className="title">{card.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonals;
