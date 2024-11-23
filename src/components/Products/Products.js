import React from "react";
import { ProductsData } from "../../data.js";
import { FaStar } from "react-icons/fa6";
const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary" data-aos="fade-up">
            Top Selling Prodcuts for you
          </p>
          <h1 className="text-3xl font-bold" data-aos="fade-up">
            Products
          </h1>
          <p className="text-xs text-gray-400" data-aos="fade-up">
            Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => {
              const { img, id, rating, title, color } = data;
              return (
                <div
                  key={id}
                  className="space-y-3"
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                >
                  <img
                    src={img}
                    alt={title}
                    className="h-[220px] w-[150px] object-cover rpunded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm test-gray-600 ">{color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
