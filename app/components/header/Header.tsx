import React from "react";
import Image from "next/image";
import { IoIosLogIn } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full h-[90px] bg-white border-b md:mt-5">
      <div className="max-w-[1280px] m-auto w-full h-full flex justify-between items-center px-5 md:px-8">
        <Image src="/images/stil.png" alt="logo" width={240} height={60} />
        <div className="flex items-center">
          <div className="flex space-x-2 items-center md:hidden">
            <FaUser className="text-2xl" />
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <div className="flex space-x-2 items-center">
              <IoIosLogIn className="text-2xl md:text-sm" />
              <a className="text-lg md:text-sm">Login</a>
            </div>
            <a className="text-lg md:text-sm">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
