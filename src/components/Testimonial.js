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
      titlee: "Prince Friday Ocheni",
      imageSrc: "https://www.usm.edu/news/2022/_images/petron-brown.jpeg",
      alt: "The world",
    },
    {
      description:
        '"Amazing App, easy to use and straight forward. Making access to funds easily ata a favourable interest rate. I have been able to do alot of stuff without breaking the bank, thanks to Aibanc."',
      titlee: "Deborah Ogbole",
      imageSrc:
        "https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/310174650_2296836443818199_6670450244339634539_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFQik5ofL0x7zMhoyOrV7WzM2Ygy2YwNEszZiDLZjA0S9tKSLI5NgTrfe-Tv118UEVHsd06qv4ou8V0UwPS2cdg&_nc_ohc=eWeBK4cf1CsAX8XLoT2&tn=P6-_qwiSieItVHuo&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&oh=00_AfD3AOiKIrfoY7JElA0tp0hIPC6yui7_R-I8wDjCQm_jhA&oe=63CE1514",
    },
    {
      description:
        ' "The onboarding process was sleek. I did recommend for very friendly non-shark loan rates."',
      titlee: "Damiloju Oyekan",
      imageSrc:
        "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?",
    },
    {
      description: '"App easy to use and service offered is so apt "',

      titlee: "Bakare Noah",
      imageSrc:
        "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
              <span className="circle-image">
                <img src={card.imageSrc} alt="" />
              </span>
              <p className="text-cont-title">{card.titlee}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
