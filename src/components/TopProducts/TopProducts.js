import React from "react";
import { TopProductsData } from "../../data";
import { FaStar } from "react-icons/fa6";
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        <div className="text-left mb-24">
          <p className="text-sm text-primary" data-aos="fade-up">
            Top Rated Prodcuts for you
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Best Products
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {TopProductsData.map((product) => {
            const { id, img, title, description } = product;
            return (
              <div
                key={id}
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={img}
                    alt={title}
                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="flex w-full items-center justifay-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {description}
                  </p>
                  <button
                    onClick={() => {
                      handleOrderPopup();
                    }}
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
