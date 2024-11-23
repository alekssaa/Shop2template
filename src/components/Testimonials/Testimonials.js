import React from "react";
import { TestimonialData } from "../../data";
import Slider from "react-slick";
const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-12">
      {" "}
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary" data-aos="fade-up">
            What our custumers are saying
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Testimonials
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => {
              const { id, img, name, text } = data;
              return (
                <div className="my-6" key={id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                    <div className="mb-4">
                      <img
                        src={img}
                        alt={name}
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs text-white">{text}</p>
                        <h1 className="text-xl font-bold text-black/80 dark:text-white">
                          {name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-gray-400">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
