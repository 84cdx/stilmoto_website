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
      <div className="max-w-[1280px] m-auto w-full h-full flex justify-between items-center px-5 md:px-8">
        <div className="flex space-x-5 md:space-x-10 items-center md:mr-4 mr-2">
          <div className="flex space-x-2 items-center">
            <FaHome className="text-3xl md:text-base" />
            <a className="hidden md:inline">Home</a>
          </div>
          <div className="flex space-x-2 items-center">
            <FaShoppingBasket className="text-3xl md:text-base" />
            <a className="hidden md:inline">Products</a>
          </div>
          <div className="flex space-x-2 items-center">
            <BiSolidOffer className="text-3xl md:text-base" />
            <a className="hidden md:inline">Offers</a>
          </div>
          <div className="flex space-x-2 items-center">
            <MdContactSupport className="text-3xl md:text-base" />
            <a className="hidden md:inline">Contact</a>
          </div>
        </div>
        <div className="flex space-x-4 md:space-x-10 items-center">
          <Searchbar />
          <div className="flex space-x-2 items-center">
            <FaShoppingCart className="text-3xl md:text-base" />
            <a className="hidden md:inline">Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
