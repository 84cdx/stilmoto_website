import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="search-box flex space-x-2 items-center px-4">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-10 p-4 rounded-full bg-gray-100 border placeholder:text-base placeholder:md:text-sm"
      />
      <FaSearch className="text-gray-400 text-2xl md:text-base" />
    </div>
  );
};

export default Searchbar;
