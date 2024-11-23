import React from "react";
import { ImageList } from "../../data";
import Slider from "react-slick";
const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => {
            const { id, title, description, img } = data;
            return (
              <div key={id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                    >
                      {title}
                    </h1>
                    <p
                      className="text-sm"
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                    >
                      {description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                    >
                      <button
                        onClick={handleOrderPopup}
                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full cursor-pointer"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>

                  <div className="order-2 sm:order-1">
                    <div>
                      <img
                        src={img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:scale-125  lg:scale-20 object-containe mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
