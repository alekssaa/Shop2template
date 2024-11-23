import React from "react";
import Logo from "../../assets/img/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Menu, DropdownLinks } from "../../data.js";

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2 sm:py-0">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} className="w-10 " alt="Logo" />
              shopsy
            </a>
          </div>
          <div className="flex justify-between items-center gap-4 ">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                className="w-[200px] sm:w0[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus: border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                placeholder="Search"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => {
                handleOrderPopup();
              }}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden duration-200 transition-all">
                Order
              </span>{" "}
              <FaCartShopping className="text-white text-xl drop-shadow-sm cursor-pointer" />
            </button>
            {/* {dark mode} */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="justify-center flex">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => {
            return (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            );
          })}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
