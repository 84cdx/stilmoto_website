import React from "react";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] bg-white border-b">
      <div className="max-w-[1280px] m-auto w-full h-full flex justify-between items-center px-1 md:px-8">
        <div className="flex space-x-1 md:space-x-4 items-center md:mr-4 mr-2">
          <div className="h-15 w-15 md:w-full md:h-10 p-4 md:rounded-full cursor-pointer flex space-x-2 items-center hover:bg-gray-100">
            <FaHome className="text-3xl md:text-base" />
            <a className="hidden md:inline">Home</a>
          </div>
          <div className="h-15 w-15 md:w-full md:h-10 p-4 md:rounded-full cursor-pointer flex space-x-2 items-center hover:bg-gray-100">
            <FaShoppingBasket className="text-3xl md:text-base" />
            <a className="hidden md:inline">Products</a>
          </div>
          <div className="h-15 w-15 md:w-full md:h-10 p-4 md:rounded-full cursor-pointer flex space-x-2 items-center hover:bg-gray-100">
            <BiSolidOffer className="text-3xl md:text-base" />
            <a className="hidden md:inline">Offers</a>
          </div>
          <div className="h-15 w-15 md:w-full md:h-10 p-4 md:rounded-full cursor-pointer flex space-x-2 items-center hover:bg-gray-100">
            <MdContactSupport className="text-3xl md:text-base" />
            <a className="hidden md:inline">Contact</a>
          </div>
        </div>
        <div className="flex space-x-2 md:space-x-10 items-center">
          <Searchbar />
          <div className="h-14 md:h-10 p-4 rounded-full md:border cursor-pointer flex space-x-2 items-center hover:bg-custom-red hover:text-white">
            <FaShoppingCart className="text-2xl md:text-base" />
            <a className="hidden md:inline">Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
