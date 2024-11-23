import React from "react";
import BannerImg from "../../assets/img/orange-pattern.jpg";

const Subscribe = () => {
  const BannerImgBg = {
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: "center",
    backgroundRepeate: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div
      data-aos="zoom-in"
      className="bg-gray-100 mb-20 dark:bg-gray-800 text-white"
      style={BannerImgBg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
          <h1>Get Notified About New Products</h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3  rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
